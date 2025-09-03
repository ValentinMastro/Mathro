<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { CelluleTableau, Exemples, Item, LigneTableau, Paragraphe, Tableau } from '$lib/cahier/composants/de_cours/*';

	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={3} titre="Unités de longueur et conversions" />

	<Paragraphe nom_du_paragraphe="Tableau de conversion" />

	<Tableau lignes={6} colonnes={14}>
		<LigneTableau lignes={1}>
			<CelluleTableau colonnes={2}>km</CelluleTableau>
			<CelluleTableau colonnes={2}>hm</CelluleTableau>
			<CelluleTableau colonnes={2}>dam</CelluleTableau>
			<CelluleTableau colonnes={2}>m</CelluleTableau>
			<CelluleTableau colonnes={2}>dm</CelluleTableau>
			<CelluleTableau colonnes={2}>cm</CelluleTableau>
			<CelluleTableau colonnes={2}>mm</CelluleTableau>
		</LigneTableau>
		{#each Array(5) as _}
			<LigneTableau>
				{#each Array(7) as _}
					<CelluleTableau colonnes={2} />
				{/each}
			</LigneTableau>
		{/each}
	</Tableau>

	<Exemples lignes={4}>
		<Item>
			{@html math('85~\\text{cm} = 850~\\text{mm}')}
		</Item>
		<Item>
			{@html math('5~\\text{m} = 0,005~\\text{km}')}
		</Item>
		<Item>
			{@html math('3,2~\\text{dam} = 32~\\text{dm}')}
		</Item>
		<Item>
			{@html math('7,3~\\text{hm} = 730~000~\\text{mm}')}
		</Item>
	</Exemples>
</Contenu>
