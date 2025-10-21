import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import svelteParser from 'svelte-eslint-parser';
import sveltePlugin from 'eslint-plugin-svelte';
import tsParser from '@typescript-eslint/parser';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import unusedImports from 'eslint-plugin-unused-imports';

export default defineConfig([
	// Configuration pour JavaScript/TypeScript
	{
		files: ['**/*.js', '**/*.ts'],
		...js.configs.recommended,
		languageOptions: {
			parser: tsParser,
			sourceType: 'module',
			ecmaVersion: 2020,
			globals: {
				...globals.browser,
				...globals.node
			}
		},
		plugins: {
			'@typescript-eslint': typescriptEslint,
			'unused-imports': unusedImports
		},
		rules: {
			...typescriptEslint.configs.recommended.rules,
			'sort-imports': ['error', { ignoreDeclarationSort: false, ignoreCase: false }],
			'unused-imports/no-unused-imports': 'error'
		}
	},
	// Configuration pour Svelte
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		},
		plugins: {
			svelte: sveltePlugin
		},
		rules: {
			...sveltePlugin.configs.recommended.rules
		}
	},
	globalIgnores([
		'**/.DS_Store',
		'**/node_modules',
		'build',
		'.svelte-kit',
		'package',
		'**/.env',
		'**/.env.*',
		'!**/.env.example',
		'**/pnpm-lock.yaml',
		'**/package-lock.json',
		'**/.vercel',
		'**/yarn.lock',
		'**/*.min.js'
	])
]);
