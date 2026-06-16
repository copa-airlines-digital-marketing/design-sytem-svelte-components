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
		d="M14.8066 3.93018C14.4013 4.51164 14.1303 5.19292 14.0371 5.93018H5.97949L12.0566 11.313L14.7754 9.02588C15.1578 9.58875 15.6653 10.0589 16.2568 10.3999L12.7148 13.3774C12.3365 13.6953 11.7823 13.6889 11.4111 13.3628L4 6.84424V17.9302H20.1855V10.6714C20.9965 10.3434 21.6899 9.7871 22.1855 9.08057V17.9302C22.1855 19.0347 21.2901 19.9302 20.1855 19.9302H4C2.89543 19.9302 2 19.0347 2 17.9302V5.93018C2 4.82561 2.89543 3.93018 4 3.93018H14.8066Z"
		fill="currentColor"
	/>
	<circle cx="19" cy="6" r="3" fill="currentColor" />
</svg>
