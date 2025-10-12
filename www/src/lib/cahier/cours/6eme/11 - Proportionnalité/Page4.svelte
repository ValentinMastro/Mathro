<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Methode, Schema } from '$lib/cahier/composants/de_cours/*';
</script>

<Contenu>
	<SousPartie numero={3} titre="Coefficient de proportionnalité" />
	<Methode lignes={2}>Calculer le coefficient de proportionnalité, pour passer d'une ligne à l'autre.</Methode>
	<Schema lignes={4} aspectRatioSVG={5}>
		{#snippet svg()}
			<rect x={500} y={250} width={2750} height={500} stroke="black" stroke-width={10} fill="none" />
			<line x1={500} y1={500} x2={3250} y2={500} stroke="black" stroke-width={10} />
			<text x={600} y={400} font-size={150} fill="black" text-anchor="start" dominant-baseline="middle">Masse de raisins (kg)</text>
			<text x={600} y={650} font-size={150} fill="black" text-anchor="start" dominant-baseline="middle">Prix (€)</text>
			<line x1={2250} y1={250} x2={2250} y2={750} stroke="black" stroke-width={10} />
			<text x={2500} y={400} font-size={150} fill="black" text-anchor="middle" dominant-baseline="middle">3</text>
			<text x={2500} y={650} font-size={150} fill="black" text-anchor="middle" dominant-baseline="middle">7,80</text>
			<line x1={3250} y1={250} x2={3250} y2={750} stroke="black" stroke-width={10} />
			<line x1={2750} y1={250} x2={2750} y2={750} stroke="black" stroke-width={10} />
			<text x={3000} y={400} font-size={150} fill="black" text-anchor="middle" dominant-baseline="middle">6</text>
			<text x={3000} y={650} font-size={150} fill="black" text-anchor="middle" dominant-baseline="middle">?</text>
			<path d="M 3400 350 a 150 150 0 0 1 0 300 l -50 0 l 50 25 l 0 -50 l -50 25 " stroke="red" stroke-width={10} fill="none" />
			<text x={3600} y={500} font-size={150} fill="black" text-anchor="left" dominant-baseline="middle">× 2,60 €/kg</text>
		{/snippet}
	</Schema>
	<SousPartie numero={4} titre="Additivité" />
	<Methode>Additionner deux colonnes pour en obtenir une troisième.</Methode>
	<Schema lignes={4} aspectRatioSVG={5}>
		{#snippet svg()}
			<defs>
				<marker id="blue_arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
					<path d="M0,0 L0,6 L9,3 z" stroke="none" fill="blue" />
				</marker>
				<marker id="red_arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
					<path d="M0,0 L0,6 L9,3 z" stroke="none" fill="red" />
				</marker>
			</defs>
			<rect x={500} y={250} width={3750} height={500} stroke="black" stroke-width={10} fill="none" />
			<line x1={500} y1={500} x2={4250} y2={500} stroke="black" stroke-width={10} />
			<text x={600} y={400} font-size={150} fill="black" text-anchor="start" dominant-baseline="middle">Masse de raisins (kg)</text>
			<text x={600} y={650} font-size={150} fill="black" text-anchor="start" dominant-baseline="middle">Prix (€)</text>
			<line x1={2250} y1={250} x2={2250} y2={750} stroke="black" stroke-width={10} />
			<text x={2650} y={400} font-size={150} fill="black" text-anchor="middle" dominant-baseline="middle">3</text>
			<text x={2650} y={650} font-size={150} fill="black" text-anchor="middle" dominant-baseline="middle">7,80</text>
			<line x1={3000} y1={250} x2={3000} y2={750} stroke="black" stroke-width={10} />
			<line x1={3500} y1={250} x2={3500} y2={750} stroke="black" stroke-width={10} />
			<text x={3850} y={400} font-size={150} fill="black" text-anchor="middle" dominant-baseline="middle">4</text>
			<text x={3850} y={650} font-size={150} fill="black" text-anchor="middle" dominant-baseline="middle">?</text>
			<text x={3250} y={400} font-size={150} fill="black" text-anchor="middle" dominant-baseline="middle">1</text>
			<text x={3250} y={650} font-size={150} fill="black" text-anchor="middle" dominant-baseline="middle">2,60</text>
			<path d="M 2650,250 l 0 -125 l 600 0 l 0 125 " stroke="blue" fill="none" stroke-width={10} />
			<path d="M 2650,750 l 0 125 l 600 0 l 0 -125 " stroke="blue" fill="none" stroke-width={10} />
			<text x={3000} y={830} font-size={130} fill="red" text-anchor="middle" dominant-baseline="middle">+</text>
			<text x={3000} y={220} font-size={130} fill="red" text-anchor="middle" dominant-baseline="middle">+</text>
			<path d="M 3000,125 l 0 -50 l 850 0 l 0 75 " stroke="blue" fill="none" stroke-width={10} marker-end="url(#blue_arrow)" />
			<path d="M 3000,875 l 0 50 l 850 0 l 0 -75 " stroke="blue" fill="none" stroke-width={10} marker-end="url(#blue_arrow)" />
		{/snippet}
	</Schema>
</Contenu>
