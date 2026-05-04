import type { ClassValue } from 'clsx';
import type { HTMLAttributes } from 'svelte/elements';
import type { VariantProps } from 'tailwind-variants';
import type { ClassNameValue } from 'tailwind-merge';
type ClassInput = ClassValue | ClassNameValue | null | undefined;
import Carrot from './carrot.svelte';
import Phone from './phone.svelte';
import Globe from './globe.svelte';
import NoIcon from './no-icon.svelte';
import Close from './regular/close.svelte';
import Check from './regular/check.svelte';
declare const Regular: {
    Close: import("svelte").Component<SingularIcon, {}, "">;
    Check: import("svelte").Component<SingularIcon, {}, "">;
    Walk: import("svelte").Component<SingularIcon, {}, "">;
    Camera: import("svelte").Component<SingularIcon, {}, "">;
    History: import("svelte").Component<SingularIcon, {}, "">;
};
declare const Filled: {
    Time: import("svelte").Component<FilledIcon, {}, "">;
    Ticket: import("svelte").Component<FilledIcon, {}, "">;
};
declare const Social: {
    Email: import("svelte").Component<SingularIcon, {}, "">;
    Facebook: import("svelte").Component<SingularIcon, {}, "">;
    Instagram: import("svelte").Component<SingularIcon, {}, "">;
    Tiktok: import("svelte").Component<SingularIcon, {}, "">;
    X: import("svelte").Component<SingularIcon, {}, "">;
    Youtube: import("svelte").Component<SingularIcon, {}, "">;
    Whatsapp: import("svelte").Component<SingularIcon, {}, "">;
};
declare const iconWithDirectionVariants: import("tailwind-variants").TVReturnType<{
    direction: {
        up: string;
        down: string;
        left: string;
        right: string;
    };
}, undefined, undefined, {
    direction: {
        up: string;
        down: string;
        left: string;
        right: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    direction: {
        up: string;
        down: string;
        left: string;
        right: string;
    };
}, undefined, undefined, unknown, unknown, undefined>>;
type SingularIcon = HTMLAttributes<HTMLElement> & {
    customcn?: (...inputs: ClassInput[]) => string;
};
type FilledIcon = HTMLAttributes<HTMLElement> & {
    customcn?: (...inputs: ClassInput[]) => string;
    filled?: boolean;
};
type IconWithDirection = HTMLAttributes<HTMLElement> & {
    direction?: VariantProps<typeof iconWithDirectionVariants>['direction'];
    customcn?: (...inputs: ClassInput[]) => string;
};
export type { IconWithDirection, SingularIcon, FilledIcon };
export { iconWithDirectionVariants, NoIcon, Carrot, Globe, Phone, Close, Check, Filled, Regular, Social };
