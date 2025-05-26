<script lang="ts">
	import type { SingularIcon } from '../index.js';
	import { cn as defaultcn } from '../../../index.js';

	type $$Props = SingularIcon;

	let className: $$Props['class'] = undefined;
	export let customcn: $$Props['customcn'] = undefined;
	export { className as class };

	let cn = customcn || defaultcn;
</script>

<svg viewBox="0 0 24 24" class={cn('fill-current', className)} xmlns="http://www.w3.org/2000/svg">
	<path
		d="M9.77718 17.293C9.38665 17.6835 8.75349 17.6835 8.36296 17.293L4.77007 13.7001C4.38347 13.3135 4.38347 12.6867 4.77007 12.3001V12.3001C5.15667 11.9135 5.78347 11.9135 6.17007 12.3001L9.07007 15.2001L17.9701 6.3001C18.3567 5.9135 18.9835 5.9135 19.3701 6.3001V6.3001C19.7567 6.6867 19.7567 7.3135 19.3701 7.7001L9.77718 17.293Z"
	/>
</svg>
