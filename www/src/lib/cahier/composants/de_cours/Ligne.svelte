<script lang="ts">
	interface Props {
		lignes?: number;
		children?: any;
	}
	let { lignes = 1, children }: Props = $props();
	import { get_tailles } from '$lib/cahier/store.svelte';
</script>

<div class="texte" style="height: {get_tailles().hauteur_ligne_cahier * lignes}px; line-height: {get_tailles().separateur_texte}px;">
	{@render children()}
</div>

<style>
	.texte {
		width: 100%;
		position: relative;
	}
</style>
