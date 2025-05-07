<script lang="ts">
	import { cn } from '../../index.js';
	import { dividerVariants, type DividerProps } from './index.js';

	type $$Props = DividerProps;

	let className: $$Props['class'] = undefined;
	export let lineType: $$Props['lineType'] = 'solid';
	export let opaque: $$Props['opaque'] = false;
	export let orientation: $$Props['orientation'] = 'horizontal';
	export let spacing: $$Props['spacing'] = true;
	export let theme: $$Props['theme'] = 'light';
</script>

<hr class={cn(dividerVariants({ lineType, opaque, orientation, spacing, theme }), className)} />
