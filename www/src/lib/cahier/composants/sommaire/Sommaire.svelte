<script lang="ts">
	import { sommaire, categories_visibles, type Categories } from '$lib/cahier/contenu/sommaires';

	import { page_state, get_tailles, get_taille_page } from '$lib/cahier/store.svelte';

	import Pastilles from './Pastilles.svelte';
	import SelecteurCategories from './SelecteurCategories.svelte';

	function scroll_lors_du_clic_sur_le_sommaire(premiere_page: number | undefined) {
		if (premiere_page != undefined) {
			page_state.numero_de_la_page = premiere_page - (premiere_page % 2);
			window.scrollTo(0, (get_taille_page() + 2 * 8) * (premiere_page - 1));
		}
	}

	const chapitres = sommaire(page_state.niveau);
</script>

<h2 style="font-size: {get_tailles().sommaire}px">Sommaire</h2>

<table style="font-size: {get_tailles().chapitre * 0.7}px">
	<tbody>
		{#each chapitres as chapitre, index}
			<tr onclick={() => scroll_lors_du_clic_sur_le_sommaire(chapitre.premiere_page)}>
				<td style="text-align: right; padding-right: 1%;">
					{#if !chapitre.annexe}
						{@const numero_chapitre = index + 1}
						Chapitre {numero_chapitre} -
					{:else}
						{@const numero_annexe = chapitres.filter((e) => e.annexe).findIndex((e) => (e.titre = chapitre.titre)) + 1}
						{@const lettre_annexe = String.fromCharCode(64 + numero_annexe)}
						Annexe {lettre_annexe} -
					{/if}
				</td>
				<td>{chapitre.titre}</td>
			</tr>
		{/each}
	</tbody>
</table>

<div class="liste_categories">
	{#each ['Nombres et calculs', 'Espace et géométrie', 'Grandeurs et mesures', 'Organisation et gestion de données', 'Algorithmique et programmation'].map((item) => item as Categories) as categorie}
		{#if sommaire(page_state.niveau).some((chapitre) => chapitre.categories.includes(categorie))}
			<SelecteurCategories {categorie} />
		{/if}
	{/each}
</div>

<style>
	h2 {
		text-align: center;
	}

	table {
		width: 100%;
		border-collapse: collapse;
	}

	tr:nth-child(even) {
		background-color: #dddddd;
	}

	.attendus {
		font-size: 0.7em;
		position: absolute;
		background-color: aqua;
		width: 95.9%;

		display: none;
		visibility: hidden;
		opacity: 0;

		ul {
			list-style-type: disc;
			padding-right: 5%;
		}
	}

	.liste_categories {
		display: flex;
		justify-content: space-evenly;
		margin-top: auto;
		margin-bottom: auto;
		flex-wrap: wrap;
		row-gap: 0.5em;
	}
</style>
