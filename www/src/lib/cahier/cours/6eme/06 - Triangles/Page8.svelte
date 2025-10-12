<script lang="ts">
	import { Contenu, DansLaMarge, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemple, Propriete, Item, Paragraphe, Schema, Texte } from '$lib/cahier/composants/de_cours/*';
	import { Slider } from '$lib/cahier/composants/de_marge/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import { Angle, AngleDroit, DemiDroite, Point, Segment } from '$lib/cahier/composants/svg/*';

	import { math } from 'mathlifier';

	let etape = $state(4);
</script>

<DansLaMarge>
	<LigneVide lignes={13} />
	<Slider bind:valeur={etape} min={0} max={4} pas={1} />
</DansLaMarge>

<Contenu>
	<Partie numero={6} titre="Somme des mesures des angles" />
	<Propriete>La somme des mesures des angles d'un triangle est égale à 180°.</Propriete>
	<Paragraphe nom_du_paragraphe="Exemple d'exercice" couleur="bleu" lignes={3}>
		<Item bullet="Q1)">
			Tracer le triangle IJK tel que
			{@html math('\\widehat{\\text{IJK}} = 90^\\circ')}, {@html math('\\widehat{\\text{IKJ}} = 45^\\circ')}, et
			{@html math('\\text{JK} = 4\\,\\text{cm}')}.
		</Item>
		<Item bullet="Q2)">
			Quelle est la mesure de l'angle {@html math('\\widehat{\\text{JIK}}')} ?
		</Item>
		<Item bullet="Q3)">Quelle est la nature du triangle IJK ?</Item>
	</Paragraphe>
	<Schema lignes={7} aspectRatioSVG={20 / 7}>
		{#snippet svg()}
			{@const carreau = 1000 / 7}
			{@const I = { x: 6 * carreau, y: 1 * carreau }}
			{@const J = { x: 6 * carreau, y: 6 * carreau }}
			{@const K = { x: 11 * carreau, y: 6 * carreau }}
			{#if etape >= 4}
				<Angle r={120} points={[J, I, K]} fill="blue" />
			{/if}
			{#if etape >= 2}
				<AngleDroit points={[I, J, K]} fill="red" />
				<DemiDroite origine={J} passantPar={I} stroke="red" />
			{/if}
			{#if etape >= 3}
				<Angle r={120} points={[J, K, I]} fill="forestgreen" />
				<DemiDroite origine={K} passantPar={I} stroke="forestgreen" />
			{/if}
			{#if etape >= 1}
				<Segment points={[J, K]} stroke-width={10} />
				<Point nom="J" point={J} type={{ forme: 'croix', taille: 30 }} stroke-width={10} font-size={100} dy={120} />
				<Point nom="K" point={K} type={{ forme: 'croix', taille: 30 }} stroke-width={10} font-size={100} dy={120} />
			{/if}
			{#if etape >= 4}
				<Point nom="I" point={I} type={{ forme: 'disque', taille: 15 }} stroke-width={10} font-size={100} dx={-100} dy={0} fill="blue" />
			{/if}
		{/snippet}
	</Schema>
	<Texte couleur="bleu" lignes={11}>
		Q2) D'après la <span style="color: var(--rouge)">propriété</span> : <br />
		<div class="center">
			{@html math('\\textcolor{red}{\\widehat{\\text{IJK}}} + \\textcolor{darkgreen}{\\widehat{\\text{IKJ}}} + \\widehat{\\text{JIK}} = 180^\\circ')}
		</div>
		On remplace par les valeurs connues :<br />
		<div class="center">
			{@html math('\\textcolor{red}{90^\\circ} + \\textcolor{darkgreen}{45^\\circ} + \\widehat{\\text{JIK}} = 180^\\circ')} <br />
			{@html math('135^\\circ + \\widehat{\\text{JIK}} = 180^\\circ')} <br />
		</div>
		Pour résoudre l'addition à trou, on fait une soustraction :
		<div class="center">
			{@html math('\\widehat{\\text{JIK}} = 180^\\circ - 135^\\circ')} <br />
			{@html math('\\widehat{\\text{JIK}} = 45^\\circ')}
		</div>
		<br />
		Q3) Ce triangle possède un angle droit et deux angles de 45°. <br />
		IJK est donc un triangle <i>rectangle et isocèle</i>.
	</Texte>
</Contenu>

<style>
	.center {
		text-align: center;
	}
</style>
