<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { CelluleTableau, Exemples, Item, Tableau, LigneTableau, Paragraphe } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<SousPartie numero={2} titre="Aire" />

	<Paragraphe nom_du_paragraphe="Tableau de conversion" />
	<Tableau lignes={6} colonnes={14}>
		<LigneTableau lignes={1}>
			{#each Array(3) as _}
				<CelluleTableau />
			{/each}
			<CelluleTableau>ha</CelluleTableau>
			<CelluleTableau />
			<CelluleTableau>a</CelluleTableau>
			{#each Array(8) as _}
				<CelluleTableau />
			{/each}
		</LigneTableau>
		<LigneTableau lignes={1}>
			<CelluleTableau colonnes={2}>km²</CelluleTableau>
			<CelluleTableau colonnes={2}>hm²</CelluleTableau>
			<CelluleTableau colonnes={2}>dam²</CelluleTableau>
			<CelluleTableau colonnes={2}>m²</CelluleTableau>
			<CelluleTableau colonnes={2}>dm²</CelluleTableau>
			<CelluleTableau colonnes={2}>cm²</CelluleTableau>
			<CelluleTableau colonnes={2}>mm²</CelluleTableau>
		</LigneTableau>
		{#each Array(4) as _}
			<LigneTableau lignes={1}>
				{#each Array(14) as __}
					<CelluleTableau />
				{/each}
			</LigneTableau>
		{/each}
	</Tableau>
	<Exemples lignes={4}>
		<Item>
			{@html math('1{,}5~\\text{m}² = 15~000~\\text{cm}²')}
		</Item>
		<Item>
			{@html math('0{,}02~\\text{hm}² = 0{,}000~2~\\text{km}²')}
		</Item>
		<Item>
			{@html math('365~\\text{mm}² = 0{,}000~003~65~\\text{dam}²')}
		</Item>
		<Item>
			{@html math('10~\\text{ha} = 100~000~\\text{m}²')}
		</Item>
	</Exemples>
</Contenu>
