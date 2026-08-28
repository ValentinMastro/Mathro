<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { CelluleTableau, Exemple, Item, LigneTableau, Tableau, Texte } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<SousPartie numero={3} titre="Méthode 3" />
	<Exemple lignes={2}>
		Un article coûte 80 €, puis après réduction, coûte 50 €. <br />
		De combien de % le prix a-t-il diminué ?
	</Exemple>
	<Tableau>
		<LigneTableau>
			<CelluleTableau>Prix (€)</CelluleTableau>
			<CelluleTableau>80</CelluleTableau>
			<CelluleTableau>50</CelluleTableau>
		</LigneTableau>
		<LigneTableau>
			<CelluleTableau>Pourcentage (%)</CelluleTableau>
			<CelluleTableau>100</CelluleTableau>
			<CelluleTableau>?</CelluleTableau>
		</LigneTableau>
	</Tableau>

	<Texte lignes={3} couleur="bleu">
		<Item>La remise est de 80 € - 50 € = 30 €.</Item>
		Quel pourcentage des 80 € représente la remise de 30 € ?
		<Item>{@html math('\\frac{30}{80} \\times 100 = 37,5\\%')}</Item>
		Le prix a diminué de 37,5 %.
	</Texte>
</Contenu>
