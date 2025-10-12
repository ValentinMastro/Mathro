<script lang="ts">
	import { Contenu } from '$lib/cahier/composants/de_chapitrage/*';
	import { Schema, Exemples, Texte, Item } from '$lib/cahier/composants/de_cours/*';
	import { LatexAlign } from '$lib/cahier/composants/math/*';
	import { AngleDroit, Polygone, TexteSVG } from '$lib/cahier/composants/svg/*';
	import { math, alignStar } from 'mathlifier';
</script>

<Contenu>
	<Exemples lignes={2}>
		Le théorème de Pythagore permet de calculer <i>une longueur dans un triangle rectangle</i>, si on connaît les <i>deux autres</i>.
	</Exemples>
	<Texte>Dans le cas où on souhaite calculer la longueur de l'hypoténuse :</Texte>
	<Schema lignes={10} aspectRatioSVG={1.2}>
		{#snippet svg()}
			{@const A = { x: 800, y: 200 }}
			{@const B = { x: 800, y: 800 }}
			{@const C = { x: 200, y: 200 }}
			<Polygone points={[A, B, C]} afficher_points />
			<AngleDroit points={[B, A, C]} taille={40} />
			<TexteSVG point={{ x: (C.x + B.x) / 2, y: (C.y + B.y) / 2 }} dx={-100} fill="red">?</TexteSVG>
			<TexteSVG point={{ x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 }} dx={100}>3 cm</TexteSVG>
			<TexteSVG point={{ x: (A.x + C.x) / 2, y: (A.y + C.y) / 2 }} dy={-50}>4 cm</TexteSVG>
		{/snippet}
	</Schema>
	<Texte lignes={8}>
		<u>On sait que : </u> le triangle ABC est rectangle en A, l'hypoténuse est {@html math('[\\text{BC}]')}.<br />
		<u>D'après</u> le théorème de Pythagore : <br />
		<LatexAlign
			lignes={6}
			code={`
		    \\text{BC}^2 &= \\text{AC}^2 + \\text{AB}^2 \\\\
			\\text{BC}^2 &= 4^2 + 3^2 \\\\
			\\text{BC}^2 &= 16 + 9 \\\\
			\\text{BC}^2 &= 25 \\\\
			\\text{BC} &= \\sqrt{25} \\\\
			\\text{BC} &= 5~\\text{cm}
		`}
		/>
	</Texte>
</Contenu>
