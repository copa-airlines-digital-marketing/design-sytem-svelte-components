<script lang="ts">
	import type { SingularIcon } from '../index.js';
	import { cn as defaultcn } from '../../../index.js';

	type $$Props = SingularIcon;

	let { customcn, class: className }: $$Props = $props();

	const cn = $derived(customcn ?? defaultcn);
</script>

<svg
	viewBox="0 0 24 23"
	class={cn('size-6 shrink-0', className)}
	xmlns="http://www.w3.org/2000/svg"
	aria-hidden="true"
>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M12 1.91675C6.5 1.91675 2 6.22925 2 11.5001C2 16.7709 6.5 21.0834 12 21.0834C17.5 21.0834 22 16.7709 22 11.5001C22 6.22925 17.5 1.91675 12 1.91675ZM12 16.2917C11.4 16.2917 11 15.9084 11 15.3334C11 14.7584 11.4 14.3751 12 14.3751C12.6 14.3751 13 14.7584 13 15.3334C13 15.9084 12.6 16.2917 12 16.2917ZM11 11.5001C11 12.0294 11.4477 12.4584 12 12.4584C12.5523 12.4584 13 12.0294 13 11.5001V7.66675C13 7.13748 12.5523 6.70841 12 6.70841C11.4477 6.70841 11 7.13748 11 7.66675V11.5001Z"
		fill="currentColor"
	/>
</svg>
