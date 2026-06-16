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
		d="M2.7 11.7C3.0866 12.0866 3.7134 12.0866 4.1 11.7L11 4.8V22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22V4.8L19.9 11.7C20.2866 12.0866 20.9134 12.0866 21.3 11.7C21.6866 11.3134 21.6866 10.6866 21.3 10.3L12.7071 1.70711C12.3166 1.31658 11.6834 1.31658 11.2929 1.70711L2.7 10.3C2.3134 10.6866 2.3134 11.3134 2.7 11.7Z"
		fill="currentColor"
	/>
</svg>
