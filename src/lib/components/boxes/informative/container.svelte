<script lang="ts">
	import { HTMLAttributes } from 'svelte/elements';
	import { cn as defaultcn } from '../../../index.js';
	import { ClassValue } from 'clsx';
	import { Box } from './index.js';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		customcn?: (...inputs: ClassValue[]) => string;
	};

	let className: $$Props['class'] = undefined;
	let customcn: $$Props['customcn'] = undefined;
	export { className as class };

	let cn = customcn || defaultcn;
</script>

<div
	class={cn('grid grid-cols-[repeat(auto-fit,minmax(268px,1fr))] gap-6', className)}
	{...$$restProps}
>
	<slot {Box} />
</div>
