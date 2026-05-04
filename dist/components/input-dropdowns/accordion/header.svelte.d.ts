import type { Snippet } from 'svelte';
import type { ClassValue } from 'clsx';
import { Accordion as AccordionPrimitive } from 'bits-ui';
type $$Props = AccordionPrimitive.HeaderProps & {
    customcn?: (...inputs: ClassValue[]) => string;
    children?: Snippet;
};
declare const Header: import("svelte").Component<$$Props, {}, "">;
type Header = ReturnType<typeof Header>;
export default Header;
