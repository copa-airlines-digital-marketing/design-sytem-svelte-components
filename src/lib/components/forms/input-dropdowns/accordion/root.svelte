<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { ClassValue } from 'clsx';
	import { Accordion } from 'bits-ui';
	import { Item } from './index.js';
	import { cn as defaultcn } from '../../../../index.js';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		customcn?: (...inputs: ClassValue[]) => string;
	};

	let className: $$Props['class'] = undefined;
	export let customcn: $$Props['customcn'] = undefined;
	export { className as class };

	const cn = customcn || defaultcn;
</script>

<Accordion.Root class={cn('space-y-2', className)} {...$$restProps}>
	<slot {Item} />
</Accordion.Root>
