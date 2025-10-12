<script lang="ts">
	import { Contenu, Partie, SousPartie, SousSousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Schema, Propriete, Texte, Exemple } from '$lib/cahier/composants/de_cours/*';
	import { Angle, AngleDroit, Polygone } from '$lib/cahier/composants/svg/*';

	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={5} titre="Les différents types de triangles" />
	<SousPartie numero={1} titre="Triangle rectangle" />
	<Definition>Un triangle rectangle possède un angle droit.</Definition>
	<Propriete>Les deux angles aigus sont complémentaires.</Propriete>
	<Exemple />
	<Schema lignes={5} aspectRatioSVG={4}>
		{#snippet svg()}
			{@const A = { x: 400, y: 200 }}
			{@const B = { x: 2000, y: 200 }}
			{@const C = { x: 2000, y: 800 }}
			<AngleDroit taille={100} points={[A, B, C]} />
			<Angle r={200} points={[A, C, B]} fill="red" />
			<Angle r={200} points={[C, A, B]} fill="forestgreen" />
			<Polygone points={[A, B, C]} afficher_points stroke-width={10} distance_nom={110} />
		{/snippet}
	</Schema>
	<Texte couleur="bleu" lignes={2}>
		Le triangle est <i>rectangle en B</i>, car l'angle droit est à côté du point B. <br />
		De plus, {@html math('\\widehat{\\text{ACB}}')} et {@html math('\\widehat{\\text{CAB}}')} sont complémentaires.
	</Texte>
</Contenu>
