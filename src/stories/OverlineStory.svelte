<script lang="ts">
	import Overline from '../lib/components/typography/overline.svelte';

	type Size = 'overline' | 'overline-small';

	type Props = {
		size?: Size;
		text?: string;
	};

	let { size = 'overline', text = 'Special offer' }: Props = $props();
</script>

<Overline {size}>{text}</Overline>
