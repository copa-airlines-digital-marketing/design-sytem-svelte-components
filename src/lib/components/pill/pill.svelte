<script lang="ts">
	import { Text, Icon, pillVariants, setPillContext, type PillProps } from './index.js';
	import { cn as defaultcn } from '../../../lib/index.js';

	type $$Props = PillProps;

	let className: $$Props['class'] = undefined;
	export let theme: $$Props['theme'] = 'default';
	export let outline: $$Props['outline'] = false;
	export let thickness: $$Props['thickness'] = 'default';
	export let customcn: $$Props['customcn'] = undefined;
	export { className as class };

	const cn = customcn || defaultcn;

	setPillContext({ theme, thickness });
</script>

<div class={cn(pillVariants({ theme, outline }), className)}>
	<slot {Text} {Icon} />
</div>

<style>
	div {
		grid-template-columns: 16px auto 16px;
	}
</style>
