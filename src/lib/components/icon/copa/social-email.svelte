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
		d="M20.1855 3.93018C21.2901 3.93018 22.1855 4.82561 22.1855 5.93018V17.9302C22.1855 19.0347 21.2901 19.9302 20.1855 19.9302H4C2.89543 19.9302 2 19.0347 2 17.9302V5.93018C2 4.82561 2.89543 3.93018 4 3.93018H20.1855ZM4 17.9302H20.1855V7.09912L12.7148 13.3774C12.3365 13.6953 11.7823 13.6889 11.4111 13.3628L4 6.84424V17.9302ZM12.0566 11.313L18.458 5.93018H5.97949L12.0566 11.313Z"
		fill="currentColor"
	/>
</svg>
