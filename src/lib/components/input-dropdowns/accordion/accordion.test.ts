import { vi, describe, test, expect } from 'vitest';

vi.mock('./root.svelte', () => ({ default: {} }));
vi.mock('./item.svelte', () => ({ default: {} }));
vi.mock('./header.svelte', () => ({ default: {} }));
vi.mock('./content.svelte', () => ({ default: {} }));
vi.mock('./trigger.svelte', () => ({ default: {} }));
vi.mock('./cta.svelte', () => ({ default: {} }));
vi.mock('./label.svelte', () => ({ default: {} }));
vi.mock('./title.svelte', () => ({ default: {} }));
vi.mock('./icon.svelte', () => ({ default: {} }));

import { AccordionTriggerVariant } from './index.js';

describe('AccordionTriggerVariant', () => {
	test('bottom separator adds border-b', () => {
		const cls = AccordionTriggerVariant({ 'separator-position': 'bottom' });
		expect(cls).toContain('border-b');
	});

	test('top separator adds border-t', () => {
		const cls = AccordionTriggerVariant({ 'separator-position': 'top' });
		expect(cls).toContain('border-t');
	});
});
