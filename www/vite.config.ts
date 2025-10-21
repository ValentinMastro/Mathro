import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import wasmPack from 'vite-plugin-wasm-pack';

export default defineConfig({
	plugins: [sveltekit(), wasmPack([], ['@vmastro/exercices'])]
});
