<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Propriete, Item, Remarque, Exemple } from '$lib/cahier/composants/de_cours/*';
</script>

<Contenu>
	<Partie numero={3} titre="La priorité des opérations" />
	<Propriete lignes={4}>
		Dans un calcul contenant plusieurs opérations :
		<Item>la priorité est donnée aux calculs entres parenthèses</Item>
		<Item>puis, aux multiplications et aux divisions (de gauche à droite)</Item>
		<Item>enfin, aux additions et aux soustractions (de gauche à droite)</Item>
	</Propriete>
	<Remarque lignes={2}>
		Dans un calcul contenant un trait de fraction, on calcule d'abord le numérateur et le dénominateur, puis on effectue la division.
	</Remarque>
	<Exemple lignes={6}>
		<Item bullet="">
			<math>
				<mi>A</mi>
				<mo>=</mo>
				<mn>3</mn>
				<mo>×</mo>
				<mrow style="background:red;color:white;padding:0 2px">
					<mo>(</mo>
					<mn>4</mn>
					<mo>+</mo>
					<mn>2</mn>
					<mo>)</mo>
				</mrow>
				<mo>×</mo>
				<mn>5</mn>
				<mo>-</mo>
				<mn>6</mn>
				<mo>÷</mo>
				<mn>2</mn>
			</math>
		</Item>
		<Item bullet="">
			<math>
				<mi>A</mi>
				<mo>=</mo>
				<mrow style="background:red;color:white;padding:0 2px">
					<mn>3</mn>
					<mo>×</mo>
					<mn>6</mn>
				</mrow>
				<mo>×</mo>
				<mn>5</mn>
				<mo>-</mo>
				<mn>6</mn>
				<mo>÷</mo>
				<mn>2</mn>
			</math>
		</Item>
		<Item bullet="">
			<math>
				<mi>A</mi>
				<mo>=</mo>
				<mrow style="background:red;color:white;padding:0 2px">
					<mn>18</mn>
					<mo>×</mo>
					<mn>5</mn>
				</mrow>
				<mo>-</mo>
				<mn>6</mn>
				<mo>÷</mo>
				<mn>2</mn>
			</math>
		</Item>
		<Item bullet="">
			<math>
				<mi>A</mi>
				<mo>=</mo>
				<mn>90</mn>
				<mo>-</mo>
				<mrow style="background:red;color:white;padding:0 2px">
					<mn>6</mn>
					<mo>÷</mo>
					<mn>2</mn>
				</mrow>
			</math>
		</Item>
		<Item bullet="">
			<math>
				<mi>A</mi>
				<mo>=</mo>
				<mn>90</mn>
				<mo>-</mo>
				<mn>3</mn>
			</math>
		</Item>
		<Item bullet="">
			<math>
				<mi>A</mi>
				<mo>=</mo>
				<mn>87</mn>
			</math>
		</Item>
	</Exemple>
</Contenu>
