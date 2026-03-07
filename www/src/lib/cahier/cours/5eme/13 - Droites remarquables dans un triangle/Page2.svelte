<script lang="ts">
	import { Contenu, DansLaMarge } from '$lib/cahier/composants/de_chapitrage/*';
	import { Demonstration, Propriete, SchémaIntéractif } from '$lib/cahier/composants/de_cours/*';
	import { Slider } from '$lib/cahier/composants/de_marge/*';
	import { Cercle, Médiatrice, Point, Point2D, Polygone, TexteSVG, type Coordonnées2D } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';

	let étape: number = $state(4);
	let C: Coordonnées2D = $state({ x: 300, y: 200 });
	let D: Coordonnées2D = $state({ x: 1200, y: 400 });
	let E: Coordonnées2D = $state({ x: 900, y: 900 });
	let O = $derived(Point2D.centre_cercle_circonscrit(C, D, E));

	let type = { forme: 'disque', taille: 15 };
	let rayon = $derived(O ? Point2D.distance(O, C) : 0);

	let milieuCD = $derived({ x: (C.x + D.x) / 2, y: (C.y + D.y) / 2 });
	let milieuDE = $derived({ x: (D.x + E.x) / 2, y: (D.y + E.y) / 2 });
	let milieuCE = $derived({ x: (C.x + E.x) / 2, y: (C.y + E.y) / 2 });
</script>

<DansLaMarge lignes_vides={3}>
	<Slider min={0} max={4} bind:valeur={étape} />
</DansLaMarge>

<Contenu>
	<Propriete lignes={2}>
		Les 3 médiatrices d'un triangle sont concourantes en un point :<br />
		<i title="le centre du cercle qui entoure le triangle">le centre du cercle circonscrit</i>.
	</Propriete>
	<SchémaIntéractif lignes={10} aspectRatioSVG={2} points_intéractifs={[C, D, E]}>
		{#snippet svg()}
			<Polygone points={[C, D, E]} noms={['C', 'D', 'E']} afficher_points {type} distance_nom={70} />
			{#if étape >= 1}
				<Médiatrice extrémités_segment={[C, D]} stroke="red" />
				<TexteSVG point={milieuCD} dy={-50} fill="red">(m₁)</TexteSVG>
			{/if}
			{#if étape >= 2}
				<Médiatrice extrémités_segment={[D, E]} stroke="blue" />
				<TexteSVG point={milieuDE} dx={80} fill="blue">(m₂)</TexteSVG>
			{/if}
			{#if étape >= 3}
				<Médiatrice extrémités_segment={[C, E]} stroke="forestgreen" />
				<TexteSVG point={milieuCE} dx={-80} fill="forestgreen">(m₃)</TexteSVG>
			{/if}
			{#if étape >= 4 && O}
				<Cercle centre={O} {rayon} stroke-dasharray="12,12" />
				<Point point={O} nom="O" type={{ forme: 'disque', taille: 10 }} font-size={80} dy={100} />
			{/if}
		{/snippet}
	</SchémaIntéractif>
	<Demonstration lignes={6}>
		Soient {@html math('(m_1)')}, la médiatrice de [AB], et {@html math('(m_2)')}, la médiatrice de [BC].<br />
		Soit O le point d'intersection de {@html math('(m_1)')} et {@html math('(m_2)')}<br />
		<br />
		Si {@html math('\\text{O} \\in (m_1)')}, la médiatrice de [AB], alors OA = OB.<br />
		Si {@html math('\\text{O} \\in (m_2)')}, la médiatrice de [BC], alors OB = OC.<br />

		Donc OA = OB = OC.
	</Demonstration>
</Contenu>
