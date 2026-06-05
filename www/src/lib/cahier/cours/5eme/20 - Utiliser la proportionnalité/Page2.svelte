<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { CelluleTableau, Exemple, LigneTableau, Methode, Tableau } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<SousPartie numero={3} titre="Additivité" />
	<Methode>Multiplier 2 colonnes pour en obtenir une troisième.</Methode>
	<Tableau>
		<LigneTableau>
			<CelluleTableau>Masse de pommes (kg)</CelluleTableau>
			<CelluleTableau>2</CelluleTableau>
			<CelluleTableau>4</CelluleTableau>
			<CelluleTableau>6</CelluleTableau>
		</LigneTableau>
		<LigneTableau>
			<CelluleTableau>Prix (€)</CelluleTableau>
			<CelluleTableau>6</CelluleTableau>
			<CelluleTableau>12</CelluleTableau>
			<CelluleTableau>18</CelluleTableau>
		</LigneTableau>
	</Tableau>
	<SousPartie numero={4} titre="Passage à l'unité" />
	<Methode>Diviser pour obtenir une colonne avec le nombre 1.</Methode>
	<Exemple lignes={2}>Ici, on divise la première colonne par 6 pour obtenir une colonne avec le nombre 1 car {@html math('6 \\div 6 = 1')}</Exemple>
	<Tableau>
		<LigneTableau>
			<CelluleTableau>Masse de pommes (kg)</CelluleTableau>
			<CelluleTableau>6</CelluleTableau>
			<CelluleTableau>1</CelluleTableau>
		</LigneTableau>
		<LigneTableau>
			<CelluleTableau>Prix (€)</CelluleTableau>
			<CelluleTableau>18</CelluleTableau>
			<CelluleTableau>3</CelluleTableau>
		</LigneTableau>
	</Tableau>
</Contenu>
