<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Schema, Propriete, Texte, Exemple } from '$lib/cahier/composants/de_cours/*';
	import { Angle, Codage, Polygone, Segment } from '$lib/cahier/composants/svg/*';

	import { math } from 'mathlifier';
</script>

<Contenu>
	<SousPartie numero={2} titre="Triangle isocèle" />
	<Definition lignes={2}>
		Un triangle isocèle possède deux côtés de même longueur. <br />
		Le troisième côté est appelé le <i>base</i> du triangle isocèle.
	</Definition>
	<Propriete>Les deux angles <i>adjacents à la base</i> sont égaux.</Propriete>
	<Schema lignes={5} aspectRatioSVG={4}>
		{#snippet svg()}
			{@const A = { x: 800, y: 200 }}
			{@const B = { x: 2400, y: 200 }}
			{@const C = { x: (A.x + B.x) / 2, y: 800 }}
			<Angle r={200} points={[A, B, C]} fill="deepskyblue" />
			<Angle r={200} points={[C, A, B]} fill="forestgreen" />
			<Polygone points={[A, B, C]} afficher_points stroke-width={10} distance_nom={110} />
			<Segment points={[A, B]} stroke-width={15} stroke="red" />
			<text x={C.x} y={A.y} font-size={100} dominant-baseline="middle" text-anchor="middle" dy={-50} fill="red">base</text>
			<Codage points={[A, C]} stroke="red" type="2 traits" />
			<Codage points={[B, C]} stroke="red" type="2 traits" />
		{/snippet}
	</Schema>
	<Texte couleur="bleu" lignes={3}>
		Le triangle est <i>isocèle en C</i>, car les côtés {@html math('[\\text{CA}]')} et {@html math('[\\text{CB}]')} ont la même <br />
		longueur. De plus, les angles {@html math('\\widehat{\\text{CAB}}')} et {@html math('\\widehat{\\text{CBA}}')} sont égaux.
	</Texte>
</Contenu>
