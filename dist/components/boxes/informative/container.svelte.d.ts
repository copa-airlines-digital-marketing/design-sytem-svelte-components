import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { ClassValue } from 'clsx';
/** Component-specific props; rest are passed through to the div (restProps) */
type ContainerComponentProps = {
    class?: HTMLAttributes<HTMLDivElement>['class'];
    customcn?: (...inputs: ClassValue[]) => string;
    children?: Snippet;
};
type Props = ContainerComponentProps & Omit<HTMLAttributes<HTMLDivElement>, keyof ContainerComponentProps>;
declare const Container: import("svelte").Component<Props, {}, "">;
type Container = ReturnType<typeof Container>;
export default Container;
