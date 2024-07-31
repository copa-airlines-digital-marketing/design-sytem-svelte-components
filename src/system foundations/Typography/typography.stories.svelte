<script context="module" lang="ts">
	import { getTypography, type Typography } from '.';
	import Sample from './sample.svelte';

	export const meta = {
		title: 'system foundations/Typography',
		component: Sample,
		argTypes: {
			sampleText: { control: { type: 'text' } }
		}
	};

	const scaleSample: Typography[] = [
		{ size: 'u6' },
		{ size: 'u5' },
		{ size: 'u4' },
		{ size: 'u3' },
		{ size: 'u2' },
		{ size: 'u1' },
		{ size: 'b' },
		{ size: 'd1' },
		{ size: 'd2' },
		{ size: 'd3' }
	];

	const headingSample: Typography[] = [
		{ variant: 'h1' },
		{ variant: 'h2' },
		{ variant: 'h3' },
		{ variant: 'h4' }
	];

	const displaySample: Typography[] = [
		{ variant: 'display-big' },
		{ variant: 'display' },
		{ variant: 'display-small' },
		{ variant: 'display-tiny' }
	];

	const bodyTextSample: Typography[] = [
		{ size: 'body-large', variant: 'body' },
		{ size: 'body', variant: 'body' },
		{ size: 'body-small', variant: 'body' },

		{ size: 'body-large', variant: 'body-emphasis' },
		{ size: 'body', variant: 'body-emphasis' },
		{ size: 'body-small', variant: 'body-emphasis' },

		{ size: 'body-large', variant: 'link' },
		{ size: 'body', variant: 'link' },
		{ size: 'body-small', variant: 'link' },

		{ size: 'body-large', variant: 'link-secondary' },
		{ size: 'body', variant: 'link-secondary' },
		{ size: 'body-small', variant: 'link-secondary' },

		{ size: 'body-large', variant: 'body-invert', className: 'bg-primary' },
		{ size: 'body', variant: 'body-invert', className: 'bg-primary' },
		{ size: 'body-small', variant: 'body-invert', className: 'bg-primary' },

		{ size: 'body-large', variant: 'body-invert-emphasis', className: 'bg-primary' },
		{ size: 'body', variant: 'body-invert-emphasis', className: 'bg-primary' },
		{ size: 'body-small', variant: 'body-invert-emphasis', className: 'bg-primary' },

		{ size: 'body-large', variant: 'link-invert', className: 'bg-primary' },
		{ size: 'body', variant: 'link-invert', className: 'bg-primary' },
		{ size: 'body-small', variant: 'link-invert', className: 'bg-primary' }
	];

	const captionTextSample: Typography[] = [
		{ size: 'caption-large', variant: 'caption' },
		{ size: 'caption', variant: 'caption' },
		{ size: 'caption-small', variant: 'caption' },
		{ size: 'caption-tiny', variant: 'caption' },

		{ size: 'caption-large', variant: 'caption-secondary' },
		{ size: 'caption', variant: 'caption-secondary' },
		{ size: 'caption-small', variant: 'caption-secondary' },
		{ size: 'caption-tiny', variant: 'caption-secondary' },

		{ size: 'caption-large', variant: 'caption-invert', className: 'bg-primary' },
		{ size: 'caption', variant: 'caption-invert', className: 'bg-primary' },
		{ size: 'caption-small', variant: 'caption-invert', className: 'bg-primary' },
		{ size: 'caption-tiny', variant: 'caption-invert', className: 'bg-primary' },

		{
			size: 'caption-large',
			variant: 'caption-invert-secondary',
			className: 'bg-primary'
		},
		{ size: 'caption', variant: 'caption-invert-secondary', className: 'bg-primary' },
		{
			size: 'caption-small',
			variant: 'caption-invert-secondary',
			className: 'bg-primary'
		},
		{ size: 'caption-tiny', variant: 'caption-invert-secondary', className: 'bg-primary' }
	];

	const overlineTextSample: Typography[] = [
		{ size: 'overline', variant: 'overline' },
		{ size: 'overline-small', variant: 'overline' },

		{ size: 'overline', variant: 'overline-invert', className: 'bg-primary' },
		{ size: 'overline-small', variant: 'overline-invert', className: 'bg-primary' }
	];
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<Sample {...args} />
</Template>

<Story id="scale" name="Typographic Scale" args={{ samples: scaleSample }} />

<Story id="heading" name="Regular Title" args={{ samples: headingSample }} />

<Story id="display" name="Display Text" args={{ samples: displaySample }} />

<Story id="body" name="Body Text">
	<ul class="md:grid md:auto-rows-auto md:grid-cols-3">
		{#each bodyTextSample as sample}
			{@const { size, variant, className } = sample}
			<li class="my-grid-gutter {className} p-2">
				<p class={getTypography(size, variant, className)}>
					{`${size ? 'size: ' + size : ''}`}<br />
					{`${variant ? 'variant: ' + variant : ''}`}
				</p>
			</li>
		{/each}
	</ul>
</Story>

<Story id="caption" name="Caption Text">
	<ul class="md:grid md:auto-rows-min md:grid-cols-4">
		{#each captionTextSample as sample}
			{@const { size, variant, className } = sample}
			<li class="my-grid-gutter {className} p-2">
				<p class={getTypography(size, variant, className)}>
					{`${size ? 'size: ' + size : ''}`}<br />
					{`${variant ? 'variant: ' + variant : ''}`}
				</p>
			</li>
		{/each}
	</ul>
</Story>

<Story id="overline" name="Overline Text">
	<ul class="md:grid md:auto-cols-auto md:grid-cols-2">
		{#each overlineTextSample as sample}
			{@const { size, variant, className } = sample}
			<li class="my-grid-gutter {className} p-2">
				<p class={getTypography(size, variant, className)}>
					{`${size ? 'size: ' + size : ''}`}<br />
					{`${variant ? 'variant: ' + variant : ''}`}
				</p>
			</li>
		{/each}
	</ul>
</Story>
