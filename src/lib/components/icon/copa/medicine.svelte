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
		d="M14.9433 4.63091C17.193 3.33209 20.0702 4.10293 21.3691 6.35259C22.668 8.6023 21.8971 11.4795 19.6474 12.7784L9.05659 18.8926C6.80686 20.1915 3.92969 19.4207 2.6308 17.1709C1.33214 14.9213 2.103 12.045 4.35248 10.7461L14.9433 4.63091ZM5.29291 12.375C3.94321 13.1544 3.48045 14.8807 4.25971 16.2305C5.03908 17.5802 6.76539 18.042 8.11518 17.2627L13.5615 14.1172L10.5585 9.33403L5.29291 12.375Z"
		fill="currentColor"
	/>
</svg>
