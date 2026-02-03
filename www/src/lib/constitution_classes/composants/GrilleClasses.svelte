<script lang="ts">
	import { niveau, nombre_de_classes, classes, eleves } from '$lib/constitution_classes/store.svelte';
	import type { Donnees, Classe } from '$lib/constitution_classes/donnees/types';
	import { ajouterEleve } from '$lib/constitution_classes/donnees/types';
	import { dropzone } from '../drag_and_drop';

	import { BoutonOption, Option, ResumeClasse, CarteEleve } from '$lib/constitution_classes/composants/*';

	let config = false;

	function configurer() {
		config = !config;
	}
</script>

<div id="classes">
	{#each classes.value as classe}
		<div
			class="classe"
			style="width: {(100 - nombre_de_classes.value * 0.1) / nombre_de_classes.value}%"
			use:dropzone={{
				on_dropzone(id: any) {
					const eleve_a_deplacer = eleves.value.find((e) => e.id == id);
					if (!eleve_a_deplacer) {
						console.log('Erreur : élève introuvable');
						return;
					}

					// Important : copie la clé de la classe courante (celle sur laquelle on drop)
					const index_classe_cible = classe.index;

					// 1. Enlever l'élève de toutes les classes
					for (const c of classes.value) {
						c.eleves = c.eleves.filter((e) => e.id !== eleve_a_deplacer.id);
					}

					// 2. Ajouter dans la classe ciblée
					const classe_cible = classes.value.find((c) => c.index === index_classe_cible);
					if (classe_cible) {
						classe_cible.eleves.push(eleve_a_deplacer);
					} else {
						console.warn('Classe cible introuvable :', index_classe_cible);
					}
				}
			}}
		>
			<!-- Nom de la classe -->
			<div class="barre">
				<div class="nom" on:click={configurer} role="none">
					{classe.index}
				</div>
				<div class="options">
					{#if config}
						<BoutonOption texte="Latin" bind:bool={classe.options['LATIN']} />
						<BoutonOption texte="Grec" bind:bool={classe.options['GREC']} />
						<BoutonOption texte="Allemand LV2" bind:bool={classe.options['ALLEMAND LV2']} />
						<BoutonOption texte="Espagnol LV2" bind:bool={classe.options['ESPAGNOL LV2']} />
						<BoutonOption texte="Hispanica" bind:bool={classe.options['HISPANICA']} />
						<BoutonOption texte="CHAAP" bind:bool={classe.options['CHAAP']} />
					{:else}
						<Option {classe} />
					{/if}
				</div>
			</div>
			<!-- Liste des élèves -->
			{#each classe.eleves as eleve}
				<CarteEleve {eleve} />
			{/each}
			<!-- Résumé de la classe -->
			<ResumeClasse {classe} />
		</div>
		<div class="separateur"></div>
	{/each}
</div>

<style>
	#classes {
		background-color: green;
		height: 97.5vh;
		position: fixed;
		left: 2%;
		right: 0%;
		width: 98%;
		top: 2.5%;

		display: flex;
		justify-content: space-evenly;
	}
	.classe {
		background-color: blue;
		width: 10%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;

		user-select: none;
	}
	.classe:global(.droppable) {
		background-color: red;
	}
	.classe:global(.droppable) * {
		pointer-events: none;
	}
	.separateur {
		background-color: black;
		width: 0.1%;
		height: 100%;
		z-index: 0;
	}
	.barre {
		background-color: black;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
</style>
