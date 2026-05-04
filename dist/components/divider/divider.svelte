<script lang="ts">
	import { cn } from '../../index.js';
	import { dividerVariants, type DividerProps } from './index.js';

	let {
		class: className,
		lineType = 'solid',
		opaque = false,
		orientation = 'horizontal',
		spacing = true,
		theme = 'light'
	}: DividerProps = $props();
</script>

<hr class={cn(dividerVariants({ lineType, opaque, orientation, spacing, theme }), className)} />
