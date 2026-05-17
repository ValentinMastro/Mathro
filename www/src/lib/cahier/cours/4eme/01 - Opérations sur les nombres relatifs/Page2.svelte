<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item } from '$lib/cahier/composants/de_cours/*';
</script>

<Contenu>
	<SousPartie numero={2} titre="Fractions et nombres rationnels" />
	<Definition lignes={2}>
		Une fraction est un moyen d'écrire le résultat d'une division entre deux nombres entiers : le numérateur et le dénominateur.
	</Definition>
	<Definition lignes={2}>
		S'il existe une division entre deux nombres entiers égale à un nombre, alors ce nombre est <i>rationnel</i>.
	</Definition>
	<Exemples lignes={3}>
		<Item>
			<math><mn>0,75</mn></math> est rationnel car <math><mn>0,75</mn> <mo> = </mo> <mfrac><mn>3</mn><mn>4</mn></mfrac></math>
		</Item>
		<Item>
			<math><mn>0,17</mn></math> est rationnel car <math><mn>0,17</mn> <mo> = </mo> <mfrac><mn>17</mn><mn>100</mn></mfrac></math>
		</Item>
		<Item>
			<math><mi>π</mi></math> n'est pas un nombre rationnel
		</Item>
	</Exemples>
</Contenu>
