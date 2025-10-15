<script lang="ts">
	import { Activité, Question, Énoncé } from '$lib/cahier/composants/d_exercices/*';
	import { Contenu } from '$lib/cahier/composants/de_chapitrage/*';
	import { CelluleTableau, LigneTableau, Tableau, Texte } from '$lib/cahier/composants/de_cours/*';
</script>

<Activité numéro={2} />

<Contenu>
	<Énoncé>
		<Texte>Voici le barême de l'impôt sur le revenu de 2025 :</Texte>
		<Tableau colonnes={20} lignes={6}>
			<LigneTableau>
				<CelluleTableau colonnes={10}>Tranche (revenu annuel)</CelluleTableau>
				<CelluleTableau colonnes={10}>Taux d'imposition</CelluleTableau>
			</LigneTableau>
			<LigneTableau>
				<CelluleTableau colonnes={10}>Jusqu'à 11 497 €</CelluleTableau>
				<CelluleTableau colonnes={10}>0%</CelluleTableau>
			</LigneTableau>
			<LigneTableau>
				<CelluleTableau colonnes={10}>De 11 498 € à 29 315 €</CelluleTableau>
				<CelluleTableau colonnes={10}>11%</CelluleTableau>
			</LigneTableau>
			<LigneTableau>
				<CelluleTableau colonnes={10}>De 29 316 € à 83 823 €</CelluleTableau>
				<CelluleTableau colonnes={10}>30%</CelluleTableau>
			</LigneTableau>
			<LigneTableau>
				<CelluleTableau colonnes={10}>De 83 824 € à 180 294 €</CelluleTableau>
				<CelluleTableau colonnes={10}>41%</CelluleTableau>
			</LigneTableau>
			<LigneTableau>
				<CelluleTableau colonnes={10}>Supérieur à 180 294 €</CelluleTableau>
				<CelluleTableau colonnes={10}>45%</CelluleTableau>
			</LigneTableau>
		</Tableau>
		<Texte lignes={7}>
			Chaque foyer fiscal a un <i>nombre de parts</i>, qui divide le revenu annuel avant l'application des taux d'imposition.<br />
			Le nombre de parts est calculé en fonction du nombre d'adultes et d'enfants dans le foyer fiscal : <br />
			&emsp; &starf; 1 par adulte <br />
			&emsp; &starf; 0,5 par enfant (1er et 2e), 1 par enfant (3e et suivants)
		</Texte>
		<Question numéro={1} lignes={2}>Si un couple a 3 enfants, quel est le nombre de parts du foyer fiscal ?</Question>
		<Question numéro={2} lignes={2}>Si une personne a un revenu annuel de 11 497 €, quel est son revenu mensuel moyen ?</Question>
		<Question numéro={3} lignes={2}>
			Calculer l'impôt sur le revenu pour un célibataire sans enfant (1 part) ayant un revenu annuel de 35 000 €.
		</Question>
		<Question numéro={4} lignes={2}>Calculer l'impôt sur le revenu d'un célibataire sans enfant ayant un revenu annuel de 100 000 €.</Question>
		<Question numéro={5} lignes={2}>
			Calculer l'impôt sur le revenu d'un foyer fiscal composé d'un couple et de 3 enfants ayant un revenu annuel de 100 000 €.
		</Question>
	</Énoncé>
</Contenu>
