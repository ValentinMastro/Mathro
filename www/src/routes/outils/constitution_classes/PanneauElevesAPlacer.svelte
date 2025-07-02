<script lang="ts">
	import type { Donnees } from './types';
	import { importerDonneesDepuisLePressePapier } from './types';
	import CarteEleve from './CarteEleve.svelte';

	export let niveau: 6 | 5 | 4 | 3;
	export let nombre_de_classes: 5 | 6;
	export let donnees: Donnees;

	let retracte = false;

	function toggle() {
		retracte = !retracte;
	}

	async function importer() {
		donnees = await importerDonneesDepuisLePressePapier(nombre_de_classes);
		console.log(donnees);
	}

	function exporter() {
		console.log(donnees);
	}

	function melanger() {
		for (let eleve of donnees.eleves) {
			let index_classe = Math.floor(Math.random() * nombre_de_classes);
			donnees.classes[index_classe].eleves.push(eleve);
		}
		donnees = donnees;
	}
</script>

<div class="panneau" class:retracte on:click={toggle} role="none">
	{#if retracte}
		<div id="pour_titre">
			<span id="titre">Élèves à placer</span>
		</div>
	{:else}
		<div id="non_retracte" style="display: flex; flex-direction: column; background-color: black;">
			<button on:click={importer}>Importer</button>
			<button>Exporter</button>
			<button on:click={melanger}>Mélanger</button>
			<div style="width: 10%;"><!-- Espace --></div>
			<div id="liste_des_eleves_a_placer" style="overflow-y: auto;">
				{#each donnees.eleves.filter((eleve) => {
					for (let classe of donnees.classes) {
						if (classe.eleves.includes(eleve)) {
							return false;
						}
					}
					return true;
				}) as eleve}
					<!-- <CarteEleve {eleve} {donnees} /> -->
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
