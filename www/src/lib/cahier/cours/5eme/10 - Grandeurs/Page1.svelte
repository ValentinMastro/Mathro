<script lang="ts">
	import { Chapitre, Contenu, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemple, Formules, Item, Schema, Texte } from '$lib/cahier/composants/de_cours/*';
	import { Carré, Codage, Polygone, Rectangle, TexteSVG } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';

	let côté_carré = 300;
	let A = { x: 100, y: 100 };
	let points_carré = [A, { x: A.x, y: A.y + côté_carré }, { x: A.x + côté_carré, y: A.y + côté_carré }, { x: A.x + côté_carré, y: A.y }];

	let [longueur, largeur] = [500, 300];
	let B = { x: 700, y: 100 };
	let points_rectangle = [B, { x: B.x, y: B.y + largeur }, { x: B.x + longueur, y: B.y + largeur }, { x: B.x + longueur, y: B.y }];

	let D = { x: 1500, y: 300 };
	let points_triangle = [D, { x: D.x + 200, y: D.y - 200 }, { x: D.x + 400, y: D.y + 100 }];

	let E = { x: 500, y: 500 };
	let points_losange = [E, { x: E.x - 100, y: E.y + 200 }, { x: E.x, y: E.y + 400 }, { x: E.x + 100, y: E.y + 200 }];

	let C = { x: 1100, y: 600 };
	let points_parallélogramme = [C, { x: C.x + 400, y: C.y }, { x: C.x + 400 + 100, y: C.y + 300 }, { x: C.x + 100, y: C.y + 300 }];
</script>

<Chapitre titre="Grandeurs" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Périmètre" />
	<Definition>Le périmètre d'une figure est la longueur de son contour.</Definition>
	<Exemple />
	<Schema lignes={4} aspectRatioSVG={1.5}>
		{#snippet svg()}
			<path d="M 250 0 h 750 v 750 h -250 v -500 h -500 Z" fill="none" stroke="black" stroke-width={15} />
		{/snippet}
		{#snippet html()}
			<Texte>Cette figure a un périmètre de 12 carreaux.</Texte>
		{/snippet}
	</Schema>

	<SousPartie numero={1} titre="Polygones" />

	<Formules lignes={5}>
		<Item>
			{@html math('\\mathcal{P}_{\\text{carré}} = 4 \\times \\text{côté}')}
		</Item>
		<Item>
			{@html math('\\mathcal{P}_{\\text{rectangle}} = 2 \\times \\text{Longueur} + 2 \\times \\text{largeur}')}
		</Item>
		<Item>
			{@html math('\\mathcal{P}_{\\text{triangle}} = a + b + c')}
		</Item>
		<Item>
			{@html math('\\mathcal{P}_{\\text{losange}} = 4 \\times \\text{côté}')}
		</Item>
		<Item>
			{@html math('\\mathcal{P}_{\\text{parallélogramme}} = 2 \\times (a + b)')}
		</Item>
	</Formules>
	<Schema lignes={10} aspectRatioSVG={2}>
		{#snippet svg()}
			<Carré coin={points_carré[0]!} côté={côté_carré} />
			{#each points_carré as p, index}
				<Codage points={[p, points_carré[(index + 1) % 4]!]} stroke="red" />
			{/each}
			<TexteSVG point={points_carré[1]!} dx={côté_carré / 2} dy={80}>côté</TexteSVG>

			<Rectangle points={[points_rectangle[0]!, points_rectangle[2]!]} />
			<Codage points={[points_rectangle[0]!, points_rectangle[1]!]} stroke="red" type="2 traits" />
			<Codage points={[points_rectangle[1]!, points_rectangle[2]!]} stroke="red" type="3 traits" />
			<Codage points={[points_rectangle[2]!, points_rectangle[3]!]} stroke="red" type="2 traits" />
			<Codage points={[points_rectangle[3]!, points_rectangle[0]!]} stroke="red" type="3 traits" />

			<Polygone points={points_triangle} />
			<TexteSVG point={{ x: (points_triangle[0]!.x + points_triangle[1]!.x) / 2, y: (points_triangle[0]!.y + points_triangle[1]!.y) / 2 }} dx={-50}>
				a
			</TexteSVG>
			<TexteSVG point={{ x: (points_triangle[1]!.x + points_triangle[2]!.x) / 2, y: (points_triangle[1]!.y + points_triangle[2]!.y) / 2 }} dx={50}>
				b
			</TexteSVG>
			<TexteSVG point={{ x: (points_triangle[2]!.x + points_triangle[0]!.x) / 2, y: (points_triangle[2]!.y + points_triangle[0]!.y) / 2 }} dy={50}>
				c
			</TexteSVG>

			<Polygone points={points_losange} />
			{#each points_losange as p, index}
				<Codage points={[p, points_losange[(index + 1) % 4]!]} stroke="green" taille={50} />
			{/each}

			<Polygone points={points_parallélogramme} />
			<Codage points={[points_parallélogramme[0]!, points_parallélogramme[1]!]} stroke="blue" type="2 traits" taille={50} />
			<Codage points={[points_parallélogramme[1]!, points_parallélogramme[2]!]} stroke="blue" type="3 traits" taille={50} />
			<Codage points={[points_parallélogramme[2]!, points_parallélogramme[3]!]} stroke="blue" type="2 traits" taille={50} />
			<Codage points={[points_parallélogramme[3]!, points_parallélogramme[0]!]} stroke="blue" type="3 traits" taille={50} />
			<TexteSVG point={points_parallélogramme[0]!} dx={200} dy={-70} fill="blue">a</TexteSVG>
			<TexteSVG point={points_parallélogramme[1]!} dx={100} dy={100} fill="blue">b</TexteSVG>
		{/snippet}
	</Schema>
</Contenu>
