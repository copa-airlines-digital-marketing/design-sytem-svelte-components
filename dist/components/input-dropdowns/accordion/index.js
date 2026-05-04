import { tv } from '../../../index.js';
import Root from './root.svelte';
import Item from './item.svelte';
import Header from './header.svelte';
import Content from './content.svelte';
import Trigger from './trigger.svelte';
import CTA from './cta.svelte';
import Label from './label.svelte';
import Title from './title.svelte';
import Icon from './icon.svelte';
var AccordionTriggerVariant = tv({
    variants: {
        'separator-position': {
            bottom: 'border-b',
            top: 'border-t'
        }
    }
});
export { AccordionTriggerVariant, Root, Item, Header, Content, Trigger, Icon, Title, Label, CTA, Root as AccordionRoot, Item as AccordionItem, Header as AccordionHeader, Content as AccordionContent, Trigger as AccordionTrigger, Icon as AccordionIcon, Title as AccordionTitle, Label as AccordionLabel, CTA as AccordionCTA };
