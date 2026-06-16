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
		d="M18 12C18 11.5266 17.6162 11.1429 17.1429 11.1429H12.8571V6.85714C12.8571 6.38376 12.4734 6 12 6C11.5266 6 11.1429 6.38376 11.1429 6.85714V11.1429H6.85714C6.38376 11.1429 6 11.5266 6 12C6 12.4734 6.38376 12.8571 6.85714 12.8571H11.1429V17.1429C11.1429 17.6162 11.5266 18 12 18C12.4734 18 12.8571 17.6162 12.8571 17.1429V12.8571H17.1429C17.6162 12.8571 18 12.4734 18 12Z"
		fill="currentColor"
	/>
</svg>
