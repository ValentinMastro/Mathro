<script lang="ts">
	import { Contenu, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { CelluleTableau, Exemple, LigneTableau, Schéma, Tableau } from '$lib/cahier/composants/de_cours/*';
	import { AxeGradué, Fleche } from '$lib/cahier/composants/svg/*';

	let rouge;

	let valeurs = [10, 3, 4, 5, 8, 7];
</script>

<Contenu>
	<Partie numero={2} titre="Représentations graphiques" />
	<SousPartie numero={1} titre="Diagrammes en barres"></SousPartie>

	<Exemple lignes={3}>
		On a demandé aux élèves d'un classe de 6ème leur couleur préférée parmi les 7 suivantes : <br />
		Rouge, orange, jaune, vert, bleu, indigo, violet.
	</Exemple>

	<Tableau>
		<LigneTableau>
			<CelluleTableau>Rouge</CelluleTableau>
			<CelluleTableau>Orange</CelluleTableau>
			<CelluleTableau>Jaune</CelluleTableau>
			<CelluleTableau>Vert</CelluleTableau>
			<CelluleTableau>Bleu</CelluleTableau>
			<CelluleTableau>Indigo</CelluleTableau>
			<CelluleTableau>Violet</CelluleTableau>
		</LigneTableau>
		<LigneTableau>
			{#each valeurs as valeur}
				<CelluleTableau>{valeur}</CelluleTableau>
			{/each}
		</LigneTableau>
	</Tableau>

	<Schéma lignes={10} aspectRatioSVG={2}>
		{#snippet svg()}
			<Fleche
				points={[
					{ x: 100, y: 900 },
					{ x: 1900, y: 900 }
				]}
			/>
			<Fleche
				points={[
					{ x: 100, y: 900 },
					{ x: 100, y: 0 }
				]}
			/>
			{#each valeurs as valeur}

			{/each}
		{/snippet}
	</Schéma>
</Contenu>
