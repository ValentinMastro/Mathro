<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { CelluleTableau, Definition, Definitions, Item, LigneTableau, Methode, Tableau } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={2} titre="Effectifs et fréquences" />
	<Definitions lignes={3}>
		<Item>L'<i>effectif</i> d'une modalité est le nombre d'individus ayant cette modalité.</Item>
		<Item>L'<i>effectif total</i> est le nombre total d'individus dans la population.</Item>
	</Definitions>

	<Tableau lignes={4} colonnes={20}>
		<LigneTableau lignes={1}>
			<CelluleTableau colonnes={4}>Note</CelluleTableau>
			<CelluleTableau colonnes={2}>8</CelluleTableau>
			<CelluleTableau colonnes={2}>10</CelluleTableau>
			<CelluleTableau colonnes={2}>12</CelluleTableau>
			<CelluleTableau colonnes={2}>14</CelluleTableau>
			<CelluleTableau colonnes={2}>16</CelluleTableau>
			<CelluleTableau colonnes={2}>18</CelluleTableau>
			<CelluleTableau colonnes={4}>Total</CelluleTableau>
		</LigneTableau>
		<LigneTableau lignes={1}>
			<CelluleTableau colonnes={4}>Effectif</CelluleTableau>
			<CelluleTableau colonnes={2}>3</CelluleTableau>
			<CelluleTableau colonnes={2}>7</CelluleTableau>
			<CelluleTableau colonnes={2}>8</CelluleTableau>
			<CelluleTableau colonnes={2}>6</CelluleTableau>
			<CelluleTableau colonnes={2}>4</CelluleTableau>
			<CelluleTableau colonnes={2}>2</CelluleTableau>
			<CelluleTableau colonnes={4}>30</CelluleTableau>
		</LigneTableau>
	</Tableau>

	<Definition lignes={2}>
		La <i>fréquence</i> d'une modalité {@html math('=')} effectif de la modalité {@html math('\\div')} effectif total.
	</Definition>
	<Methode lignes={3}>
		<Item>En fraction : {@html math('\\dfrac{\\text{effectif}}{\\text{effectif total}}')}.</Item>
		<Item>En décimal : diviser le numérateur par le dénominateur.</Item>
		<Item>En pourcentage : multiplier le résultat décimal par 100.</Item>
	</Methode>

	<Tableau lignes={4} colonnes={20}>
		<LigneTableau lignes={1}>
			<CelluleTableau colonnes={4}>Note</CelluleTableau>
			<CelluleTableau colonnes={2}>8</CelluleTableau>
			<CelluleTableau colonnes={2}>10</CelluleTableau>
			<CelluleTableau colonnes={2}>12</CelluleTableau>
			<CelluleTableau colonnes={2}>14</CelluleTableau>
			<CelluleTableau colonnes={2}>16</CelluleTableau>
			<CelluleTableau colonnes={2}>18</CelluleTableau>
			<CelluleTableau colonnes={4}>Total</CelluleTableau>
		</LigneTableau>
		<LigneTableau lignes={1}>
			<CelluleTableau colonnes={4}>Effectif</CelluleTableau>
			<CelluleTableau colonnes={2}>3</CelluleTableau>
			<CelluleTableau colonnes={2}>7</CelluleTableau>
			<CelluleTableau colonnes={2}>8</CelluleTableau>
			<CelluleTableau colonnes={2}>6</CelluleTableau>
			<CelluleTableau colonnes={2}>4</CelluleTableau>
			<CelluleTableau colonnes={2}>2</CelluleTableau>
			<CelluleTableau colonnes={4}>30</CelluleTableau>
		</LigneTableau>
		<LigneTableau lignes={1}>
			<CelluleTableau colonnes={4}>Fréquence (%)</CelluleTableau>
			<CelluleTableau colonnes={2}>10</CelluleTableau>
			<CelluleTableau colonnes={2}>{@html math('23{,}\\overline{3}')}</CelluleTableau>
			<CelluleTableau colonnes={2}>{@html math('26{,}\\overline{6}')}</CelluleTableau>
			<CelluleTableau colonnes={2}>20</CelluleTableau>
			<CelluleTableau colonnes={2}>{@html math('13{,}\\overline{3}')}</CelluleTableau>
			<CelluleTableau colonnes={2}>{@html math('6{,}\\overline{6}')}</CelluleTableau>
			<CelluleTableau colonnes={4}>100</CelluleTableau>
		</LigneTableau>
	</Tableau>
</Contenu>
