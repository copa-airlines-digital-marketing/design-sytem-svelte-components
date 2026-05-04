import { tv } from '../../../index.js';
import Container from './container.svelte';
import Box from './box.svelte';
import Icon from './icon.svelte';
import Image from './image.svelte';
import Title from './title.svelte';
import Description from './description.svelte';
var informativeBoxVariant = tv({
    base: 'p-4 rounded-2xl max-h-64 grid border border-grey-300 content-start',
    variants: {
        orientation: {
            horizontal: "[grid-template-areas:'head_title''head_description'] min-w-106",
            vertical: "[grid-template-areas:'head''title''description'] min-w-67"
        },
        alignment: {
            left: 'justify-items-start text-left',
            center: 'justify-items-center text-center',
            right: 'justify-items-right text-right'
        }
    }
});
var InformativeBoxIconVariant = tv({
    base: '[grid-area:head] block mb-4',
    variants: {
        size: {
            tiny: 'size-10',
            normal: 'size-14',
            big: 'size-20',
            huge: 'size-24'
        }
    }
});
var InformativeBoxImageVariant = tv({
    base: '[grid-area:head] block mb-4',
    variants: {
        aspect: {
            '16:9': 'aspect-video',
            '1:1': 'aspect-square'
        },
        size: {
            big: 'size-20',
            huge: 'size-24'
        }
    }
});
var InformativeBoxTitleVariant = tv({
    base: '[grid-area:title] mt-0 mb-2',
    variants: {
        theme: {
            normal: 'text-primary',
            invert: 'text-grey-50'
        }
    }
});
var InformativeBoxDescriptionVariant = tv({
    base: '[grid-area:description] my-0',
    variants: {
        theme: {
            normal: 'text-grey-600',
            invert: 'text-grey-50'
        }
    }
});
export { informativeBoxVariant, InformativeBoxIconVariant, InformativeBoxImageVariant, InformativeBoxTitleVariant, InformativeBoxDescriptionVariant, Container, Container as InformativeBoxContainer, Box, Box as InformativeBox, Icon, Icon as InformativeBoxIcon, Image, Image as InformativeBoxImage, Title, Title as InformativeBoxTitle, Description, Description as InformativeBoxDescription };
