<script lang="ts">
	import { Partie, Contenu } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Item, Notation, Remarque, Schema, Texte } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import { math } from 'mathlifier';

	let points = {
		A: 2,
		B: -3,
		C: 0.5,
		D: -2.5
	};
</script>

<Contenu>
	<Partie numero={2} titre="Repérage sur une droite graduée" />
	<Schema lignes={4} aspectRatioSVG={5}>
		{#snippet svg()}
			<line x1={50} y1={500} x2={4950} y2={500} stroke="black" stroke-width={10} />
			{#each [-3, -2, -1, 0, 1, 2, 3] as x}
				<line x1={2500 + 500 * x} y1={450} x2={2500 + 500 * x} y2={550} stroke="black" stroke-width={10} />
				<text x={2500 + 500 * x} y={650} font-size={100} text-anchor="middle">{x}</text>
			{/each}
			{#each Object.entries(points) as [point, x], index}
				<line x1={2500 + 500 * x - 50} y1={450} x2={2500 + 500 * x + 50} y2={550} stroke="red" stroke-width={10} />
				<line x1={2500 + 500 * x + 50} y1={450} x2={2500 + 500 * x - 50} y2={550} stroke="red" stroke-width={10} />
				<text x={2500 + 500 * x} y={400} font-size={130} text-anchor="middle" fill="red">{point}</text>
				<text x={1250 * (index + 0.5)} y={950} font-size={160} text-anchor="middle">{point}({x.toLocaleString('fr')})</text>
			{/each}
		{/snippet}
	</Schema>
	<LigneVide />
	<Definition>
		À chaque point de l'axe, on peut associer un nombre : son <i>abscisse</i>.
	</Definition>
	<LigneVide />
	<Partie numero={3} titre="Repérage dans le plan" />
	<LigneVide />
	<Definition lignes={5}>
		Un repère orthogonal est constitué :
		<Item>
			d'un point : <i>l'origine</i>
		</Item>
		<Item>
			d'un axe horizontal : <i>l'axe des abscisses</i>
		</Item>
		<Item>
			d'un axe vertical : <i>l'axe des ordonnées</i>
		</Item>
		Les deux axes sont perpendiculaires et se coupent en l'origine.
	</Definition>
	<LigneVide lignes={2} />
	<Schema lignes={10} aspectRatioSVG={2}>
		{#snippet svg()}
			<line x1={50} y1={500} x2={1950} y2={500} stroke="black" stroke-width={10} />
			<line x1={1000} y1={50} x2={1000} y2={950} stroke="black" stroke-width={10} />
			<!-- flèches -->
			<polygon points="1950,500 1900,525 1900,475" fill="black" stroke="black" stroke-width={10} />
			<polygon points="1000,50 975,100 1025,100" fill="black" stroke="black" stroke-width={10} />
			<!-- origine -->
			<line x1={1000 - 20} y1={500 - 20} x2={1000 + 20} y2={500 + 20} stroke="red" stroke-width={10} />
			<line x1={1000 + 20} y1={500 - 20} x2={1000 - 20} y2={500 + 20} stroke="red" stroke-width={10} />
			<!-- texte -->
			<text x={1120} y={550} font-size={50} text-anchor="middle" fill="red">Origine</text>
			<text x={1780} y={600} font-size={50} text-anchor="middle">axe des abscisses</text>
			<text x={750} y={50} font-size={50} text-anchor="middle">axe des ordonnées</text>
		{/snippet}
	</Schema>
</Contenu>
