// place files you want to import through the `../lib` alias in this folder.
import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { cubicOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';
import { extendTailwindMerge } from 'tailwind-merge';
import { createTV } from 'tailwind-variants';

const cmTWMergeConfig = {
	extend: {
		theme: {
			colors: [
				'primary',
				'primary-light',
				'primary-dark',
				'primary-ultradark',
				'primary-ultralight',
				'primary-faded',
				'secondary',
				'secondary-faded',
				'tertiary',
				'background-lightblue',
				'background-paper',
				'alternative-pardo',
				'alternative-gold',
				'alternative-darkorange',
				'alternative-lightorange',
				'alternative-perfermemberblue',
				'system-warning',
				'system-warning-faded',
				'system-error',
				'system-error-faded',
				'system-success',
				'system-success-faded',
				'grey-800',
				'grey-700',
				'grey-600',
				'grey-500',
				'grey-400',
				'grey-300',
				'grey-200',
				'grey-100',
				'grey-75',
				'grey-50',
				'common-black',
				'common-white',
				'status-member',
				'status-silver',
				'status-gold',
				'status-platinum',
				'status-presidential'
			],
			spacing: ['gutter', 'minimal', 'tiny', 'petit', 'normal', 'roomy', 'spacious', 'big', 'huge'],
			font: ['Gilroy', "Suisse Int\'l"],
			text: ['d3', 'd2', 'd1', 'b', 'u4', 'u1', 'u2', 'u3', 'u4', 'u5', 'u6']
		},
	}
} as const;

const tm = extendTailwindMerge(cmTWMergeConfig);

const tv = createTV({
	twMergeConfig: cmTWMergeConfig
});

function cn(...inputs: ClassValue[]) {
	return tm(clsx(inputs));
}

type FlyAndScaleParams = {
	y?: number;
	x?: number;
	start?: number;
	duration?: number;
};

function styleToString(style: Record<string, number | string | undefined>): string {
	return Object.keys(style).reduce((str, key) => {
		if (style[key] === undefined) return str;
		return `${str}${key}:${style[key]};`;
	}, '');
}

function flyAndScale(
	node: Element,
	params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 150 }
): TransitionConfig {
	const style = getComputedStyle(node);
	const transform = style.transform === 'none' ? '' : style.transform;

	const scaleConversion = (valueA: number, scaleA: [number, number], scaleB: [number, number]) => {
		const [minA, maxA] = scaleA;
		const [minB, maxB] = scaleB;

		const percentage = (valueA - minA) / (maxA - minA);
		const valueB = percentage * (maxB - minB) + minB;

		return valueB;
	};

	return {
		duration: params.duration ?? 200,
		delay: 0,
		css: (t) => {
			const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
			const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
			const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

			return styleToString({
				transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
				opacity: t
			});
		},
		easing: cubicOut
	};
}

export { cn, flyAndScale, styleToString, tv, tv as tailwindVariants, tm, tm as tailwindMerge };
