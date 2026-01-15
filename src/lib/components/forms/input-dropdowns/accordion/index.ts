import type { AccordionTriggerProps as AccordionTriggerPropsPrimitive } from 'bits-ui';
import type { VariantProps } from 'tailwind-variants';
import type { ClassValue } from 'clsx';
import { tv } from '../../../../index.js';
import Root from './root.svelte';
import Item from './item.svelte';
import Header from './header.svelte';
import Content from './content.svelte';
import Trigger from './trigger.svelte';
import CTA from './cta.svelte';
import Label from './label.svelte';
import Title from './title.svelte';
import Icon from './icon.svelte';

const AccordionTriggerVariant = tv({
	variants: {
		'separator-position': {
			bottom: 'border-b',
			top: 'border-t'
		}
	}
});

type AccordionTriggerProps = AccordionTriggerPropsPrimitive & {
	'separator-position': VariantProps<typeof AccordionTriggerVariant>['separator-position'];
	customcn?: (...inputs: ClassValue[]) => string;
};

export type { AccordionTriggerProps };

export {
	AccordionTriggerVariant,
	Root,
	Item,
	Header,
	Content,
	Trigger,
	Icon,
	Title,
	Label,
	CTA,
	Root as AccordionRoot,
	Item as AccordionItem,
	Header as AccordionHeader,
	Content as AccordionContent,
	Trigger as AccordionTrigger,
	Icon as AccordionIcon,
	Title as AccordionTitle,
	Label as AccordionLabel,
	CTA as AccordionCTA
};
