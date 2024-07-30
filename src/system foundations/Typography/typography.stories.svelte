<script context="module" lang="ts">
	import Base from './scale.svelte';

	export const meta = {
		title: 'system foundations/Typography',
		component: Base,
		argTypes: {
			sample: { control: { type: 'text' } }
		}
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<Base {...args} />
</Template>

<Story id="scale" name="Typographic Scale" args={{}} />
