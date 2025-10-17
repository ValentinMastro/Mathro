<script lang="ts">
	import { Activité, Question } from '$lib/cahier/composants/d_exercices/*';
	import { Contenu } from '$lib/cahier/composants/de_chapitrage/*';
	import { Item, MultiItem, Texte } from '$lib/cahier/composants/de_cours/*';
</script>

<Activité numéro={3} />

<Contenu>
	<Texte lignes={2}>Dans une enseigne de restauration rapide, un menu est vendu <br />11 € TTC, répartis de la façon suivante :</Texte>
	<MultiItem colonnes={2}>
		<Item style="width: 45%;">TVA : 1 €</Item>
		<Item style="width: 45%;">Matières premières : 3,38 €</Item>
		<Item style="width: 45%;">Frais de structure : 3,55 €</Item>
		<Item style="width: 45%;">Personnel : 2,09 €</Item>
		<Item style="width: 45%;">Investissements : 0,33 €</Item>
		<Item style="width: 45%;">Impôts : 0,21 €</Item>
		<Item style="width: 45%;">Bénéfices : 0,44 €</Item>
	</MultiItem>
	<Question numéro={1} lignes={2}>À quel pourcentage du prix TTC correspond les bénéfices du restaurant ?</Question>
	<Question numéro={2} lignes_vides={1}>Vérifier que la TVA correspond bien à 10 % du prix hors TVA.</Question>
	<Texte lignes={2}>
		En moyenne, un franchisé de cette chaîne de restauration rapide réalise un chiffre d'affaires de 1,2 million d'euros par an.
	</Texte>

	<Question numéro={3} lignes={3}>
		Supposons que tous les clients aient commandé un menu à 11 €. <br />
		Combien de clients ont commandé ? <br />
		Quel sera alors le bénéfice du magasin ?
	</Question>
	<Question numéro={4}>Si on commande ce menu en ligne, le prix augmente de 25 %.</Question>
</Contenu>
