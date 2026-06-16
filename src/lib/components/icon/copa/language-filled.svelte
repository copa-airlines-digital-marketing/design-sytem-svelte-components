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
		d="M20.378 2.76953C21.1596 2.76957 21.7735 3.40455 21.7735 4.21289V17.3896C21.7733 18.1978 21.1321 18.833 20.378 18.833H7.36627C7.36627 18.833 4.35443 21.5864 3.99908 21.9209C3.64383 22.2553 3.31751 22.3818 2.97662 22.3818C2.63571 22.3818 2.38093 22.1249 2.38092 21.5859V4.21289C2.38092 3.43291 2.99485 2.76956 3.77545 2.76953H20.378ZM9.00006 14.1797H10.3858L10.8692 12.7842H13.545L14.0294 14.1797H15.5001L12.9288 7.2998H11.5616L9.00006 14.1797ZM13.1553 11.6738H11.2579L12.2071 8.95996L13.1553 11.6738Z"
		fill="currentColor"
	/>
</svg>
