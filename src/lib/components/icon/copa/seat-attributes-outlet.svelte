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
		d="M15.9746 12.1514C16.414 11.4866 15.9372 10.6 15.1403 10.6H12.365L14.535 2L8.02542 11.8486C7.58601 12.5134 8.06276 13.4 8.85966 13.4H11.635L9.465 22L15.9746 12.1514Z"
		fill="currentColor"
	/>
</svg>
