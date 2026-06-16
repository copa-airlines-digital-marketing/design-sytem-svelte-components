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
		d="M19.7632 5.41452C19.3233 4.96607 18.8011 4.61034 18.2264 4.36763C17.6516 4.12492 17.0356 4 16.4134 4C15.7913 4 15.1752 4.12492 14.6005 4.36763C14.0257 4.61034 13.5035 4.96607 13.0637 5.41452L12.1509 6.34476L11.2381 5.41452C10.3497 4.50912 9.14477 4.00047 7.88837 4.00047C6.63197 4.00047 5.42704 4.50912 4.53863 5.41452C3.65022 6.31992 3.15112 7.5479 3.15112 8.82833C3.15112 10.1088 3.65022 11.3367 4.53863 12.2421L12.1509 20L19.7632 12.2421C20.2032 11.7939 20.5522 11.2617 20.7904 10.676C21.0285 10.0902 21.1511 9.46237 21.1511 8.82833C21.1511 8.19428 21.0285 7.56645 20.7904 6.9807C20.5522 6.39494 20.2032 5.86275 19.7632 5.41452Z"
		fill="currentColor"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
