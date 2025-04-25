<script lang="ts">
	interface Props {
		lignes?: number;
	}
	let { lignes = 1 }: Props = $props();
	import { hauteur_ligne_cahier } from '$lib/cahier/store.svelte';
</script>

<div class="ligne-vide" style="height: {$hauteur_ligne_cahier * lignes}px; width: 100%;"></div>
