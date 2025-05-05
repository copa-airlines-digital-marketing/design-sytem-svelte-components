<script lang="ts">
	import { cn } from '../lib/index.js';
	import { gridItemVariant, type ContainerItemProps } from './index.js';

	type $$Props = ContainerItemProps;

	let className: $$Props['class'] = undefined;
	export let distribution: $$Props['distribution'] = 'full';
	export { className as class };
</script>

<div class={cn(gridItemVariant({ distribution }), className)}>
	<slot />
</div>
