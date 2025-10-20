<script lang="ts">
	import { sommaire, PÉRIODES, COULEURS_PAR_CATEGORIE } from '$lib/cahier/contenu/sommaires';
	import { page_state, get_taille_page } from '$lib/cahier/store.svelte';
	import Bulle from './Bulle.svelte';

	function scroll_lors_du_clic_sur_le_sommaire(premiere_page: number | undefined) {
		if (premiere_page != undefined) {
			page_state.numero_de_la_page = premiere_page - (premiere_page % 2);
			window.scrollTo(0, (get_taille_page() + 2 * 8) * (premiere_page - 1));
		}
	}

	// Tous les chapitres dans l'ordre
	const chapitres = sommaire(page_state.niveau);

	// On attache l'index global à chaque chapitre pour éviter les collisions d'index par période
	const chapitres_indexés = chapitres.map((c, i) => ({ chapitre: c, indexGlobal: i }));

	// Un seul chapitre survolé à la fois
	let index_survole: number | null = $state(null);
	let position_bulle = $state({ x: 0, y: 0 });
</script>

<h2>Sommaire</h2>

<div id="sommaire">
	{#each PÉRIODES as période}
		{@const groupe = chapitres_indexés.filter((ci) => ci.chapitre.période === période)}
		{#if groupe.length > 0}
			<div class="période">
				{période === "tout au long de l'année" ? période : `période ${période}`}
			</div>
		{/if}

		{#each groupe as { chapitre, indexGlobal }}
			<div class="chapitre" onclick={() => scroll_lors_du_clic_sur_le_sommaire(chapitre.premiere_page)} role="none">
				<div class="categories">
					{#each chapitre.catégories as catégorie}
						<span style="color: {COULEURS_PAR_CATEGORIE[catégorie]}" title={catégorie}>■</span>
					{/each}
				</div>

				<div class="titre">
					{chapitre.afficher_le_titre()}
				</div>

				<div
					class="pour_objectifs"
					onmouseenter={(e) => {
						index_survole = indexGlobal;
						position_bulle = { x: e.clientX + 10, y: e.clientY + 10 };
					}}
					onmousemove={(e) => (position_bulle = { x: e.clientX + 10, y: e.clientY + 10 })}
					onmouseleave={() => (index_survole = null)}
					role="none"
				>
					?
				</div>

				<Bulle afficher_bulle={index_survole === indexGlobal} {position_bulle} objectifs={chapitre.objectifs} />
			</div>
		{/each}
	{/each}
</div>

<style>
	h2 {
		width: 80%;
		align-self: flex-end;
		text-align: center;
		margin-top: 0.3em;
		margin-bottom: 0.3em;
		font-size: calc(var(--taille-page) / 22.5);
		user-select: none;
	}

	#sommaire {
		display: flex;
		flex-direction: column;
		user-select: none;
	}

	.période,
	.chapitre {
		height: var(--carreau);
	}

	.chapitre {
		display: flex;
		font-size: calc(var(--taille-page) / 50);
		line-height: calc(var(--taille-page) / 50 * 1.8);

		.categories {
			flex: 1;
			font-size: calc(var(--taille-page) / 62);
			line-height: calc(var(--taille-page) / 60 * 2.2);
			text-align: center;
		}
		.titre {
			padding-left: 1%;
			flex: 4;
		}
		.pour_objectifs {
			position: absolute;
			right: 1.1%;
		}
	}

	.période {
		width: 19%;
		text-align: right;
		font-style: italic;
		font-size: calc(var(--taille-page) / 80);
		line-height: calc(var(--taille-page) / 80 * 3.3);
	}
</style>
