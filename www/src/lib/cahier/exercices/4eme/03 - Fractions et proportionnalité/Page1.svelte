<script lang="ts">
	import { Question, Énoncé } from '$lib/cahier/composants/d_exercices/*';
	import { Chapitre, Contenu, DansLaMarge } from '$lib/cahier/composants/de_chapitrage/*';
	import { Texte } from '$lib/cahier/composants/de_cours/*';
	import { Activité } from '$lib/cahier/composants/de_marge/*';
	import { math } from 'mathlifier';
</script>

<Chapitre titre="Fractions et proportionnalité" />

<Activité numéro={1} position={3} />

<Contenu apres_un_titre>
	<Énoncé>
		<Texte lignes={8}>
			Sur une &laquo; fiche de paie &raquo;, sont affichées les informations suivantes : <br />
			&emsp; &starf; Coût total pour l'employeur (super brut) : 5033,52 € <br />
			&emsp; &starf; Salaire brut : 2841,90 € <br />
			&emsp; &starf; Salaire net à payer avant impôts sur le revenu : 2227,45 € <br />
			&emsp; &starf; Salaire net à payer (super net) : 2093,83 € <br />
			&emsp; &starf; Contribution patronale PC (pension civile) : 1795,75 € <br />
			&emsp; &starf; Retenue salariale PC (pension civile) : 254,64 € <br />
			&emsp; &starf; C.S.G : 66,25 € + 187,70 € <br />
		</Texte>

		<Question numéro={1} lignes={2}>Quel pourcentage du salaire super brut représente le salaire super net ?</Question>
		<Question numéro={2} lignes={2}>
			Combien d'€ sont reversés pour les pensions ? Quel pourcentage du salaire super brut représente cette somme ?
		</Question>
		<Question numéro={3} lignes={2}>Vérifier que la C.S.G correspond à 9,2 % de (98,25 % du salaire brut - 32,45 €).</Question>
		<Question numéro={4} lignes={2}>Vérifier que le taux de prélèvement à la source de l'impôt sur le revenu est <b>d'environ</b> 5,70 %.</Question>
		<Question numéro={5} lignes={2}>Vérifier que la C.R.D.S, égal à 0,5 % de (98,25 % du salaire brut - 32,45 €), est de 13,80 €.</Question>
		<Question numéro={6} lignes={2}>On dit parfois que &laquo; le salaire net est 80% du salaire brut &raquo;. Qu'en penser ici ?</Question>
	</Énoncé>
</Contenu>
