import type { Snippet } from 'svelte';
import { Avatar as AvatarPrimitive } from 'bits-ui';
import type { ClassValue } from 'clsx';
type $$Props = AvatarPrimitive.FallbackProps & {
    customcn?: (...inputs: ClassValue[]) => string;
    children?: Snippet;
};
declare const AvatarFallback: import("svelte").Component<$$Props, {}, "">;
type AvatarFallback = ReturnType<typeof AvatarFallback>;
export default AvatarFallback;
