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
		d="M19 10H17V5C17 3.3 15.7 2 14 2H10C8.3 2 7 3.3 7 5V6C7 6.55228 7.44772 7 8 7C8.55228 7 9 6.55228 9 6V5C9 4.4 9.4 4 10 4H14C14.6 4 15 4.4 15 5V10H5C4.4 10 4 10.4 4 11V21C4 21.6 4.4 22 5 22H19C19.6 22 20 21.6 20 21V11C20 10.4 19.6 10 19 10Z"
		fill="currentColor"
	/>
</svg>
