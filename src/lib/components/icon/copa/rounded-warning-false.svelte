<script lang="ts">
	import type { SingularIcon } from '../index.js';
	import { cn as defaultcn } from '../../../index.js';

	type $$Props = SingularIcon;

	let { customcn, class: className }: $$Props = $props();

	const cn = $derived(customcn ?? defaultcn);
</script>

<svg
	viewBox="-2 -3 24 24"
	class={cn('size-6 shrink-0', className)}
	xmlns="http://www.w3.org/2000/svg"
	aria-hidden="true"
>
	<path
		d="M9 8C9 7.44772 9.44772 7 10 7C10.5523 7 11 7.44772 11 8V11C11 11.5523 10.5523 12 10 12C9.44772 12 9 11.5523 9 11V8Z"
		fill="currentColor"
	/>
	<path
		d="M11 14C11 14.5523 10.5523 15 10 15C9.44772 15 9 14.5523 9 14C9 13.4477 9.44772 13 10 13C10.5523 13 11 13.4477 11 14Z"
		fill="currentColor"
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M17.9245 15.1969L10.4625 2.26732C10.2568 1.91089 9.74321 1.9109 9.53752 2.26731L2.07552 15.1969C1.86892 15.5549 2.12796 16 2.538 16H17.462C17.872 16 18.1311 15.5549 17.9245 15.1969ZM12.1947 1.26761C11.2193 -0.422534 8.78072 -0.422536 7.8053 1.2676L0.343303 14.1972C-0.632121 15.8873 0.587157 18 2.538 18H17.462C19.4128 18 20.6321 15.8873 19.6567 14.1972L12.1947 1.26761Z"
		fill="currentColor"
	/>
</svg>
