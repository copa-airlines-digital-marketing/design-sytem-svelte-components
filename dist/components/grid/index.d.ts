import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { VariantProps } from 'tailwind-variants';
import Container from './container.svelte';
import ContainerItem from './item.svelte';
declare const getGridContainerClasses: () => string;
declare const gridContainerVariants: import("tailwind-variants").TVReturnType<{
    type: {
        default: string;
        grid: string;
    };
}, undefined, "mx-auto", {
    type: {
        default: string;
        grid: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    type: {
        default: string;
        grid: string;
    };
}, undefined, "mx-auto", unknown, unknown, undefined>>;
declare const gridItemVariant: import("tailwind-variants").TVReturnType<{
    distribution: {
        full: string;
        half: string;
        four: string;
        third: string;
        '4 / 8': string;
        '8 / 4': string;
    };
}, undefined, "col-span-full", {
    distribution: {
        full: string;
        half: string;
        four: string;
        third: string;
        '4 / 8': string;
        '8 / 4': string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    distribution: {
        full: string;
        half: string;
        four: string;
        third: string;
        '4 / 8': string;
        '8 / 4': string;
    };
}, undefined, "col-span-full", unknown, unknown, undefined>>;
type Distribution = VariantProps<typeof gridItemVariant>['distribution'];
type Type = VariantProps<typeof gridContainerVariants>['type'];
/** Component-specific props; rest are passed through to the div (rest) */
type ItemComponentProps = {
    class?: HTMLAttributes<HTMLDivElement>['class'];
    distribution?: Distribution;
    children?: Snippet;
};
/** Props = our props + div attributes rest; destructuring our props leaves rest correctly typed for the div */
type ContainerItemProps = ItemComponentProps & Omit<HTMLAttributes<HTMLDivElement>, keyof ItemComponentProps>;
type ContainerProps = HTMLAttributes<HTMLDivElement> & {
    type?: Type;
};
export type { ContainerProps, ContainerItemProps };
export { Container, ContainerItem, gridContainerVariants, gridItemVariant, getGridContainerClasses };
