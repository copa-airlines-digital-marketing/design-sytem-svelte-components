<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn as defaultcn } from '../../../../index.js';
	import { Body, type HTMLTextElements, type BodyProps } from '../../../data-display/typography/index.js';

	export let tag: keyof HTMLTextElements = 'span';

	type $$Props = HTMLAttributes<HTMLTextElements[typeof tag]> & BodyProps;

	let className: $$Props['class'] = undefined;
	export let customcn: $$Props['customcn'] = undefined;
	export { className as class };

	const cn = customcn || defaultcn;
</script>

<Body {tag} {customcn} size="body-small" class={cn('[grid-area:label] flex gap-1', className)}>
	<span> · </span>
	<span>
		<slot />
	</span>
</Body>
