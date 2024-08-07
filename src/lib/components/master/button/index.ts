import { type VariantProps, tv } from "tailwind-variants";
import type { Button as ButtonPrimitive } from "bits-ui";

const buttonVariants = tv({
  base: "font-suisse font-medium min-w-[4.563rem] max-h-[5.5rem] flex items-center text-center",
	variants: {
    size: {
      slim: 'px-4 py-2 gap-1 rounded-3xl text-d3 *:max-h-4', 
      default: 'px-4 py-[0.625rem] rounded-[2.5rem] gap-1 text-d1 *:max-h-5',
      large: 'px-6 py-4 rounded-[3.5rem] gap-1 text-b *:max-h-6',
      giant: 'px-8 py-6 gap-2 rounded-[5rem] text-2xl *:max-h-8',
      'fancy-big': 'px-4 py-[0.625rem] rounded-[2.5rem] gap-2 text-d1 *:max-h-10',
      'fancy-small': 'px-4 py-1 rounded-[2.5rem] gap-2 text-d1 *:max-h-8'
		},
		type: {
      'solid-primary-main': 'bg-primary text-common-white',
      'solid-primary-light': 'bg-primary-light text-common-white',
      'outline-primary-main': 'text-primary',
      'outline-invert': 'text-common-white',
      'transparent-primary-main': 'text-primary'
		},
    disabled: {
      true: ''
    }
	},
	defaultVariants: {
    type: "solid-primary-main",
		size: "default",
	},
});

type Type = VariantProps<typeof buttonVariants>["type"];
type Size = VariantProps<typeof buttonVariants>["size"];

type Props = ButtonPrimitive.Props & {
  type?: Type;
	size?: Size;
  disabled?: boolean
};

type Events = ButtonPrimitive.Events;

export { default as Button } from "./button.svelte";
export {
	type Props,
	type Events,
	//
	type Props as ButtonProps,
	type Events as ButtonEvents,
	buttonVariants,
};