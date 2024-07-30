import type { HTMLAttributes } from 'svelte/elements';
import { type VariantProps, tv } from "tailwind-variants";


const typographyVariants = tv({
  base: 'text-b',
  variants: {
    size: {
      u6: 'text-u6 font-bold',
      u5: 'text-u5 font-bold',
      u4: 'text-u4 font-bold',
      u3: 'text-u3 font-bold',
      u2: 'text-u2 font-bold',
      u1: 'text-u1',
      b: 'text-b',
      d1: 'text-d1',
      d2: 'text-d2 font-semibold',
      d3: 'text-d3',
    }
  },
  defaultVariants: {
    size: 'b'
  }
})

type Size = VariantProps<typeof typographyVariants>['size']

type Props = HTMLAttributes<HTMLParagraphElement> & {
  size?: Size
}

export {
  type Props as TypographyVariants,
  typographyVariants
}