import type { ClassValue } from 'clsx';
import type { TransitionConfig } from 'svelte/transition';
import { type ClassNameValue } from 'tailwind-merge';
declare const tm: (...classLists: ClassNameValue[]) => string;
declare const tv: import("tailwind-variants").CreateTV;
declare function cn(...inputs: Array<ClassValue | ClassNameValue | null | undefined>): string;
type FlyAndScaleParams = {
    y?: number;
    x?: number;
    start?: number;
    duration?: number;
};
declare function styleToString(style: Record<string, number | string | undefined>): string;
declare function flyAndScale(node: Element, params?: FlyAndScaleParams): TransitionConfig;
export { cn, flyAndScale, styleToString, tv, tv as tailwindVariants, tm, tm as tailwindMerge };
