<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { cn as defaultcn } from '../../../../index.js';
	import {
		AccordionTriggerVariant,
		Title,
		Label,
		Icon,
		CTA,
		type AccordionTriggerProps
	} from './index.js';
	import { Carrot } from '../../../media/icon/index.js';

	type Props = AccordionPrimitive.ContentProps & AccordionTriggerProps;

	let className: Props['class'] = undefined;
	export let separator: Props['separator-position'] = 'top';
	export let customcn: Props['customcn'] = undefined;
	export { className as class, separator as 'separator-position' };

	const cn = customcn || defaultcn;

	const children = {
		Title,
		Label,
		Icon,
		CTA
	};
</script>

<AccordionPrimitive.Trigger
	class={cn(
		AccordionTriggerVariant({ 'separator-position': separator }),
		"grid w-full items-center border-grey-200 p-6 gap-1 [grid-template-areas:'icon_title_label_cta_carrot'] grid-cols-[auto_auto_1fr_auto_auto]",
		className
	)}
	{...$$restProps}
>
	<slot {...children} />
	<Carrot class="[grid-area:carrot] text-primary" />
</AccordionPrimitive.Trigger>
