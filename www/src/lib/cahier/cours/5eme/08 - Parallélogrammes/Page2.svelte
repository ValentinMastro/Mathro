<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Demonstration, Donc, Item, OnSaitQue, Or, Propriete, Schema } from '$lib/cahier/composants/de_cours/*';
	import { Polygone, Segment, type Coordonnées2D } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';

	let points: Coordonnées2D[] = [
		{ x: 200, y: 200 },
		{ x: 1800, y: 200 },
		{ x: 1800, y: 800 },
		{ x: 200, y: 800 }
	];
</script>

<Contenu>
	<Partie numero={2} titre="Les différents types de parallélogrammes" />
	<Definition>Un rectangle est un parallélogramme qui a un angle droit.</Definition>
	<Demonstration />
	<Schema lignes={5} aspectRatioSVG={2}>
		{#snippet svg()}
			<Polygone {points} afficher_points />
		{/snippet}
	</Schema>
	<OnSaitQue lignes={2}>
		<Item>ABCD est un parallélogramme.</Item>
		<Item>{@html math('\\widehat{\\text{DAB}} = 90^\\circ')}</Item>
	</OnSaitQue>
	<Or lignes={3}>
		Dans un parallélogramme :
		<Item>les angles opposés sont de la même mesure</Item>
		<Item>2 angles consécutifs sont supplémentaires (= 180°)</Item>
	</Or>
	<Donc>
		{@html math('\\widehat{\\text{ABC}} = \\widehat{\\text{BCD}} = \\widehat{\\text{CDA}} = \\widehat{\\text{DAB}} = 90^\\circ')}
	</Donc>
	<Propriete>Les diagonales d'un rectangle sont de même longueur.</Propriete>
	<Schema lignes={5} aspectRatioSVG={2}>
		{#snippet svg()}
			<Polygone {points} afficher_points />
			<Segment points={[points[0]!, points[2]!]} stroke="red" />
			<Segment points={[points[1]!, points[3]!]} stroke="red" />
		{/snippet}
	</Schema>
</Contenu>
