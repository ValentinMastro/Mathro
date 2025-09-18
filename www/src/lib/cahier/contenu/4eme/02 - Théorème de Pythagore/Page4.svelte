<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Schema, Theoreme } from '$lib/cahier/composants/de_cours/*';
	import { AngleDroit, Grille, Polygone, Rectangle, TexteSVG } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={3} titre="Énoncé du théorème de Pythagore" />
	<Theoreme nom_du_theoreme="Théorème de Pythagore" lignes={4}>
		Si un triangle est rectangle, alors le carré de la longueur de l'hypoténuse est égale à la somme des carrés des longueurs des autres côtés.
		<br />
		Si {@html math('\\text{ABC}')} est rectangle en {@html math('\\text{B}')}, alors {@html math('\\text{AC}^2 = \\text{AB}^2 + \\text{BC}^2')}.
	</Theoreme>
	<Schema lignes={10} aspectRatioSVG={2}>
		{#snippet svg()}
			<!-- AB^2 -->
			{@const P1 = { x: 100, y: 300 }}
			{@const P2 = { x: 500, y: 700 }}
			<Rectangle points={[P1, P2]} fill="lightblue" stroke="none" />
			<Grille pas={100} points={[P1, P2]} stroke-dasharray="5 10" />
			<TexteSVG point={{ x: (P1.x + P2.x) / 2, y: (P1.y + P2.y) / 2 }} font-size={90}>AB²</TexteSVG>

			<!-- BC^2 -->
			{@const Q1 = { x: 500, y: 700 }}
			{@const Q2 = { x: 800, y: 1000 }}
			<Rectangle points={[Q1, Q2]} fill="lightgreen" stroke="none" />
			<Grille pas={100} points={[Q1, Q2]} stroke-dasharray="5 10" />
			<TexteSVG point={{ x: (Q1.x + Q2.x) / 2, y: (Q1.y + Q2.y) / 2 }} font-size={90}>BC²</TexteSVG>

			<!-- AC^2 -->
			{@const R1 = { x: 800, y: 700 }}
			{@const R2 = { x: R1.x + 500, y: R1.y + 500 }}
			<Rectangle points={[R1, R2]} fill="lightcoral" stroke-width={5} transform-origin="800 700" transform="rotate({-90 - 36.87})" />
			<Grille pas={100} points={[R1, R2]} stroke-dasharray="5 10" transform-origin="800 700" transform="rotate({-90 - 36.87})" />
			<TexteSVG point={{ x: 870, y: 350 }} font-size={90}>AC²</TexteSVG>

			<!-- Triangle rectangle -->
			{@const A = { x: 500, y: 300 }}
			{@const B = { x: 500, y: 700 }}
			{@const C = { x: 800, y: 700 }}
			<Polygone points={[A, B, C]} stroke-width={10} afficher_points type={{ forme: 'disque', taille: 0 }} />
			<AngleDroit points={[A, B, C]} taille={40} />

			<!-- Visualisation de l'égalité des carrés -->
			<Rectangle
				points={[
					{ x: 1400, y: 300 },
					{ x: 1900, y: 800 }
				]}
				fill="lightblue"
			/>
			<Rectangle
				points={[
					{ x: 1400, y: 300 },
					{ x: 1700, y: 600 }
				]}
				fill="lightgreen"
			/>
			<Grille
				pas={100}
				points={[
					{ x: 1400, y: 300 },
					{ x: 1900, y: 800 }
				]}
				stroke-dasharray="5 10"
			/>
		{/snippet}
	</Schema>
</Contenu>
