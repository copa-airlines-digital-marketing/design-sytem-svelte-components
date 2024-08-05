<script context="module">
	import * as Avatar from './';

	export const meta = {
		title: 'Master Components/Avatar',
		component: Avatar.Root,
		argTypes: {
			size: {
				control: 'select',
				options: [...Object.keys(Avatar.getAvatarVariants.variants.size)]
			},
			class: {
				control: 'text'
			},
			delayMs: {
				control: 'number',
				description:
					'How long to wait before showing the image after it has loaded. This can be useful to prevent a harsh flickering effect when the image loads quickly.',
				min: 0
			}
		},
		args: {
			delayMs: 0,
			stroke: true,
			size: 'normal'
		}
	};
</script>

<script lang="ts">
	import { Story } from '@storybook/addon-svelte-csf';
</script>

<Story id="avatar" name="Avatar">
	<Avatar.Root>
		<Avatar.Image />
		<Avatar.Fallback>CM</Avatar.Fallback>
	</Avatar.Root>
</Story>
