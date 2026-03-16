<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn as defaultcn } from '../../../index.js';
	import { Heading } from '../../typography/index.js';
	import { InformativeBoxTitleVariant, type InformativeBoxTitleVariants } from './index.js';

	type Props = InformativeBoxTitleVariants & {
		children?: Snippet;
	};

	let { theme = 'normal', customcn, class: className, children, ...restProps }: Props = $props();

	const cn = $derived(customcn ?? defaultcn);
	const headingProps = $derived(restProps as HTMLAttributes<HTMLElement>);
</script>

<Heading
	tag="h4"
	variant="h4"
	{customcn}
	class={cn(InformativeBoxTitleVariant({ theme }), className)}
	{...headingProps}
>
	{@render children?.()}
</Heading>
