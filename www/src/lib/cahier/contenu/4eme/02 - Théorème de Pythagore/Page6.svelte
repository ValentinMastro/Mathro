<script lang="ts">
	import { Contenu } from '$lib/cahier/composants/de_chapitrage/*';
	import { Schema, Texte } from '$lib/cahier/composants/de_cours/*';
	import { LatexAlign } from '$lib/cahier/composants/math/*';
	import { AngleDroit, Polygone, TexteSVG } from '$lib/cahier/composants/svg/*';
</script>

<Contenu>
	<Texte>Dans le cas où on souhaite calculer un côté de l'angle droit :</Texte>
	<Schema lignes={10} aspectRatioSVG={1.2}>
		{#snippet svg()}
			{@const A = { x: 800, y: 200 }}
			{@const B = { x: 200, y: 200 }}
			{@const C = { x: 800, y: 800 }}
			<Polygone points={[A, B, C]} afficher_points />
			<AngleDroit taille={40} points={[B, A, C]} />
			<TexteSVG point={{ x: (C.x + B.x) / 2, y: (C.y + B.y) / 2 }} dx={-120}>29 cm</TexteSVG>
			<TexteSVG point={{ x: (A.x + C.x) / 2, y: (A.y + C.y) / 2 }} dx={50} fill="red">?</TexteSVG>
			<TexteSVG point={{ x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 }} dy={-50}>20 cm</TexteSVG>
		{/snippet}
	</Schema>
	<Texte lignes={9}>
		<u>On sait que : </u> le triangle ABC est rectangle en A, l'hypoténuse est {@html math('[\\text{BC}]')}.<br />
		<u>D'après</u> le théorème de Pythagore <br />

		<LatexAlign
			lignes={7}
			code={`
			\\text{BC}^2 &= \\text{AC}^2 + \\text{AB}^2 \\\\
			\\text{AC}^2 &= \\text{BC}^2 - \\text{AB}^2 \\\\
			\\text{AC}^2 &= 29^2 - 20^2 \\\\
			\\text{AC}^2 &= 841 - 400 \\\\
			\\text{AC}^2 &= 441 \\\\
			\\text{AC} &= \\sqrt{441} \\\\
			\\text{AC} &= 21~\\text{cm}`}
		/>
	</Texte>
</Contenu>
