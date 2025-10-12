<script lang="ts">
	import { Chapitre, Contenu, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Methode, Schema } from '$lib/cahier/composants/de_cours/*';
</script>

<Chapitre titre="Utiliser la proportionnalité" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Calculer une quatrième proportionnelle" />
	<SousPartie numero={1} titre="Linéarité" />
	<Methode>Multiplier ou diviser une colonne par le même nombre.</Methode>
	<Schema lignes={4} aspectRatioSVG={5}>
		{#snippet svg()}
			<rect x={500} y={250} width={3500} height={500} fill="none" stroke="black" stroke-width={8} />
			<line x1={2000} x2={2000} y1={250} y2={750} stroke="black" stroke-width={8} />
			<line x1={3000} x2={3000} y1={250} y2={750} stroke="black" stroke-width={8} />
			<text x={500 + 125} y={450} text-anchor="start" font-size={120}>masse de pommes (kg) </text>
			<line x1={500} x2={4000} y1={500} y2={500} stroke="black" stroke-width={8} />
			<text x={500 + 125} y={700} text-anchor="start" font-size={120}>prix (€)</text>
			<text x={2500} y={450} text-anchor="middle" font-size={120}>3</text>
			<text x={2500} y={700} text-anchor="middle" font-size={120}>4,50</text>
		{/snippet}
	</Schema>
</Contenu>
