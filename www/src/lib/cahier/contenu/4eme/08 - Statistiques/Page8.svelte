<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Schema } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

	interface Population {
		'0-14': number;
		'15-29': number;
		'30-44': number;
		'45-59': number;
		'60-74': number;
		'75 +': number;
	}

	interface Metadonnees {
		ville: string;
		code_insee: string;
		annee: number;
		lien: string;
	}

	interface Ville {
		donnees: Population;
		meta: Metadonnees;
	}

	let donnees_meaux = { '0-14': 12077, '15-29': 11782, '30-44': 11348, '45-59': 9860, '60-74': 6819, '75 +': 3730 };
	let donnees_magny = { '0-14': 2243, '15-29': 1947, '30-44': 2342, '45-59': 1844, '60-74': 534, '75 +': 154 };
	let donnees_neuilly = { '0-14': 9676, '15-29': 10480, '30-44': 10541, '45-59': 11913, '60-74': 9520, '75 +': 7137 };

	let villes: Ville[] = [
		{
			donnees: donnees_meaux,
			meta: {
				ville: 'Meaux',
				code_insee: '77284',
				annee: 2021,
				lien: 'https://www.insee.fr/fr/statistiques/2011101?geo=COM-77284'
			}
		},
		{
			donnees: donnees_magny,
			meta: {
				ville: 'Magny-le-Hongre',
				code_insee: '77268',
				annee: 2021,
				lien: 'https://www.insee.fr/fr/statistiques/2011101?geo=COM-77268'
			}
		},
		{
			donnees: donnees_neuilly,
			meta: {
				ville: 'Neuilly-sur-Marne',
				code_insee: '92051',
				annee: 2021,
				lien: 'https://www.insee.fr/fr/statistiques/2011101?geo=COM-92051'
			}
		}
	];

	let index_ville = $state(0);
</script>

<Contenu>
	<SousPartie numero={3} titre="Histogramme" />
	<LigneVide />
	<Definition lignes={4}>
		Pour représenter des classes de données, on utilise un histogramme dans lequel les classes sont représentées par des rectangles de largeur
		proportionnelle à l'étendue de la classe et de hauteur proportionnelle à l'effectif de la classe.
	</Definition>
	<Exemples lignes={3}>
		<table class="donnees">
			<caption>Population de Meaux (77284) en 2019 par grandes tranches d'âge</caption>
			<thead>
				<tr>
					<th>Tranche d'âge</th>
					{#each Object.keys(villes[index_ville].donnees) as tranche}
						<th>{tranche}</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>Nombre d'habitants</th>
					{#each Object.values(villes[index_ville].donnees) as valeur}
						<td>{valeur.toLocaleString('fr-FR')}</td>
					{/each}
				</tr>
			</tbody>
		</table>
	</Exemples>
	<Schema lignes={20}>
		{#snippet svg()}
			<defs>
				<style>
					.textp36 {
						font-size: 22px;
						text-anchor: middle;
					}
					.textp36_end {
						font-size: 22px;
						text-anchor: end;
					}
				</style>
			</defs>
			<!-- Axes -->
			<line x1="100" y1="950" x2="900" y2="950" stroke="black" stroke-width="2" />
			<line x1="100" y1="950" x2="100" y2="250" stroke="black" stroke-width="2" />
			<!-- Graduations horizontales -->
			{@const graduation_horizontale = 150}
			{#each [0, 15, 30, 45, 60, 75] as annee, i}
				<line
					x1={(annee / 15) * graduation_horizontale + 100}
					y1="950"
					x2={(annee / 15) * graduation_horizontale + 100}
					y2="960"
					stroke="black"
					stroke-width="2"
				/>
				<text x={(annee / 15) * graduation_horizontale + 100} y="980" class="textp36">{annee}</text>
			{/each}
			<!-- Barres -->
			{#each Object.values(villes[index_ville].donnees) as valeur, i}
				{#if i < Object.values(villes[index_ville].donnees).length - 1}
					<rect
						x={100 + i * graduation_horizontale}
						y={950 - (900 * valeur) / 18000}
						width={graduation_horizontale}
						height={(900 * valeur) / 18000}
						fill="lightgray"
						stroke="black"
					/>
					<text x={100 + (i + 0.5) * graduation_horizontale} y={950 - (900 * valeur) / 18000 - 10} class="textp36"
						>{valeur.toLocaleString('fr-FR')}</text
					>
				{/if}
			{/each}
			<!-- Graduations verticales -->
			{#each Array(14)
				.fill(0)
				.map((valeur, i) => i * 1000) as valeur, i}
				<line x1="90" y1={950 - (900 * valeur) / 18000} x2="100" y2={950 - (900 * valeur) / 18000} stroke="black" stroke-width="2" />
				<line
					x1="100"
					y1={950 - (900 * valeur) / 18000}
					x2="900"
					y2={950 - (900 * valeur) / 18000}
					stroke="black"
					stroke-width="1"
					stroke-dasharray="1,4"
				/>
				<text x="80" y={958 - (900 * valeur) / 18000} class="textp36_end">{valeur.toLocaleString('fr-FR')}</text>
			{/each}
			<!-- Légendes -->
			<text x="930" y="950" class="textp36">Âge</text>
			<text x="110" y="240" class="textp36">Nombre d'habitants</text>
		{/snippet}
	</Schema>
</Contenu>

<style>
	table.donnees {
		width: calc(100 / 99 * 100%);
		border-collapse: collapse;
		border: 1px solid black;
		font-size: calc(var(--font-size) * 0.9);

		tr,
		th,
		td {
			padding: 0;
			height: var(--carreau);
			text-align: center;
			font-size: calc(var(--font-size) * 0.85);
			width: calc(2.5 / 21 * 100%);
			border-left: 1px solid black;
		}

		td:first-child,
		th:first-child {
			border-right: 3px double black;
			width: calc(6 / 21 * 100%);
		}
	}
</style>
