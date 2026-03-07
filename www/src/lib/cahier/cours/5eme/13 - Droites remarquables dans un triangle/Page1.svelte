<script lang="ts">
	import { Chapitre, Contenu, DansLaMarge, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemple, Propriete, Schéma, SchémaIntéractif } from '$lib/cahier/composants/de_cours/*';
	import { Slider } from '$lib/cahier/composants/de_marge/*';
	import { Cercle, Médiatrice, Point, Point2D, Polygone, Segment, type Coordonnées2D, type ExtrémitésSegment } from '$lib/cahier/composants/svg/*';

	let A: Coordonnées2D = { x: 1000, y: 600 };
	let B: Coordonnées2D = { x: 3000, y: 600 };

	let étape: number = $state(0);
	let C: Coordonnées2D = $state({ x: 300, y: 200 });
	let D: Coordonnées2D = $state({ x: 1200, y: 400 });
	let E: Coordonnées2D = $state({ x: 900, y: 900 });
	let O = $derived(Point2D.centre_cercle_circonscrit(C, D, E));

	let type = { forme: 'disque', taille: 15 };
	let rayon = $derived(O ? Point2D.distance(O, C) : 0);
</script>

<Chapitre titre="Droites remarquables dans un triangle" />

<DansLaMarge apres_un_titre lignes_vides={20}>
	<Slider min={0} max={4} bind:valeur={étape} />
</DansLaMarge>

<Contenu apres_un_titre>
	<Partie numero={1} titre="Médiatrices" />
	<Definition lignes={2}>La médiatrice d'un segment est la droite perpendiculaire à ce segment, passant par le milieu.</Definition>
	<Exemple />
	<Schéma lignes={5} aspectRatioSVG={4}>
		{#snippet svg()}
			<Segment points={[A, B]} />
			<Point point={A} nom="A" />
			<Point point={B} nom="B" />
			<Médiatrice extrémités_segment={[A, B]} stroke="red" />
		{/snippet}
	</Schéma>
	<Propriete lignes={2}>
		Les 3 médiatrices d'un triangle sont concourantes en un point :<br />
		<i title="le centre du cercle qui entoure le triangle">le centre du cercle circonscrit</i>.
	</Propriete>
	<SchémaIntéractif lignes={10} aspectRatioSVG={2} points_intéractifs={[C, D, E]}>
		{#snippet svg()}
			<Polygone points={[C, D, E]} noms={['C', 'D', 'E']} afficher_points {type} distance_nom={70} />
			{#if étape >= 1}
				<Médiatrice extrémités_segment={[C, D]} stroke="red" />
			{/if}
			{#if étape >= 2}
				<Médiatrice extrémités_segment={[D, E]} stroke="blue" />
			{/if}
			{#if étape >= 3}
				<Médiatrice extrémités_segment={[C, E]} stroke="forestgreen" />
			{/if}
			{#if étape >= 4 && O}
				<Cercle centre={O} {rayon} stroke-dasharray="12,12" />
			{/if}
		{/snippet}
	</SchémaIntéractif>
</Contenu>
