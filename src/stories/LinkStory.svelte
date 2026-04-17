<script lang="ts">
	import Link from '../lib/components/typography/link.svelte';

	type Variant = 'link' | 'link-invert' | 'link-secondary';

	type Props = {
		variant?: Variant;
		href?: string;
		text?: string;
	};

	let { variant = 'link', href = '#', text = 'View all destinations' }: Props = $props();
</script>

<Link {variant} {href}>{text}</Link>
