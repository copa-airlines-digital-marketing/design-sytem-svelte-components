<script lang="ts">
	import Heading from '../lib/components/typography/heading.svelte';

	type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	type Variant =
		| 'h1'
		| 'h2'
		| 'h3'
		| 'h4'
		| 'display-big'
		| 'display'
		| 'display-small'
		| 'display-tiny';

	type Props = {
		tag?: Tag;
		variant?: Variant;
		text?: string;
	};

	let { tag = 'h2', variant = 'h2', text = 'Heading text' }: Props = $props();
</script>

<Heading {tag} {variant}>{text}</Heading>
