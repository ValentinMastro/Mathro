<script lang="ts">
	import { Contenu, DansLaMarge, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemples, Propriete, Item } from '$lib/cahier/composants/de_cours/*';
	import { Exercice } from '$lib/cahier/composants/de_marge/*';
	import { math } from 'mathlifier';
</script>

<DansLaMarge>
	<Exercice niveau={4} id_exercice={2011} position={8} />
</DansLaMarge>

<Contenu>
	<SousPartie numero={4} titre="Taux de variation" />
	<Propriete lignes={3}>
		Pour calculer le taux de variation entre une valeur de départ et une valeur d'arrivée :<br />
		<center>
			{@html math(
				"\\text{taux de variation} = \\dfrac{\\text{valeur d'arrivée} - \\text{valeur de départ}}{\\text{valeur de départ}} \\times 100 \\%"
			)}
		</center>
	</Propriete>

	<Exemples lignes={10}>
		<Item lignes={4}>
			Le nombre d'habitants d'une ville est passé de 4 000 à 5 000,<br />
			ce qui correspond à une augmentation de <br />
			<center>
				{@html math('\\dfrac{5000-4000}{4000} \\times 100 \\% = 25 \\%')}
			</center>
		</Item>
		<Item lignes={6}>
			Une voiture était vendue neuve à 25 000 €. <br />
			Aujourd'hui, elle ne vaut plus que 5 000 €.<br />
			Calculons son taux de variation : <br />
			<center>
				{@html math('\\dfrac{5000 - 25000}{25000} \\times 100 \\% = -80 \\%')}<br />
			</center>
			<br />
			Son prix a donc baissé de 80 %.
		</Item>
	</Exemples>
</Contenu>
