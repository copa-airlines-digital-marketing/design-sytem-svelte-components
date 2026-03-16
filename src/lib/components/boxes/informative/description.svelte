<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn as defaultcn } from '../../../index.js';
	import { Body } from '../../typography/index.js';
	import {
		InformativeBoxDescriptionVariant,
		type InformativeBoxDescriptionVariants
	} from './index.js';

	type Props = InformativeBoxDescriptionVariants & {
		children?: Snippet;
	};

	let {
		theme = 'normal',
		tag = 'p',
		customcn,
		class: className,
		children,
		...restProps
	}: Props = $props();

	const cn = $derived(customcn ?? defaultcn);
	const bodyProps = $derived(restProps as HTMLAttributes<HTMLElement>);
</script>

<Body
	size="body-large"
	class={cn(InformativeBoxDescriptionVariant({ theme }), className)}
	customcn={cn}
	{tag}
	{...bodyProps}
>
	{@render children?.()}
</Body>
