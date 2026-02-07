<script lang="ts">
	import { Contenu, DansLaMarge, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Schema, Texte, Vocabulaire } from '$lib/cahier/composants/de_cours/*';
	import { Slider } from '$lib/cahier/composants/de_marge/*';
	import { Point, SecteurAngulaire, Fleche, DemiDroite } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';

	let angle = $state(45);
	let radians = $derived((angle * Math.PI) / 180);

	function typeAngle(angle: number): string {
		if (angle == 0) return 'nul';
		else if (angle > 0 && angle < 90) return 'aigu';
		else if (angle == 90) return 'droit';
		else if (angle > 90 && angle < 180) return 'obtus';
		else if (angle == 180) return 'plat';
		else if (angle > 180 && angle < 360) return 'rentrant';
		else if (angle == 360) return 'plein';
		else return 'invalide';
	}

	let O = { x: 750, y: 500 };
	let A = { x: 750, y: 500 - 300 };
	let B = $derived({ x: 750 - 250 * Math.cos(radians + Math.PI / 2), y: 500 - 250 * Math.sin(radians + Math.PI / 2) });
	let type = { forme: 'disque', taille: 12 };

	function calculer_angle(event: MouseEvent) {
		let P: DOMPoint;
		try {
			const SVG = event.target as SVGSVGElement;
			const pt = SVG.createSVGPoint();
			pt.x = event.clientX;
			pt.y = event.clientY;
			P = pt.matrixTransform(SVG.getScreenCTM()?.inverse());
		} catch (error) {
			return;
		}
		// Calcul de l'angle entre les points A, O et P
		// Utilisons la loi des cosinus : c² = a² + b² - 2ab * cos(AOP)
		// Donc cos(AOP) = (a² + b² - c²) / (2ab)
		// Finalement, AOP = arccos((a² + b² - c²) / (2ab))
		// Ici, c = AP, a = AO, b = OP
		function distance(point1: { x: number; y: number }, point2: { x: number; y: number }): number {
			return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
		}
		let c = distance(A, P);
		let a = distance(A, O);
		let b = distance(O, P);
		let cosAOP = (a * a + b * b - c * c) / (2 * a * b);
		let AOP_radians = Math.acos(cosAOP);
		let AOP = Math.round((AOP_radians * 180) / Math.PI);

		angle = AOP;
		if (P.x < O.x) angle = 360 - AOP;
	}
</script>

<DansLaMarge lignes_vides={9}>
	<Slider bind:valeur={angle} min={0} max={360} pas={1} />
</DansLaMarge>

<Contenu>
	<Partie numero={1} titre="Lexique" />
	<Definition lignes={2}>La mesure d'un angle quantifie l'écartement entre les deux côtés de l'angle.</Definition>
	<Schema lignes={8} aspectRatioSVG={1.5} onclick={calculer_angle} html_lignes_vides={1}>
		{#snippet svg()}
			<SecteurAngulaire centre={{ x: 750, y: 500 }} r={100} angle1={Math.PI / 2} angle2={-radians + Math.PI / 2} fill="red" />
			<DemiDroite origine={O} passantPar={A} />
			<DemiDroite origine={O} passantPar={B} stroke="blue" />
			<Point point={O} nom="O" {type} dy={90} />
			<Point point={A} nom="A" {type} dx={60} dy={0} />
			<Point point={B} nom="B" {type} dy={90} />
		{/snippet}
		{#snippet html()}
			<Texte>
				{#if angle > 180}
					{@html math(`\\widecheck{\\text{AOB}} = ${angle}^{\\circ}`)}
				{:else if angle <= 180}
					{@html math(`\\widehat{\\text{AOB}} = ${angle}^{\\circ}`)}
				{/if}
			</Texte>
			<Texte>
				{#if angle > 180}
					{@html math(`\\widecheck{\\text{AOB}}`)} est un angle {typeAngle(angle)}.
				{:else if angle <= 180}
					{@html math(`\\widehat{\\text{AOB}}`)} est un angle {typeAngle(angle)}.
				{/if}
			</Texte>
		{/snippet}
	</Schema>
	<Vocabulaire />
	<Schema lignes={6} aspectRatioSVG={3.5}>
		{#snippet svg()}
			{#snippet afficher_angle(degres: number, x: number, y: number)}
				{@const angle = ((90 - degres) * Math.PI) / 180}
				<SecteurAngulaire centre={{ x, y }} r={100} angle1={Math.PI / 2} angle2={angle} fill="forestgreen" />
				<Point point={{ x, y }} type={{ forme: 'croix', taille: 30 }} />
				<Fleche
					points={[
						{ x, y },
						{ x, y: y - 333.33 }
					]}
					stroke="black"
					stroke-width={5}
				/>
				<Fleche
					points={[
						{ x, y },
						{ x: x + 250 * Math.cos(angle), y: y - 250 * Math.sin(angle) }
					]}
					stroke="red"
					fill="red"
					stroke-width={5}
				/>
				<text {x} y={840} text-anchor="middle" font-size={80} fill="black">{typeAngle(degres)}</text>
			{/snippet}
			{@const carreau = 1000 / 6}
			{@render afficher_angle(0, 1 * carreau, 500)}
			{@render afficher_angle(45, 3 * carreau, 500)}
			{@render afficher_angle(90, 6 * carreau, 500)}
			{@render afficher_angle(135, 9 * carreau, 500)}
			{@render afficher_angle(180, 12 * carreau, 500)}
			{@render afficher_angle(225, 15 * carreau, 500)}
			{@render afficher_angle(360, 18 * carreau, 500)}
		{/snippet}
	</Schema>
</Contenu>
