<script context="module">
	import Grid from './grid.svelte';
	export const meta = {
		title: 'system foundations/Spacing & Grid',
		component: Grid,
		args: {
			items: 4,
			distributions: 'third'
		},
		argTypes: {
			distributions: {
				control: { type: 'select' },
				options: ['full', 'half', 'four', 'third', '4 / 8', '8 / 4']
			},
			items: {
				control: { type: 'number', min: 1, max: 20, step: 1 }
			}
		}
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<Grid {...args} />
</Template>

<Story id="grid" name="Grid" />
