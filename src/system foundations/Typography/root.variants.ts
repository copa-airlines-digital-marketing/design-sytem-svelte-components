import type { HTMLAttributes } from 'svelte/elements';
import { type VariantProps, tv } from "tailwind-variants";

const typographyVariants = tv({
  base: 'font-suisse font-normal text-u6',
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
      'caption': 'text-b font-semibold',
      'caption-small': 'text-d1 font-semibold',
      'caption-tiny': 'text-d3 font-semibold',
      'body-large': 'text-b my-2',
      'body': 'text-d1',
      'body-small': 'text-d3',
      'overline': 'text-d2 font-medium uppercase',
      'overline-small': 'text-d1'
    },
    variant: {
      h1: 'text-u5 font-gilroy font-medium text-primary',
      h2: 'text-u5 font-gilroy font-medium text-primary',
      h3: 'text-u5 font-gilroy font-medium text-primary',
      h4: 'text-u5 font-gilroy font-medium text-primary',
      'display-big': 'text-u5 font-gilroy font-medium text-primary',
      'display': 'text-u5 font-gilroy font-medium text-primary',
      'display-small': 'text-u5 font-gilroy font-medium text-primary',
      'display-tiny': 'text-u5 font-gilroy font-medium text-primary',
      'overline': 'text-grey-700',
      'overline-invert': 'text-common-white',
      'caption': 'text-grey-700',
      'caption-secondary': 'text-grey-600',
      'caption-invert': 'text-common-white',
      'caption-invert-secondary': 'text-grey-200',
      'body': 'text-grey-600',
      'body-emphasis': 'text-grey-700',
      'body-invert': 'text-grey-200',
      'body-invert-emphasis': 'text-common-white',
      'link': 'text-primary-light hover:underline',
      'link-invert': 'text-grey-200 underline',
      'link-secondary': 'text-grey-200 hover:underline',
    }
  },
  defaultVariants: {
    size: 'body',
    variant: 'body',
  }
})

type Size = VariantProps<typeof typographyVariants>['size']
type Variant = VariantProps<typeof typographyVariants>['variant']


type Props = HTMLAttributes<HTMLParagraphElement> & {
  size?: Size
  variant?: Variant
}

export {
  type Props as TypographyVariants,
  typographyVariants
}