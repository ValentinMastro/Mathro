<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemple, Schéma } from '$lib/cahier/composants/de_cours/*';
	import { Médiatrice, Point, Segment, TexteSVG, type Coordonnées2D } from '$lib/cahier/composants/svg/*';

	let A: Coordonnées2D = { x: 400, y: 500 };
	let B: Coordonnées2D = { x: 1600, y: 500 };
</script>

<Chapitre titre="Droites remarquables dans un triangle" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Médiatrices" />
	<Definition lignes={2}>La médiatrice d'un segment est la droite perpendiculaire à ce segment, passant par le milieu.</Definition>
	<Exemple />
	<Schéma lignes={10} aspectRatioSVG={2}>
		{#snippet svg()}
			<Segment points={[A, B]} stroke-width={10} />
			<Point point={A} nom="A" />
			<Point point={B} nom="B" />
			<Médiatrice extrémités_segment={[A, B]} stroke="red" stroke-width={10} />
			<TexteSVG point={{ x: 1000, y: 100 }} fill="red" dx={80}>(m)</TexteSVG>
		{/snippet}
	</Schéma>
</Contenu>
