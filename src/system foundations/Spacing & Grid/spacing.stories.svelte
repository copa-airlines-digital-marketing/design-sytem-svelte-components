<script context="module">
	import Spacing from './spacing.svelte';
	export const meta = {
		title: 'system foundations/Spacing & Grid',
		component: Spacing
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<Spacing {...args} />
</Template>

<Story id="vSpacing" name="Vertical Spacing" />
