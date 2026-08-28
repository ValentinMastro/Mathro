<script lang="ts">
	import { Contenu } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Item, Schéma } from '$lib/cahier/composants/de_cours/*';
</script>

<Contenu>
	<Definition lignes={5}>
		Deux angles sont alternes-internes si, lorsque deux droites sont coupées par une troisième (la sécante) :
		<Item>les angles ont des sommets différents</Item>
		<Item>les angles ne sont pas du même côté de la sécante</Item>
		<Item>les angles sont à l'intérieur des deux droites</Item>
	</Definition>

	<Schéma lignes={5} aspectRatioSVG={4}>
		{#snippet svg()}
			<line x1={250} y1={200} x2={3750} y2={200} stroke="black" stroke-width={8} />
			<line x1={250} y1={800} x2={3750} y2={800} stroke="black" stroke-width={8} />
			<line x1={1800} y1={0} x2={2200} y2={1000} stroke="black" stroke-width={8} />
			<!-- Numérotation des angles -->
			<text x={1850 - 50} y={200 - 50} text-anchor="middle" font-size={120}>1</text>
			<text x={1850 + 50} y={200 - 50} text-anchor="middle" font-size={120}>2</text>
			<text x={1900 - 50} y={200 + 100} text-anchor="middle" font-size={120}>3</text>
			<text x={1900 + 50} y={200 + 100} text-anchor="middle" font-size={120}>4</text>
			<text x={2050 - 50} y={800 - 50} text-anchor="middle" font-size={120}>5</text>
			<text x={2100 + 50} y={800 - 50} text-anchor="middle" font-size={120}>6</text>
			<text x={2100 - 50} y={800 + 100} text-anchor="middle" font-size={120}>7</text>
			<text x={2150 + 50} y={800 + 100} text-anchor="middle" font-size={120}>8</text>
		{/snippet}
	</Schéma>

	<Definition lignes={2}>Deux angles sont complémentaires si la somme de leur mesure est égale à 90°.</Definition>

	<Definition lignes={2}>Deux angles sont supplémentaires si la somme de leur mesure est égale à 180°.</Definition>
</Contenu>
