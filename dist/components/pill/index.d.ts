import type { HTMLAttributes } from 'svelte/elements';
import type { VariantProps } from 'tailwind-variants';
import type { ClassValue } from 'clsx';
import { type Writable } from 'svelte/store';
import Pill from './pill.svelte';
import PillText from './text.svelte';
import PillIcon from './icon.svelte';
type Thickness = 'default' | 'slim';
declare const pillVariants: import("tailwind-variants").TVReturnType<{
    theme: {
        default: string;
        transparent: string;
    };
    outline: {
        true: string;
    };
}, undefined, "inline-grid gap-1 items-center grid-rows-1 rounded-full py-0.5 px-3 border border-transparent", {
    theme: {
        default: string;
        transparent: string;
    };
    outline: {
        true: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    theme: {
        default: string;
        transparent: string;
    };
    outline: {
        true: string;
    };
}, undefined, "inline-grid gap-1 items-center grid-rows-1 rounded-full py-0.5 px-3 border border-transparent", unknown, unknown, undefined>>;
declare const iconVariants: import("tailwind-variants").TVReturnType<{
    side: {
        default: string;
        left: string;
        right: string;
    };
}, undefined, "col-span-1 size-4", {
    side: {
        default: string;
        left: string;
        right: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    side: {
        default: string;
        left: string;
        right: string;
    };
}, undefined, "col-span-1 size-4", unknown, unknown, undefined>>;
type Theme = VariantProps<typeof pillVariants>['theme'];
type Outline = VariantProps<typeof pillVariants>['outline'];
type PillBaseProps = {
    theme?: Theme;
    outline?: Outline;
    thickness?: Thickness;
    customcn?: (...inputs: ClassValue[]) => string;
};
type PillProps = HTMLAttributes<HTMLDivElement> & PillBaseProps;
type IconSide = VariantProps<typeof iconVariants>['side'];
type PillIconProps = HTMLAttributes<HTMLSpanElement> & {
    side?: IconSide;
    customcn?: (...inputs: ClassValue[]) => string;
};
declare const setPillContext: (props: PillBaseProps) => Writable<PillBaseProps>;
declare const getPillContext: () => Writable<PillBaseProps>;
export type { PillProps, PillBaseProps, PillIconProps };
export { Pill, PillText, PillText as Text, PillIcon, PillIcon as Icon, getPillContext, setPillContext, pillVariants, iconVariants };
