<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Item, Schema } from '$lib/cahier/composants/de_cours/*';
	import { Fleche, Point, TexteSVG } from '$lib/cahier/composants/svg/*';

	let origine = { x: 1000, y: 500 };
	let axe_abscisses: [{ x: number; y: number }, { x: number; y: number }] = [
		{ x: 0, y: 500 },
		{ x: 1995, y: 500 }
	];
	let axe_ordonnées: [{ x: number; y: number }, { x: number; y: number }] = [
		{ x: 1000, y: 1000 },
		{ x: 1000, y: 5 }
	];
</script>

<Contenu>
	<Partie numero={3} titre="Repérage dans le plan" />
	<Definition lignes={5}>
		Un repère orthogonal est constitué :
		<Item>
			d'un point : <i>l'origine</i>
		</Item>
		<Item>
			d'un axe horizontal : <i>l'axe des abscisses</i>
		</Item>
		<Item>
			d'un axe vertical : <i>l'axe des ordonnées</i>
		</Item>
		Les deux axes sont perpendiculaires et se coupent en l'origine.
	</Definition>
	<Schema lignes={10} aspectRatioSVG={2}>
		{#snippet svg()}
			<Fleche points={axe_abscisses} />
			<Fleche points={axe_ordonnées} />
			<Point point={origine} dx={150} dy={70} nom="Origine" font-size={70} type={{ forme: 'croix', taille: 20 }} stroke="red" />
			<TexteSVG point={{ x: 1750, y: 580 }}>axe des abscisses</TexteSVG>
			<TexteSVG point={{ x: 700, y: 80 }}>axe des ordonnées</TexteSVG>
		{/snippet}
	</Schema>
</Contenu>
