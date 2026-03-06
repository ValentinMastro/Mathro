<script lang="ts">
	import { Contenu, DansLaMarge, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Propriete, SchémaIntéractif } from '$lib/cahier/composants/de_cours/*';
	import { Slider } from '$lib/cahier/composants/de_marge/*';
	import { Cercle, Médiatrice, Point2D, Polygone } from '$lib/cahier/composants/svg/*';

	let A = $state(new Point2D(300, 200));
	let B = $state(new Point2D(1200, 400));
	let C = $state(new Point2D(900, 900));
	let O = $derived(Point2D.centre_cercle_circonscrit(A, B, C));
	let rayon = $derived(O ? Point2D.distance(O, A) : 0);

	let type = { forme: 'disque', taille: 15 };
	let étape = $state(4);
</script>

<DansLaMarge lignes_vides={10}>
	<Slider bind:valeur={étape} min={0} max={4} />
</DansLaMarge>

<Contenu>
	<SousPartie numero={2} titre="Médiatrices dans un triangle" />
	<Propriete lignes={2}>
		Les 3 médiatrices d'un triangle sont concourantes en un point :<br />
		<i title="le centre du cercle qui entoure le triangle">le centre du cercle circonscrit</i>.
	</Propriete>

	<SchémaIntéractif lignes={10} aspectRatioSVG={2} points_intéractifs={[A, B, C]}>
		{#snippet svg()}
			<Polygone points={[A, B, C]} afficher_points {type} distance_nom={70} />
			{#if étape >= 1}
				<Médiatrice extrémités_segment={[A, B]} stroke="red" />
			{/if}
			{#if étape >= 2}
				<Médiatrice extrémités_segment={[B, C]} stroke="blue" />
			{/if}
			{#if étape >= 3}
				<Médiatrice extrémités_segment={[C, A]} stroke="forestgreen" />
			{/if}
			{#if étape >= 4 && O}
				<Cercle centre={O} {rayon} stroke-dasharray="12,12" />
			{/if}
		{/snippet}
	</SchémaIntéractif>
</Contenu>
