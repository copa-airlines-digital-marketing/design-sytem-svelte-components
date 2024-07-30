<script context="module" lang="ts">
	import Base from './base.svelte';

	export const meta = {
		title: 'Typography',
		component: Base,
		argTypes: {
			sample: { control: { type: 'text' } },
			class: { control: 'text' }
		}
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<Base {...args} />
</Template>

<Story name="Scale" args={{}} />
