<script lang="ts">
	import PictureSource from '../lib/components/picture/picture-source.svelte';

	type Screen = 'sm' | 'md' | 'lg';

	type Props = {
		screen?: Screen;
		desktopSrc?: string;
		mobileSrc?: string;
		alt?: string;
	};

	let {
		screen = 'md',
		desktopSrc = 'https://placehold.co/800x400/0032A0/FFFFFF?text=Desktop',
		mobileSrc = 'https://placehold.co/400x300/0032A0/FFFFFF?text=Mobile',
		alt = 'Responsive image example'
	}: Props = $props();
</script>

<picture class="block w-full">
	<PictureSource {screen} srcset={desktopSrc} />
	<img src={mobileSrc} {alt} class="w-full h-auto rounded-xl" />
</picture>
