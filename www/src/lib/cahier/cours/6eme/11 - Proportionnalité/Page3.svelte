<script lang="ts">
	import { Contenu, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Methode, Paragraphe, Schema } from '$lib/cahier/composants/de_cours/*';
</script>

<Contenu>
	<Partie numero={2} titre="La quatrième proportionnelle" />
	<Paragraphe nom_du_paragraphe="But" couleur="noir" lignes={3}>
		Dans cette partie, nous allons étudier plusieurs méthodes permettant de calculer la quatrième valeur d'un tableau de proportionnalité, lorsque 3
		autres valeurs sont connues.
	</Paragraphe>
	<Schema lignes={4} aspectRatioSVG={5}>
		{#snippet svg()}
			<rect x={500} y={250} width={3750} height={500} stroke="black" stroke-width={10} fill="none" />
			<line x1={500} y1={500} x2={4250} y2={500} stroke="black" stroke-width={10} />
			<text x={600} y={400} font-size={150} fill="black" text-anchor="start" dominant-baseline="middle">Masse de raisins (kg)</text>
			<text x={600} y={650} font-size={150} fill="black" text-anchor="start" dominant-baseline="middle">Prix (€)</text>
			<line x1={2250} y1={250} x2={2250} y2={750} stroke="black" stroke-width={10} />
			<text x={2750} y={400} font-size={150} fill="black" text-anchor="middle" dominant-baseline="middle">3</text>
			<text x={2750} y={650} font-size={150} fill="black" text-anchor="middle" dominant-baseline="middle">7,80</text>
			<line x1={3250} y1={250} x2={3250} y2={750} stroke="black" stroke-width={10} />
			<line x1={4250} y1={250} x2={4250} y2={750} stroke="black" stroke-width={10} />
			<text x={3750} y={400} font-size={150} fill="black" text-anchor="middle" dominant-baseline="middle">6</text>
			<text x={3750} y={650} font-size={150} fill="black" text-anchor="middle" dominant-baseline="middle">?</text>
		{/snippet}
	</Schema>
	<SousPartie numero={1} titre="Homogénéité" />
	<Methode>Multiplier (ou diviser) toute une colonne par une même valeur.</Methode>
	<Schema lignes={4} aspectRatioSVG={5}>
		{#snippet svg()}
			<defs>
				<marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
					<path d="M0,0 L0,6 L9,3 z" stroke="none" fill="blue" />
				</marker>
			</defs>
			<rect x={500} y={250} width={3750} height={500} stroke="black" stroke-width={10} fill="none" />
			<line x1={500} y1={500} x2={4250} y2={500} stroke="black" stroke-width={10} />
			<text x={600} y={400} font-size={150} fill="black" text-anchor="start" dominant-baseline="middle">Masse de raisins (kg)</text>
			<text x={600} y={650} font-size={150} fill="black" text-anchor="start" dominant-baseline="middle">Prix (€)</text>
			<line x1={2250} y1={250} x2={2250} y2={750} stroke="black" stroke-width={10} />
			<text x={2750} y={400} font-size={150} fill="black" text-anchor="middle" dominant-baseline="middle">3</text>
			<text x={2750} y={650} font-size={150} fill="black" text-anchor="middle" dominant-baseline="middle">7,80</text>
			<line x1={3250} y1={250} x2={3250} y2={750} stroke="black" stroke-width={10} />
			<line x1={4250} y1={250} x2={4250} y2={750} stroke="black" stroke-width={10} />
			<text x={3750} y={400} font-size={150} fill="black" text-anchor="middle" dominant-baseline="middle">6</text>
			<text x={3750} y={650} font-size={150} fill="black" text-anchor="middle" dominant-baseline="middle">?</text>
			<path d="M 2750,200 l 0 -125 l 1000 0 l 0 75 " stroke="blue" fill="none" stroke-width={10} marker-end="url(#arrow)" />
			<path d="M 2750,825 l 0 125 l 1000 0 l 0 -75 " stroke="blue" fill="none" stroke-width={10} marker-end="url(#arrow)" />
			<text x={3250} y={150} font-size={120} fill="blue" text-anchor="middle" dominant-baseline="middle">×2</text>
			<text x={3250} y={900} font-size={120} fill="blue" text-anchor="middle" dominant-baseline="middle">×2</text>
		{/snippet}
	</Schema>
	<SousPartie numero={2} titre="Passage à l'unité" />
	<Methode>Se ramener à une colonne contenant le nombre 1.</Methode>
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
			<text x={3850} y={400} font-size={150} fill="black" text-anchor="middle" dominant-baseline="middle">6</text>
			<text x={3850} y={650} font-size={150} fill="black" text-anchor="middle" dominant-baseline="middle">?</text>
			<text x={3250} y={400} font-size={150} fill="black" text-anchor="middle" dominant-baseline="middle">1</text>
			<text x={3250} y={650} font-size={150} fill="black" text-anchor="middle" dominant-baseline="middle">2,60</text>
			<path d="M 2650,200 l 0 -125 l 500 0 l 0 75 " stroke="blue" fill="none" stroke-width={10} marker-end="url(#blue_arrow)" />
			<text x={2875} y={180} font-size={130} fill="blue" text-anchor="middle" dominant-baseline="middle">÷3</text>
			<path d="M 2650,825 l 0 125 l 500 0 l 0 -75 " stroke="blue" fill="none" stroke-width={10} marker-end="url(#blue_arrow)" />
			<text x={2875} y={880} font-size={130} fill="blue" text-anchor="middle" dominant-baseline="middle">÷3</text>
			<path d="M 3400,200 l 0 -125 l 450 0 l 0 75 " stroke="red" fill="none" stroke-width={10} marker-end="url(#red_arrow)" />
			<text x={3625} y={180} font-size={130} fill="red" text-anchor="middle" dominant-baseline="middle">×6</text>
			<path d="M 3400,825 l 0 125 l 450 0 l 0 -75 " stroke="red" fill="none" stroke-width={10} marker-end="url(#red_arrow)" />
			<text x={3625} y={880} font-size={130} fill="red" text-anchor="middle" dominant-baseline="middle">×6</text>
		{/snippet}
	</Schema>
</Contenu>
