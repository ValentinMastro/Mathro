<script lang="ts">
	import { Contenu } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemples, Schema, Tableau, LigneTableau } from '$lib/cahier/composants/de_cours/*';
	// Nombre d'habitant à Meaux par année
	let donnees_1 = {
		1982: 45005,
		1990: 48305,
		1999: 49421,
		2007: 48653,
		2013: 53766,
		2019: 55750
	};
	let n: number = Object.keys(donnees_1).length;
</script>

<Contenu>
	<Exemples lignes={0} addStyle="margin-bottom: -0.2ex;" />
	<Tableau>
		<caption>Nombre d'habitants à Meaux par année</caption>
		<LigneTableau>
			<th>Année</th>
			{#each Object.keys(donnees_1) as annee}
				<th>{annee}</th>
			{/each}
		</LigneTableau>
		<LigneTableau>
			<th>Nombre d'habitants</th>
			{#each Object.values(donnees_1) as valeur}
				<td>{valeur.toLocaleString('fr-FR')}</td>
			{/each}
		</LigneTableau>
	</Tableau>
	<Schema lignes={20}>
		{#snippet svg()}
			<defs>
				<style>
					.textp33 {
						font-size: 22px;
						text-anchor: middle;
					}
				</style>
			</defs>
			<!-- Axes -->
			<line x1={100} y1={950} x2={900} y2={950} stroke="black" stroke-width={2} />
			<line x1={100} y1={950} x2={100} y2={50} stroke="black" stroke-width={2} />
			<!-- Graduations horizontales -->
			{#each Object.keys(donnees_1) as annees, i}
				<line x1={100 + (800 * (i + 0.5)) / n} y1={950} x2={100 + (800 * (i + 0.5)) / n} y2={960} stroke="black" stroke-width={2} />
				<text x={100 + (800 * (i + 0.5)) / n} y={980} class="textp33">{annees}</text>
			{/each}
			<!-- Graduations verticales -->
			{#each [0, 10000, 20000, 30000, 40000, 50000, 60000] as valeur, i}
				<line x1={90} y1={950 - (900 * valeur) / 60000} x2={100} y2={950 - (900 * valeur) / 60000} stroke="black" stroke-width={2} />
				<text x={50} y={955 - (900 * valeur) / 60000 + 5} class="textp33">{valeur.toLocaleString('fr-FR')}</text>
			{/each}
			<!-- Barres -->
			{#each Object.values(donnees_1) as valeur, i}
				<rect x={100 + (800 * (i + 0.5)) / n - 20} y={950 - (900 * valeur) / 60000} width={40} height={(900 * valeur) / 60000} fill="black" />
				<text x={100 + (800 * (i + 0.5)) / n} y={950 - (900 * valeur) / 60000 - 10} class="textp33">{valeur.toLocaleString('fr-FR')}</text>
			{/each}
			<!-- Légendes -->
			<text x={950} y={950} class="textp33">Année</text>
			<text x={220} y={50} class="textp33">Nombre d'habitants</text>
		{/snippet}
	</Schema>
</Contenu>
