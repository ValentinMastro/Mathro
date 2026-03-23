<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Formule, Item, Methode, Remarque } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={3} titre="Moyenne" />
	<Definition lignes={2}>
		La <i>moyenne</i> d'une série de données est la somme de toutes les valeurs <br />
		divisée par l'effectif total.
	</Definition>
	<Formule lignes={2}>
		{@html math('\\bar{x} = \\dfrac{\\text{somme des valeurs}}{\\text{effectif total}}')}
	</Formule>
	<Methode lignes={3}>
		<Item>Calculer la somme de toutes les valeurs.</Item>
		<Item>Diviser par l'effectif total.</Item>
		<Item>Arrondir si nécessaire en indiquant la précision.</Item>
	</Methode>
	<Exemples lignes={7}>
		<Item lignes={4}>
			Notes de 5 élèves : 8 ; 10 ; 12 ; 14 ; 16. <br />
			Somme : {@html math('8 + 10 + 12 + 14 + 16 = 60')}. <br />
			Effectif total : 5. <br />
			Moyenne : {@html math('\\bar{x} = 60 \\div 5 = 12')}.
		</Item>
		<Item lignes={2}>
			Avec le tableau p.2 : {@html math(
				'\\bar{x} = \\dfrac{8 \\times 3 + 10 \\times 7 + 12 \\times 8 + 14 \\times 6 + 16 \\times 4 + 18 \\times 2}{30} = \\dfrac{356}{30} \\approx 11{,}9'
			)}.
		</Item>
	</Exemples>
	<Remarque lignes={1}>La moyenne peut ne pas être une valeur du caractère.</Remarque>
</Contenu>
