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
	<path
		d="M16.6009 5H19.0544L13.6943 10.9303L20 19H15.0627L11.1957 14.1057L6.77087 19H4.31595L10.049 12.6569L4 5H9.06262L12.5581 9.47354L16.6009 5ZM15.7399 17.5785H17.0993L8.32392 6.34687H6.86506L15.7399 17.5785Z"
	/>
</svg>
