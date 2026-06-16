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
		d="M17.1366 6.7155C16.7428 6.32172 16.1032 6.32549 15.7141 6.72387L12 10.5263L8.28598 6.72387C7.89686 6.32549 7.25728 6.32172 6.8635 6.7155L6.7155 6.8635C6.32172 7.25728 6.32549 7.89686 6.72387 8.28598L10.5263 12L6.72387 15.7141C6.32549 16.1032 6.32172 16.7428 6.7155 17.1366L6.8635 17.2846C7.25728 17.6783 7.89686 17.6746 8.28598 17.2762L12 13.4737L15.7141 17.2762C16.1032 17.6746 16.7428 17.6783 17.1366 17.2846L17.2846 17.1366C17.6783 16.7428 17.6746 16.1032 17.2762 15.7141L13.4737 12L17.2762 8.28598C17.6746 7.89686 17.6783 7.25728 17.2846 6.8635L17.1366 6.7155Z"
		fill="currentColor"
	/>
</svg>
