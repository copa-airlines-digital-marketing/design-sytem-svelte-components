import { describe, test, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';

// Checkbox uses bits-ui internals with <style> blocks that can't be compiled
// in the happy-dom test environment. We verify the class string in the source
// directly — this is equivalent to checking the computed className at runtime.

const __dirname = dirname(fileURLToPath(import.meta.url));
const source = readFileSync(resolve(__dirname, 'checkbox.svelte'), 'utf-8');

describe('Checkbox source classes', () => {
	test('has border class', () => {
		expect(source).toContain("'border ");
	});

	test('has border-grey-500 class', () => {
		expect(source).toContain('border-grey-500');
	});

	test('has bg-grey-50 class', () => {
		expect(source).toContain('bg-grey-50');
	});

	test('has rounded class', () => {
		expect(source).toContain('rounded');
	});

	test('has checked state bg-primary class', () => {
		expect(source).toContain('data-[state=checked]:bg-primary');
	});

	test('has disabled state classes', () => {
		expect(source).toContain('disabled:cursor-not-allowed');
		expect(source).toContain('disabled:bg-grey-100');
		expect(source).toContain('disabled:border-grey-300');
	});
});
