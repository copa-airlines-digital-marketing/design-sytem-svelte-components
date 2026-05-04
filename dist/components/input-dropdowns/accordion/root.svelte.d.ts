import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { ClassValue } from 'clsx';
type $$Props = HTMLAttributes<HTMLDivElement> & {
    customcn?: (...inputs: ClassValue[]) => string;
    children?: Snippet;
};
declare const Root: import("svelte").Component<$$Props, {}, "">;
type Root = ReturnType<typeof Root>;
export default Root;
