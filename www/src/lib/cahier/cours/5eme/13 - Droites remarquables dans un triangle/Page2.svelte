<script lang="ts">
	import { Contenu, DansLaMarge, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemple, Item, Notation, Propriete, Schéma, SchémaIntéractif } from '$lib/cahier/composants/de_cours/*';
	import { Slider } from '$lib/cahier/composants/de_marge/*';
	import { AngleDroit, Droite, Point, Point2D, Polygone, type Coordonnées2D } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';

	// --- Exemple statique ---
	const Aex: Coordonnées2D = { x: 1000, y: 150 };
	const Bex: Coordonnées2D = { x: 200, y: 900 };
	const Cex: Coordonnées2D = { x: 1800, y: 700 };
	const HA_ex = Point2D.projeté_orthogonal(Aex, Bex, Cex);

	// --- Schéma interactif ---
	let étape = $state(0);
	let C: Coordonnées2D = $state({ x: 400, y: 200 });
	let D: Coordonnées2D = $state({ x: 1500, y: 250 });
	let E: Coordonnées2D = $state({ x: 800, y: 900 });

	const type = { forme: 'disque', taille: 15 };
	let H = $derived(Point2D.orthocentre(C, D, E));
</script>

<DansLaMarge lignes_vides={20}>
	<Slider min={0} max={3} bind:valeur={étape} />
</DansLaMarge>

<Contenu>
	<Partie numero={2} titre="Hauteurs" />
	<Definition lignes={2}>
		La hauteur d'un côté d'un triangle issue est la droite perpendiculaire à <br />
		ce côté passant par le sommet opposé.
	</Definition>
	<Exemple lignes_vides={0} />
	<Schéma lignes={5} aspectRatioSVG={2}>
		{#snippet svg()}
			<Polygone points={[Aex, Bex, Cex]} noms={['A', 'B', 'C']} afficher_points distance_nom={50} taille_nom={150} />
			<Droite passantPar={[Aex, { x: Aex.x + (Bex.y - Cex.y), y: Aex.y + (Cex.x - Bex.x) }]} stroke="red" />
			<AngleDroit points={[Aex, HA_ex, Cex]} taille={80} />
		{/snippet}
	</Schéma>
	<Notation lignes={3}>
		<Item>La hauteur du côté {@html math('[\\text{BC}]')}</Item>
		<Item>La hauteur relative à {@html math('[\\text{BC}]')}</Item>
		<Item>La hauteur issue de A</Item>
	</Notation>
	<Propriete lignes={2}>
		Les 3 hauteurs d'un triangle sont concourantes en un point :<br />
		<i title="peut se trouver à l'extérieur du triangle si celui-ci est obtus">l'orthocentre</i>.
	</Propriete>
	<SchémaIntéractif lignes={10} aspectRatioSVG={2} points_intéractifs={[C, D, E]}>
		{#snippet svg()}
			<Polygone points={[C, D, E]} noms={['C', 'D', 'E']} afficher_points {type} distance_nom={70} />
			{#if étape >= 1}
				<Droite passantPar={[C, { x: C.x + (D.y - E.y), y: C.y + (E.x - D.x) }]} stroke="red" />
			{/if}
			{#if étape >= 2}
				<Droite passantPar={[D, { x: D.x + (C.y - E.y), y: D.y + (E.x - C.x) }]} stroke="blue" />
			{/if}
			{#if étape >= 3}
				<Droite passantPar={[E, { x: E.x + (C.y - D.y), y: E.y + (D.x - C.x) }]} stroke="forestgreen" />
			{/if}
			{#if étape >= 3 && H}
				<Point point={H} nom="H" type={{ forme: 'disque', taille: 10 }} font-size={80} />
			{/if}
		{/snippet}
	</SchémaIntéractif>
</Contenu>
