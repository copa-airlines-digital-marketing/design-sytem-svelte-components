<script lang="ts">
	import AccordionRoot from '../lib/components/input-dropdowns/accordion/root.svelte';
	import AccordionItem from '../lib/components/input-dropdowns/accordion/item.svelte';
	import AccordionHeader from '../lib/components/input-dropdowns/accordion/header.svelte';
	import AccordionContent from '../lib/components/input-dropdowns/accordion/content.svelte';
	import AccordionTrigger from '../lib/components/input-dropdowns/accordion/trigger.svelte';
	import AccordionTitle from '../lib/components/input-dropdowns/accordion/title.svelte';
	import AccordionIcon from '../lib/components/input-dropdowns/accordion/icon.svelte';

	type SeparatorPosition = 'top' | 'bottom';

	type Props = {
		separatorPosition?: SeparatorPosition;
		item1Title?: string;
		item1Content?: string;
		item2Title?: string;
		item2Content?: string;
		item3Title?: string;
		item3Content?: string;
	};

	let {
		separatorPosition = 'top',
		item1Title = 'What documents do I need?',
		item1Content = 'You will need a valid passport and your booking confirmation.',
		item2Title = 'Can I change my flight?',
		item2Content = 'Yes, changes are allowed up to 24 hours before departure.',
		item3Title = 'How do I check in online?',
		item3Content = 'Online check-in opens 24 hours before your scheduled departure.'
	}: Props = $props();
</script>

<AccordionRoot>
	<AccordionItem value="item-1">
		<AccordionHeader>
			<AccordionTrigger separator-position={separatorPosition}>
				<AccordionTitle>{item1Title}</AccordionTitle>
				<AccordionIcon />
			</AccordionTrigger>
		</AccordionHeader>
		<AccordionContent>{item1Content}</AccordionContent>
	</AccordionItem>
	<AccordionItem value="item-2">
		<AccordionHeader>
			<AccordionTrigger separator-position={separatorPosition}>
				<AccordionTitle>{item2Title}</AccordionTitle>
				<AccordionIcon />
			</AccordionTrigger>
		</AccordionHeader>
		<AccordionContent>{item2Content}</AccordionContent>
	</AccordionItem>
	<AccordionItem value="item-3">
		<AccordionHeader>
			<AccordionTrigger separator-position={separatorPosition}>
				<AccordionTitle>{item3Title}</AccordionTitle>
				<AccordionIcon />
			</AccordionTrigger>
		</AccordionHeader>
		<AccordionContent>{item3Content}</AccordionContent>
	</AccordionItem>
</AccordionRoot>
