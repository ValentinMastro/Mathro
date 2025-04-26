<script lang="ts">
	interface Props {
		addStyle?: string;
		children?: any;
		lignes?: number;
	}
	import { get_tailles } from '$lib/cahier/store.svelte';
	let { addStyle = '', children, lignes = 1 }: Props = $props();
</script>

<tr style="height: {get_tailles().hauteur_ligne_cahier * lignes}px; {addStyle}">
	{@render children?.()}
</tr>

<style>
	tr {
		border: 1px solid black;
	}
</style>
