<script lang="ts">
	import { ButtonGroup, type ButtonGroupSize } from '../lib/components/button-group/index.js';

	type Props = {
		value?: string;
		label?: string;
		showLabel?: boolean;
		disabled?: boolean;
		size?: ButtonGroupSize;
		items?: 2 | 3 | 4;
	};

	let {
		value = $bindable('second'),
		label = 'Label',
		showLabel = true,
		disabled = false,
		size = 'default',
		items = 2
	}: Props = $props();

	const optionSet = [
		{ value: 'first', label: 'Option name' },
		{ value: 'second', label: 'Option name' },
		{ value: 'third', label: 'Option name' },
		{ value: 'fourth', label: 'Option name' }
	];

	const options = $derived(optionSet.slice(0, items));

	$effect(() => {
		if (options.length > 0 && !options.some((option) => option.value === value)) {
			value = options[0].value;
		}
	});
</script>

<div class="flex min-h-[16rem] items-start justify-start bg-common-white p-6">
	<div class="w-full max-w-[25rem]">
		<ButtonGroup bind:value {options} label={showLabel ? label : null} {disabled} {size} />
	</div>
</div>
