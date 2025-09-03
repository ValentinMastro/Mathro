<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type TableauProps = HTMLAttributes<HTMLTableElement> & {
		lignes?: number;
		colonnes?: number;
		children?: Snippet;
	};

	let { lignes = 1, colonnes = 20, children, ...props }: TableauProps = $props();
</script>

<table style="--lignes-tableau: {lignes}; --colonnes-tableau: {colonnes};" {...props}>
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
