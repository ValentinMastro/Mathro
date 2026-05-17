<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Propriete, Item, Remarque, Exemples } from '$lib/cahier/composants/de_cours/*';
</script>

<Contenu>
	<SousPartie numero={2} titre="Multiplication et division" />
	<Propriete lignes={3}>
		Pour multiplier des nombres relatifs :
		<Item>
			si le nombre de facteurs négatifs est <i>pair</i>, le produit est positif
		</Item>
		<Item>
			si le nombre de facteurs négatifs est <i>impair</i>, le produit est négatif
		</Item>
	</Propriete>
	<Remarque>Pour les divisions, on utilise la même règle de signes.</Remarque>
	<Exemples lignes={2}>
		<Item>
			<math><mo>(</mo><mo>-</mo><mn>2</mn><mo>)</mo><mo>×</mo><mo>(</mo><mo>-</mo><mn>6</mn><mo>)</mo><mo>×</mo><mo>(</mo><mo>+</mo><mn>6</mn><mo>)</mo><mo>×</mo><mn>4</mn><mo>×</mo><mo>(</mo><mo>-</mo><mn>2</mn><mo>)</mo><mo>=</mo><mo>-</mo><mn>576</mn></math>
		</Item>
		<Item>
			<math><mo>(</mo><mo>-</mo><mn>2</mn><mo>)</mo><mo>×</mo><mo>(</mo><mo>-</mo><mn>6</mn><mo>)</mo><mo>×</mo><mn>6</mn><mo>×</mo><mo>(</mo><mo>+</mo><mn>4</mn><mo>)</mo><mo>×</mo><mo>(</mo><mo>-</mo><mn>2</mn><mo>)</mo><mo>÷</mo><mo>(</mo><mo>-</mo><mn>2</mn><mo>)</mo><mo>=</mo><mn>288</mn></math>
		</Item>
	</Exemples>
</Contenu>
