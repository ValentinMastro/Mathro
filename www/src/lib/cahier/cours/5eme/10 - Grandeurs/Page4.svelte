<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Formules, Item, Schema } from '$lib/cahier/composants/de_cours/*';
	import { Carré, Codage, Polygone, Rectangle, Segment, TexteSVG } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';

	let côté_carré = 300;
	let A = { x: 100, y: 100 };
	let points_carré = [A, { x: A.x, y: A.y + côté_carré }, { x: A.x + côté_carré, y: A.y + côté_carré }, { x: A.x + côté_carré, y: A.y }];

	let [longueur, largeur] = [500, 300];
	let B = { x: 700, y: 100 };
	let points_rectangle = [B, { x: B.x, y: B.y + largeur }, { x: B.x + longueur, y: B.y + largeur }, { x: B.x + longueur, y: B.y }];

	let D = { x: 1500, y: 300 };
	let points_triangle = [D, { x: D.x + 300, y: D.y - 200 }, { x: D.x + 400, y: D.y }];

	let E = { x: 500, y: 500 };
	let points_losange = [E, { x: E.x - 100, y: E.y + 200 }, { x: E.x, y: E.y + 400 }, { x: E.x + 100, y: E.y + 200 }];

	let C = { x: 1100, y: 600 };
	let points_parallélogramme = [C, { x: C.x + 400, y: C.y }, { x: C.x + 400 + 100, y: C.y + 300 }, { x: C.x + 100, y: C.y + 300 }];
</script>

<Contenu>
	<SousPartie numero={1} titre="Polygones" />
	<Formules lignes={5}>
		<Item>
			{@html math('\\mathcal{A}_{\\text{carré}} = \\text{côté} \\times \\text{côté}')}
		</Item>
		<Item>
			{@html math('\\mathcal{A}_{\\text{rectangle}} = \\text{Longueur} \\times \\text{largeur}')}
		</Item>
		<Item>
			{@html math('\\mathcal{A}_{\\text{triangle}} = \\text{base} \\times \\text{hauteur} \\div 2')}
		</Item>
		<Item>
			{@html math('\\mathcal{A}_{\\text{losange}} = \\text{Grande Diagonale} \\times \\text{Petite Diagonale} \\div 2')}
		</Item>
		<Item>
			{@html math('\\mathcal{A}_{\\text{parallélogramme}} = \\text{Base} \\times \\text{Hauteur}')}
		</Item>
	</Formules>
	<Schema lignes={10} aspectRatioSVG={2}>
		{#snippet svg()}
			<Carré coin={points_carré[0]} côté={côté_carré} />
			{#each points_carré as p, index}
				<Codage points={[p, points_carré[(index + 1) % 4]]} stroke="red" />
			{/each}
			<TexteSVG point={points_carré[1]} dx={côté_carré / 2} dy={80}>côté</TexteSVG>

			<Rectangle points={[points_rectangle[0], points_rectangle[2]]} />
			<Codage points={[points_rectangle[0], points_rectangle[1]]} stroke="red" type="2 traits" />
			<Codage points={[points_rectangle[1], points_rectangle[2]]} stroke="red" type="3 traits" />
			<Codage points={[points_rectangle[2], points_rectangle[3]]} stroke="red" type="2 traits" />
			<Codage points={[points_rectangle[3], points_rectangle[0]]} stroke="red" type="3 traits" />

			<Polygone points={points_triangle} />
			<TexteSVG
				point={{ x: (points_triangle[0].x + points_triangle[1].x) / 2 + 50, y: (points_triangle[0].y + points_triangle[1].y) / 2 }}
				dx={-50}
				fill="red"
			>
				hauteur
			</TexteSVG>
			<TexteSVG point={{ x: (points_triangle[2].x + points_triangle[0].x) / 2, y: (points_triangle[2].y + points_triangle[0].y) / 2 }} dy={50}>
				base
			</TexteSVG>
			{@const pied_hauteur_triangle = { x: points_triangle[1].x, y: points_triangle[1].y + 200 }}
			<Segment points={[points_triangle[1], pied_hauteur_triangle]} stroke="red" />

			<Polygone points={points_losange} />
			{#each points_losange as p, index}
				<Codage points={[p, points_losange[(index + 1) % 4]]} stroke="green" taille={50} />
			{/each}
			<Segment points={[points_losange[0], points_losange[2]]} stroke="red" />
			<Segment points={[points_losange[1], points_losange[3]]} stroke="red" />

			<Polygone points={points_parallélogramme} />
			<Codage points={[points_parallélogramme[0], points_parallélogramme[1]]} stroke="blue" type="2 traits" taille={50} />
			<Codage points={[points_parallélogramme[1], points_parallélogramme[2]]} stroke="blue" type="3 traits" taille={50} />
			<Codage points={[points_parallélogramme[2], points_parallélogramme[3]]} stroke="blue" type="2 traits" taille={50} />
			<Codage points={[points_parallélogramme[3], points_parallélogramme[0]]} stroke="blue" type="3 traits" taille={50} />
			<TexteSVG point={points_parallélogramme[0]} dx={200} dy={-70} fill="blue">base</TexteSVG>
			{@const pied_hauteur_parallélogramme = { x: points_parallélogramme[1].x, y: points_parallélogramme[1].y + 300 }}
			<Segment points={[points_parallélogramme[1], pied_hauteur_parallélogramme]} stroke="red" />
			<TexteSVG point={points_parallélogramme[1]} fill="red" dx={-120} dy={150}>hauteur</TexteSVG>
		{/snippet}
	</Schema>
</Contenu>
