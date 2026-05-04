import { tv, cn } from '../../index.js';
import Heading from './heading.svelte';
import Body from './body.svelte';
import Caption from './caption.svelte';
import Overline from './overline.svelte';
import Link from './link.svelte';
var typographyConfig = {
    base: 'text-b font-body font-normal mb-6',
    variants: {
        size: {
            u6: 'text-u6',
            u5: 'text-u5',
            u4: 'text-u4',
            u3: 'text-u3',
            u2: 'text-u2',
            u1: 'text-u1',
            b: 'text-b',
            d1: 'text-d1',
            d2: 'text-d2 font-semibold',
            d3: 'text-d3',
            'caption-large': 'text-u1',
            caption: 'text-b font-semibold',
            'caption-small': 'text-d1 font-semibold',
            'caption-tiny': 'text-d3 font-semibold',
            'body-large': 'text-b my-2',
            body: 'text-d1',
            'body-small': 'text-d3 mb-4',
            overline: 'text-d2 font-medium uppercase',
            'overline-small': 'text-d1'
        },
        variant: {
            h1: 'text-u5 font-heading font-medium text-primary mt-4 mb-8',
            h2: 'text-u2 font-heading font-bold text-primary-dark mt-4 mb-6',
            h3: 'text-u1 font-heading font-bold text-grey-700 mt-4 mb-4',
            h4: 'text-b font-heading font-bold text-grey-700 mt-4 mb-4',
            'display-big': 'text-u6 font-heading font-bold text-primary',
            display: 'text-u4 font-heading font-bold text-primary',
            'display-small': 'text-u2 font-heading font-normal text-grey-700',
            'display-tiny': 'text-u1 font-heading font-normal text-grey-700',
            overline: 'text-grey-700',
            'overline-invert': 'text-common-white',
            caption: 'text-grey-700',
            'caption-secondary': 'text-grey-600',
            'caption-invert': 'text-common-white',
            'caption-invert-secondary': 'text-grey-200',
            body: 'text-grey-600',
            'body-emphasis': 'text-grey-700',
            'body-invert': 'text-grey-200',
            'body-invert-emphasis': 'text-common-white',
            link: 'text-primary-light hover:underline',
            'link-invert': 'text-grey-200 underline',
            'link-secondary': 'text-grey-600 hover:underline'
        }
    },
    defaultVariants: {
        size: 'body',
        variant: 'body'
    }
};
var typography = tv(typographyConfig);
var getTypography = function (size, variant, className) {
    return cn(typography({ size: size, variant: variant, className: className }));
};
var getTypographySize = function (size, className) {
    return getTypography(size, undefined, className);
};
var getTypographyVariant = function (variant, className) {
    return getTypography(undefined, variant, className);
};
export { Heading, Body, Caption, Overline, Link, getTypography, getTypographySize, getTypographyVariant };
