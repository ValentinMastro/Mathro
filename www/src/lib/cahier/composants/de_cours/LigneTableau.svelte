<script lang="ts">
	interface Props {
		addStyle?: string;
		children?: any;
		lignes?: number;
	}
	import { hauteur_ligne_cahier } from '$lib/cahier/store.svelte';
	let { addStyle = '', children, lignes = 1 }: Props = $props();
</script>

<tr style="height: {$hauteur_ligne_cahier * lignes}px; {addStyle}">
	{@render children?.()}
</tr>

<style>
	tr {
		border: 1px solid black;
	}
</style>
