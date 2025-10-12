<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Formules, Item, Schema } from '$lib/cahier/composants/de_cours/*';

	import { math } from 'mathlifier';
</script>

<Contenu>
	<SousPartie numero={2} titre="Formulaire" />
	<Formules lignes={2}>
		<Item>
			{@html math('\\mathcal{A}_{\\text{carré}} = \\text{côté} \\times \\text{côté}')}
		</Item>
		<Item>
			{@html math('\\mathcal{A}_{\\text{rectangle}} = \\text{Longueur} \\times \\text{largeur}')}
		</Item>
	</Formules>
	<Schema lignes={5} aspectRatioSVG={4}>
		{#snippet svg()}
			<!-- Carré -->
			<rect x={200} y={200} width={600} height={600} fill="none" stroke="black" stroke-width={8} />
			<text x={400} y={900} font-size={100}>côté</text>
			<!-- Rectangle -->
			<rect x={1000} y={200} width={800} height={400} fill="none" stroke="black" stroke-width={8} />
			<text x={1150} y={750} font-size={100}>↑ Longueur</text>
			<text x={1200} y={400} font-size={100}>largeur ⟶</text>
		{/snippet}
	</Schema>
</Contenu>
