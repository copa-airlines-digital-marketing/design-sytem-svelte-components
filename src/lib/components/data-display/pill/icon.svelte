<script lang="ts">
	import { cn as defaultcn } from '../../../index.js';
	import type { Writable } from 'svelte/store';
	import { getPillContext, iconVariants, type PillBaseProps, type PillIconProps } from './index.js';

	type $$Props = PillIconProps;

	const pillProps: Writable<PillBaseProps> = getPillContext();
	let className: $$Props['class'] = undefined;
	export let side: $$Props['side'] = 'default';
	export let customcn: $$Props['customcn'] = undefined;
	export { className as class };

	const cn = customcn || defaultcn;
</script>

<span
	class={cn(
		iconVariants({ side }),
		$pillProps.theme === 'default' ? 'fill-common-white' : 'fill-grey-600',
		className
	)}
>
	<slot />
</span>
