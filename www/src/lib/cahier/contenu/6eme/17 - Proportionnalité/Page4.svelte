<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Methode, Schema } from '$lib/cahier/composants/de_cours/*';
</script>

<Contenu>
	<SousPartie numero={3} titre="Coefficient de proportionnalité" />
	<Methode lignes={2}>Calculer le coefficient de proportionnalité, pour passer d'une ligne à l'autre.</Methode>
	<Schema lignes={4} aspectRatioSVG={5}>
		{#snippet svg()}
			<rect x={500} y={250} width={3750} height={500} stroke="black" stroke-width={10} fill="none" />
			<line x1={500} y1={500} x2={4250} y2={500} stroke="black" stroke-width={10} />
			<text x={600} y={400} font-size={150} fill="black" text-anchor="start" dominant-baseline="middle">Masse de raisins (kg)</text>
			<text x={600} y={650} font-size={150} fill="black" text-anchor="start" dominant-baseline="middle">Prix (€)</text>
			<line x1={2250} y1={250} x2={2250} y2={750} stroke="black" stroke-width={10} />
			<text x={2700} y={400} font-size={150} fill="black" text-anchor="middle" dominant-baseline="middle">3</text>
			<text x={2700} y={650} font-size={150} fill="black" text-anchor="middle" dominant-baseline="middle">7,80</text>
			<line x1={3250} y1={250} x2={3250} y2={750} stroke="black" stroke-width={10} />
			<line x1={4250} y1={250} x2={4250} y2={750} stroke="black" stroke-width={10} />
			<text x={3750} y={400} font-size={150} fill="black" text-anchor="middle" dominant-baseline="middle">6</text>
			<text x={3750} y={650} font-size={150} fill="black" text-anchor="middle" dominant-baseline="middle">?</text>
		{/snippet}
	</Schema>
	<SousPartie numero={4} titre="Additivité" />
	<Methode>Additionner deux colonnes pour en obtenir une troisième.</Methode>
	<Schema lignes={4} aspectRatioSVG={5}>
		{#snippet svg()}
			<rect x={500} y={250} width={3750} height={500} stroke="black" stroke-width={10} fill="none" />
			<line x1={500} y1={500} x2={4250} y2={500} stroke="black" stroke-width={10} />
			<text x={600} y={400} font-size={150} fill="black" text-anchor="start" dominant-baseline="middle">Masse de raisins (kg)</text>
			<text x={600} y={650} font-size={150} fill="black" text-anchor="start" dominant-baseline="middle">Prix (€)</text>
			<line x1={2250} y1={250} x2={2250} y2={750} stroke="black" stroke-width={10} />
			<text x={2700} y={400} font-size={150} fill="black" text-anchor="middle" dominant-baseline="middle">3</text>
			<text x={2700} y={650} font-size={150} fill="black" text-anchor="middle" dominant-baseline="middle">7,80</text>
			<line x1={3250} y1={250} x2={3250} y2={750} stroke="black" stroke-width={10} />
			<line x1={4250} y1={250} x2={4250} y2={750} stroke="black" stroke-width={10} />
			<text x={3750} y={400} font-size={150} fill="black" text-anchor="middle" dominant-baseline="middle">6</text>
			<text x={3750} y={650} font-size={150} fill="black" text-anchor="middle" dominant-baseline="middle">?</text>
		{/snippet}
	</Schema>
</Contenu>
