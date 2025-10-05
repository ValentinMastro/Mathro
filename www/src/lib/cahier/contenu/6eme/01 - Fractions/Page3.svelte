<script lang="ts">
	import { Contenu, DansLaMarge, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemples, Item, Propriete, Schema } from '$lib/cahier/composants/de_cours/*';
	import { Exercice, Nombre } from '$lib/cahier/composants/de_marge/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import { math } from 'mathlifier';

	let facteur_1 = $state(3);
	let facteur_2 = $state(3);
</script>

<DansLaMarge lignes_vides={7}>
	<Nombre bind:valeur={facteur_1} min={1} max={9} label="multiplicateur" />
	<LigneVide />
	<Nombre bind:valeur={facteur_2} min={1} max={10} label="multiplicateur" />
	<Exercice niveau={6} id_exercice={255002} position={11} />
</DansLaMarge>

<Contenu>
	<Partie numero={3} titre="Égalités de fractions" />
	<Propriete lignes={2}>
		Si on multiplie le numérateur et le dénominateur <i>par le même nombre</i>, alors on obtient une deuxième fraction égale à la première.
	</Propriete>
	<Exemples lignes={6}>
		<Item lignes={2}>
			{@html math(`\\dfrac{2}{3}
                =
                \\dfrac
                    {2 {\\color{red} \\times ${facteur_1}}}
                    {3 {\\color{red} \\times ${facteur_1}}}
                =
                \\dfrac
                    {${2 * facteur_1}}
                    {${3 * facteur_1}}  `)}
		</Item>
		<Item lignes={2}>
			{@html math(`\\dfrac{4}{5}
                =
                \\dfrac
                    {4 {\\color{red} \\times ${facteur_2}}}
                    {5 {\\color{red} \\times ${facteur_2}}}
                =
                \\dfrac
                    {${4 * facteur_2}}
                    {${5 * facteur_2}}  `)}
		</Item>
		<Item lignes={2}>
			{@html math(`
                    \\dfrac{54}{63} = \\dfrac{6 \\times 9}{7 \\times 9} = \\dfrac{6 \\times \\cancel{9}}{7 \\times \\cancel{9}} = \\dfrac{6}{7}
                `)}
		</Item>
	</Exemples>
	<Schema lignes={5} aspectRatioSVG={2}>
		{#snippet svg()}
			// 2/3
			<rect x={200} y={200} width={600} height={600} fill="white" />
			<rect x={200} y={200} width={600} height={400} fill="red" stroke="none" />
			{#each [200, 400, 600, 800] as y}
				<line x1={200} x2={800} y1={y} y2={y} stroke="black" stroke-width={5} />
			{/each}
			{#each [200, 800] as x}
				<line x1={x} x2={x} y1={200} y2={800} stroke="black" stroke-width={5} />
			{/each}

			// fraction égale à 2/3
			<g style="transform: translate(1000px, 0)">
				<rect x={200} y={200} width={600} height={600} fill="white" />
				<rect x={200} y={200} width={600} height={400} fill="red" stroke="none" />
				{#each [200, 400, 600, 800] as y}
					<line x1={200} x2={800} y1={y} y2={y} stroke="black" stroke-width={5} />
				{/each}
				{#each Array(facteur_1 + 1)
					.fill(0)
					.map((_, i) => 200 + (i / facteur_1) * 600) as x}
					<line x1={x} x2={x} y1={200} y2={800} stroke="black" stroke-width={5} />
				{/each}
			</g>
		{/snippet}
	</Schema>
	<Schema lignes={5} aspectRatioSVG={2}>
		{#snippet svg()}
			// 4/5
			<rect x={200} y={0} width={600} height={1000} fill="white" />
			<rect x={200} y={0} width={600} height={800} fill="red" stroke="none" />
			{#each [0, 200, 400, 600, 800, 1000] as y}
				<line x1={200} x2={800} y1={y} y2={y} stroke="black" stroke-width={5} />
			{/each}
			{#each [200, 800] as x}
				<line x1={x} x2={x} y1={0} y2={1000} stroke="black" stroke-width={5} />
			{/each}

			// fraction égale à 2/3
			<g style="transform: translate(1000px, 0)">
				<rect x={200} y={0} width={600} height={1000} fill="white" />
				<rect x={200} y={0} width={600} height={800} fill="red" stroke="none" />
				{#each [0, 200, 400, 600, 800, 1000] as y}
					<line x1={200} x2={800} y1={y} y2={y} stroke="black" stroke-width={5} />
				{/each}
				{#each Array(facteur_2 + 1)
					.fill(0)
					.map((_, i) => 200 + (i / facteur_2) * 600) as x}
					<line x1={x} x2={x} y1={0} y2={1000} stroke="black" stroke-width={5} />
				{/each}
			</g>
		{/snippet}
	</Schema>
</Contenu>
