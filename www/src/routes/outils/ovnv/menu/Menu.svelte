<!--
    Menu du SPA OVNV

    Le texte OVNV apparaît au centre de l'écran.
    Ensuite, un cercle autour du cercle commence à se contruire, il s'gait de la barre de chargement.

    Quand le chargement est terminé, le menu apparaît.
    Il y a deux blocs :
        - sur la droite, un bloc "Continuer le projet",
        qui permet de charger le fichier JSON contenant les données de l'utilisateur
        - sur la gauche, un bloc "Nouveau projet"

-->

<script lang="ts">
	import { linear } from 'svelte/easing';
	import { fade, draw } from 'svelte/transition';
	import { phase, json } from '../stores';

	let etapes_chargement: 'debut' | 'titre' | 'cercle_chargement' | 'affichage_menu' = 'debut';
	let file_list: FileList;

	setTimeout(() => {
		etapes_chargement = 'titre';
	}, 1);
	setTimeout(() => {
		etapes_chargement = 'cercle_chargement';
	}, 2000);
	setTimeout(() => {
		etapes_chargement = 'affichage_menu';
	}, 2000 + 5000);

	function nouveau_projet() {
		phase.set('A');
	}

	function importer_projet() {
		if (file_list.length == 1) {
			json.set(file_list[0]);
			phase.set('B');
		}
	}
</script>

{#if etapes_chargement == 'titre'}
	<div in:fade={{ duration: 2000 }} id="titre">
		<h1>OVNV</h1>
	</div>
{:else if etapes_chargement == 'cercle_chargement'}
	<div out:fade={{ duration: 500 }} id="titre">
		<h1>OVNV</h1>
	</div>
{/if}

<svg id="cercle_chargement" viewBox="-1000 -1000 2000 2000">
	{#if etapes_chargement == 'cercle_chargement'}
		<circle
			id="cercle_chargement"
			in:draw={{ duration: 5000, easing: linear }}
			out:fade={{ duration: 500 }}
			cx="0"
			cy="0"
			r="800"
			fill="none"
			stroke="white"
			stroke-width="20"
		/>
	{/if}
</svg>

<div id="menu">
	{#if etapes_chargement == 'affichage_menu'}
		<div in:fade={{ delay: 500, duration: 500 }} on:click={nouveau_projet} role="none">
			<h2>Nouveau projet</h2>
		</div>
	{/if}
	{#if etapes_chargement == 'affichage_menu'}
		<div in:fade={{ delay: 500, duration: 500 }} id="continuer" on:click={importer_projet} role="none">
			<h2>Continuer le projet</h2>
			<input id="importation" accept=".json" type="file" bind:files={file_list} />
		</div>
	{/if}
</div>

<style>
	#titre {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		font-size: 5rem;
	}
	#cercle_chargement {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 1;
	}
	#menu {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-content: center;
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 2;
	}
	#menu div {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50vw;
		height: 100vh;
		font-size: 2rem;
	}
	#continuer {
		display: flex;
		flex-direction: column;
	}
</style>
