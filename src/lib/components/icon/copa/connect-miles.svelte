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
		d="M5.38729 11.7621C5.05206 11.9193 4.7331 11.4456 5.03702 11.2341C13.4583 5.37355 21.4038 6.61014 21.7672 13.0403C21.7857 13.3686 21.3093 13.4375 21.1545 13.1474C18.7045 8.55952 11.7831 8.76226 5.38729 11.7621Z"
		fill="currentColor"
	/>
</svg>
