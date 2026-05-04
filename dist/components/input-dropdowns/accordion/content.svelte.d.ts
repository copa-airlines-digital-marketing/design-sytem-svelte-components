import type { Snippet } from 'svelte';
import type { ClassValue } from 'clsx';
import { Accordion as AccordionPrimitive } from 'bits-ui';
type $$Props = AccordionPrimitive.ContentProps & {
    customcn?: (...inputs: ClassValue[]) => string;
    children?: Snippet;
};
declare const Content: import("svelte").Component<$$Props, {}, "">;
type Content = ReturnType<typeof Content>;
export default Content;
