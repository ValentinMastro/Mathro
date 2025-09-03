<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemple, Item, Proprietes, Remarque, Schema } from '$lib/cahier/composants/de_cours/*';
	import { AngleDroit, Codage, Polygone, Segment } from '$lib/cahier/composants/svg/*';

	import { math } from 'mathlifier';

	let taille = 750;
	let A = { x: 750, y: 125 };
	let B = { x: A.x + taille, y: A.y };
	let C = { x: A.x + taille, y: A.y + taille };
	let D = { x: A.x, y: A.y + taille };
	let O = { x: A.x + taille / 2, y: A.y + taille / 2 };
</script>

<Contenu>
	<SousPartie numero={3} titre="Carré" />
	<Definition lignes_vides={0}>Un carré a quatre côtés égaux et quatre angles droits.</Definition>
	<Remarque>Un carré est un rectangle et un losange.</Remarque>
	<Proprietes lignes={4}>
		<Item>Ses côtés opposés sont parallèles.</Item>
		<Item>Ses diagonales se coupent en leur milieu.</Item>
		<Item>Ses diagonales sont de la même longueur.</Item>
		<Item>Ses diagonales sont perpendiculaires.</Item>
	</Proprietes>
	<Schema lignes={8} aspectRatioSVG={20 / 8}>
		{#snippet svg()}
			<AngleDroit points={[A, B, C]} taille={50} fill="orange" />
			<AngleDroit points={[B, C, D]} taille={50} fill="orange" />
			<AngleDroit points={[C, D, A]} taille={50} fill="orange" />
			<AngleDroit points={[D, A, B]} taille={50} fill="orange" />
			<AngleDroit points={[A, O, C]} taille={50} fill="blue" />
			<Polygone points={[A, B, C, D]} afficher_points />
			<Segment points={[A, C]} stroke="red" stroke-dasharray="15,25" />
			<Segment points={[B, D]} stroke="red" stroke-dasharray="15,25" />
			<Codage points={[A, B]} />
			<Codage points={[B, C]} />
			<Codage points={[C, D]} />
			<Codage points={[D, A]} />
			<Codage points={[A, O]} type="2 traits" />
			<Codage points={[B, O]} type="2 traits" />
			<Codage points={[C, O]} type="2 traits" />
			<Codage points={[D, O]} type="2 traits" />
		{/snippet}
	</Schema>
	<Exemple lignes={6}>
		Dans le carré ABCD ci-dessus :
		<Item bullet_color="var(--vert)">
			{@html math('\\text{AB } = \\text{BC } = \\text{CD } = \\text{DA }')} et
			{@html math('\\widehat{\\text{ABC}} = \\widehat{\\text{BCD}} = \\widehat{\\text{CDA}} = \\widehat{\\text{DAB}} = 90^\\circ')}
		</Item>
		<Item bullet_color="var(--rouge)">
			{@html math('(\\text{AB}) // (\\text{CD})')} et
			{@html math('(\\text{AD}) // (\\text{BC})')}
		</Item>
		<Item bullet_color="var(--rouge)">
			{@html math('\\text{O}')} est le milieu des diagonales {@html math('[\\text{AC}]')} et {@html math('[\\text{BD}]')}
		</Item>
		<Item bullet_color="var(--rouge)">
			Les diagonales {@html math('\\text{AC } = \\text{BD}')}
		</Item>
		<Item bullet_color="var(--rouge)">
			Les diagonales {@html math('(\\text{AC}) \\perp (\\text{BD})')}
		</Item>
	</Exemple>
</Contenu>
