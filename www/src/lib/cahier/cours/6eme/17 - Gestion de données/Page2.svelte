<script lang="ts">
	import { Contenu, DansLaMarge, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { CelluleTableau, Exemple, LigneTableau, Schéma, Tableau } from '$lib/cahier/composants/de_cours/*';
	import { Nombre, Slider } from '$lib/cahier/composants/de_marge/*';
	import { AxeGradué, Fleche, Rectangle } from '$lib/cahier/composants/svg/*';

	let rouge = $state(0);
	let orange = $state(0);
	let jaune = $state(0);
	let vert = $state(0);
	let bleu = $state(0);
	let indigo = $state(0);
	let violet = $state(0);

	let valeurs = $derived([rouge, orange, jaune, vert, bleu, indigo, violet]);
</script>

<DansLaMarge lignes_vides={14}>
	<Nombre min={0} max={25} bind:valeur={rouge} label="rouge" />
	<Nombre min={0} max={25} bind:valeur={orange} label="orange" />
	<Nombre min={0} max={25} bind:valeur={jaune} label="jaune" />
	<Nombre min={0} max={25} bind:valeur={vert} label="vert" />
	<Nombre min={0} max={25} bind:valeur={bleu} label="bleu" />
	<Nombre min={0} max={25} bind:valeur={indigo} label="indigo" />
	<Nombre min={0} max={25} bind:valeur={violet} label="violet" />
</DansLaMarge>

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
			{#each valeurs as valeur, i}
				<Rectangle
					points={[
						{ x: (i + 1) * 200, y: 900 },
						{ x: (i + 1) * 200 + 100, y: 900 - valeur * 50 }
					]}
				/>
			{/each}
		{/snippet}
	</Schéma>
</Contenu>
