<script lang="ts">
	import type { SingularIcon } from '../index.js';
	import { cn as defaultcn } from '../../../index.js';

	type $$Props = SingularIcon;

	let { customcn, class: className }: $$Props = $props();

	const cn = $derived(customcn ?? defaultcn);
</script>

<svg
	viewBox="0 0 24 24"
	class={cn('size-6 shrink-0', className)}
	xmlns="http://www.w3.org/2000/svg"
	aria-hidden="true"
>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M12.2397 19.088C12.7346 18.5932 12.7392 17.7923 12.2499 17.2919L7.84434 12.7867L19.6964 12.8118C20.4159 12.8133 21 12.2304 21 11.5109C21 10.7924 20.4176 10.21 19.6991 10.21L7.84434 10.21L12.242 5.76476C12.7371 5.26431 12.7414 4.4599 12.2516 3.95425C11.7451 3.43133 10.9071 3.42895 10.3976 3.94899L3.68559 10.8003C3.30469 11.1891 3.3047 11.8111 3.6856 12.1999L10.4245 19.0785C10.9216 19.5859 11.7373 19.5902 12.2397 19.088Z"
		fill="currentColor"
	/>
</svg>
