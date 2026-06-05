<script lang="ts">
	import { Chapitre, Contenu, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { CelluleTableau, Exemple, LigneTableau, Methode, Paragraphe, Tableau } from '$lib/cahier/composants/de_cours/*';
</script>

<Chapitre titre="Utiliser la proportionnalité" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Calculer une quatrième proportionnelle" />
	<Paragraphe nom_du_paragraphe="But :" couleur="noir" lignes={2}>
		Dans un tableau de proportionnalité, calculer la 4ème valeur à partir de 3 valeurs données.
	</Paragraphe>
	<SousPartie numero={1} titre="Homogénéité" />
	<Methode>Multiplier une colonne par un nombre</Methode>
	<Exemple lignes={2}>Ici, la première colonne est multipliée par 2 pour obtenir la deuxième colonne.</Exemple>
	<Tableau>
		<LigneTableau>
			<CelluleTableau>Masse de pommes (kg)</CelluleTableau>
			<CelluleTableau>2</CelluleTableau>
			<CelluleTableau>4</CelluleTableau>
		</LigneTableau>
		<LigneTableau>
			<CelluleTableau>Prix (€)</CelluleTableau>
			<CelluleTableau>6</CelluleTableau>
			<CelluleTableau>12</CelluleTableau>
		</LigneTableau>
	</Tableau>
	<SousPartie numero={2} titre="Coefficient de proportionnalité" />
	<Exemple lignes={2}>
		Ici, le coefficient de proportionnalité est 3, car, pour obtenir les termes de la deuxième ligne, on multiplie les termes de la première ligne par
		3.
	</Exemple>
	<Tableau>
		<LigneTableau>
			<CelluleTableau>Masse de pommes (kg)</CelluleTableau>
			<CelluleTableau>2</CelluleTableau>
			<CelluleTableau>4</CelluleTableau>
		</LigneTableau>
		<LigneTableau>
			<CelluleTableau>Prix (€)</CelluleTableau>
			<CelluleTableau>6</CelluleTableau>
			<CelluleTableau>12</CelluleTableau>
		</LigneTableau>
	</Tableau>
</Contenu>
