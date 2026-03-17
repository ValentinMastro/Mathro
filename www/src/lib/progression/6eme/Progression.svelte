<script lang="ts">
	import PageDeCours from '../PageDeCours.svelte';
	import Exercices1 from '../../../exercices/6eme/12 - Périmètre et aire/Exercices1.svelte';
	import Exercices2 from '../../../exercices/6eme/12 - Périmètre et aire/Exercices2.svelte';

	let zoom = $state(false);

	function on_keydown(event: KeyboardEvent) {
		if (event.key === 'z' && !event.ctrlKey && !event.metaKey && !event.altKey) {
			zoom = !zoom;
		}
	}
</script>

<svelte:window onkeydown={on_keydown} />

<div class="conteneur-écrans">
	<div class="écran-cours" class:zoom>
		<div class="cadre-page">
			<PageDeCours niveau={6} chapitre={12} page={1} extrait={[8, 93]} afficher_seyes />
		</div>
	</div>
	<Exercices1 />
	<div class="écran-cours" class:zoom>
		<div class="cadre-page">
			<PageDeCours niveau={6} chapitre={12} page={2} extrait={[8, 93]} afficher_seyes />
		</div>
	</div>
	<Exercices2 />
	<div class="écran-cours" class:zoom>
		<div class="cadre-page">
			<PageDeCours niveau={6} chapitre={12} page={3} extrait={[8, 93]} afficher_seyes />
		</div>
	</div>
	<div class="écran-cours" class:zoom>
		<div class="cadre-page">
			<PageDeCours niveau={6} chapitre={12} page={4} extrait={[8, 93]} afficher_seyes />
		</div>
	</div>
</div>

<style>
	.conteneur-écrans {
		scroll-snap-type: y mandatory;
		overflow-y: scroll;
		height: 100vh;
		width: 100vw;
	}

	.écran-cours {
		width: 100vw;
		min-height: 100vh;
		scroll-snap-align: start;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #f0f0f0;
		box-sizing: border-box;
		padding: 1rem;
	}

	/* Mode zoom (défaut) : la page tient sur un écran (contrainte hauteur) */
	.cadre-page {
		height: calc(100vh - 2rem);
		width: calc((100vh - 2rem) * 210 / 252);
		max-width: calc(100vw - 2rem);
	}

	/* Mode largeur : la page prend toute la largeur, déborde en hauteur */
	.écran-cours.zoom .cadre-page {
		width: calc(100vw - 2rem);
		height: auto;
	}
</style>
