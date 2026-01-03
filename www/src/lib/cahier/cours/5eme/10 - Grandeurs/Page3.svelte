<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Convention, Definition, Exemple, Schema, Texte } from '$lib/cahier/composants/de_cours/*';
	import { Rectangle, TexteSVG, type ExtrémitésSegment } from '$lib/cahier/composants/svg/*';

	let points: ExtrémitésSegment = [
		{ x: 0, y: 0 },
		{ x: 1000, y: 1000 }
	];
</script>

<Contenu>
	<Partie numero={2} titre="Aires" />
	<Definition>L'aire d'une figure est la mesure de la surface intérieure de la figure.</Definition>
	<Exemple>La figure ci-dessous a une aire de 5 carreaux.</Exemple>
	<Schema lignes={5}>
		{#snippet svg()}
			<polygon points="200,200 200,800 400,800 400,400 800,400 800,200" fill="none" stroke="black" stroke-width={8} />
		{/snippet}
	</Schema>
	<Convention>L'unité légale de l'aire est le mètre carré (m²).</Convention>
	<Schema lignes={4} aspectRatioSVG={1.5}>
		{#snippet svg()}
			<Rectangle {points} fill="lightblue" fill-opacity={0.4} stroke="black" stroke-width={20} />
			<TexteSVG point={{ x: 1200, y: 500 }} font-size={160}>1 m</TexteSVG>
		{/snippet}
	</Schema>
	<Texte>La surface intérieure de ce carré mesure 1 m².</Texte>
</Contenu>
