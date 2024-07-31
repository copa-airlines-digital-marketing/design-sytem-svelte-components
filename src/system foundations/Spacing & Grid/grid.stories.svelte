<script context="module">
	import Grid from './grid.svelte';
	export const meta = {
		title: 'system foundations/Spacing & Grid',
		component: Grid,
		argTypes: {
			distributions: { control: { type: 'select' }, options: ['full', 'half', 'four', 'third'] }
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
