<script lang="ts">
	import { Contenu, DansLaMarge, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import SousPartie from '$lib/cahier/composants/de_chapitrage/SousPartie.svelte';
	import { Item, Methode, Paragraphe, Propriete, Protocole, Schema, Texte } from '$lib/cahier/composants/de_cours/*';
	import { Slider } from '$lib/cahier/composants/de_marge/*';
	import { ArcDeCercle, Droite, Point, Segment, TexteSVG } from '$lib/cahier/composants/svg/*';

	let A = { x: 400, y: 600 };
	let B = { x: 2400, y: 600 };
	let I = { x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 };
	let M = $state({ x: I.x, y: 0 });

	let AM = $derived((Math.hypot(A.x - M.x, A.y - M.y) * 4) / 1000);
	let BM = $derived((Math.hypot(B.x - M.x, B.y - M.y) * 4) / 1000);

	let milieu_AM = $derived({ x: (A.x + M.x) / 2, y: (A.y + M.y) / 2 });
	let milieu_BM = $derived({ x: (B.x + M.x) / 2, y: (B.y + M.y) / 2 });

	let angle_AM = $derived((Math.atan2(M.y - A.y, M.x - A.x) * 180) / Math.PI);
	let angle_BM = $derived((Math.atan2(M.y - B.y, M.x - B.x) * 180) / Math.PI);

	// pour éviter le texte à l'envers : si hors [-90°, 90°], on ajoute 180°
	function oriente(angle: number) {
		return angle > 90 || angle < -90 ? angle + 180 : angle;
	}

	function majMDepuisEvenement(e: MouseEvent) {
		// On veut les coords dans le repère du SVG utilisé par <Schema>
		// e.currentTarget est l'élément racine fourni par Schema ; on cherche le <svg> dedans
		const host = e.currentTarget as HTMLElement;
		const svg = (e.target instanceof SVGSVGElement ? e.target : host.querySelector('svg')) as SVGSVGElement | null;
		if (!svg) return;

		const pt = svg.createSVGPoint();
		pt.x = e.clientX;
		pt.y = e.clientY;

		const ctm = svg.getScreenCTM();
		if (!ctm) return;

		const p = pt.matrixTransform(ctm.inverse());
		M.y = p.y;
	}

	let étape = $state(3);
</script>

<DansLaMarge lignes_vides={23}>
	<Slider bind:valeur={étape} min={0} max={3} />
</DansLaMarge>

<Contenu>
	<Partie numero={2} titre="Médiatrice" />
	<Propriete lignes={2}>
		Si un point appartient à la médiatrice d'un segment, <br />
		alors il est <i title="à la même distance">équidistant</i> des extrémités du segment.
	</Propriete>

	<Schema lignes={5} aspectRatioSVG={4} onmousemove={majMDepuisEvenement}>
		{#snippet svg()}
			{@const type = { forme: 'croix', taille: 30 }}

			<Segment points={[A, B]} stroke-width={10} />
			<Point nom="A" point={A} {type} font-size={130} dy={150} />
			<Point nom="B" point={B} {type} font-size={130} dy={150} />
			<Point nom="I" point={I} {type} font-size={130} dx={-100} dy={150} stroke="red" />

			<Droite passantPar={[I, M]} stroke="blue" stroke-width={10} />

			<Point nom="M" point={M} type={{ forme: 'disque', taille: 25 }} font-size={130} dx={100} dy={150} fill="green" />

			<Segment points={[M, A]} stroke="green" stroke-width={10} />
			<Segment points={[M, B]} stroke="green" stroke-width={10} />

			<!-- Textes alignés sur les segments, rotation autour de leur milieu -->
			<TexteSVG point={milieu_AM} font-size={90} transform={`rotate(${oriente(angle_AM)} ${milieu_AM.x} ${milieu_AM.y})`} dy={-40}>
				AM = {AM.toLocaleString('fr', { maximumFractionDigits: 2 })} cm
			</TexteSVG>

			<TexteSVG point={milieu_BM} font-size={90} transform={`rotate(${oriente(angle_BM)} ${milieu_BM.x} ${milieu_BM.y})`} dy={-40}>
				BM = {BM.toLocaleString('fr', { maximumFractionDigits: 2 })} cm
			</TexteSVG>
		{/snippet}
	</Schema>

	<SousPartie numero={1} titre="Construction d'une médiatrice avec le compas" />
	<Protocole lignes={4}>
		<Item>Avec le compas, tracer un <i title="d'un rayon supérieur à la moitié de la longueur du segment">grand</i> arc de cercle de centre A.</Item>
		<Item lignes={2}>Avec le compas, tracer un arc de cercle de centre B du même rayon que le premier.</Item>
		<Item>Relier les deux points d'intersection.</Item>
	</Protocole>

	<Schema lignes={10} aspectRatioSVG={2}>
		{#snippet svg()}
			{@const type = { forme: 'croix', taille: 20 }}
			{@const A2 = { x: 500, y: 500 }}
			{@const B2 = { x: 1500, y: 500 }}
			{#if étape >= 0}
				<Segment points={[A2, B2]} stroke-width={5} />
				<Point nom="A" point={A2} {type} font-size={70} dy={90} />
				<Point nom="B" point={B2} {type} font-size={70} dy={90} />
			{/if}
			{@const props = { stroke: 'black', 'stroke-width': 5, 'stroke-dasharray': '5,5' }}
			{#if étape >= 1}
				<ArcDeCercle centre={A2} r={600} angle1={-Math.PI / 3} angle2={Math.PI / 3} {...props} />
			{/if}
			{#if étape >= 2}
				<ArcDeCercle centre={B2} r={600} angle1={(2 * Math.PI) / 3} angle2={(4 * Math.PI) / 3} {...props} />
			{/if}
			{#if étape >= 3}
				{@const I1 = { x: 1000, y: 0 }}
				{@const I2 = { x: 1000, y: 1000 }}
				<Droite passantPar={[I1, I2]} stroke-width={10} stroke="blue" />
			{/if}
		{/snippet}
	</Schema>
</Contenu>
