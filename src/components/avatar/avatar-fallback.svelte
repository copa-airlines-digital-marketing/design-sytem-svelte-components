<script lang="ts">
  import { Avatar as AvatarPrimitive } from "bits-ui";
  import { cn } from "..";

  type $$Props = AvatarPrimitive.FallbackProps;

  let className: $$Props["class"] = undefined;
  export { className as class };
</script>

<AvatarPrimitive.Fallback
  class={cn(
    "grid size-full place-content-center rounded-full bg-primary-ultralight",
    className
  )}
  {...$$restProps}
>
  <slot />
</AvatarPrimitive.Fallback>
