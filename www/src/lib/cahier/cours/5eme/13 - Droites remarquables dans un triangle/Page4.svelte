<script lang="ts">
	import { Contenu, DansLaMarge, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemple, Propriete, Schéma, SchémaIntéractif } from '$lib/cahier/composants/de_cours/*';
	import { Slider } from '$lib/cahier/composants/de_marge/*';
	import { Angle, Cercle, DemiDroite, Droite, Point, Point2D, Polygone, TexteSVG, type Coordonnées2D } from '$lib/cahier/composants/svg/*';

	// --- Exemple statique : angle BAC = 60°, bissectrice horizontale ---
	const Aex: Coordonnées2D = { x: 150, y: 500 };
	const Bex: Coordonnées2D = { x: 150 + 700 * Math.cos(Math.PI / 6), y: 500 - 700 * Math.sin(Math.PI / 6) };
	const Cex: Coordonnées2D = { x: 150 + 700 * Math.cos(Math.PI / 6), y: 500 + 700 * Math.sin(Math.PI / 6) };
	const Pex: Coordonnées2D = { x: 1400, y: 500 };

	// --- Schéma interactif ---
	let étape = $state(4);
	let C: Coordonnées2D = $state({ x: 400, y: 800 });
	let D: Coordonnées2D = $state({ x: 1600, y: 800 });
	let E: Coordonnées2D = $state({ x: 400, y: 107 });

	const type = { forme: 'disque', taille: 15 };
	let dC = $derived(Point2D.direction_bissectrice(C, D, E));
	let dD = $derived(Point2D.direction_bissectrice(D, C, E));
	let dE = $derived(Point2D.direction_bissectrice(E, C, D));
	let I = $derived(Point2D.centre_cercle_inscrit(C, D, E));
	let rayon = $derived(Point2D.distance(I, Point2D.projeté_orthogonal(I, C, D)));
</script>

<DansLaMarge lignes_vides={20}>
	<Slider min={0} max={4} bind:valeur={étape} />
</DansLaMarge>

<Contenu>
	<Partie numero={3} titre="Bissectrices" />
	<Definition lignes={2}>La bissectrice d'un angle est la droite qui partage l'angle en deux parts égales.</Definition>
	<Exemple />
	<Schéma lignes={8} aspectRatioSVG={1.5}>
		{#snippet svg()}
			<Angle points={[Pex, Aex, Bex]} r={250} fill="#ff8080" stroke="none" afficher_mesure={1.3} />
			<Angle points={[Pex, Aex, Cex]} r={250} fill="#ff8080" stroke="none" afficher_mesure={1.3} />
			<DemiDroite origine={Aex} passantPar={Bex} />
			<DemiDroite origine={Aex} passantPar={Cex} />
			<DemiDroite origine={Aex} passantPar={Pex} stroke="red" />
			<Point point={Aex} nom="A" dx={-80} dy={0} />
			<Point point={Bex} nom="B" dx={40} dy={-40} />
			<Point point={Cex} nom="C" dx={40} dy={120} />
			<TexteSVG point={Pex} dy={-30} fill="red">(b)</TexteSVG>
		{/snippet}
	</Schéma>
	<Propriete lignes={2}>
		Les 3 bissectrices d'un triangle sont concourantes en un point :<br />
		<i title="le centre du cercle tangent aux trois côtés">le centre du cercle inscrit</i>.
	</Propriete>
	<SchémaIntéractif lignes={10} aspectRatioSVG={2} points_intéractifs={[C, D, E]}>
		{#snippet svg()}
			<Polygone points={[C, D, E]} noms={['C', 'D', 'E']} afficher_points {type} distance_nom={70} />
			{#if étape >= 1}
				<Droite passantPar={[C, { x: C.x + dC.x, y: C.y + dC.y }]} stroke="red" />
			{/if}
			{#if étape >= 2}
				<Droite passantPar={[D, { x: D.x + dD.x, y: D.y + dD.y }]} stroke="blue" />
			{/if}
			{#if étape >= 3}
				<Droite passantPar={[E, { x: E.x + dE.x, y: E.y + dE.y }]} stroke="forestgreen" />
			{/if}
			{#if étape >= 4}
				<Cercle centre={I} {rayon} stroke-dasharray="12,12" />
				<Point point={I} nom="I" type={{ forme: 'disque', taille: 10 }} font-size={80} />
			{/if}
		{/snippet}
	</SchémaIntéractif>
</Contenu>
