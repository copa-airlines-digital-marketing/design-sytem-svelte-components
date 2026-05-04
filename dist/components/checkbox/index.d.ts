import { Checkbox as CheckboxPrimitive } from 'bits-ui';
import Checkbox from './checkbox.svelte';
/** Component-specific props; rest are passed through to the primitive (restProps). `child` is provided by the component snippet, not by the consumer. */
type CheckboxComponentProps = {
    class?: string | null;
    checked?: boolean;
};
/** Props = our props + primitive rest; destructuring our props leaves restProps correctly typed for CheckboxPrimitive.Root */
export type Props = CheckboxComponentProps & Omit<CheckboxPrimitive.RootProps, keyof CheckboxComponentProps>;
export { Checkbox };
export type { Props as CheckboxProps };
