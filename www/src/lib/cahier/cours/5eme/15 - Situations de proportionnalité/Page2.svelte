<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { CelluleTableau, Exemples, Item, LigneTableau, Methode, Propriete, Tableau } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={2} titre="Tableau de proportionnalité" />
	<Propriete lignes={2}>
		Dans un tableau de proportionnalité, on passe d'une ligne à l'autre <br />
		en multipliant par le coefficient de proportionnalité.
	</Propriete>
	<Tableau lignes={2} colonnes={20}>
		<LigneTableau>
			<CelluleTableau colonnes={8}>Nb de pommes</CelluleTableau>
			<CelluleTableau colonnes={4}>2</CelluleTableau>
			<CelluleTableau colonnes={4}>5</CelluleTableau>
			<CelluleTableau colonnes={4}>10</CelluleTableau>
		</LigneTableau>
		<LigneTableau>
			<CelluleTableau colonnes={8}>Prix (€)</CelluleTableau>
			<CelluleTableau colonnes={4}>1,60</CelluleTableau>
			<CelluleTableau colonnes={4}>4,00</CelluleTableau>
			<CelluleTableau colonnes={4}>8,00</CelluleTableau>
		</LigneTableau>
	</Tableau>
	<Tableau lignes={2} colonnes={20}>
		<LigneTableau>
			<CelluleTableau colonnes={8}>Durée (h)</CelluleTableau>
			<CelluleTableau colonnes={4}>1</CelluleTableau>
			<CelluleTableau colonnes={4}>3</CelluleTableau>
			<CelluleTableau colonnes={4}>5</CelluleTableau>
		</LigneTableau>
		<LigneTableau>
			<CelluleTableau colonnes={8}>Distance (km)</CelluleTableau>
			<CelluleTableau colonnes={4}>60</CelluleTableau>
			<CelluleTableau colonnes={4}>180</CelluleTableau>
			<CelluleTableau colonnes={4}>300</CelluleTableau>
		</LigneTableau>
	</Tableau>
	<Methode lignes={4}>
		Pour vérifier qu'un tableau est un tableau de proportionnalité :
		<Item>calculer les rapports entre les valeurs de chaque colonne ;</Item>
		<Item lignes={2}>si tous les rapports sont égaux, les grandeurs sont proportionnelles.</Item>
	</Methode>
	<Exemples lignes={5}>
		Pour le 1er tableau, on calcule les rapports :<br />
		{@html math('\\dfrac{1{,}60}{2} = \\dfrac{4{,}00}{5} = \\dfrac{8{,}00}{10} = 0{,}80')}
		→ les grandeurs sont proportionnelles<br /><br />
		Pour le 2ème tableau, on calcule les rapports :<br />
		{@html math('\\dfrac{60}{1} = \\dfrac{180}{3} = \\dfrac{300}{5} = 60')}
		→ les grandeurs sont proportionnelles
	</Exemples>
</Contenu>
