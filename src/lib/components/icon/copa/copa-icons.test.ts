import { describe, expect, test } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { copaIconNames } from './index.js';

const iconDir = 'src/lib/components/icon/copa';
const iconFiles = readdirSync(iconDir)
	.filter((file) => file.endsWith('.svelte'))
	.sort();

describe('Copa icon set', () => {
	test('exports the generated icon names without importing icon components', () => {
		expect(copaIconNames).toHaveLength(177);
		expect(iconFiles).toHaveLength(copaIconNames.length);
		expect(iconFiles.map((file) => file.replace(/\.svelte$/, '')).sort()).toEqual(
			[...copaIconNames].sort()
		);
	});

	test('keeps only SVG icon layers from the source export', () => {
		for (const file of iconFiles) {
			const source = readFileSync(join(iconDir, file), 'utf-8');

			expect(source).not.toContain('data-svg-wrapper');
			expect(source).not.toContain('data-layer');
			expect(source).not.toContain('_span');
			expect(source).toContain('aria-hidden="true"');
		}
	});

	test('uses currentColor for neutral Figma icon colors', () => {
		for (const file of iconFiles) {
			const source = readFileSync(join(iconDir, file), 'utf-8');

			expect(source).not.toContain('#AAAAAB');
			expect(source).not.toContain('#D9D9D9');
			expect(source).not.toContain('#999999');
		}

		expect(readFileSync(join(iconDir, 'search.svelte'), 'utf-8')).toContain('fill="currentColor"');
		expect(readFileSync(join(iconDir, 'hamburger.svelte'), 'utf-8')).toContain(
			'stroke="currentColor"'
		);
	});
});
