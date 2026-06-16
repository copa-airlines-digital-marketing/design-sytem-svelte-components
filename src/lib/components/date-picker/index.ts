import { getLocalTimeZone, type DateValue } from '@internationalized/date';
import type {
	DateMatcher,
	DateOnInvalid,
	DateRange,
	DateRangeValidator,
	DateValidator
} from 'bits-ui';
import type { ClassValue } from 'clsx';
import { tv } from '../../index.js';
import DatePicker from './date-picker.svelte';
import DateRangePicker from './date-range-picker.svelte';

const datePickerPopoverVariants = tv({
	base: [
		'z-50 rounded-sm border border-grey-200 bg-common-white p-4',
		'shadow-[0px_12px_28px_rgba(0,0,0,0.12)] outline-none'
	].join(' '),
	variants: {
		range: {
			true: 'w-[20rem] max-w-[calc(100vw-2rem)] p-5 md:w-[40rem]',
			false: 'w-[20rem] max-w-[calc(100vw-2rem)]'
		}
	},
	defaultVariants: {
		range: false
	}
});

const datePickerCalendarVariants = tv({
	base: 'w-full font-body text-grey-700'
});

const datePickerHeaderVariants = tv({
	base: 'mb-4 grid grid-cols-[2.5rem_1fr_2.5rem] items-center gap-3 px-1'
});

const datePickerHeadingVariants = tv({
	base: 'flex-1 text-center font-body text-b font-semibold capitalize text-[#0032A0]'
});

const datePickerNavButtonVariants = tv({
	base: [
		'inline-flex size-9 items-center justify-center rounded-full text-[#0032A0]',
		'outline-none transition-colors hover:bg-[#F1F6FF]',
		'focus-visible:bg-[#F1F6FF] focus-visible:outline-2 focus-visible:outline-primary-faded',
		'disabled:cursor-not-allowed disabled:text-[#B6BBC2] disabled:hover:bg-transparent'
	].join(' ')
});

const datePickerTriggerIconVariants = tv({
	base: 'size-5 shrink-0 fill-current',
	variants: {
		disabled: {
			true: 'text-grey-500',
			false: 'text-grey-400'
		}
	},
	defaultVariants: {
		disabled: false
	}
});

const datePickerTriggerTextVariants = tv({
	base: 'flex-1 truncate text-left font-body text-b',
	variants: {
		hasValue: {
			true: '',
			false: ''
		},
		disabled: {
			true: '',
			false: ''
		}
	},
	compoundVariants: [
		{
			hasValue: true,
			disabled: false,
			class: 'text-grey-700'
		},
		{
			hasValue: false,
			disabled: false,
			class: 'text-grey-500'
		},
		{
			disabled: true,
			class: 'text-grey-500'
		}
	],
	defaultVariants: {
		hasValue: false,
		disabled: false
	}
});

const datePickerMonthsVariants = tv({
	base: 'grid gap-6',
	variants: {
		range: {
			true: 'grid-cols-1 md:grid-cols-2 md:gap-6',
			false: 'grid-cols-1'
		}
	},
	defaultVariants: {
		range: false
	}
});

const datePickerMonthTitleVariants = tv({
	base: 'text-center font-body text-[18px] font-semibold leading-6 text-[#0032A0]'
});

const datePickerGridVariants = tv({
	base: 'w-full table-fixed border-collapse'
});

const datePickerHeadCellVariants = tv({
	base: 'h-10 text-center font-body text-d3 font-semibold uppercase text-[#0032A0]'
});

const datePickerGridRowVariants = tv({
	base: 'grid grid-cols-7'
});

const datePickerCellVariants = tv({
	base: 'flex h-12 items-center justify-center p-0'
});

const datePickerDayVariants = tv({
	base: [
		'flex size-10 items-center justify-center rounded-full font-body text-d1 text-grey-800',
		'outline-none transition-colors hover:bg-[#F1F6FF] focus-visible:bg-[#F1F6FF]',
		'data-[today]:font-semibold data-[today]:text-[#0032A0]',
		'data-[selected]:bg-[#126BFF] data-[selected]:!text-common-white data-[selected]:hover:bg-[#126BFF]',
		'data-[outside-month]:text-[#B6BBC2] data-[outside-month]:opacity-100',
		'data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:text-[#B6BBC2]',
		'data-[unavailable]:line-through'
	].join(' ')
});

const dateRangeDayVariants = tv({
	base: [
		'group flex h-12 w-full items-center justify-center font-body text-d1 text-grey-800',
		'outline-none transition-colors hover:bg-[#F1F6FF] focus-visible:bg-[#F1F6FF]',
		'data-[highlighted]:bg-[#F1F6FF] data-[range-middle]:bg-[#F1F6FF]',
		'data-[selection-start]:bg-[linear-gradient(90deg,rgb(255_255_255)_50%,rgb(241_246_255)_50%)]',
		'data-[selection-end]:bg-[linear-gradient(90deg,rgb(241_246_255)_50%,rgb(255_255_255)_50%)]',
		'data-[range-start]:bg-[linear-gradient(90deg,rgb(255_255_255)_50%,rgb(241_246_255)_50%)]',
		'data-[range-end]:bg-[linear-gradient(90deg,rgb(241_246_255)_50%,rgb(255_255_255)_50%)]',
		'data-[outside-month]:text-[#B6BBC2] data-[outside-month]:opacity-100',
		'data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:text-[#B6BBC2]',
		'data-[unavailable]:line-through'
	].join(' ')
});

const dateRangeDayLabelVariants = tv({
	base: [
		'flex size-10 items-center justify-center rounded-full',
		'group-data-[today]:font-semibold group-data-[today]:text-[#0032A0]',
		'group-data-[selection-start]:bg-[#126BFF] group-data-[selection-start]:!text-common-white',
		'group-data-[selection-end]:bg-[#126BFF] group-data-[selection-end]:!text-common-white'
	].join(' ')
});

type WeekStartsOn = 0 | 1 | 2 | 3 | 4 | 5 | 6;

type DatePickerSharedProps = {
	label?: string;
	mandatory?: boolean;
	helperText?: string;
	error?: boolean;
	disabled?: boolean;
	readonly?: boolean;
	required?: boolean;
	locale?: string;
	calendarLabel?: string;
	calendarPlaceholder?: DateValue;
	minValue?: DateValue;
	maxValue?: DateValue;
	isDateDisabled?: DateMatcher;
	isDateUnavailable?: DateMatcher;
	onInvalid?: DateOnInvalid;
	weekStartsOn?: WeekStartsOn;
	weekdayFormat?: Intl.DateTimeFormatOptions['weekday'];
	fixedWeeks?: boolean;
	preventDeselect?: boolean;
	displayOptions?: Intl.DateTimeFormatOptions;
	class?: string | null;
	customcn?: (...inputs: ClassValue[]) => string;
};

type DatePickerProps = DatePickerSharedProps & {
	value?: DateValue;
	placeholder?: string;
	name?: string;
	id?: string;
	onValueChange?: (value: DateValue | undefined) => void;
	validate?: DateValidator;
	closeOnDateSelect?: boolean;
};

type DateRangePickerProps = DatePickerSharedProps & {
	value?: DateRange;
	placeholder?: string;
	rangeSeparator?: string;
	startName?: string;
	endName?: string;
	id?: string;
	numberOfMonths?: number;
	pagedNavigation?: boolean;
	closeOnRangeSelect?: boolean;
	minDays?: number;
	maxDays?: number;
	excludeDisabled?: boolean;
	onValueChange?: (value: DateRange) => void;
	onStartValueChange?: (value: DateValue | undefined) => void;
	onEndValueChange?: (value: DateValue | undefined) => void;
	validate?: DateRangeValidator;
};

function formatDateValue(
	value: DateValue | undefined,
	locale = 'es-PA',
	options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' }
) {
	if (!value) return '';
	return new Intl.DateTimeFormat(locale, options).format(value.toDate(getLocalTimeZone()));
}

function formatCalendarMonth(value: DateValue, locale = 'es-PA') {
	const formatted = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(
		value.toDate(getLocalTimeZone())
	);
	return `${formatted.charAt(0).toUpperCase()}${formatted.slice(1)}`;
}

export type { DatePickerProps, DateRangePickerProps, DatePickerSharedProps };
export {
	DatePicker,
	DateRangePicker,
	datePickerPopoverVariants,
	datePickerCalendarVariants,
	datePickerHeaderVariants,
	datePickerHeadingVariants,
	datePickerNavButtonVariants,
	datePickerTriggerIconVariants,
	datePickerTriggerTextVariants,
	datePickerMonthsVariants,
	datePickerMonthTitleVariants,
	datePickerGridVariants,
	datePickerHeadCellVariants,
	datePickerGridRowVariants,
	datePickerCellVariants,
	datePickerDayVariants,
	dateRangeDayVariants,
	dateRangeDayLabelVariants,
	formatDateValue,
	formatCalendarMonth
};
