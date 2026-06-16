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
		d="M6.7 9.29961C7.0866 8.91301 7.7134 8.91301 8.1 9.29961L12 13.1996L15.9 9.29961C16.2866 8.91301 16.9134 8.91301 17.3 9.29961C17.6866 9.68621 17.6866 10.313 17.3 10.6996L12.7071 15.2925C12.3166 15.683 11.6834 15.683 11.2929 15.2925L6.7 10.6996C6.3134 10.313 6.3134 9.68621 6.7 9.29961Z"
		fill="currentColor"
	/>
</svg>
