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
		d="M14.5858 3C14.851 3 15.1054 3.10536 15.2929 3.29289L15.7071 3.70711C15.8946 3.89464 16.149 4 16.4142 4H18C18.5523 4 19 4.44772 19 5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5C5 4.44772 5.44772 4 6 4H7.58579C7.851 4 8.10536 3.89464 8.29289 3.70711L8.70711 3.29289C8.89464 3.10536 9.149 3 9.41421 3H14.5858ZM7 21C6.4 21 6 20.6 6 20V8C6 7.44772 6.44772 7 7 7H17C17.5523 7 18 7.44772 18 8V20C18 20.6 17.6 21 17 21H7Z"
		fill="currentColor"
	/>
</svg>
