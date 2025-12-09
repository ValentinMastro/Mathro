<script lang="ts">
	import { Contenu } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemple, Item, MultiItem, Notation, Schema } from '$lib/cahier/composants/de_cours/*';
	import { AxeGradué, Point } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';

	let origine = { x: 1000, y: 500 };
	let axe_abscisses: [{ x: number; y: number }, { x: number; y: number }] = [
		{ x: 200, y: 500 },
		{ x: 1800, y: 500 }
	];
	let axe_ordonnées: [{ x: number; y: number }, { x: number; y: number }] = [
		{ x: 1000, y: 900 },
		{ x: 1000, y: 100 }
	];
	let points = {
		A: { x: 2, y: -3 },
		B: { x: -3, y: 0.5 },
		C: { x: 0.5, y: -2.5 },
		D: { x: -2.5, y: 2 }
	};
	let type = { forme: 'croix', taille: 20 };
</script>

<Contenu>
	<Definition lignes={2}>
		À chaque point du repère, on associe deux nombres : son <i>abscisse</i> et son <i>ordonnée</i>.
	</Definition>
	<Notation>
		Si le point A a pour abscisse {@html math('2')} et pour ordonnée {@html math('-3')}, on note {@html math('\\text{A}(2;-3)')}.
	</Notation>
	<Exemple lignes={2}>
		Plaçons les points suivants :
		<MultiItem>
			{#each Object.entries(points).map(([point, { x, y }]) => ({ point, x: x.toLocaleString(), y: y.toLocaleString() })) as { point, x, y }}
				<Item bullet="">{@html math(`\\text{${point}}(${x};${y})`)}</Item>
			{/each}
		</MultiItem>
	</Exemple>
	<Schema lignes={10} aspectRatioSVG={2}>
		{#snippet svg()}
			<AxeGradué points={axe_abscisses} nombre_de_graduations={7} taille_graduations={25} />
			<AxeGradué points={axe_ordonnées} nombre_de_graduations={7} taille_graduations={25} />
			<Point nom="O" point={origine} {type} stroke="red" dx={70} dy={70} />
			{#each Object.entries(points).map(([nom, { x, y }]) => ({ nom, x, y })) as { nom, x, y }}
				{@const point = { x: 1000 + 200 * x, y: 500 - 100 * y }}
				<Point {point} {nom} {type} stroke="forestgreen" dy={-50} />
			{/each}
		{/snippet}
	</Schema>
</Contenu>
