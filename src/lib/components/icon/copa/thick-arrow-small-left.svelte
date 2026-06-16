<script lang="ts">
	import type { SingularIcon } from '../index.js';
	import { cn as defaultcn } from '../../../index.js';

	type $$Props = SingularIcon;

	let { customcn, class: className }: $$Props = $props();

	const cn = $derived(customcn ?? defaultcn);
</script>

<svg
	viewBox="0 0 16 16"
	class={cn('size-6 shrink-0', className)}
	xmlns="http://www.w3.org/2000/svg"
	aria-hidden="true"
>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M8.15977 12.7255C8.48974 12.3956 8.49277 11.8617 8.16658 11.5281L5.22956 8.52464L13.1309 8.54133C13.6106 8.54234 14 8.15377 14 7.67409C14 7.19512 13.6117 6.80685 13.1328 6.80685L5.22956 6.80685L8.16136 3.84334C8.49142 3.5097 8.49425 2.97343 8.16773 2.63633C7.83007 2.28771 7.27139 2.28613 6.93175 2.63282L2.68559 6.96709C2.30469 7.35589 2.3047 7.97792 2.6856 8.36672L6.94969 12.7192C7.2811 13.0574 7.82485 13.0603 8.15977 12.7255Z"
		fill="currentColor"
	/>
</svg>
