<script context="module">
	import { Button, buttonVariants } from './';

	export const meta = {
		title: 'Master Components/Button',
		component: Button,
		argTypes: {
			size: {
				control: 'select',
				options: [...Object.keys(buttonVariants.variants.size)]
			},
			variant: {
				control: 'select',
				options: [...Object.keys(buttonVariants.variants.variant)]
			},
			text: {
				control: 'text'
			},
			class: {
				control: 'text'
			}
		},
		args: {
			size: 'default',
			variant: 'solid-primary-main',
			text: 'Label',
			disabled: false,
			class: ''
		},
		parameters: {
			layout: 'centered'
		}
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<Button size={args.size} variant={args.variant} class={args.class} disabled={args.disabled}>
		{args.text}
	</Button>
</Template>

<Story id="button" name="Button" />
