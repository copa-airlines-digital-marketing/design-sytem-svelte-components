import type { HTMLButtonAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import { type VariantProps } from 'tailwind-variants';
import type { ClassValue } from 'clsx';
declare const buttonVariants: import("tailwind-variants").TVReturnType<{
    size: {
        slim: string;
        default: string;
        large: string;
        giant: string;
        'fancy-big': string;
        'fancy-small': string;
        link: string;
    };
    variant: {
        'solid-primary-main': string;
        'solid-primary-light': string;
        'outline-primary-main': string;
        'outline-invert': string;
        'transparent-primary-main': string;
        link: string;
        'link-invert': string;
    };
}, undefined, "font-body font-medium min-w-[4.563rem] max-h-[5rem] flex items-center justify-center text-center outline-offset-4 outline-none outline-2 border active:outline-solid focus:outline-solid disabled:cursor-not-allowed disabled:outline-0 select-none", {
    size: {
        slim: string;
        default: string;
        large: string;
        giant: string;
        'fancy-big': string;
        'fancy-small': string;
        link: string;
    };
    variant: {
        'solid-primary-main': string;
        'solid-primary-light': string;
        'outline-primary-main': string;
        'outline-invert': string;
        'transparent-primary-main': string;
        link: string;
        'link-invert': string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    size: {
        slim: string;
        default: string;
        large: string;
        giant: string;
        'fancy-big': string;
        'fancy-small': string;
        link: string;
    };
    variant: {
        'solid-primary-main': string;
        'solid-primary-light': string;
        'outline-primary-main': string;
        'outline-invert': string;
        'transparent-primary-main': string;
        link: string;
        'link-invert': string;
    };
}, undefined, "font-body font-medium min-w-[4.563rem] max-h-[5rem] flex items-center justify-center text-center outline-offset-4 outline-none outline-2 border active:outline-solid focus:outline-solid disabled:cursor-not-allowed disabled:outline-0 select-none", unknown, unknown, undefined>>;
type Variant = VariantProps<typeof buttonVariants>['variant'];
type Size = VariantProps<typeof buttonVariants>['size'];
/** Component-specific props; rest are passed through to the primitive (restProps) */
type ButtonComponentProps = {
    variant?: Variant;
    size?: Size;
    class?: string | null;
    customcn?: (...inputs: ClassValue[]) => string;
    children?: Snippet;
};
/** Props = our props + button element rest; destructuring our props leaves restProps correctly typed for ButtonPrimitive.Root */
export type Props = ButtonComponentProps & Omit<HTMLButtonAttributes, keyof ButtonComponentProps>;
export type ButtonProps = Props;
export { default as Button } from './button.svelte';
export { buttonVariants };
