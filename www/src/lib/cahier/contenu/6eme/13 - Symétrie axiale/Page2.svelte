<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemple, Item, Protocole, Schema } from '$lib/cahier/composants/de_cours/*';
	import { AngleDroit, Codage, DemiDroite, Droite, Point, TexteSVG } from '$lib/cahier/composants/svg/*';

	import { math } from 'mathlifier';

	let A = { x: 200, y: 200 };
	let I = { x: 500, y: 500 };
	let A2 = { x: A.x + 2 * (I.x - A.x), y: A.y + 2 * (I.y - A.y) };
</script>

<Contenu>
	<Partie numero={2} titre="Symétrique d'un point par rapport à une droite" />
	<Protocole lignes={5}>
		On souhaite construire le symétrique d'un point {@html math('\\text{A}')} par rapport à une droite {@html math('(d)')}.
		<Item>Construire la demi-droite d'origine {@html math('\\text{A}')} et perpendiculaire à {@html math('(d)')}.</Item>
		<Item>Placer {@html math('\\text{I}')} le point d'intersection de cette demi-droite et de {@html math('(d)')}.</Item>
		<Item>Placer {@html math("\\text{A'}")} tel que {@html math('\\text{I}')} soit le milieu de {@html math("[\\text{AA'}]")}.</Item>
	</Protocole>
	<Exemple />
	<Schema lignes={10}>
		{#snippet svg()}
			<AngleDroit points={[A, I, { x: 0, y: 1000 }]} fill="orange" taille={60} />
			<Droite
				passantPar={[
					{ x: 0, y: 1000 },
					{ x: 1000, y: 0 }
				]}
				stroke="red"
				stroke-width={8}
			/>
			<TexteSVG point={{ x: 900, y: 200 }} fill="red">(d)</TexteSVG>
			<DemiDroite origine={A} passantPar={I} />
			{@const type = { forme: 'disque', taille: 15 }}
			<Point nom="A" point={A} {type} dy={-50} />
			<Point nom="I" point={I} {type} dy={-50} />
			<Point nom="A'" point={A2} {type} dy={-50} />
			<Codage points={[A, I]} type="2 traits" stroke="red" />
			<Codage points={[A2, I]} type="2 traits" stroke="red" />
		{/snippet}
	</Schema>
</Contenu>
