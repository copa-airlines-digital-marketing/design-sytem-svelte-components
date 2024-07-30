<script context="module" lang="ts">
	import { Root as Typography } from '../../lib/components/ui/typography/index';

	export const meta = {
		title: 'Typography',
		component: Typography,
		argTypes: {
			size: {
				options: ['u6', 'u5', 'u4', 'u3', 'u2', 'u1', 'b', 'd1', 'd2', 'd3'],
				control: { type: 'select' }
			},
			class: { control: 'text' },
			default: { value: { type: 'string' }, table: { categoy: 'properties', subcategory: 'slots' } }
		}
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import { type TypographyVariants } from '../../lib/components/ui/typography/variants';

	const showcase: Array<TypographyVariants['size']> = [
		'u6',
		'u5',
		'u4',
		'u3',
		'u2',
		'u1',
		'b',
		'd1',
		'd2',
		'd3'
	];
</script>

<Template let:args>
	<!--👇 'on:click' allows to forward event to addon-actions  -->
	<Typography {...args}>{args.size}</Typography>
</Template>

<Story name="U6" args={{ size: 'u6' }}></Story>
