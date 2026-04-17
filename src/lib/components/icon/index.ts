import type { ClassValue } from 'clsx';
import type { HTMLAttributes } from 'svelte/elements';
import type { VariantProps } from 'tailwind-variants';
import type { ClassNameValue } from 'tailwind-merge';
import { tv } from '../../index.js';

type ClassInput = ClassValue | ClassNameValue | null | undefined;
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
import KeyboardArrow from './regular/keyboard-arrow.svelte';

const Regular = { Close, Check, Walk, Camera, History, KeyboardArrow };

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
	customcn?: (...inputs: ClassInput[]) => string;
};

type FilledIcon = HTMLAttributes<HTMLElement> & {
	customcn?: (...inputs: ClassInput[]) => string;
	filled?: boolean;
};

type IconWithDirection = HTMLAttributes<HTMLElement> & {
	direction?: VariantProps<typeof iconWithDirectionVariants>['direction'];
	customcn?: (...inputs: ClassInput[]) => string;
};

export type { IconWithDirection, SingularIcon, FilledIcon };

export {
	iconWithDirectionVariants,
	NoIcon,
	Carrot,
	Globe,
	Phone,
	Close,
	Check,
	KeyboardArrow,
	Filled,
	Regular,
	Social
};
