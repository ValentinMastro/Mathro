<script lang="ts">
	import { get_tailles } from '$lib/cahier/store.svelte';
	import { type Categories, couleur_de_la_categorie, categories_visibles } from '$lib/cahier/contenu/sommaires';

	let { categorie }: { categorie: Categories } = $props();
</script>

<div style="font-size: {get_tailles().chapitre * 0.8}px;">
	<span class="categorie" style="background-color: {categories_visibles.includes(categorie) ? couleur_de_la_categorie(categorie) : 'gray'};">
		{categorie}
	</span>
</div>

<style>
	.categorie {
		font-weight: bold;
		color: white;
		padding-left: 0.5em;
		padding-right: 0.5em;
		border-radius: 0.5em;
		user-select: none;
	}
</style>
