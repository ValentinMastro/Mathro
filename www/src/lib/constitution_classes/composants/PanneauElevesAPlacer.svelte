<script lang="ts">
	import { CarteEleve } from '$lib/constitution_classes/composants/*';
	import { importerDonnees } from '$lib/constitution_classes/donnees/importation';
	import { niveau, nombre_de_classes, classes, eleves } from '$lib/constitution_classes/store.svelte';
	import { sauvegarder, restaurerDepuisJSON } from '$lib/constitution_classes/donnees/sauvegarder_et_restaurer';
	import { eleve_et_classe_incompatibles } from '../donnees/types';

	let retracte = $state(false);

	async function importer(e: Event) {
		const input = e.target as HTMLInputElement;
		if (!input.files || input.files.length === 0) return;

		const fichier_xlsx = input.files[0];
		await importerDonnees(fichier_xlsx);
	}

	function preremplissage() {
		// $eleves
		// 	.filter((e) => $classes.some((c) => c.eleves.map((e) => e.id).includes(e.id)))
		// 	.forEach((e) => {
		// 		console.log(e);
		// 		let classes_possibles = $classes.filter((c) => !eleve_et_classe_incompatibles(e, c));
		// 		if (classes_possibles.length <= 1) classe_aleatoire = classes_possibles[0].index
		// 		let classe_aleatoire = classes_possibles[Math.floor(Math.random() * classes_possibles.length)].index;
		// 		classes.update((c) => {
		// 			c.find((classe) => classe.index == classe_aleatoire)?.eleves.push(e);
		// 			return c;
		// 		});
		// 	});
	}

	function exporter() {}
</script>

<div class="panneau" class:retracte onclick={() => (retracte = !retracte)} role="none">
	{#if retracte}
		<div id="pour_titre">
			<span id="titre">Élèves à placer</span>
		</div>
	{:else}
		<div id="non_retracte" style="display: flex; flex-direction: column; background-color: black;">
			<div>
				<label for="input_xlsx" style="color: white">Importer depuis un XLSX </label>
				<input
					id="input_xlsx"
					type="file"
					accept=".xlsx"
					onclick={(e) => {
						e.stopPropagation();
					}}
					onchange={importer}
				/>
			</div>
			<button onclick={sauvegarder}>Sauvegarder en JSON</button>
			<div>
				<label for="input_json" style="color:white">Importer depuis un JSON</label>
				<input
					id="input_json"
					type="file"
					accept=".json"
					onclick={(e) => {
						e.stopPropagation();
					}}
					onchange={(e) => {
						const file = (e.target as HTMLInputElement)?.files?.[0];
						console.log('fichier');
						if (file) restaurerDepuisJSON(file);
					}}
				/>
			</div>
			<div style="height: 3vh;"><!-- Espace --></div>
			<button onclick={preremplissage}>Pré-remplissage</button>
			<div style="height: 3vh;"><!-- Espace --></div>
			<div id="liste_des_eleves_a_placer" style="overflow-y: auto;">
				{#each $eleves.filter((eleve: any) => {
					for (let classe of $classes) {
						if (classe.eleves.map((eleve) => eleve.id).includes(eleve.id)) {
							return false;
						}
					}
					return true;
				}) as eleve}
					<CarteEleve {eleve} />
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	.panneau {
		position: fixed;
		top: 0;
		left: 0;
		width: 20%;
		height: 100%;
		color: black;
		background-color: #f1f1f1;
		z-index: 1;
		overflow-x: hidden;
		transition: 0.5s;
	}
	.retracte {
		width: 2%;
	}
	#pour_titre {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
	#titre {
		text-transform: uppercase;
		writing-mode: vertical-rl;
		text-orientation: upright;
		font-size: 2em;
		user-select: none;
	}
</style>
