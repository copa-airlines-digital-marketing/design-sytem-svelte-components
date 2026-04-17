<script lang="ts">
	import Button from '../lib/components/button/button.svelte';

	type Variant =
		| 'solid-primary-main'
		| 'solid-primary-light'
		| 'outline-primary-main'
		| 'outline-invert'
		| 'transparent-primary-main'
		| 'link'
		| 'link-invert';

	type Size = 'slim' | 'default' | 'large' | 'giant' | 'fancy-big' | 'fancy-small' | 'link';

	type Props = {
		label?: string;
		variant?: Variant;
		size?: Size;
		disabled?: boolean;
	};

	let {
		label = 'Book now',
		variant = 'solid-primary-main',
		size = 'default',
		disabled = false
	}: Props = $props();
</script>

<Button {variant} {size} {disabled}>{label}</Button>
