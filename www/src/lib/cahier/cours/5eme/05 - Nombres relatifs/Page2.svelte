<script lang="ts">
	import { Partie, Contenu } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemple, Item, Schema, Texte } from '$lib/cahier/composants/de_cours/*';
	import MultiItem from '$lib/cahier/composants/de_cours/MultiItem.svelte';
	import { AxeGradué, Fleche, Point, TexteSVG } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';

	let points = {
		A: 2,
		B: -3,
		C: 0.5,
		D: -2.5
	};

	const début = { x: 500, y: 500 };
	const fin = { x: 5000, y: 500 };
</script>

<Contenu>
	<Partie numero={2} titre="Repérage sur une droite graduée" />
	<Definition lignes={4}>
		Un <i>axe</i> est composé de 3 éléments :
		<Item>une droite graduée</Item>
		<Item><i>l'origine</i>, un point associé au nombre 0</Item>
		<Item>un point associé au nombre 1</Item>
	</Definition>
	<Exemple />
	<Schema lignes={4} aspectRatioSVG={5}>
		{#snippet svg()}
			<AxeGradué nombre_de_graduations={8} points={[début, fin]} stroke="black" stroke-width={10} />
			{@const origine = { x: 2000, y: 500 }}
			{@const unité = { x: 2500, y: 500 }}
			<Point point={origine} nom="0" font-size={150} dy={200} type={{ forme: 'croix', taille: 40 }} />
			<Point point={unité} nom="1" font-size={150} dy={200} type={{ forme: 'croix', taille: 40 }} />
			{@const debut_flèche_origine = { x: 2000, y: 150 }}
			{@const fin_flèche_origine = { x: 2000, y: 420 }}
			<Fleche points={[debut_flèche_origine, fin_flèche_origine]} stroke="red" fill="red" stroke-width={8} />
			<TexteSVG point={debut_flèche_origine} dy={-80} fill="red" font-size={110}>origine</TexteSVG>
			<Fleche points={[origine, unité]} stroke="blue" fill="blue" stroke-width={8} style="transform: translateY(250px);" />
			<Fleche points={[unité, origine]} stroke="blue" fill="blue" stroke-width={8} style="transform: translateY(250px);" />
			{@const demi_unité = { x: (origine.x + unité.x) / 2, y: 900 }}
			<TexteSVG point={demi_unité} dy={-50} fill="blue" font-size={110}>unité</TexteSVG>
		{/snippet}
	</Schema>
	<Definition>
		À chaque point de l'axe, on peut associer un nombre : son <i>abscisse</i>.
	</Definition>
	<Exemple />
	<Schema lignes={4} aspectRatioSVG={5}>
		{#snippet svg()}
			<AxeGradué nombre_de_graduations={8} points={[début, fin]} stroke="black" stroke-width={10} />
			{#each [-3, -2, -1, 0, 1, 2, 3] as x}
				<TexteSVG point={{ x: 2500 + 500 * x, y: 650 }} font-size={120}>{x}</TexteSVG>
			{/each}
			{#each Object.entries(points) as [point, x], index}
				<Point point={{ x: 2500 + 500 * x, y: 500 }} dy={-100} font-size={130} nom={point} type={{ forme: 'croix', taille: 40 }} stroke="red" />
			{/each}
		{/snippet}
	</Schema>
	<Texte>
		<MultiItem>
			{#each Object.entries(points).map(([point, x]) => [point, x.toLocaleString()]) as [point, x]}
				<Item bullet="">
					{@html math(`\\text{${point}}(${x})`)}
				</Item>
			{/each}
		</MultiItem>
	</Texte>
</Contenu>
