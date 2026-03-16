<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn as defaultcn } from '../../../index.js';
	import type { ClassValue } from 'clsx';

	/** Component-specific props; rest are passed through to the div (restProps) */
	type ContainerComponentProps = {
		class?: HTMLAttributes<HTMLDivElement>['class'];
		customcn?: (...inputs: ClassValue[]) => string;
		children?: Snippet;
	};

	type Props = ContainerComponentProps &
		Omit<HTMLAttributes<HTMLDivElement>, keyof ContainerComponentProps>;

	/* eslint-disable svelte/valid-compile -- wrapper: restProps typed via Props (Omit<HTMLAttributes<HTMLDivElement>, keyof ContainerComponentProps>) */
	let { class: className, customcn, children, ...restProps }: Props = $props();
	/* eslint-enable svelte/valid-compile */

	const cn = $derived(customcn || defaultcn);
</script>

<div
	class={cn('grid grid-cols-[repeat(auto-fit,minmax(268px,1fr))] gap-6', className)}
	{...restProps}
>
	{@render children?.()}
</div>
