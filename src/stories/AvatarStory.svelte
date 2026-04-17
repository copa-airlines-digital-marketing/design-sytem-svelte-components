<script lang="ts">
	import Avatar from '../lib/components/avatar/avatar.svelte';
	import AvatarImage from '../lib/components/avatar/avatar-image.svelte';
	import AvatarFallback from '../lib/components/avatar/avatar-fallback.svelte';

	type Size = 'tiny' | 'petit' | 'normal' | 'big' | 'huge';

	type Props = {
		size?: Size;
		stroke?: boolean;
		src?: string;
		alt?: string;
		fallbackText?: string;
	};

	let {
		size = 'normal',
		stroke = true,
		src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Demo',
		alt = 'User avatar',
		fallbackText = 'AB'
	}: Props = $props();
</script>

<Avatar {size} {stroke}>
	<AvatarImage {src} {alt} />
	<AvatarFallback>{fallbackText}</AvatarFallback>
</Avatar>
