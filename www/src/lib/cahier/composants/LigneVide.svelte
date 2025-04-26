<script lang="ts">
	interface Props {
		lignes?: number;
	}
	let { lignes = 1 }: Props = $props();
	import { get_tailles } from '$lib/cahier/store.svelte';
</script>

<div class="ligne-vide" style="height: {get_tailles().hauteur_ligne_cahier * lignes}px; width: 100%;"></div>
