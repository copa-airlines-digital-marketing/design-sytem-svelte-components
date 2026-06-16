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
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M13.8497 4.07463C13.0276 2.64179 10.9724 2.64179 10.1503 4.07463L2.28933 17.7761C1.46726 19.209 2.49485 21 4.13898 21H19.861C21.5052 21 22.5327 19.209 21.7107 17.7761L13.8497 4.07463ZM13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V11ZM12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z"
		fill="currentColor"
	/>
</svg>
