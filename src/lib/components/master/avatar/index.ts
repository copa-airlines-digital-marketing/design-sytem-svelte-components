import { tv } from "tailwind-variants";

const getAvatarVariants = tv({
  base: 'block rounded-full overflow-hidden',
  variants: {
    size: {
      tiny: 'size-8',
      petit: 'size-12',
      normal: 'size-14',
      big: 'size-[4.5rem]',
      huge: 'size-24'
    },
    stroke: {
      true: 'offse'
    }
  }
})