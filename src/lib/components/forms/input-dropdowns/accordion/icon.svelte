<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { ClassValue } from 'clsx';
	import { cn as defaultcn } from '../../../../index.js';

	type $$Props = HTMLAttributes<HTMLSpanElement> & {
		customcn?: (...inputs: ClassValue[]) => string;
	};

	let className: $$Props['class'] = undefined;
	export let customcn: $$Props['customcn'] = undefined;
	export { className as class };

	let cn = customcn || defaultcn;
</script>

<span class={cn('[grid-area:icon] block size-6', className)} {...$$restProps}>
	<slot></slot>
</span>
