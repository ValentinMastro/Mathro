<script lang="ts">
	import { Contenu, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Schema, Definition, Formules, Item, Texte, Exemple, Convention, Illustration } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={2} titre="Aires" />
	<SousPartie numero={1} titre="Concept" />
	<Definition>L'aire d'une figure est la mesure de la surface intérieure de la figure.</Definition>
	<Exemple />
	<Schema lignes={5}>
		{#snippet svg()}
			<polygon points="200,200 200,800 400,800 400,400 800,400 800,200" fill="none" stroke="black" stroke-width={8} />
		{/snippet}
		{#snippet html()}
			<LigneVide lignes={1} />
			<Texte>Cette figure a une aire de 5 carreaux.</Texte>
		{/snippet}
	</Schema>

	<Convention>L'unité légale de l'aire est le mètre carré (m²).</Convention>

	<Schema lignes={5} aspectRatioSVG={1.5}>
		{#snippet svg()}
			<rect x={200} y={200} width={600} height={600} fill="lightblue" opacity={0.4} stroke="black" stroke-width={5} />
			<text x={820} y={500} font-size={90}>1 m</text>
		{/snippet}
		{#snippet html()}
			<LigneVide lignes={2} />
			<Texte>
				La surface intérieure de ce carré <br />mesure 1 m².
			</Texte>
		{/snippet}
	</Schema>
</Contenu>
