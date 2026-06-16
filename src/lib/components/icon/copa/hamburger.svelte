<script lang="ts">
	import type { SingularIcon } from '../index.js';
	import { cn as defaultcn } from '../../../index.js';

	type $$Props = SingularIcon;

	let { customcn, class: className }: $$Props = $props();

	const cn = $derived(customcn ?? defaultcn);
</script>

<svg
	viewBox="0 0 24 24"
	class={cn('size-6 shrink-0', className)}
	xmlns="http://www.w3.org/2000/svg"
	aria-hidden="true"
>
	<path
		d="M3 18H21"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M3 12H21"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M3 6H21"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
