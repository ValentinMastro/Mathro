<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Schema, Theoreme, Item } from '$lib/cahier/composants/de_cours/*';
	import { Polygone, TexteSVG } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';

	const A = { x: 100, y: 500 };
	const B = { x: 500, y: 300 };
	const C = { x: 500, y: 700 };
	const D = { x: 900, y: 100 };
	const E = { x: 900, y: 900 };

	const U = { x: 1370, y: 500 };
	const V = { x: 1100, y: 300 };
	const X = { x: 1100, y: 700 };
	const W = { x: 1900, y: 900 };
	const Y = { x: 1900, y: 100 };
</script>

<Chapitre titre="Théorème de Thalès" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Énoncé" />
	<Theoreme nom_du_theoreme="Théorème de Thalès" lignes={6} lignes_vides={3}>
		Si :
		<Item>les point A, B et D sont alignés</Item>
		<Item>les points A, C et E sont alignés</Item>
		<Item>{@html math('(\\text{BC}) // (\\text{DE})')}</Item>
		alors :
		<center>
			{@html math(`\\dfrac{\\text{AD}}{\\text{AB}} = \\dfrac{\\text{AE}}{\\text{AC}} = \\dfrac{\\text{DE}}{\\text{BC}}`)}
		</center>
	</Theoreme>
	<Schema lignes={10} aspectRatioSVG={2}>
		{#snippet svg()}
			<Polygone points={[A, D, E]} noms={['A', 'D', 'E']} afficher_points />
			<Polygone points={[A, B, C]} noms={['', 'B', 'C']} afficher_points />
			<TexteSVG point={{ x: 500, y: 970 }}>Configuration n°1</TexteSVG>

			<Polygone points={[U, V, X]} noms={['A', 'B', 'C']} afficher_points />
			<Polygone points={[U, W, Y]} noms={['', 'D', 'E']} afficher_points />
			<TexteSVG point={{ x: 1500, y: 880 }}>Configuration n°2</TexteSVG>
			<TexteSVG point={{ x: 1500, y: 970 }}>dite &laquo; du papillon &raquo;</TexteSVG>
		{/snippet}
	</Schema>
</Contenu>
