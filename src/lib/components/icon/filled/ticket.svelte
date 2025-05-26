<script lang="ts">
	import type { FilledIcon } from '../index.js';
	import { cn as defaultcn } from '../../../index.js';

	type $$Props = FilledIcon;

	let className: $$Props['class'] = undefined;
	export let customcn: $$Props['customcn'] = undefined;
	export let filled: $$Props['filled'] = undefined;
	export { className as class };

	let cn = customcn || defaultcn;
</script>

<svg viewBox="0 0 24 24" class={cn('fill-current', className)} xmlns="http://www.w3.org/2000/svg">
	{#if filled}
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M21 3H3C1.89543 3 1 3.89543 1 5V19C1 20.1046 1.89543 21 3 21H21C22.1046 21 23 20.1046 23 19V5C23 3.89543 22.1046 3 21 3ZM5 8C5 7.44772 5.44772 7 6 7H9C9.55229 7 10 7.44772 10 8C10 8.55228 9.55229 9 9 9H6C5.44772 9 5 8.55228 5 8ZM6 10C5.44772 10 5 10.4477 5 11C5 11.5523 5.44772 12 6 12H11C11.5523 12 12 11.5523 12 11C12 10.4477 11.5523 10 11 10H6ZM16.25 5.04199V7C16.25 7.41421 15.9142 7.75 15.5 7.75C15.0858 7.75 14.75 7.41421 14.75 7V5.04199H16.25Z"
		/>
	{:else}
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M3 3H21C22.1046 3 23 3.89543 23 5V19C23 20.1046 22.1046 21 21 21H3C1.89543 21 1 20.1046 1 19V5C1 3.89543 1.89543 3 3 3ZM14.75 5H3V19H14.75V16.75H16.25V19H21V5H16.25V7.75H14.75V5ZM5 7H10V9H5V7ZM12 10H5V12H12V10Z"
		/>
	{/if}
</svg>
