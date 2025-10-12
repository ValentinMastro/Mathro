<script lang="ts">
	import { Contenu, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemple, Schema, Texte } from '$lib/cahier/composants/de_cours/*';
	import { Angle, Droite, Point, SecteurAngulaire } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={3} titre="Paires d'angles" />
	<SousPartie numero={1} titre="Opposés par le sommet" />
	<Definition lignes={4}>
		Lorsque deux droites sont sécantes en un point, elles forment quatre angles. <br />
		Dans ce cas, deux angles "face à face" sont appelés angles opposés par le sommet.
	</Definition>
	<Exemple />
	<Schema lignes={8} aspectRatioSVG={2.5}>
		{#snippet svg()}
			{@const type = { forme: 'croix', taille: 20 }}
			{@const taille_nom = 80}
			{@const { dx, dy } = { dx: 0, dy: 100 }}
			{@const A = { x: 250, y: 250 }}
			{@const B = { x: 2250, y: 875 }}
			{@const C = { x: 500, y: 625 }}
			{@const D = { x: 2000, y: 125 }}
			{@const O = { x: 960, y: 470 }}
			<Angle r={120} points={[A, O, D]} fill="green" />
			<Angle r={120} points={[B, O, C]} fill="green" />
			<Angle r={150} points={[C, O, A]} fill="red" />
			<Angle r={150} points={[B, O, D]} fill="red" />
			<Point nom="A" point={A} {type} font-size={taille_nom} {dx} {dy} />
			<Point nom="B" point={B} {type} font-size={taille_nom} {dx} {dy} />
			<Point nom="C" point={C} {type} font-size={taille_nom} {dx} {dy} />
			<Point nom="D" point={D} {type} font-size={taille_nom} {dx} {dy} />
			<Point nom="O" point={O} {type} font-size={taille_nom} {dx} {dy} />
			<Droite passantPar={[A, B]} stroke="black" stroke-width={5} />
			<Droite passantPar={[C, D]} stroke="black" stroke-width={5} />
		{/snippet}
	</Schema>
	<Texte couleur="bleu" lignes={2}>
		Les angles
		{@html math('\\color{forestgreen}\\widehat{\\text{AOD}}')} et
		{@html math('\\color{forestgreen}\\widehat{\\text{BOC}}')}
		sont opposés par le sommet {@html math('\\text{O}')}.
		<br />
		Les angles
		{@html math('\\color{red}\\widehat{\\text{AOC}}')} et
		{@html math('\\color{red}\\widehat{\\text{BOD}}')}
		sont opposés par le sommet {@html math('\\text{O}')}.
	</Texte>
</Contenu>
