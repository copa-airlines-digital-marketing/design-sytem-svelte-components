import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	// No sobrescribir el parser en .svelte: eslint-plugin-svelte usa el parser
	// que entiende la sintaxis de Svelte 5 (p. ej. {@render …}). Si se fuerza
	// tseslint.parser en el archivo completo, el @ de @render se marca como inesperado.
	{
		ignores: ['build/', '.svelte-kit/', 'dist/']
	}
);
