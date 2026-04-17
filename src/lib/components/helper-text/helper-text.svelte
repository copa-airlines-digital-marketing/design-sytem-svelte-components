<script lang="ts">
	import { cn as defaultCn } from '../../index.js';
	import {
		helperTextVariants,
		helperIconVariants,
		helperLabelVariants,
		type HelperTextProps
	} from './index.js';

	let {
		text,
		type = 'regular',
		size = 'default',
		color = 'default',
		class: className,
		customcn
	}: HelperTextProps = $props();

	const cn = $derived(customcn ?? defaultCn);
</script>

<!--
	Figma: 12×12 filled info/error icon + text label.
	Icon color → type. Label size → size. Text color → color.
-->
<span class={cn(helperTextVariants(), className)}>
	<!-- 12×12 filled circle icon: grey for regular, red for error -->
	<!-- fill="currentColor" on the circle reads the CSS `color` set by text-grey-400 / text-error -->
	<svg
		class={cn(helperIconVariants({ type }))}
		viewBox="0 0 12 12"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<circle cx="6" cy="6" r="6" fill="currentColor" />
		<circle cx="6" cy="3.5" r="0.75" fill="white" />
		<rect x="5.25" y="5" width="1.5" height="4" rx="0.75" fill="white" />
	</svg>

	<span class={cn(helperLabelVariants({ size, color }))}>
		{text}
	</span>
</span>
