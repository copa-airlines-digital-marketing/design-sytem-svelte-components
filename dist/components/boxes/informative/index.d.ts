import type { HTMLAttributes } from 'svelte/elements';
import type { VariantProps } from 'tailwind-variants';
import type { ClassValue } from 'clsx';
import Container from './container.svelte';
import Box from './box.svelte';
import Icon from './icon.svelte';
import Image from './image.svelte';
import Title from './title.svelte';
import Description from './description.svelte';
import { HTMLTextElements } from '../../typography/index.js';
declare const informativeBoxVariant: import("tailwind-variants").TVReturnType<{
    orientation: {
        horizontal: string;
        vertical: string;
    };
    alignment: {
        left: string;
        center: string;
        right: string;
    };
}, undefined, "p-4 rounded-2xl max-h-64 grid border border-grey-300 content-start", {
    orientation: {
        horizontal: string;
        vertical: string;
    };
    alignment: {
        left: string;
        center: string;
        right: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    orientation: {
        horizontal: string;
        vertical: string;
    };
    alignment: {
        left: string;
        center: string;
        right: string;
    };
}, undefined, "p-4 rounded-2xl max-h-64 grid border border-grey-300 content-start", unknown, unknown, undefined>>;
declare const InformativeBoxIconVariant: import("tailwind-variants").TVReturnType<{
    size: {
        tiny: string;
        normal: string;
        big: string;
        huge: string;
    };
}, undefined, "[grid-area:head] block mb-4", {
    size: {
        tiny: string;
        normal: string;
        big: string;
        huge: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    size: {
        tiny: string;
        normal: string;
        big: string;
        huge: string;
    };
}, undefined, "[grid-area:head] block mb-4", unknown, unknown, undefined>>;
declare const InformativeBoxImageVariant: import("tailwind-variants").TVReturnType<{
    aspect: {
        '16:9': string;
        '1:1': string;
    };
    size: {
        big: string;
        huge: string;
    };
}, undefined, "[grid-area:head] block mb-4", {
    aspect: {
        '16:9': string;
        '1:1': string;
    };
    size: {
        big: string;
        huge: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    aspect: {
        '16:9': string;
        '1:1': string;
    };
    size: {
        big: string;
        huge: string;
    };
}, undefined, "[grid-area:head] block mb-4", unknown, unknown, undefined>>;
declare const InformativeBoxTitleVariant: import("tailwind-variants").TVReturnType<{
    theme: {
        normal: string;
        invert: string;
    };
}, undefined, "[grid-area:title] mt-0 mb-2", {
    theme: {
        normal: string;
        invert: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    theme: {
        normal: string;
        invert: string;
    };
}, undefined, "[grid-area:title] mt-0 mb-2", unknown, unknown, undefined>>;
declare const InformativeBoxDescriptionVariant: import("tailwind-variants").TVReturnType<{
    theme: {
        normal: string;
        invert: string;
    };
}, undefined, "[grid-area:description] my-0", {
    theme: {
        normal: string;
        invert: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    theme: {
        normal: string;
        invert: string;
    };
}, undefined, "[grid-area:description] my-0", unknown, unknown, undefined>>;
type InformativeBoxVariants = HTMLAttributes<HTMLDivElement> & {
    alignment?: VariantProps<typeof informativeBoxVariant>['alignment'];
    orientation?: VariantProps<typeof informativeBoxVariant>['orientation'];
    customcn?: (...inputs: ClassValue[]) => string;
};
type InformativeBoxIconVariants = HTMLAttributes<HTMLSpanElement> & {
    size?: VariantProps<typeof InformativeBoxIconVariant>['size'];
    customcn?: (...inputs: ClassValue[]) => string;
};
type InformativeBoxImageVariants = HTMLAttributes<HTMLImageElement> & {
    aspect?: VariantProps<typeof InformativeBoxImageVariant>['aspect'];
    size?: VariantProps<typeof InformativeBoxImageVariant>['size'];
    customcn?: (...inputs: ClassValue[]) => string;
};
type InformativeBoxTitleVariants = HTMLAttributes<HTMLHeadingElement> & {
    theme?: VariantProps<typeof InformativeBoxTitleVariant>['theme'];
    customcn?: (...inputs: ClassValue[]) => string;
};
type InformativeBoxDescriptionVariants = HTMLAttributes<HTMLParagraphElement> & {
    theme?: VariantProps<typeof InformativeBoxDescriptionVariant>['theme'];
    tag?: keyof HTMLTextElements;
    customcn?: (...inputs: ClassValue[]) => string;
};
export type { InformativeBoxVariants, InformativeBoxIconVariants, InformativeBoxImageVariants, InformativeBoxTitleVariants, InformativeBoxDescriptionVariants };
export { informativeBoxVariant, InformativeBoxIconVariant, InformativeBoxImageVariant, InformativeBoxTitleVariant, InformativeBoxDescriptionVariant, Container, Container as InformativeBoxContainer, Box, Box as InformativeBox, Icon, Icon as InformativeBoxIcon, Image, Image as InformativeBoxImage, Title, Title as InformativeBoxTitle, Description, Description as InformativeBoxDescription };
