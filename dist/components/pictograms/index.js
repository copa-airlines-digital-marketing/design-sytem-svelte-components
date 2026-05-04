import { tv } from '../../index.js';
import AnunciosImportantes from './anuncios-importantes.svelte';
import CheckIn from './check-in.svelte';
import Conexion from './conexion.svelte';
var pictogramVariants = tv({
    variants: {
        style: {
            background: 'fill-primary',
            transparent: 'fill-primary',
            monochrome: 'fill-grey-600'
        }
    }
});
var Tiquetes = {
    Conexion: Conexion
};
export { pictogramVariants, AnunciosImportantes, CheckIn, Conexion, Tiquetes };
