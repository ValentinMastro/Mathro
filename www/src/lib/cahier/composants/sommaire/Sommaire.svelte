<script lang="ts">
	import { sommaire, type Période, PÉRIODES, COULEURS_PAR_CATEGORIE } from '$lib/cahier/contenu/sommaires';
	import { page_state, get_taille_page } from '$lib/cahier/store.svelte';

	function scroll_lors_du_clic_sur_le_sommaire(premiere_page: number | undefined) {
		if (premiere_page != undefined) {
			page_state.numero_de_la_page = premiere_page - (premiere_page % 2);
			window.scrollTo(0, (get_taille_page() + 2 * 8) * (premiere_page - 1));
		}
	}

	const chapitres = sommaire(page_state.niveau);

	let afficher_bulle = $state(false);
	let objectifs_en_cours: string[] = $state([]);
	let position_bulle = $state({ x: 0, y: 0 });

	function montrer_objectifs(event: MouseEvent, objectifs: string[]) {
		afficher_bulle = true;
		objectifs_en_cours = objectifs;
		position_bulle = { x: event.clientX + 10, y: event.clientY + 10 };
	}

	function masquer_objectifs() {
		afficher_bulle = false;
	}

	function déplacer_bulle(event: MouseEvent) {
		if (afficher_bulle) {
			position_bulle = { x: event.clientX + 10, y: event.clientY + 10 };
		}
	}
</script>

<h2>Sommaire</h2>

<div id="sommaire">
	{#each PÉRIODES as période}
		{@const chapitres_de_la_periode = chapitres.filter((c) => c.période == période)}
		<div class="période">
			{période === "tout au long de l'année" ? période : `période ${période}`}
		</div>
		{#each chapitres_de_la_periode as chapitre}
			<div
				class="chapitre"
				onclick={(e) => {
					scroll_lors_du_clic_sur_le_sommaire(chapitre.premiere_page);
				}}
				role="none"
			>
				<div class="categories">
					{#each chapitre.catégories as catégorie}
						<span style="color: {COULEURS_PAR_CATEGORIE[catégorie]}">■</span>
					{/each}
				</div>
				<div class="titre">
					{chapitre.afficher_le_titre()}
				</div>
				<div
					class="pour_objectifs"
					onmouseenter={(e) => montrer_objectifs(e, chapitre.objectifs)}
					onmousemove={déplacer_bulle}
					onmouseleave={masquer_objectifs}
					role="none"
				>
					?
				</div>
				{#if afficher_bulle}
					{@const left = position_bulle.x - 0.55 * get_taille_page()}
					<div class="bulle-objectifs" style="top: {position_bulle.y}px; left: {left}px">
						<ul class="liste_objectifs">
							{#each objectifs_en_cours as objectif}
								<li class="objectif">{objectif}</li>
							{/each}
						</ul>
					</div>
				{/if}
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
		height: var(--hauteur-ligne-cahier);
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

	.bulle-objectifs {
		position: fixed;
		background: white;
		border: 1px solid #ccc;
		box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
		border-radius: 0.5em;
		font-size: calc(var(--taille-page) / 70);
		min-width: calc(var(--taille-page) / 2);
		max-width: calc(var(--taille-page) / 2);
		z-index: 1000;
		pointer-events: none;
	}

	.objectif {
		text-align: left;
		font-size: calc(var(--taille-page) / 70);
		line-height: calc(var(--taille-page) / 50);
	}
</style>
