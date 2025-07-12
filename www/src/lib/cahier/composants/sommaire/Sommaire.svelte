<script lang="ts">
	import { sommaire, Categories, type Chapitre, type Période } from '$lib/cahier/contenu/sommaires';
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

{#snippet période(p: Période)}
	<tr style="background-color: black; width: 100%; height: 0.5vh;"> <td></td> <td></td> <td></td> </tr>
	<tr class="période">
		{#if p == "tout au long de l'année"}
			<td>{p}</td>
		{:else}
			<td>période {p}</td>
		{/if}
		<td></td>
		<td></td>
	</tr>
{/snippet}

{#snippet titre(chapitre: Chapitre)}
	<tr class="chapitre {chapitre.numéro % 2 == 0 ? 'pair' : 'impair'}" onclick={() => scroll_lors_du_clic_sur_le_sommaire(chapitre.premiere_page)}>
		<td>
			<Pastilles {chapitre} />
		</td>
		<td style="text-align: right; padding-right: 1%;">
			{#if !chapitre.annexe}
				Chapitre {chapitre.numéro} -
			{:else}
				{@const numero_annexe = chapitres.filter((e) => e.annexe).findIndex((e) => (e.titre = chapitre.titre)) + 1}
				{@const lettre_annexe = String.fromCharCode(64 + numero_annexe)}
				Annexe {lettre_annexe} -
			{/if}
		</td>
		<td>{chapitre.titre}</td>
	</tr>
{/snippet}

<h2 style="font-size: {get_tailles().sommaire}px">Sommaire</h2>

<table style="font-size: {get_tailles().chapitre * 0.7}px">
	<tbody>
		{#each chapitres as chapitre}
			{@const chapitre_précédent = chapitres.find((c) => c.numéro == chapitre.numéro - 1)}
			{#if chapitre.numéro == 1 || chapitre_précédent?.période != chapitre.période}
				{@render période(chapitre.période)}
			{/if}
			{@render titre(chapitre)}
		{/each}
	</tbody>
</table>

<div class="liste_categories">
	{#each Object.values(Categories) as categorie}
		{#if chapitres.some((chapitre) => chapitre.catégories.includes(categorie))}
			<SelecteurCategories {categorie} />
		{/if}
	{/each}
</div>

<style>
	h2 {
		text-align: center;
		margin-top: 0.3em;
		margin-bottom: 0.3em;
	}

	table {
		width: 100%;
		border-collapse: collapse;
	}

	.période {
		td:first-child {
			padding-left: 5%;
		}

		font-style: italic;
	}

	.chapitre.pair {
		background-color: #dddddd;
	}

	.liste_categories {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		margin-top: auto;
		margin-bottom: auto;
		margin-left: 5%;
		flex-wrap: wrap;
		row-gap: 0.5em;
	}
</style>
