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
			d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.1053 6.05264C13.1053 5.47128 12.634 5 12.0526 5C11.4713 5 11 5.47128 11 6.05264L11 13.6949L14.6267 16.1127C15.1104 16.4352 15.7639 16.3045 16.0864 15.8208C16.4089 15.337 16.2782 14.6835 15.7945 14.361L13.1053 12.5682L13.1053 6.05264Z"
		/>
	{:else}
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.6 20 4 16.4 4 12C4 7.6 7.6 4 12 4C16.4 4 20 7.6 20 12C20 16.4 16.4 20 12 20ZM10.8108 6.6864C10.8108 6.13809 11.2553 5.6936 11.8036 5.6936C12.3519 5.6936 12.7964 6.13809 12.7964 6.6864V12.5508L15.2738 13.9811C15.7486 14.2553 15.9113 14.8625 15.6371 15.3373C15.363 15.8122 14.7558 15.9749 14.281 15.7007L10.8134 13.6987L10.8166 13.6933H10.8108V6.6864Z"
		/>
	{/if}
</svg>
