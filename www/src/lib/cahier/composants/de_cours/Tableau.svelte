<script lang="ts">
	import { get_tailles } from '$lib/cahier/store.svelte';
	import type { Snippet } from 'svelte';

	interface TableauProps {
		lignes?: number;
		colonnes?: number;
		children?: Snippet;
		addStyle?: string;
	}

	let { lignes = 1, colonnes = 20, children, addStyle = '' }: TableauProps = $props();
</script>

<table style="--lignes-tableau: {lignes}; --colonnes-tableau: {colonnes}; {addStyle}">
	{@render children?.()}
</table>

<style>
	table {
		font-size: var(--font-size);
		border-collapse: collapse;
		text-align: center;
		border: 1px solid black;
		max-height: calc(var(--lignes-tableau) * var(--carreau));
		height: calc(var(--lignes-tableau) * var(--carreau));
		width: calc(var(--colonnes-tableau) * var(--carreau));
	}
</style>
