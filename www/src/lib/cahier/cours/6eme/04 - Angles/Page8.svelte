<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemple, Schema, Texte } from '$lib/cahier/composants/de_cours/*';
	import { Angle, DemiDroite, Point } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={4} titre="Bissectrice d'un angle saillant" />
	<Definition lignes={2}>
		La bissectrice d'un angle est la (demi-)droite qui coupe son angle en <br />
		deux autres de même mesure.
	</Definition>
	<Exemple />
	<Schema lignes={10} aspectRatioSVG={2}>
		{#snippet svg()}
			{@const A = { x: 200, y: 200 }}
			{@const B = { x: 200, y: 800 }}
			{@const C = { x: 1600, y: 800 }}
			{@const D = { x: 900, y: 100 }}
			<Point nom="A" point={A} type={{ forme: 'croix', taille: 20 }} dx={-50} dy={0} />
			<Point nom="B" point={B} type={{ forme: 'croix', taille: 20 }} dx={-50} dy={50} />
			<Point nom="C" point={C} type={{ forme: 'croix', taille: 20 }} dx={0} dy={100} />
			<Point nom="D" point={D} type={{ forme: 'croix', taille: 20 }} dx={0} dy={100} stroke="red" />
			<Angle r={80} points={[A, B, D]} fill="skyblue" />
			<Angle r={120} points={[C, B, D]} fill="skyblue" />
			<DemiDroite origine={B} passantPar={A} stroke="black" stroke-width={5} />
			<DemiDroite origine={B} passantPar={C} stroke="black" stroke-width={5} />
			<DemiDroite origine={B} passantPar={D} stroke="red" stroke-width={5} />
		{/snippet}
	</Schema>
	<Texte lignes={3} couleur="bleu">
		{@html math('[\\text{BD})')} est la bissectrice de l'angle {@html math('\\widehat{\\text{ABC}}')}, coupés en deux angles <br />
		{@html math('\\widehat{\\text{ABD}}')} et {@html math('\\widehat{\\text{DBC}}')} de 45°.
	</Texte>
</Contenu>
