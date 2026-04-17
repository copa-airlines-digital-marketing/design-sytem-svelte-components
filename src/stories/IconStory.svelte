<script lang="ts">
	import type { Component } from 'svelte';
	import Globe from '../lib/components/icon/globe.svelte';
	import Phone from '../lib/components/icon/phone.svelte';
	import Carrot from '../lib/components/icon/carrot.svelte';
	import Check from '../lib/components/icon/regular/check.svelte';
	import Close from '../lib/components/icon/regular/close.svelte';
	import Walk from '../lib/components/icon/regular/walk.svelte';
	import Camera from '../lib/components/icon/regular/camera.svelte';
	import History from '../lib/components/icon/regular/history.svelte';
	import Time from '../lib/components/icon/filled/time.svelte';
	import Ticket from '../lib/components/icon/filled/ticket.svelte';
	import Email from '../lib/components/icon/social/email.svelte';
	import Facebook from '../lib/components/icon/social/facebook.svelte';
	import Instagram from '../lib/components/icon/social/instagram.svelte';
	import Tiktok from '../lib/components/icon/social/tiktok.svelte';
	import X from '../lib/components/icon/social/x.svelte';
	import Youtube from '../lib/components/icon/social/youtube.svelte';
	import Whatsapp from '../lib/components/icon/social/whatsapp.svelte';

	type IconName =
		| 'Globe'
		| 'Phone'
		| 'Carrot'
		| 'Check'
		| 'Close'
		| 'Walk'
		| 'Camera'
		| 'History'
		| 'Time'
		| 'Ticket'
		| 'Email'
		| 'Facebook'
		| 'Instagram'
		| 'Tiktok'
		| 'X'
		| 'Youtube'
		| 'Whatsapp';

	type Direction = 'up' | 'down' | 'left' | 'right';

	type IconProps = { class?: string };

	type Props = {
		icon?: IconName;
		size?: string;
		color?: string;
		direction?: Direction;
	};

	let {
		icon = 'Globe',
		size = 'size-8',
		color = 'text-primary',
		direction = 'down'
	}: Props = $props();

	const iconMap: Record<IconName, Component<IconProps>> = {
		Globe,
		Phone,
		Carrot,
		Check,
		Close,
		Walk,
		Camera,
		History,
		Time,
		Ticket,
		Email,
		Facebook,
		Instagram,
		Tiktok,
		X,
		Youtube,
		Whatsapp
	};

	const SelectedIcon = $derived(iconMap[icon]);
</script>

<div class="flex items-center justify-center p-4">
	{#if icon === 'Carrot'}
		<Carrot {direction} class="{size} {color}" />
	{:else}
		<SelectedIcon class="{size} {color}" />
	{/if}
</div>
