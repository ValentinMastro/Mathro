<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Schéma, Exemple, Item, Paragraphe } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import { Fleche, Polygone, Rectangle, Segment, TexteSVG } from '$lib/cahier/composants/svg/*';

	const U = { x: 100, y: 500 };
	const V = { x: 560, y: 252 };
	const W = { x: 600, y: 748 };
	const X = { x: 840, y: 100 };
	const Y = { x: 900, y: 900 };

	const milieuUV = { x: (U.x + V.x) / 2, y: (U.y + V.y) / 2 };
	const milieuUW = { x: (U.x + W.x) / 2, y: (U.y + W.y) / 2 };
</script>

<Contenu>
	<Partie numero={2} titre="Rédaction" />
	<Exemple />
	<Schéma lignes={10} aspectRatioSVG={1.3} html_lignes_vides={3}>
		{#snippet svg()}
			<!-- Cadre -->
			<Rectangle
				points={[
					{ x: 0, y: 2 },
					{ x: 1000 - 1, y: 1000 }
				]}
			/>

			<Polygone points={[U, X, Y]} noms={['U', 'X', 'Y']} afficher_noms distance_nom={45} />
			<Segment points={[V, W]} />
			<TexteSVG point={{ x: 560, y: 220 }}>V</TexteSVG>
			<TexteSVG point={{ x: 600, y: 810 }}>W</TexteSVG>

			<Segment points={[U, V]} stroke="red" stroke-dasharray="30,10" stroke-width={12} />
			<Segment points={[U, W]} stroke="red" stroke-dasharray="30,10" stroke-width={12} />
			<TexteSVG
				point={milieuUV}
				style="fill: red; transform-origin: {milieuUV.x}px {milieuUV.y}px; transform: rotateZ(-28deg) translate(-30px, -30px)"
			>
				4 cm
			</TexteSVG>
			<TexteSVG point={milieuUW} style="fill: red; transform-origin: {milieuUW.x}px {milieuUW.y}px; transform: rotateZ(28deg) translate(50px, 50px)">
				4,5 cm
			</TexteSVG>

			{@const U95X = { x: 0.95 * U.x + 0.05 * X.x, y: 0.95 * U.y + 0.05 * X.y }}
			{@const U47_5X = { x: 0.475 * U.x + 0.525 * X.x, y: 0.475 * U.y + 0.525 * X.y }}
			<Fleche points={[U95X, X]} fill="green" stroke="green" style="transform: translate(0px, 30px);" />
			<Fleche points={[X, U95X]} fill="green" stroke="green" style="transform: translate(0px, 30px);" />
			<TexteSVG point={U47_5X} style="fill: green; transform-origin: {U47_5X.x}px {U47_5X.y}px; transform: rotateZ(-30deg) translate(0, 60px)">
				8 cm
			</TexteSVG>

			<Rectangle
				points={[
					{ x: 270 - 200, y: 80 - 40 },
					{ x: 270 + 200, y: 80 + 40 }
				]}
			/>
			<TexteSVG point={{ x: 270, y: 80 }}>(WV) // (XY)</TexteSVG>
		{/snippet}
		{#snippet html()}
			<Paragraphe nom_du_paragraphe="Question :">Calculer UY.</Paragraphe>
		{/snippet}
	</Schéma>

	<LigneVide lignes={2} />

	<Paragraphe nom_du_paragraphe="On sait que : " couleur="bleu" lignes={3}>
		<Item>les points U, V, X sont alignés</Item>
		<Item>les points U, W, Y sont alignés</Item>
		<Item>
			<math>
				<mo>(</mo>
				<mi>WV</mi>
				<mo>)</mo>
				<mo>//</mo>
				<mo>(</mo>
				<mi>XY</mi>
				<mo>)</mo>
			</math>
		</Item>
	</Paragraphe>

	<Paragraphe nom_du_paragraphe="D'après le théorème de Thalès :" couleur="bleu" lignes={6}>
		<center>
			<math>
				<mfrac>
					<mi>UX</mi>
					<mi>UV</mi>
				</mfrac>
				<mo>=</mo>
				<mfrac>
					<mi>UY</mi>
					<mi>UW</mi>
				</mfrac>
				<mo>=</mo>
				<mfrac>
					<mi>XY</mi>
					<mi>VW</mi>
				</mfrac>
			</math>
			<br />
			<br />
			<math>
				<mfrac>
					<mn>8</mn>
					<mn>4</mn>
				</mfrac>
				<mo>=</mo>
				<mfrac>
					<mi>UY</mi>
					<mn>4,5</mn>
				</mfrac>
				<mo>=</mo>
				<mfrac>
					<mi>XY</mi>
					<mi>VW</mi>
				</mfrac>
			</math>
			<br />
			<br />
			<math>
				<mi>UY</mi>
				<mo>=</mo>
				<mfrac>
					<mrow>
						<mn>8</mn>
						<mo>×</mo>
						<mn>4,5</mn>
					</mrow>
					<mn>4</mn>
				</mfrac>
				<mo>=</mo>
				<mn>9</mn>
				<mspace width="1em" />
				<mtext>(produit en croix)</mtext>
			</math>
		</center>
	</Paragraphe>
</Contenu>
