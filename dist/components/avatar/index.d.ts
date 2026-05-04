import type { Snippet } from 'svelte';
import type { ClassValue } from 'clsx';
import type { ClassNameValue } from 'tailwind-merge';
import type { Avatar as AvatarPrimitive } from 'bits-ui';
import { type VariantProps } from 'tailwind-variants';
import { default as Root } from './avatar.svelte';
type ClassInput = ClassValue | ClassNameValue | null | undefined;
import { default as Image } from './avatar-image.svelte';
import { default as Fallback } from './avatar-fallback.svelte';
export declare const getAvatarVariants: import("tailwind-variants").TVReturnType<{
    size: {
        tiny: string;
        petit: string;
        normal: string;
        big: string;
        huge: string;
    };
    stroke: {
        false: string;
    };
}, undefined, "rounded-full overflow-hidden font-heading font-bold uppercase text-b text-primary border border-primary-ultralight p-0.5", {
    size: {
        tiny: string;
        petit: string;
        normal: string;
        big: string;
        huge: string;
    };
    stroke: {
        false: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    size: {
        tiny: string;
        petit: string;
        normal: string;
        big: string;
        huge: string;
    };
    stroke: {
        false: string;
    };
}, undefined, "rounded-full overflow-hidden font-heading font-bold uppercase text-b text-primary border border-primary-ultralight p-0.5", unknown, unknown, undefined>>;
type Size = VariantProps<typeof getAvatarVariants>['size'];
type Stroke = VariantProps<typeof getAvatarVariants>['stroke'];
/** Component-specific props; rest are passed through to the primitive (restProps) */
type AvatarComponentProps = {
    class?: ClassInput;
    delayMs?: AvatarPrimitive.RootProps['delayMs'];
    size?: Size;
    stroke?: Stroke;
    customcn?: (...inputs: ClassInput[]) => string;
    children?: Snippet;
};
/** Props = our props + primitive rest; destructuring our props leaves restProps correctly typed for AvatarPrimitive.Root */
export type Props = AvatarComponentProps & Omit<AvatarPrimitive.RootProps, keyof AvatarComponentProps>;
export { Root, Root as Avatar, Image, Fallback };
