import type { ClassValue } from 'clsx';
import { Avatar as AvatarPrimitive } from 'bits-ui';
type $$Props = AvatarPrimitive.ImageProps & {
    customcn?: (...inputs: ClassValue[]) => string;
};
declare const AvatarImage: import("svelte").Component<$$Props, {}, "">;
type AvatarImage = ReturnType<typeof AvatarImage>;
export default AvatarImage;
