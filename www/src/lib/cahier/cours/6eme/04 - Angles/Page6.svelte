<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemple, Item, Remarque, Schema, Texte } from '$lib/cahier/composants/de_cours/*';
	import { Angle, DemiDroite, Point } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<SousPartie numero={2} titre="Angles adjacents" />
	<Definition lignes={3}>
		Deux angles sont adjacents si :
		<Item>Ils ont le même sommet.</Item>
		<Item>Ils ont un côté en commun.</Item>
	</Definition>
	<Exemple />
	<Schema lignes={10} aspectRatioSVG={2}>
		{#snippet svg()}
			{@const type = { forme: 'croix', taille: 20 }}
			{@const taille_nom = 60}
			{@const { dx, dy } = { dx: 0, dy: 80 }}
			{@const O = { x: 200, y: 600 }}
			{@const A = { x: 600, y: 200 }}
			{@const B = { x: 1100, y: 900 }}
			{@const C = { x: 1300, y: 500 }}
			<Angle points={[A, O, C]} r={100} fill="forestgreen" />
			<Angle points={[C, O, B]} r={120} fill="red" />
			<DemiDroite origine={O} passantPar={A} stroke="black" stroke-width={5} />
			<DemiDroite origine={O} passantPar={B} stroke="black" stroke-width={5} />
			<DemiDroite origine={O} passantPar={C} stroke="black" stroke-width={5} />
			<Point nom="O" point={O} {type} font-size={taille_nom} {dx} {dy} stroke-width={5} />
			<Point nom="A" point={A} {type} font-size={taille_nom} {dx} {dy} stroke-width={5} />
			<Point nom="B" point={B} {type} font-size={taille_nom} {dx} {dy} stroke-width={5} />
			<Point nom="C" point={C} {type} font-size={taille_nom} {dx} {dy} stroke-width={5} />
		{/snippet}
	</Schema>
	<Texte couleur="bleu" lignes={3}>
		{@html math('\\color{darkgreen}\\widehat{\\text{AOC}}')} et {@html math('\\color{red}\\widehat{\\text{COB}}')} sont adjacents car :
		<Item>Ils ont le même sommet : {@html math('\\color{black}\\text{O}')}.</Item>
		<Item>Ils ont un côté en commun {@html math('[\\color{black}\\text{OC})')}.</Item>
	</Texte>
	<Remarque>
		{@html math('\\widehat{\\text{AOB}} = \\widehat{\\text{AOC}} + \\widehat{\\text{COB}}')}
	</Remarque>
</Contenu>
