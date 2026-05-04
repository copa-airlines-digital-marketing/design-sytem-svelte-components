import type { HTMLAttributes, HTMLLinkAttributes } from 'svelte/elements';
import Heading from './heading.svelte';
import Body from './body.svelte';
import Caption from './caption.svelte';
import Overline from './overline.svelte';
import Link from './link.svelte';
import type { ClassValue } from 'clsx';
declare const typographyConfig: {
    readonly base: "text-b font-body font-normal mb-6";
    readonly variants: {
        readonly size: {
            readonly u6: "text-u6";
            readonly u5: "text-u5";
            readonly u4: "text-u4";
            readonly u3: "text-u3";
            readonly u2: "text-u2";
            readonly u1: "text-u1";
            readonly b: "text-b";
            readonly d1: "text-d1";
            readonly d2: "text-d2 font-semibold";
            readonly d3: "text-d3";
            readonly 'caption-large': "text-u1";
            readonly caption: "text-b font-semibold";
            readonly 'caption-small': "text-d1 font-semibold";
            readonly 'caption-tiny': "text-d3 font-semibold";
            readonly 'body-large': "text-b my-2";
            readonly body: "text-d1";
            readonly 'body-small': "text-d3 mb-4";
            readonly overline: "text-d2 font-medium uppercase";
            readonly 'overline-small': "text-d1";
        };
        readonly variant: {
            readonly h1: "text-u5 font-heading font-medium text-primary mt-4 mb-8";
            readonly h2: "text-u2 font-heading font-bold text-primary-dark mt-4 mb-6";
            readonly h3: "text-u1 font-heading font-bold text-grey-700 mt-4 mb-4";
            readonly h4: "text-b font-heading font-bold text-grey-700 mt-4 mb-4";
            readonly 'display-big': "text-u6 font-heading font-bold text-primary";
            readonly display: "text-u4 font-heading font-bold text-primary";
            readonly 'display-small': "text-u2 font-heading font-normal text-grey-700";
            readonly 'display-tiny': "text-u1 font-heading font-normal text-grey-700";
            readonly overline: "text-grey-700";
            readonly 'overline-invert': "text-common-white";
            readonly caption: "text-grey-700";
            readonly 'caption-secondary': "text-grey-600";
            readonly 'caption-invert': "text-common-white";
            readonly 'caption-invert-secondary': "text-grey-200";
            readonly body: "text-grey-600";
            readonly 'body-emphasis': "text-grey-700";
            readonly 'body-invert': "text-grey-200";
            readonly 'body-invert-emphasis': "text-common-white";
            readonly link: "text-primary-light hover:underline";
            readonly 'link-invert': "text-grey-200 underline";
            readonly 'link-secondary': "text-grey-600 hover:underline";
        };
    };
    readonly defaultVariants: {
        readonly size: "body";
        readonly variant: "body";
    };
};
type Variant = keyof (typeof typographyConfig)['variants']['variant'];
type Size = keyof (typeof typographyConfig)['variants']['size'];
type Typography = {
    size?: Size;
    variant?: Variant;
};
type HeadingElements = Pick<HTMLElementTagNameMap, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
type HTMLTextElements = Pick<HTMLElementTagNameMap, 'p' | 'span' | 'strong' | 'em' | 'blockquote' | 'q' | 'code' | 'pre' | 'ol' | 'ul' | 'li' | 'dt' | 'dd' | 'mark' | 'ins' | 'del' | 'sup' | 'sub' | 'small' | 'i' | 'b' | 'th' | 'td'>;
type HeadingVariant = Extract<Variant, 'h1' | 'h2' | 'h3' | 'h4' | 'display-big' | 'display' | 'display-small' | 'display-tiny'>;
type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
    tag?: keyof HeadingElements;
    variant?: HeadingVariant;
    customcn?: (...inputs: ClassValue[]) => string;
};
type BodyProps = {
    tag?: keyof HTMLTextElements;
    size?: Extract<Size, 'body' | 'body-large' | 'body-small'>;
    variant?: Extract<Variant, 'body' | 'body-emphasis' | 'body-invert' | 'body-invert-emphasis'>;
    customcn?: (...inputs: ClassValue[]) => string;
};
type CaptionProps = {
    tag?: keyof HTMLTextElements;
    size?: Extract<Size, 'caption' | 'caption-large' | 'caption-small' | 'caption-tiny'>;
    variant?: Extract<Variant, 'caption' | 'caption-secondary' | 'caption-invert' | 'caption-invert-secondary'>;
    customcn?: (...inputs: ClassValue[]) => string;
};
type OverlineProps = {
    tag?: keyof HTMLTextElements;
    size?: Extract<Size, 'overline' | 'overline-small'>;
    customcn?: (...inputs: ClassValue[]) => string;
};
type LinkProps = HTMLLinkAttributes & {
    variant?: Extract<Variant, 'link' | 'link-invert' | 'link-secondary'>;
    customcn?: (...inputs: ClassValue[]) => string;
};
declare const getTypography: (size?: Size, variant?: Variant, className?: string) => string;
declare const getTypographySize: (size?: Size, className?: string) => string;
declare const getTypographyVariant: (variant?: Variant, className?: string) => string;
export type { Typography, HTMLTextElements, HeadingProps, BodyProps, CaptionProps, OverlineProps, LinkProps };
export { Heading, Body, Caption, Overline, Link, getTypography, getTypographySize, getTypographyVariant };
