<script lang="ts">
	import Dimmer from '../lib/components/dimmer/dimmer.svelte';

	type Props = {
		color?: 'grey' | 'white';
		opacity?: '60' | '80';
	};

	let { color = 'grey', opacity = '80' }: Props = $props();
</script>

<!-- Relative container so the fixed dimmer is visible inside Storybook canvas -->
<div class="relative h-48 w-full overflow-hidden rounded-lg border border-grey-200 bg-common-white">
	<div class="flex h-full items-center justify-center">
		<p class="font-body text-b text-grey-700">Content behind the dimmer</p>
	</div>
	<!-- Override fixed positioning for Storybook preview -->
	<div
		class={`absolute inset-0 pointer-events-none ${
			color === 'grey'
				? opacity === '80'
					? 'bg-grey-800/80'
					: 'bg-grey-800/60'
				: opacity === '80'
					? 'bg-common-white/80'
					: 'bg-common-white/60'
		}`}
		aria-hidden="true"
	></div>
</div>

<p class="mt-3 font-body text-d3 text-grey-600">
	<strong>Note:</strong> In real usage <code>&lt;Dimmer /&gt;</code> is
	<code>position: fixed</code> and covers the full viewport.
</p>
