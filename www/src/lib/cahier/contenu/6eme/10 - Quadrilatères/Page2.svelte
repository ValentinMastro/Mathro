<script lang="ts">
	import { Contenu, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemple, Item, Proprietes, Schema } from '$lib/cahier/composants/de_cours/*';
	import { Angle, AngleDroit, Codage, Point, Polygone, Segment } from '$lib/cahier/composants/svg/*';

	import { math } from 'mathlifier';

	let A = { x: 1000, y: 200 };
	let B = { x: 1800, y: 500 };
	let C = { x: 1000, y: 800 };
	let D = { x: 200, y: 500 };
	let O = { x: (A.x + C.x) / 2, y: (A.y + C.y) / 2 };
</script>

<Contenu>
	<Partie numero={2} titre="Les différents types de quadrilatères" />
	<SousPartie numero={1} titre="Losange" />
	<Definition>Un losange est un quadrilatère ayant ses 4 côtés de la même longueur.</Definition>
	<Proprietes lignes={4}>
		<Item>Les diagonales se coupent en leur milieu.</Item>
		<Item>Les diagonales sont perpendiculaires.</Item>
		<Item>Les angles opposés sont de même mesure.</Item>
		<Item>Deux angles successifs sont supplémentaires.</Item>
	</Proprietes>
	<Schema lignes={10} aspectRatioSVG={2}>
		{#snippet svg()}
			<Angle r={100} points={[A, B, C]} fill="orange" />
			<Angle r={100} points={[A, D, C]} fill="orange" />
			<Angle r={100} points={[D, A, B]} fill="skyblue" />
			<Angle r={100} points={[D, C, B]} fill="skyblue" />
			<Polygone points={[A, B, C, D]} afficher_points />
			<Segment points={[A, C]} stroke="red" stroke-dasharray="15,25" />
			<Segment points={[B, D]} stroke="red" stroke-dasharray="15,25" />
			<Codage points={[A, B]} />
			<Codage points={[B, C]} />
			<Codage points={[C, D]} />
			<Codage points={[D, A]} />
			<AngleDroit points={[A, O, B]} taille={40} fill="red" />
			<Codage points={[A, O]} type="2 traits" stroke="darkgreen" />
			<Codage points={[C, O]} type="2 traits" stroke="darkgreen" />
			<Codage points={[B, O]} type="3 traits" stroke="blue" />
			<Codage points={[D, O]} type="3 traits" stroke="blue" />
			<Point nom="O" point={O} type={{ forme: 'croix', taille: 20 }} dx={-50} dy={-30} />
		{/snippet}
	</Schema>
	<Exemple lignes={6}>
		Dans le losange ABCD ci-dessus :
		<Item bullet_color="var(--vert)">
			{@html math('\\text{AB } = \\text{BC } = \\text{CD } = \\text{DA}')}.
		</Item>
		<Item bullet_color="var(--rouge)">
			{@html math('\\text{O}')} est le milieu des deux diagonales : {@html math('[\\text{AC}]')} et {@html math('[\\text{BD}]')}.
		</Item>
		<Item bullet_color="var(--rouge)">
			{@html math('(\\text{AC}) \\perp (\\text{BD})')}.
		</Item>
		<Item bullet_color="var(--rouge)">
			{@html math('\\widehat{\\text{ABC}} = \\widehat{\\text{ADC}}')} et {@html math('\\widehat{\\text{DAB}} = \\widehat{\\text{DCB}}')}.
		</Item>
		<Item bullet_color="var(--rouge)">
			Deux angles successifs : {@html math('\\widehat{\\text{ABC}} + \\widehat{\\text{BCD}} = 180^\\circ')}.
		</Item>
	</Exemple>
</Contenu>
