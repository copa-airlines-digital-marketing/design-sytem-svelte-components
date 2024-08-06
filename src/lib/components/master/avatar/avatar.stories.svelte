<script context="module">
	import * as Avatar from './';

	export const meta = {
		title: 'Master Components/Avatar',
		component: Avatar.Root,
		argTypes: {
			src: {
				control: 'text',
				table: {
					category: 'Image Properties'
				}
			},
			alt: {
				control: 'text',
				table: {
					category: 'Image Properties'
				}
			},
			imageClass: {
				control: 'text',
				name: 'class',
				table: {
					category: 'Image Properties'
				}
			},
			fallbackClass: {
				control: 'text',
				name: 'class',
				table: {
					category: 'Fallback Properties'
				}
			},
			fallbackText: {
				control: 'text',
				name: 'Fallback slot',
				table: {
					category: 'Fallback Properties'
				}
			},
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
			size: 'normal',
			fallbackText: 'CM',
			src: 'https://www.copaair.com/favicon/favicon-48x48.png',
			alt: '',
			class: '',
			imageClass: '',
			fallbackClass: ''
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
	<Avatar.Root size={args.size} stroke={args.stroke} delayMs={args.delayMs} class={args.class}>
		<Avatar.Image src={args.src} alt={args.alt} class={args.imageClass} />
		<Avatar.Fallback class={args.fallbackClass}>{args.fallbackText}</Avatar.Fallback>
	</Avatar.Root>
</Template>

<Story id="avatar" name="Avatar" />
