import type { Snippet } from 'svelte';
import type { ClassValue } from 'clsx';
import { Accordion as AccordionPrimitive } from 'bits-ui';
type $$Props = AccordionPrimitive.ItemProps & {
    customcn?: (...inputs: ClassValue[]) => string;
    children?: Snippet;
};
declare const Item: import("svelte").Component<$$Props, {}, "">;
type Item = ReturnType<typeof Item>;
export default Item;
