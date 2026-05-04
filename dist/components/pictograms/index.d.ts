import type { ClassValue } from 'clsx';
import type { HTMLAttributes } from 'svelte/elements';
import type { VariantProps } from 'tailwind-variants';
import type { ClassNameValue } from 'tailwind-merge';
type ClassInput = ClassValue | ClassNameValue | null | undefined;
import AnunciosImportantes from './anuncios-importantes.svelte';
import CheckIn from './check-in.svelte';
import Conexion from './conexion.svelte';
declare const pictogramVariants: import("tailwind-variants").TVReturnType<{
    style: {
        background: string;
        transparent: string;
        monochrome: string;
    };
}, undefined, undefined, {
    style: {
        background: string;
        transparent: string;
        monochrome: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    style: {
        background: string;
        transparent: string;
        monochrome: string;
    };
}, undefined, undefined, unknown, unknown, undefined>>;
type Pictogam = HTMLAttributes<HTMLElement> & {
    style?: VariantProps<typeof pictogramVariants>['style'];
    customcn?: (...inputs: ClassInput[]) => string;
};
declare const Tiquetes: {
    Conexion: import("svelte").Component<Pictogam, {}, "">;
};
export type { Pictogam };
export { pictogramVariants, AnunciosImportantes, CheckIn, Conexion, Tiquetes };
