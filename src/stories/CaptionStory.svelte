<script lang="ts">
	import Caption from '../lib/components/typography/caption.svelte';

	type Size = 'caption' | 'caption-large' | 'caption-small' | 'caption-tiny';
	type Variant = 'caption' | 'caption-secondary' | 'caption-invert' | 'caption-invert-secondary';

	type Props = {
		size?: Size;
		variant?: Variant;
		text?: string;
	};

	let { size = 'caption', variant = 'caption', text = 'Caption text' }: Props = $props();
</script>

<Caption {size} {variant}>{text}</Caption>
