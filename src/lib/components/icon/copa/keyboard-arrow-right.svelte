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
		d="M9.29961 17.3C8.91301 16.9134 8.91301 16.2866 9.29961 15.9L13.1996 12L9.29961 8.1C8.91301 7.7134 8.91301 7.0866 9.29961 6.7C9.68621 6.3134 10.313 6.3134 10.6996 6.7L15.2925 11.2929C15.683 11.6834 15.683 12.3166 15.2925 12.7071L10.6996 17.3C10.313 17.6866 9.68621 17.6866 9.29961 17.3Z"
		fill="currentColor"
	/>
</svg>
