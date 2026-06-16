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
		d="M20.378 2.76953C21.1596 2.7696 21.7735 3.40457 21.7735 4.21289V17.3896C21.7733 18.1978 21.1321 18.8329 20.378 18.833H7.3653C5.35807 20.6683 4.23596 21.6979 3.99908 21.9209C3.64383 22.2553 3.31751 22.3818 2.97662 22.3818C2.63571 22.3818 2.38093 22.1249 2.38092 21.5859V4.21289C2.38092 3.43291 2.99485 2.76956 3.77545 2.76953H20.378ZM4.38092 18.8525C4.83795 18.434 5.38321 17.9356 6.01666 17.3564C6.38514 17.0197 6.86611 16.8331 7.3653 16.833H19.7735V4.76953H4.38092V18.8525ZM12.9288 7.2998L15.5001 14.1797H14.0294L13.545 12.7842H10.8692L10.3858 14.1797H9.00006L11.5616 7.2998H12.9288ZM11.2579 11.6738H13.1553L12.2071 8.95996L11.2579 11.6738Z"
		fill="currentColor"
	/>
</svg>
