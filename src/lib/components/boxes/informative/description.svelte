<script lang="ts">
	import { cn as defaultcn } from '../../../index.js';
	import { Body } from '../../typography/index.js';
	import {
		InformativeBoxDescriptionVariant,
		type InformativeBoxDescriptionVariants
	} from './index.js';

	type $$Props = InformativeBoxDescriptionVariants;

	let className: $$Props['class'] = undefined;
	export let theme: $$Props['theme'] = 'normal';
	export let customcn: $$Props['customcn'] = undefined;
	export { className as class };

	let cn = customcn || defaultcn;
</script>

<Body
	tag="p"
	size="body-large"
	{customcn}
	class={cn(InformativeBoxDescriptionVariant({ theme }), className)}
	{...$$restProps}
>
	<slot />
</Body>
