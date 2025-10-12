<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemple, Item, Proprietes, Schema } from '$lib/cahier/composants/de_cours/*';
	import { AngleDroit, Codage, Point, Polygone, Segment } from '$lib/cahier/composants/svg/*';

	import { math } from 'mathlifier';

	let A = { x: 500, y: 125 };
	let C = { x: 2000, y: 875 };
	let B = { x: A.x, y: C.y };
	let D = { x: C.x, y: A.y };
	let O = { x: (A.x + C.x) / 2, y: (A.y + C.y) / 2 };
</script>

<Contenu>
	<SousPartie numero={2} titre="Rectangle" />
	<Definition>Un rectangle est un quadrilatère ayant 4 angles droits.</Definition>
	<Proprietes lignes={4}>
		<Item>Ses côtés opposés sont parallèles.</Item>
		<Item>Ses côtés opposés de la même longueur.</Item>
		<Item>Ses diagonales se coupent en leur milieu.</Item>
		<Item>Ses diagonales sont de la même longueur.</Item>
	</Proprietes>
	<Schema lignes={8} aspectRatioSVG={20 / 8}>
		{#snippet svg()}
			<AngleDroit points={[A, B, C]} taille={50} fill="orange" />
			<AngleDroit points={[B, C, D]} taille={50} fill="orange" />
			<AngleDroit points={[C, D, A]} taille={50} fill="orange" />
			<AngleDroit points={[D, A, B]} taille={50} fill="orange" />
			<Polygone points={[A, B, C, D]} afficher_points />
			<Segment points={[A, C]} stroke="red" stroke-dasharray="15,25" />
			<Segment points={[B, D]} stroke="red" stroke-dasharray="15,25" />
			<Point nom="O" point={O} type={{ forme: 'croix', taille: 30 }} dy={-50} />
			<Codage points={[A, D]} type="2 traits" stroke="red" />
			<Codage points={[B, C]} type="2 traits" stroke="red" />
			<Codage points={[A, B]} stroke="forestgreen" />
			<Codage points={[C, D]} stroke="forestgreen" />
			<Codage points={[A, O]} type="3 traits" stroke="blue" />
			<Codage points={[B, O]} type="3 traits" stroke="blue" />
			<Codage points={[C, O]} type="3 traits" stroke="blue" />
			<Codage points={[D, O]} type="3 traits" stroke="blue" />
		{/snippet}
	</Schema>
	<Exemple lignes={6}>
		Dans le rectangle ABCD ci-dessus :
		<Item bullet_color="var(--vert)">
			Il y a 4 angles droits :
			{@html math('\\widehat{\\text{ABC}} = \\widehat{\\text{BCD}} = \\widehat{\\text{CDA}} = \\widehat{\\text{DAB}} = 90^\\circ')}
		</Item>
		<Item bullet_color="var(--rouge)">
			{@html math('(\\text{AB}) // (\\text{CD})')} et {@html math('(\\text{AD}) // (\\text{BC})')}
		</Item>
		<Item bullet_color="var(--rouge)">
			{@html math('\\text{AB } = \\text{CD}')} et {@html math('\\text{AD } = \\text{BC}')}
		</Item>
		<Item bullet_color="var(--rouge)">
			{@html math('\\text{O}')} est le milieu des diagonales {@html math('[\\text{AC}]')} et {@html math('[\\text{BD}]')}
		</Item>
		<Item bullet_color="var(--rouge)">
			Les diagonales {@html math('\\text{AC } = \\text{BD}')}
		</Item>
	</Exemple>
</Contenu>
