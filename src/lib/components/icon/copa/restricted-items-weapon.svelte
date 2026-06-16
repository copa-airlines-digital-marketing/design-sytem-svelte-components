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
		d="M18.5482 3.54815C19.35 4.34992 20.2562 5.6043 18.0807 7.75558L13.8194 12.0169C13.4348 12.4105 12.4332 12.738 11.8908 12.4581L11.8797 12.4471L5.97842 18.6743C5.47843 19.2017 4.64177 19.213 4.12779 18.6992C3.61098 18.1823 3.62584 17.3395 4.16025 16.8409L10.4268 10.9942L10.4172 10.9845C10.4172 10.9845 17.4576 3.94413 17.7431 3.65864C18.0265 3.37517 18.3688 3.36912 18.5482 3.54815Z"
		fill="currentColor"
	/>
</svg>
