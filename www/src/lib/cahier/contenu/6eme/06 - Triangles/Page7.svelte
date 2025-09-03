<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Propriete, Schema, Texte } from '$lib/cahier/composants/de_cours/*';
	import { Angle, Codage, Polygone } from '$lib/cahier/composants/svg/*';

	import { math } from 'mathlifier';
</script>

<Contenu>
	<SousPartie numero={3} titre="Triangle équilatéral" />
	<Definition>Un triangle équilatéral possède 3 côtés de même longueur.</Definition>
	<Propriete>Les 3 angles sont égaux et mesurent chacun 60°.</Propriete>
	<Schema lignes={8} aspectRatioSVG={20 / 8}>
		{#snippet svg()}
			{@const A = { x: 750, y: 875 }}
			{@const B = { x: 1500, y: 875 }}
			{@const C = { x: (A.x + B.x) / 2, y: 875 - Math.hypot(A.x - B.x, A.y - B.y) * Math.sin(Math.PI / 3) }}
			<Angle r={100} points={[A, B, C]} fill="red" />
			<Angle r={100} points={[B, A, C]} fill="red" />
			<Angle r={100} points={[A, C, B]} fill="red" />
			<Polygone points={[A, B, C]} stroke="black" fill="none" stroke-width="8" afficher_points />
			<Codage points={[A, B]} stroke="red" />
			<Codage points={[C, B]} stroke="red" />
			<Codage points={[A, C]} stroke="red" />
		{/snippet}
	</Schema>
	<Texte couleur="bleu" lignes={2}>
		{@html math('\\text{AB} ~=\\text{AC} ~=\\text{BC}')} <br />
		{@html math('\\widehat{\\text{ABC}} = \\widehat{\\text{BCA}} = \\widehat{\\text{CAB}} = 60^\\circ')}
	</Texte>
</Contenu>
