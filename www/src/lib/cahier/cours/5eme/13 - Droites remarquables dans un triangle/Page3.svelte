<script lang="ts">
	import { Contenu, DansLaMarge, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemple, Propriete, Schéma, SchémaIntéractif } from '$lib/cahier/composants/de_cours/*';
	import { Slider } from '$lib/cahier/composants/de_marge/*';
	import { Angle, Cercle, Droite, Point, Point2D, Polygone, type Coordonnées2D } from '$lib/cahier/composants/svg/*';

	// --- Exemple statique ---
	const Aex: Coordonnées2D = { x: 600, y: 850 };
	const Bex: Coordonnées2D = { x: 200, y: 150 };
	const Cex: Coordonnées2D = { x: 1800, y: 400 };
	const dBissex = Point2D.direction_bissectrice(Aex, Bex, Cex);
	const Pex: Coordonnées2D = { x: Aex.x + dBissex.x * 800, y: Aex.y + dBissex.y * 800 };

	// --- Schéma interactif ---
	let étape = $state(0);
	let C: Coordonnées2D = $state({ x: 400, y: 200 });
	let D: Coordonnées2D = $state({ x: 1500, y: 250 });
	let E: Coordonnées2D = $state({ x: 800, y: 900 });

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
	<Definition lignes={2}>
		La bissectrice d'un angle d'un triangle est la droite qui passe par le sommet et partage l'angle en deux angles <b>égaux</b>.
	</Definition>
	<Exemple />
	<Schéma lignes={5} aspectRatioSVG={2}>
		{#snippet svg()}
			<Polygone points={[Aex, Bex, Cex]} noms={['A', 'B', 'C']} afficher_points distance_nom={70} />
			<Droite passantPar={[Aex, Pex]} stroke="red" />
			<Angle points={[Bex, Aex, Pex]} r={200} fill="rgba(255,0,0,0.25)" stroke="none" />
			<Angle points={[Pex, Aex, Cex]} r={200} fill="rgba(255,0,0,0.25)" stroke="none" />
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
