<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemple, Schema, Texte } from '$lib/cahier/composants/de_cours/*';
	import { AngleDroit, Polygone } from '$lib/cahier/composants/svg/*';

	import { math } from 'mathlifier';

	let A = $state({ x: 600, y: 200 });
	let B = $state({ x: 3000, y: 200 });
	let C = $state({ x: 2400, y: 800 });
	let D = $state({ x: 1000, y: 800 });
	let E = $state({ x: B.x, y: D.y });
</script>

<Contenu>
	<SousPartie numero={4} titre="Trapèze" />
	<Definition>Un <i>trapèze</i> est un quadrilatère ayant deux côtés parallèles.</Definition>
	<Exemple />
	<Schema lignes={5} aspectRatioSVG={20 / 5}>
		{#snippet svg()}
			<Polygone points={[A, B, C, D]} afficher_points stroke-width={10} taille_nom={120} distance_nom={100} />
		{/snippet}
	</Schema>
	<Texte couleur="bleu">
		{@html math('\\text{ABCD}')} a deux côtés parallèles : {@html math('(\\text{AB}) // (\\text{CD})')}
	</Texte>

	<Definition>
		Un <i>trapèze rectangle</i> est un trapèze possédant deux angles droits.
	</Definition>
	<Exemple />
	<Schema lignes={5} aspectRatioSVG={20 / 5}>
		{#snippet svg()}
			<AngleDroit points={[A, B, E]} fill="red" taille={70} />
			<AngleDroit points={[B, E, D]} fill="red" taille={70} />
			<Polygone points={[A, B, E, D]} afficher_points stroke-width={10} taille_nom={120} distance_nom={100} noms={['A', 'B', 'E', 'D']} />
		{/snippet}
	</Schema>
	<Texte couleur="bleu" lignes={2}>
		{@html math('\\text{ABED}')} a deux côtés parallèles : {@html math('(\\text{AB}) // (\\text{ED})')} <br />
		et deux angles droits : {@html math('\\widehat{\\text{ABE}} = \\widehat{\\text{BED}} = 90^\\circ')}
	</Texte>
</Contenu>
