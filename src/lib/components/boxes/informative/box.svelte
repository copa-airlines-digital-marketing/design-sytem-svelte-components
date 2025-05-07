<script lang="ts">
	import { cn as defaultcn } from '../../../index.js';
	import {
		Description,
		Icon,
		Image,
		informativeBoxVariant,
		Title,
		type InformativeBoxVariants
	} from './index.js';

	type $$Props = InformativeBoxVariants;

	let className: $$Props['class'] = undefined;
	export let alignment: $$Props['alignment'] = 'left';
	export let orientation: $$Props['orientation'] = 'vertical';
	export let customcn: $$Props['customcn'] = undefined;
	export { className as class };

	let cn = defaultcn || customcn;

	const children = {
		Icon,
		Image,
		Title,
		Description
	};
</script>

<div class={cn(informativeBoxVariant({ alignment, orientation }), className)}>
	<slot {...children} />
</div>
