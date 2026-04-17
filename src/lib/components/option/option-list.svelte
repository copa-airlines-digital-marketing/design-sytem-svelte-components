<script lang="ts">
	import { ScrollArea } from 'bits-ui';
	import { cn as defaultCn } from '../../index.js';
	import { optionListVariants, type OptionListProps } from './index.js';

	let {
		children = undefined,
		empty = false,
		emptyMessage = 'Sin resultados.',
		maxHeight = 336,
		class: className,
		customcn
	}: OptionListProps = $props();

	const cn = $derived(customcn ?? defaultCn);
</script>

<!--
	Uses bits-ui ScrollArea so the custom scrollbar only appears when
	the list items exceed maxHeight. For short lists (≤4 items) the content
	won't reach 336px, so no scrollbar is shown. For longer lists the
	scrollbar appears automatically.

	maxHeight = 7 items × 48px/item = 336px

	Container border:
	  - Normal:      grey-300 (#CCCCCB)
	  - Empty state: grey-600 (#666666)

	overflow-hidden on Root clips children to the rounded corners.
-->
<ScrollArea.Root class={cn(optionListVariants({ empty }), className)}>
	<ScrollArea.Viewport style="max-height: {maxHeight}px;">
		{#if empty}
			<!-- Empty state: styled like a disabled option row -->
			<div class="bg-grey-100 p-3">
				<span class="font-body text-b text-grey-500">{emptyMessage}</span>
			</div>
		{:else if children}
			{@render children()}
		{/if}
	</ScrollArea.Viewport>

	<!--
		Scrollbar geometry (from Figma):
		  track width:  15px  (uiscroll-bar / rectangle-copy-2)
		  thumb width:  7px   → set via --bits-scroll-area-thumb-width so bits-ui's own
		                         inline `width: var(--bits-scroll-area-thumb-width)` resolves
		                         correctly (the Y-axis scrollbar never sets this variable)
		  thumb left:   4px   → mx-auto centres a 7px element in a 15px track: (15-7)/2 = 4px
		  thumb radius: 6px
		  track padding: 8px top/bottom (py-2) — bits-ui reads paddingTop/paddingBottom in
		                 onResize() and subtracts them from the thumb-size and offset math,
		                 so py-2 gives the correct 8px inset at both ends automatically.
	-->
	<ScrollArea.Scrollbar
		orientation="vertical"
		class="w-[15px] touch-none select-none py-2"
		style="--bits-scroll-area-thumb-width: 7px;"
	>
		<ScrollArea.Thumb class="mx-auto rounded-[6px] bg-[#C1C1C1]" />
	</ScrollArea.Scrollbar>

	<ScrollArea.Corner />
</ScrollArea.Root>
