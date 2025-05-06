<script lang="ts">
	import { HTMLAttributes } from 'svelte/elements';
	import { cn, tv } from '../../../index.js';
	import { VariantProps } from 'tailwind-variants';

	let informativeBoxVariant = tv({
		base: 'p-4 rounded-2xl min-w-268 max-h-272 grid',
		variants: {
			orientation: {
				horizontal: "[grid-template-areas:'head_title''head_description']",
				vertical: "[grid-template-areas:'head''title''description']"
			},
			alignment: {
				left: 'items-start text-left',
				center: 'items-center text-center',
				right: 'items-right text-right'
			}
		}
	});

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		alignment?: VariantProps<typeof informativeBoxVariant>['alignment'];
		orientation?: VariantProps<typeof informativeBoxVariant>['orientation'];
	};

	let className: $$Props['class'] = undefined;
	export let alignment: $$Props['alignment'] = 'left';
	export let orientation: $$Props['orientation'] = 'vertical';
	export { className as class };
</script>

<div class={cn(informativeBoxVariant({ alignment }), className)}>
	<slot />
</div>
