<script lang="ts">
	import type { SingularIcon } from '../index.js';
	import { cn as defaultcn } from '../../../index.js';

	type $$Props = SingularIcon;

	let className: $$Props['class'] = undefined;
	export let customcn: $$Props['customcn'] = undefined;
	export { className as class };

	let cn = customcn || defaultcn;
</script>

<svg viewBox="0 0 24 24" class={cn('fill-current', className)} xmlns="http://www.w3.org/2000/svg">
	<path
		d="m10.9 14.9l-1.625 7.3q-.075.35-.363.575T8.25 23q-.5 0-.8-.375t-.2-.85L9.8 8.9L8 9.6V12q0 .425-.288.713T7 13t-.712-.288T6 12V8.95q0-.3.163-.537T6.6 8.05l4.45-1.9q.35-.15.738-.175t.737.1t.663.35T13.7 7l1 1.6q.325.5.763.95t.987.775q.35.2.775.363t.85.237q.4.075.663.363T19 12t-.3.7t-.725.225q-1.4-.2-2.513-.875t-1.937-1.625L12.9 13.5l1.8 1.7q.15.15.225.338t.075.387V22q0 .425-.288.713T14 23t-.712-.288T13 22v-5.5zm2.6-9.4q-.825 0-1.412-.587T11.5 3.5t.588-1.412T13.5 1.5t1.413.588T15.5 3.5t-.587 1.413T13.5 5.5"
	/>
</svg>
