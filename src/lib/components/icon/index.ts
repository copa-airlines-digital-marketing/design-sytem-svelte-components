import type { HTMLAttributes } from 'svelte/elements';
import type { ClassValue, VariantProps } from 'tailwind-variants';
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

const Regular = { Close, Check, Walk, Camera, History };

const Filled = { Time, Ticket };

const Social = { Email, Facebook, Instagram, Tiktok, X, Youtube, Whatsapp };

const iconWithDirectionVariants = tv({
	variants: {
		direction: {
			up: 'rotate-',
			down: 'rotate-0',
			left: 'fill-grey-600',
			right: ''
		}
	}
});

type SingularIcon = HTMLAttributes<HTMLElement> & {
	customcn?: (...inputs: ClassValue[]) => string;
};

type FilledIcon = HTMLAttributes<HTMLElement> & {
	customcn?: (...inputs: ClassValue[]) => string;
	filled?: boolean;
};

type IconWithDirection = HTMLAttributes<HTMLElement> & {
	direction?: VariantProps<typeof iconWithDirectionVariants>['direction'];
	customcn?: (...inputs: ClassValue[]) => string;
};

export type { IconWithDirection, SingularIcon, FilledIcon };

export { iconWithDirectionVariants, NoIcon, Carrot, Globe, Phone, Filled, Regular, Social };
