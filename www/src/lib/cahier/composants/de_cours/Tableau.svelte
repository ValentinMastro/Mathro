<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import LigneVide from '../LigneVide.svelte';

	type TableauProps = HTMLAttributes<HTMLTableElement> & {
		children?: Snippet;
		colonnes?: number;
		lignes?: number;
		lignes_vides?: number;
	};

	let { lignes = 1, colonnes = 20, children, lignes_vides = 1, ...props }: TableauProps = $props();
</script>

<table style="--lignes-tableau: {lignes}; --colonnes-tableau: {colonnes};" {...props}>
	{@render children?.()}
</table>
{#if lignes_vides > 0}
	<LigneVide lignes={lignes_vides} />
{/if}

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
