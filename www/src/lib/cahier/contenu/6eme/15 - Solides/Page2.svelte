<script lang="ts">
	import { Chapitre, Contenu, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Convention, Definition, Definitions, Exemples, Item, Schema, Texte } from '$lib/cahier/composants/de_cours/*';
	import { PavéDroit, Projecteur, TexteSVG } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';

	const projecteur = new Projecteur(0.46);
</script>

<Contenu>
	<SousPartie numero={2} titre="Pavé droit" />
	<Definition>Un pavé droit est un solide à six faces rectangulaires.</Definition>
	<Schema lignes={10} aspectRatioSVG={2}>
		{#snippet svg()}
			<PavéDroit {projecteur} coin={{ x: 300, y: 900 }} longueur={900} largeur={600} hauteur={600} />
			<TexteSVG point={{ x: 800, y: 970 }}>pavé droit en perspective cavalière</TexteSVG>
		{/snippet}
	</Schema>
	<Schema lignes={10} aspectRatioSVG={2}>
		{#snippet svg()}
			<!-- 6 rectangles : dimensions 600x300x200 -->
			{@const L = 400}
			{@const W = 200}
			{@const H = 100}
			{@const x0 = 600}
			{@const y0 = 500}

			<rect x={x0} y={y0} width={L} height={W} fill="none" stroke="black" stroke-width={6} />
			<rect x={x0} y={y0 - H} width={L} height={H} fill="none" stroke="black" stroke-width={6} />
			<rect x={x0} y={y0 - H - W} width={L} height={W} fill="none" stroke="black" stroke-width={6} />
			<rect x={x0} y={y0 + W} width={L} height={H} fill="none" stroke="black" stroke-width={6} />
			<rect x={x0 - H} y={y0} width={H} height={W} fill="none" stroke="black" stroke-width={6} />
			<rect x={x0 + L} y={y0} width={H} height={W} fill="none" stroke="black" stroke-width={6} />

			<TexteSVG point={{ x: 800, y: 970 }}>patron d'un pavé droit</TexteSVG>
		{/snippet}
	</Schema>
</Contenu>
