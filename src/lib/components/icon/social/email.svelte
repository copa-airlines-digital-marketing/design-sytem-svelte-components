<script lang="ts">
	import type { SingularIcon } from '../index.js';
	import { cn as defaultcn } from '../../../index.js';

	type $$Props = SingularIcon;

	let className: $$Props['class'] = undefined;
	export let customcn: $$Props['customcn'] = undefined;
	export { className as class };

	let cn = customcn || defaultcn;
</script>

<svg
	viewBox="0 0 24 24"
	fill="none"
	class={cn('fill-current', className)}
	xmlns="http://www.w3.org/2000/svg"
>
	<g id=" Social/Email">
		<path
			id="Union"
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M4 3.93018C2.89543 3.93018 2 4.82561 2 5.93018V17.9302C2 19.0347 2.89543 19.9302 4 19.9302H20.1857C21.2903 19.9302 22.1857 19.0347 22.1857 17.9302V5.93018C22.1857 4.82561 21.2903 3.93018 20.1857 3.93018H4ZM18.4574 5.93018L5.98035 5.93018L12.0563 11.3133L18.4574 5.93018ZM4 6.84457V17.9302H20.1857V7.0997L12.7145 13.3771C12.336 13.6951 11.7819 13.6888 11.4108 13.3623L4 6.84457Z"
		/>
	</g>
</svg>
