<script lang="ts">
	import type { SingularIcon } from '../index.js';
	import { cn as defaultcn } from '../../../index.js';

	type $$Props = SingularIcon;

	let { customcn, class: className }: $$Props = $props();

	const cn = $derived(customcn ?? defaultcn);
</script>

<svg
	viewBox="0 0 28 28"
	class={cn('size-6 shrink-0', className)}
	xmlns="http://www.w3.org/2000/svg"
	aria-hidden="true"
>
	<path d="M8.19995 20.8999V4.8999L19.8 16.4999H13L12.6 16.5999L8.19995 20.8999Z" fill="white" />
	<path d="M17.3 21.6L13.7 23.1L9 12L12.7 10.5L17.3 21.6Z" fill="white" />
	<path
		d="M12.8746 13.5182L11.0303 14.2925L14.1273 21.6697L15.9716 20.8955L12.8746 13.5182Z"
		fill="black"
	/>
	<path d="M9.19995 7.2998V18.4998L12.2 15.5998L12.6 15.4998H17.4L9.19995 7.2998Z" fill="black" />
</svg>
