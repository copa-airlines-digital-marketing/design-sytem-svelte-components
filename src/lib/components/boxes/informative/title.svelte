<script lang="ts">
	import { cn as defaultcn } from '../../../index.js';
	import { Heading } from '../../typography/index.js';
	import { InformativeBoxTitleVariant, type InformativeBoxTitleVariants } from './index.js';

	type $$Props = InformativeBoxTitleVariants;

	let className: $$Props['class'] = undefined;
	export let theme: $$Props['theme'] = 'normal';
	export let customcn: $$Props['customcn'] = undefined;
	export { className as class };

	let cn = customcn || defaultcn;
</script>

<Heading
	tag="h4"
	variant="h4"
	{customcn}
	class={cn(InformativeBoxTitleVariant({ theme }), className)}
	{...$$restProps}
>
	<slot />
</Heading>
