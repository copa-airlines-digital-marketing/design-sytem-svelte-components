import type { Snippet } from 'svelte';
import { Accordion as AccordionPrimitive } from 'bits-ui';
import { type AccordionTriggerProps } from './index.js';
type Props = AccordionPrimitive.TriggerProps & AccordionTriggerProps & {
    children?: Snippet;
};
declare const Trigger: import("svelte").Component<Props, {}, "">;
type Trigger = ReturnType<typeof Trigger>;
export default Trigger;
