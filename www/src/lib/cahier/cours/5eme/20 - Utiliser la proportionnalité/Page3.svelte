<script lang="ts">
	import { Contenu, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { CelluleTableau, Exemple, Item, LigneTableau, Tableau, Texte } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={2} titre="Remise et pourcentage" />
	<SousPartie numero={1} titre="Méthode 1" />
	<Exemple lignes={6}>
		Un article coûte 50 €, son prix diminue de 25 %. <br />
		Quel est son nouveau prix ?
		<Item lignes={2}>
			Calculons 25 % de 50 €. <br />
			{@html math('\\frac{25}{100} \\times 50~\\text{€} = 12,50~\\text{€}')}
		</Item>
		<Item lignes={2}>
			On soustrait la remise du prix de base. <br />
			{@html math('50~\\text{€} - 12,50~\\text{€} = \\colorbox{red}{37,50~\\text{€}}')}
		</Item>
	</Exemple>

	<SousPartie numero={2} titre="Méthode 2" />
	<Exemple lignes={2}>
		Un article a vu son prix diminué de 30 %, il coûte désormais 42 €. <br />
		Quel était son prix de départ ?
	</Exemple>
	<Tableau>
		<LigneTableau>
			<CelluleTableau>Prix (€)</CelluleTableau>
			<CelluleTableau>?</CelluleTableau>
			<CelluleTableau>42</CelluleTableau>
		</LigneTableau>
		<LigneTableau>
			<CelluleTableau>Pourcentage (%)</CelluleTableau>
			<CelluleTableau>100</CelluleTableau>
			<CelluleTableau>70</CelluleTableau>
		</LigneTableau>
	</Tableau>
	<Texte lignes={4} couleur="bleu">
		Pour passer de la 1ère à la 2e colonne, il faut multiplier par 70 %. <br />
		Donc, dans l'autre sens, il faut diviser par 70 %.
		<br />
		{@html math('42 \\div 70~\\% = 42 \\div \\frac{70}{100} = 60')}
		<br />
		Donc l'article avait un prix de départ de 60 €.
	</Texte>
</Contenu>
