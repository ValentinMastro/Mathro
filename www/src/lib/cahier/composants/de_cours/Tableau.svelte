<script lang="ts">
	import { type ParagrapheProps } from './*';
	import { get_tailles } from '$lib/cahier/store.svelte';
	let { addStyle = '', lignes = 1, children }: ParagrapheProps = $props();
</script>

<table style="height: {get_tailles().hauteur_ligne_cahier * lignes}px; font-size: {get_tailles().texte}px;  {addStyle}">
	{@render children?.()}
</table>

<style>
	table {
		width: 100%;
		border-collapse: collapse;
		text-align: center;
	}
	table {
		border: 1px solid black;
	}
</style>
