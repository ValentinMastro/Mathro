<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemples, Item, Methode, Remarque } from '$lib/cahier/composants/de_cours/*';
</script>

<Contenu>
	<SousPartie numero={2} titre="Multiplier ou diviser par une puissance de 10" />
	<Methode lignes={5}>
		Soit <math><mi>n</mi></math> un nombre entier positif.
		<Item lignes={2}>
			Multiplier un nombre par <math><msup><mn>10</mn><mi>n</mi></msup></math>, c'est déplacer la virgule de <math><mi>n</mi></math> chiffres vers la droite.
		</Item>
		<Item lignes={2}>
			Multiplier un nombre par <math><msup><mn>10</mn><mrow><mo>-</mo><mi>n</mi></mrow></msup></math>, c'est déplacer la virgule de <math><mi>n</mi></math> chiffres vers la gauche.
		</Item>
	</Methode>
	<Remarque>
		Multiplier par <math><msup><mn>10</mn><mrow><mo>-</mo><mi>n</mi></mrow></msup></math> revient à diviser par <math><msup><mn>10</mn><mi>n</mi></msup></math>.
	</Remarque>
	<Exemples lignes={6}>
		<Item>
			<math><mn>1,234</mn><mo>×</mo><msup><mn>10</mn><mn>2</mn></msup><mo>=</mo><mn>123,4</mn></math>
		</Item>
		<Item>
			<math><mn>96,76</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>-</mo><mn>3</mn></mrow></msup><mo>=</mo><mn>0,096 76</mn></math>
		</Item>
		<Item>
			<math><mn>39 426,49</mn><mo>×</mo><msup><mn>10</mn><mn>4</mn></msup><mo>=</mo><mn>394 264,9</mn></math>
		</Item>
		<Item>
			<math><mn>0,003 825</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>-</mo><mn>1</mn></mrow></msup><mo>=</mo><mn>0,000 382 5</mn></math>
		</Item>
		<Item>
			<math><mn>1 927,4</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><mo>=</mo><mn>192 740</mn></math>
		</Item>
		<Item>
			<math><mn>96,76</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>-</mo><mn>3</mn></mrow></msup><mo>=</mo><mn>0,096 76</mn></math>
		</Item>
	</Exemples>
</Contenu>
