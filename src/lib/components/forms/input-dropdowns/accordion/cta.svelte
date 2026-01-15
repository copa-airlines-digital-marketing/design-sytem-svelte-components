<script lang='ts'>
	import type { HTMLAttributes } from "svelte/elements";
    import { cn as defaultcn } from "../../../../index.js";
    import { Caption, type HTMLTextElements, type  CaptionProps } from "../../../data-display/typography/index.js";

    export let tag: keyof HTMLTextElements = 'span';

    type $$Props = HTMLAttributes<HTMLTextElements[typeof tag]> & CaptionProps;

    let className: $$Props['class'] = undefined;
    export let customcn: $$Props['customcn'] = undefined;
    export { className as class };

    const cn = customcn || defaultcn;
</script>

<Caption {tag} {customcn} size='caption-tiny' class={cn('[grid-area:cta] text-primary', className)}>
    <slot />
</Caption>