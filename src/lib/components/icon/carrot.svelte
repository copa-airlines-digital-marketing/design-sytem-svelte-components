<script lang="ts">
	import { iconWithDirectionVariants, type IconWithDirection } from './index.js';
	import { cn as defaultcn } from '../../index.js';

	type $$Props = IconWithDirection;

	let className: $$Props['class'] = undefined;
	export let direction: $$Props['direction'] = 'up';
	export let customcn: $$Props['customcn'] = undefined;
	export { className as class };

	let cn = customcn || defaultcn;
</script>

<svg
	viewBox="0 0 24 24"
	xmlns="http://www.w3.org/2000/svg"
	class={cn(iconWithDirectionVariants({ direction }), 'size-6 fill-current', className)}
>
	<path
		d="M9.41421 10C8.52331 10 8.07714 11.0771 8.70711 11.7071L11.2929 14.2929C11.6834 14.6834 12.3166 14.6834 12.7071 14.2929L15.2929 11.7071C15.9229 11.0771 15.4767 10 14.5858 10H9.41421Z"
	/>
</svg>
