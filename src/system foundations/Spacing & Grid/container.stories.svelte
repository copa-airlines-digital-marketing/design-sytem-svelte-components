<script context="module">
	import Container from './container.svelte';
	export const meta = {
		title: 'system foundations/Spacing & Grid',
		component: Container
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<Container {...args} />
</Template>

<Story id="regular" name="Container" />
