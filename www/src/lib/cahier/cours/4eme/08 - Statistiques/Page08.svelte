<script lang="ts">
	import { Contenu, DansLaMarge, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Remarque, Schema } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

	interface Population {
		'0-14': number;
		'15-29': number;
		'30-44': number;
		'45-59': number;
		'60-74': number;
		'75 +': number;
		TOTAL: number;
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

	let donnees_meaux = { '0-14': 12077, '15-29': 11782, '30-44': 11348, '45-59': 9860, '60-74': 6819, '75 +': 3730, TOTAL: 55616 };
	let donnees_magny = { '0-14': 2243, '15-29': 1947, '30-44': 2342, '45-59': 1844, '60-74': 534, '75 +': 154, TOTAL: 9064 };
	let donnees_neuilly = { '0-14': 9676, '15-29': 10480, '30-44': 10541, '45-59': 11913, '60-74': 9520, '75 +': 7137, TOTAL: 59267 };

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

	let index_ville: 0 | 1 | 2 = $state(0);

	function ville() {
		return villes[index_ville]!;
	}

	function angle(index: number) {
		const v = ville();
		let donnee = 0;
		switch (index) {
			case 0:
				donnee = v.donnees['0-14'];
				break;
			case 1:
				donnee = v.donnees['15-29'];
				break;
			case 2:
				donnee = v.donnees['30-44'];
				break;
			case 3:
				donnee = v.donnees['45-59'];
				break;
			case 4:
				donnee = v.donnees['60-74'];
				break;
			case 5:
				donnee = v.donnees['75 +'];
				break;
		}
		return (donnee * 360) / v.donnees['TOTAL'];
	}

	function angle_cumule(index: number): number {
		if (index === -1) return 0;
		const v = ville();
		const tranches: (keyof Population)[] = ['0-14', '15-29', '30-44', '45-59', '60-74', '75 +'];
		let somme = 0;
		for (let i = index; i < tranches.length; i++) {
			somme += v.donnees[tranches[i]!];
		}
		return (somme * 360) / v.donnees['TOTAL'];
	}

	function cos(angle: number) {
		return Math.cos((angle * Math.PI) / 180);
	}
	function sin(angle: number) {
		return Math.sin((angle * Math.PI) / 180);
	}

	let couleurs_secteurs = [
		'rgb(255, 0, 0)',
		'rgb(255, 127, 0)',
		'rgb(255, 255, 0)',
		'rgb(0, 255, 0)',
		'rgb(0, 0, 255)',
		'rgb(75, 0, 130)',
		'rgb(148, 0, 211)'
	];
</script>

<DansLaMarge>
	<LigneVide lignes={20} />
	<input type="radio" name="ville" id="meaux" value={0} bind:group={index_ville} />
	<label for="meaux">Meaux</label>
	<br />
	<input type="radio" name="ville" id="magny" value={1} bind:group={index_ville} />
	<label for="magny">Magny-le-Hongre</label>
	<br />
	<input type="radio" name="ville" id="neuilly" value={2} bind:group={index_ville} />
	<label for="neuilly">Neuilly-sur-Marne</label>
</DansLaMarge>

<Contenu>
	<SousPartie numero={2} titre="Diagrammes circulaires" />
	<LigneVide />
	<Definition lignes={2}>
		Un diagramme circulaire est un disque partagé en secteurs angulaires proportionnels aux valeurs qu'ils représentent.
	</Definition>
	<Remarque lignes={2}>On l'utilise le plus souvent lorsque le total des valeurs est connu et pertinent.</Remarque>
	<Exemples lignes={3} addStyle="margin-bottom: -0.2ex;">
		<table class="donnees" style="--hauteur: var(--carreau); --taille-texte: var(--font-size);">
			<caption>
				Population de {ville().meta.ville} ({ville().meta.code_insee}) en {ville().meta.annee} par grandes tranches d'âge
			</caption>
			<tbody>
				<tr>
					<th>Tranche d'âge</th>
					{#each Object.keys(ville().donnees) as tranche}
						<th>{tranche}</th>
					{/each}
				</tr>
				<tr>
					<th>Nombre d'habitants</th>
					{#each Object.values(ville().donnees) as valeur}
						<td>{valeur}</td>
					{/each}
				</tr>
			</tbody>
		</table>
	</Exemples>
	<Schema lignes={20} aspectRatioSVG={1}>
		{#snippet svg()}
			<!-- Cercle -->
			<circle cx="350" cy="500" r="350" stroke="black" stroke-width="2" fill="none" />
			<!-- Secteurs et légendes -->
			{#each Object.keys(ville().donnees) as tranche, index}
				{#if tranche != 'TOTAL'}
					<path
						d="
                            M 350 500
                            L {350 + 350 * cos(angle_cumule(index))} {500 + 350 * sin(angle_cumule(index))}
                            A 350 350 0 {angle(index) > 180 ? 1 : 0} 0 {350 + 350 * cos(angle_cumule(index + 1))} {500 +
							350 * sin(angle_cumule(index + 1))}
                            Z"
						fill={couleurs_secteurs[index]}
					/>
					<text x="810" y={250 + index * 100} font-size="40">
						{tranche}
					</text>
					<rect x="750" y={202 + index * 100} width="50" height="50" fill={couleurs_secteurs[index]} stroke="black" />
				{/if}
			{/each}
		{/snippet}
	</Schema>
</Contenu>

<style>
	table.donnees {
		width: calc(100 / 99 * 100%);
		border-collapse: collapse;
		border: 1px solid black;
		font-size: calc(var(--taille-texte) * 0.9);

		tr,
		th,
		td {
			padding: 0;
			height: var(--hauteur);
			text-align: center;
			font-size: calc(var(--taille-texte) * 0.85);
			width: calc(2 / 21 * 100%);
			border-left: 1px solid black;
		}

		td:first-child,
		th:first-child {
			border-right: 3px double black;
			width: calc(6 / 21 * 100%);
		}

		td:last-child,
		th:last-child {
			border-left: 3px double black;
			width: calc(3 / 21 * 100%);
		}
	}
</style>
