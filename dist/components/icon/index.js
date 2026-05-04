import { tv } from '../../index.js';
import Carrot from './carrot.svelte';
import Phone from './phone.svelte';
import Globe from './globe.svelte';
import Email from './social/email.svelte';
import Facebook from './social/facebook.svelte';
import Instagram from './social/instagram.svelte';
import Tiktok from './social/tiktok.svelte';
import X from './social/x.svelte';
import Youtube from './social/youtube.svelte';
import Whatsapp from './social/whatsapp.svelte';
import NoIcon from './no-icon.svelte';
import Time from './filled/time.svelte';
import Ticket from './filled/ticket.svelte';
import Close from './regular/close.svelte';
import Check from './regular/check.svelte';
import Walk from './regular/walk.svelte';
import Camera from './regular/camera.svelte';
import History from './regular/history.svelte';
var Regular = { Close: Close, Check: Check, Walk: Walk, Camera: Camera, History: History };
var Filled = { Time: Time, Ticket: Ticket };
var Social = { Email: Email, Facebook: Facebook, Instagram: Instagram, Tiktok: Tiktok, X: X, Youtube: Youtube, Whatsapp: Whatsapp };
var iconWithDirectionVariants = tv({
    variants: {
        direction: {
            up: 'rotate-',
            down: 'rotate-0',
            left: 'fill-grey-600',
            right: ''
        }
    }
});
export { iconWithDirectionVariants, NoIcon, Carrot, Globe, Phone, Close, Check, Filled, Regular, Social };
