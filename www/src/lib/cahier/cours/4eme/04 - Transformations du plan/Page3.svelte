<script lang="ts">
	import { Contenu, DansLaMarge, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Propriete, Schema, Notation, Item } from '$lib/cahier/composants/de_cours/*';
	import { Slider } from '$lib/cahier/composants/de_marge/*';
	import { Fleche, Polygone } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';

	let translation = $state(1);
	let vecteur = { x: 600, y: 200 };

	const sommets_triangle = [
		{ x: 200, y: 200 },
		{ x: 800, y: 200 },
		{ x: 100, y: 700 }
	];

	const sommets_triangle_translaté = $derived(
		sommets_triangle.map((point) => ({
			x: point.x + translation * vecteur.x,
			y: point.y + translation * vecteur.y
		}))
	);
</script>

<DansLaMarge lignes_vides={10}>
	<Slider bind:valeur={translation} min={0} max={1} pas={0.01} />
</DansLaMarge>

<Contenu>
	<Partie numero={3} titre="Translation" />
	<Definition>Une translation est un déplacement rectiligne dans le plan.</Definition>
	<Propriete>
		Une translation est une <i>isométrie du plan</i>.
	</Propriete>
	<Schema lignes={10} aspectRatioSVG={1.5}>
		{#snippet svg()}
			<Polygone points={sommets_triangle} afficher_points />
			<Polygone points={sommets_triangle_translaté} afficher_points={translation >= 1} noms={["A'", "B'", "C'"]} stroke="red" />
			<Fleche
				points={[sommets_triangle[0]!, { x: sommets_triangle[0]!.x + vecteur.x, y: sommets_triangle[0]!.y + vecteur.y }]}
				stroke="var(--vert)"
			/>
		{/snippet}
	</Schema>
	<Notation lignes={4}>
		<Item>La translation qui transforme A en A'</Item>
		<Item>La translation de vecteur {@html math("\\overrightarrow{\\text{AA'}}")}</Item>
		<Item>A' est l'image de A par cette translation</Item>
		<Item>B' est le translaté de B par la translation qui transforme A en A'</Item>
	</Notation>
</Contenu>
