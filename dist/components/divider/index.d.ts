import type { VariantProps } from 'tailwind-variants';
import type { HTMLAttributes } from 'svelte/elements';
import Divider from './divider.svelte';
declare const dividerVariants: import("tailwind-variants").TVReturnType<{
    lineType: {
        solid: string;
        dashed: string;
    };
    opaque: {
        true: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    spacing: {
        true: string;
    };
    theme: {
        light: string;
        dark: string;
    };
}, undefined, "block opacity-50", {
    lineType: {
        solid: string;
        dashed: string;
    };
    opaque: {
        true: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    spacing: {
        true: string;
    };
    theme: {
        light: string;
        dark: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    lineType: {
        solid: string;
        dashed: string;
    };
    opaque: {
        true: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    spacing: {
        true: string;
    };
    theme: {
        light: string;
        dark: string;
    };
}, undefined, "block opacity-50", unknown, unknown, undefined>>;
type LineType = VariantProps<typeof dividerVariants>['lineType'];
type Opaque = VariantProps<typeof dividerVariants>['opaque'];
type Orientation = VariantProps<typeof dividerVariants>['orientation'];
type Spacing = VariantProps<typeof dividerVariants>['spacing'];
type Theme = VariantProps<typeof dividerVariants>['theme'];
type Props = HTMLAttributes<HTMLSpanElement> & {
    lineType?: LineType;
    opaque?: Opaque;
    orientation?: Orientation;
    spacing?: Spacing;
    theme?: Theme;
};
export type { Props, Props as DividerProps };
export { Divider, dividerVariants };
