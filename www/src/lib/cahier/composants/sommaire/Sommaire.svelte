<script lang="ts">
	import { sommaire, categories_visibles, type Categories } from '$lib/cahier/contenu/sommaires';

	import { page_state, taille_sommaire, taille_chapitre, taille_page } from '$lib/cahier/store.svelte';

	import Pastilles from './Pastilles.svelte';
	import SelecteurCategories from './SelecteurCategories.svelte';

	function scroll_lors_du_clic_sur_le_sommaire(premiere_page: number | undefined) {
		if (premiere_page != undefined) {
			page_state.numero_de_la_page = premiere_page - (premiere_page % 2);
			window.scrollTo(0, ($taille_page + 2 * 8) * (premiere_page - 1));
		}
	}
</script>

<h2 style="font-size: {$taille_sommaire}px">Sommaire</h2>

<ol class="liste_chapitres" style="font-size: {$taille_chapitre * 0.72}px;">
	{#each sommaire(page_state.niveau) as chapitre}
		<li
			class="chapitre"
			style="visibility: {chapitre.categories.some((c) => categories_visibles.includes(c)) ? 'visible' : 'hidden'}"
			role="none"
			onclick={() => scroll_lors_du_clic_sur_le_sommaire(chapitre.premiere_page)}
		>
			<span style="padding-left: 1ex;">{chapitre.titre}</span>
			<div class="categories">
				<Pastilles {chapitre} />
			</div>
		</li>
		<div class="attendus">
			{#if chapitre.attendus != undefined}
				<ul>
					{#each chapitre.attendus as attendu}
						<li>{attendu}</li>
					{/each}
				</ul>
			{/if}
		</div>
	{/each}
</ol>

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

	.liste_chapitres {
		list-style-type: none;
		counter-reset: chapter-counter;
		position: relative;

		.chapitre {
			display: flex;
			align-items: flex-start;
			user-select: none;
			&:hover {
				cursor: pointer;
				background-color: aqua;
			}
			&::before {
				content: 'Chapitre ' counter(chapter-counter) ' - ';
				counter-increment: chapter-counter;
			}

			.categories {
				margin-left: auto;
			}
		}

		.attendus {
			font-size: 0.7em;
			position: absolute;
			background-color: aqua;
			width: 100%;

			display: none;
			visibility: hidden;
			opacity: 0;

			ul {
				list-style-type: disc;
				padding-right: 5%;
			}
		}
	}

	.chapitre:hover + .attendus {
		visibility: visible;
		opacity: 1;
		display: block;
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
