<script lang="ts">
	import { type IconWithDirection } from '../index.js';
	import { cn as defaultcn } from '../../../index.js';

	type $$Props = IconWithDirection;

	let { direction = 'down', customcn, class: className }: $$Props = $props();

	const cn = $derived(customcn ?? defaultcn);

	// Each path is taken directly from Figma — the coordinates are already
	// pre-rotated for every direction, so no CSS transform is needed.
	const paths: Record<NonNullable<IconWithDirection['direction']>, string> = {
		left: 'M14.3746 17.2611C13.995 17.6624 13.3563 17.6624 12.9768 17.2611L8.65005 12.6872C8.28534 12.3017 8.28535 11.6983 8.65005 11.3128L12.9768 6.73886C13.3563 6.33761 13.995 6.33761 14.3746 6.73886C14.7255 7.10979 14.7255 7.69021 14.3746 8.06114L10.6486 12L14.3746 15.9389C14.7255 16.3098 14.7255 16.8902 14.3746 17.2611Z',
		right:
			'M9.29961 17.3C8.91301 16.9134 8.91301 16.2866 9.29961 15.9L13.1996 12L9.29961 8.1C8.91301 7.7134 8.91301 7.0866 9.29961 6.7C9.68621 6.3134 10.313 6.3134 10.6996 6.7L15.2925 11.2929C15.683 11.6834 15.683 12.3166 15.2925 12.7071L10.6996 17.3C10.313 17.6866 9.68621 17.6866 9.29961 17.3Z',
		down: 'M6.7 9.29961C7.0866 8.91301 7.7134 8.91301 8.1 9.29961L12 13.1996L15.9 9.29961C16.2866 8.91301 16.9134 8.91301 17.3 9.29961C17.6866 9.68621 17.6866 10.313 17.3 10.6996L12.7071 15.2925C12.3166 15.683 11.6834 15.683 11.2929 15.2925L6.7 10.6996C6.3134 10.313 6.3134 9.68621 6.7 9.29961Z',
		up: 'M17.3 14.7C16.9134 15.0866 16.2866 15.0866 15.9 14.7L12 10.8L8.1 14.7C7.7134 15.0866 7.0866 15.0866 6.7 14.7C6.3134 14.3134 6.3134 13.6866 6.7 13.3L11.2929 8.70711C11.6834 8.31658 12.3166 8.31658 12.7071 8.70711L17.3 13.3C17.6866 13.6866 17.6866 14.3134 17.3 14.7Z'
	};
</script>

<svg
	viewBox="0 0 24 24"
	class={cn('size-6 fill-current', className)}
	xmlns="http://www.w3.org/2000/svg"
	aria-hidden="true"
>
	<path d={paths[direction ?? 'down']} />
</svg>
