import { clsx } from 'clsx';
import { cubicOut } from 'svelte/easing';
import { extendTailwindMerge } from 'tailwind-merge';
import { createTV } from 'tailwind-variants';
var cmTWMergeConfig = {
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
            font: ['gilroy', 'suisse', 'heading', 'body'],
            text: ['d3', 'd2', 'd1', 'b', 'u4', 'u1', 'u2', 'u3', 'u4', 'u5', 'u6']
        }
    }
};
var tm = extendTailwindMerge(cmTWMergeConfig);
var tv = createTV({
    twMergeConfig: cmTWMergeConfig
});
function cn() {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    return tm(clsx(inputs));
}
function styleToString(style) {
    return Object.keys(style).reduce(function (str, key) {
        if (style[key] === undefined)
            return str;
        return "".concat(str).concat(key, ":").concat(style[key], ";");
    }, '');
}
function flyAndScale(node, params) {
    var _a;
    if (params === void 0) { params = { y: -8, x: 0, start: 0.95, duration: 150 }; }
    var style = getComputedStyle(node);
    var transform = style.transform === 'none' ? '' : style.transform;
    var scaleConversion = function (valueA, scaleA, scaleB) {
        var minA = scaleA[0], maxA = scaleA[1];
        var minB = scaleB[0], maxB = scaleB[1];
        var percentage = (valueA - minA) / (maxA - minA);
        var valueB = percentage * (maxB - minB) + minB;
        return valueB;
    };
    return {
        duration: (_a = params.duration) !== null && _a !== void 0 ? _a : 200,
        delay: 0,
        css: function (t) {
            var _a, _b, _c;
            var y = scaleConversion(t, [0, 1], [(_a = params.y) !== null && _a !== void 0 ? _a : 5, 0]);
            var x = scaleConversion(t, [0, 1], [(_b = params.x) !== null && _b !== void 0 ? _b : 0, 0]);
            var scale = scaleConversion(t, [0, 1], [(_c = params.start) !== null && _c !== void 0 ? _c : 0.95, 1]);
            return styleToString({
                transform: "".concat(transform, " translate3d(").concat(x, "px, ").concat(y, "px, 0) scale(").concat(scale, ")"),
                opacity: t
            });
        },
        easing: cubicOut
    };
}
export { cn, flyAndScale, styleToString, tv, tv as tailwindVariants, tm, tm as tailwindMerge };
