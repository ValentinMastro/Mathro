<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { CelluleTableau, Exemple, LigneTableau, Schéma, Tableau } from '$lib/cahier/composants/de_cours/*';
	import { Carré, Cercle, SecteurAngulaire } from '$lib/cahier/composants/svg/*';
	import TexteSVG from '$lib/cahier/composants/svg/TexteSVG.svelte';

	let effectifs = $state([1, 3, 5, 2, 2, 0, 1, 0, 1, 0, 0]);
	let effectif_total = $derived(effectifs.reduce((a, b) => a + b, 0));
	let angles_cumulés = $derived.by(() => {
		let angles = effectifs.map((e) => (e / effectif_total) * 2 * Math.PI);
		return angles.map((_, index) => {
			return angles.slice(0, index).reduce((a, b) => a + b, 0);
		});
	});
	let couleurs = ['#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f', '#800000', '#008000', '#000080', '#808000', '#008080'];
</script>

<Contenu>
	<SousPartie numero={2} titre="Diagramme circulaire" />
	<Exemple />
	<Tableau>
		<LigneTableau>
			<CelluleTableau>Nombre de frères et soeurs</CelluleTableau>
			{#each effectifs as effectif, index}
				{#if effectif > 0}
					<CelluleTableau>{index}</CelluleTableau>
				{/if}
			{/each}
			<CelluleTableau>Total</CelluleTableau>
		</LigneTableau>
		<LigneTableau>
			<CelluleTableau>Effectif</CelluleTableau>
			{#each effectifs as effectif}
				{#if effectif > 0}
					<CelluleTableau>{effectif}</CelluleTableau>
				{/if}
			{/each}
			<CelluleTableau>{effectif_total}</CelluleTableau>
		</LigneTableau>
		<LigneTableau>
			<CelluleTableau>Angle (en °)</CelluleTableau>
			{#each effectifs as effectif}
				{#if effectif > 0}
					<CelluleTableau>{(effectif / effectif_total) * 360}</CelluleTableau>
				{/if}
			{/each}
			<CelluleTableau>360</CelluleTableau>
		</LigneTableau>
	</Tableau>
	<Schéma lignes={10} aspectRatioSVG={2}>
		{#snippet svg()}
			{@const centre = { x: 1000, y: 500 }}
			{@const rayon = 400}
			<Cercle {centre} {rayon} />
			{#each effectifs as effectif, index}
				{#if effectif > 0}
					<SecteurAngulaire {centre} r={rayon} angle1={angles_cumulés[index] || 0} angle2={angles_cumulés[index + 1] || 360} fill={couleurs[index]} />
				{/if}
			{/each}
			{#each effectifs.map((e, i) => ({ effectif: e, index: i })).filter((e) => e.effectif > 0) as { effectif, index }, index_sans_nul}
				<Carré coin={{ x: 1600, y: 100 + index_sans_nul * 120 }} côté={80} fill={couleurs[index]} />
				<TexteSVG point={{ x: 1750, y: 150 + index_sans_nul * 120 }}>{index}</TexteSVG>
			{/each}
		{/snippet}
	</Schéma>
</Contenu>
