<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definitions, Exemples, Item, Schema, Texte } from '$lib/cahier/composants/de_cours/*';
	import { Angle, DemiDroite, Droite, Point, Polygone } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<SousPartie numero={3} titre="Angles complémentaires et supplémentaires" />
	<Definitions lignes={4}>
		<Item lignes={2}>Deux angles sont complémentaires si la somme de leur mesure est égale à 90°.</Item>
		<Item lignes={2}>Deux angles sont supplémentaires si la somme de leur mesure est égale à 180°.</Item>
	</Definitions>
	<Exemples />
	<Schema lignes={10} aspectRatioSVG={2}>
		{#snippet svg()}
			{@const A = { x: 200, y: 100 }}
			{@const B = { x: 200, y: 800 }}
			{@const C = { x: 800, y: 800 }}
			<Angle points={[B, A, C]} r={100} fill="orange" />
			<Angle points={[B, C, A]} r={100} fill="purple" />
			<Polygone afficher_points points={[A, B, C]} distance_nom={60} />
			{@const D = { x: 1000, y: 100 }}
			{@const E = { x: 1700, y: 800 }}
			{@const F = { x: 1500, y: 100 }}
			{@const G = { x: 1400, y: 500 }}
			<Angle points={[D, G, F]} r={100} fill="skyblue" />
			<Angle points={[E, G, F]} r={100} fill="forestgreen" />
			<Droite passantPar={[D, E]} stroke="black" stroke-width={5} />
			<Point nom="D" point={D} type={{ forme: 'croix', taille: 20 }} font-size={60} dx={0} dy={80} />
			<Point nom="E" point={E} type={{ forme: 'croix', taille: 20 }} font-size={60} dx={0} dy={80} />
			<Point nom="F" point={F} type={{ forme: 'croix', taille: 20 }} font-size={60} dx={40} dy={80} />
			<Point nom="G" point={G} type={{ forme: 'croix', taille: 20 }} font-size={60} dx={-40} dy={80} stroke="red" />
			<DemiDroite origine={G} passantPar={F} stroke="black" stroke-width={5} />
		{/snippet}
	</Schema>
	<Texte couleur="bleu" lignes={2}>
		{@html math('\\color{orange}\\widehat{\\text{BAC}}')} et {@html math('\\color{purple}\\widehat{\\text{ACB}}')} sont complémentaires. <br />
		{@html math('\\color{skyblue}\\widehat{\\text{DEF}}')} et {@html math('\\color{forestgreen}\\widehat{\\text{EFG}}')} sont supplémentaires (et adjacents).
	</Texte>
</Contenu>
