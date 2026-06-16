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
		d="M20.255 11.29L16.735 7.69997C16.345 7.30997 15.715 7.30997 15.325 7.69997C14.935 8.08997 14.935 8.71997 15.325 9.10997L17.165 11H4.44501C3.89501 11 3.44501 11.45 3.44501 12C3.44501 12.55 3.89501 13 4.44501 13H17.155L15.315 14.89C14.925 15.28 14.925 15.91 15.315 16.3C15.705 16.69 16.335 16.69 16.725 16.3L20.255 12.71C20.655 12.31 20.655 11.68 20.255 11.29Z"
		fill="currentColor"
	/>
</svg>
