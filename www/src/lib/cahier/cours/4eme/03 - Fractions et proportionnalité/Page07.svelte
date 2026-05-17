<script lang="ts">
	import { Contenu, DansLaMarge, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemples, Propriete, Item } from '$lib/cahier/composants/de_cours/*';
	import { Exercice } from '$lib/cahier/composants/de_marge/*';
</script>

<DansLaMarge>
	<Exercice niveau={4} id_exercice={2011} position={8} />
</DansLaMarge>

<Contenu>
	<SousPartie numero={4} titre="Taux de variation" />
	<Propriete lignes={3}>
		Pour calculer le taux de variation entre une valeur de départ et une valeur d'arrivée :<br />
		<center>
			<math><mtext>taux de variation</mtext><mo>=</mo><mfrac><mrow><mtext>valeur d'arrivée</mtext><mo>-</mo><mtext>valeur de départ</mtext></mrow><mtext>valeur de départ</mtext></mfrac><mo>×</mo><mn>100</mn><mo>%</mo></math>
		</center>
	</Propriete>

	<Exemples lignes={10}>
		<Item lignes={4}>
			Le nombre d'habitants d'une ville est passé de 4 000 à 5 000,<br />
			ce qui correspond à une augmentation de <br />
			<center>
				<math><mfrac><mrow><mn>5000</mn><mo>-</mo><mn>4000</mn></mrow><mn>4000</mn></mfrac><mo>×</mo><mn>100</mn><mo>%</mo><mo>=</mo><mn>25</mn><mo>%</mo></math>
			</center>
		</Item>
		<Item lignes={6}>
			Une voiture était vendue neuve à 25 000 €. <br />
			Aujourd'hui, elle ne vaut plus que 5 000 €.<br />
			Calculons son taux de variation : <br />
			<center>
				<math><mfrac><mrow><mn>5000</mn><mo>-</mo><mn>25000</mn></mrow><mn>25000</mn></mfrac><mo>×</mo><mn>100</mn><mo>%</mo><mo>=</mo><mo>-</mo><mn>80</mn><mo>%</mo></math><br />
			</center>
			<br />
			Son prix a donc baissé de 80 %.
		</Item>
	</Exemples>
</Contenu>
