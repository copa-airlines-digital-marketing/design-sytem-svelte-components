import type { AccordionHeaderProps as AccordionHeaderPropsPrimitive } from 'bits-ui';
import type { VariantProps } from 'tailwind-variants';
import type { ClassValue } from 'clsx';
import Root from './root.svelte';
import Item from './item.svelte';
import Header from './header.svelte';
import Content from './content.svelte';
import Trigger from './trigger.svelte';
import { tv } from '../../../index.js';

const AccordionHeaderVariant = tv({
	variants: {
		'separator-position': {
			bottom: 'border-b',
			top: 'border-t'
		}
	}
});

type AccordionHeaderProps = AccordionHeaderPropsPrimitive & {
	'separator-position': VariantProps<typeof AccordionHeaderVariant>['separator-position'];
	customcn?: (...inputs: ClassValue[]) => string;
};

export type { AccordionHeaderProps };

export {
	Root,
	Item,
	Header,
	Content,
	Trigger,
	Root as AccordionRoot,
	Item as AccordionItem,
	Header as AccordionHeader,
	Content as AccordionContent,
	Trigger as AccordionTrigger
};
