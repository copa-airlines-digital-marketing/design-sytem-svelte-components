<script lang="ts">
	import Body from '../lib/components/typography/body.svelte';

	type Size = 'body' | 'body-large' | 'body-small';
	type Variant = 'body' | 'body-emphasis' | 'body-invert' | 'body-invert-emphasis';

	type Props = {
		size?: Size;
		variant?: Variant;
		text?: string;
	};

	let {
		size = 'body',
		variant = 'body',
		text = 'The quick brown fox jumps over the lazy dog.'
	}: Props = $props();
</script>

<Body {size} {variant}>{text}</Body>
