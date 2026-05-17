<script lang="ts">
	import { Contenu, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Propriete, Item, Exemples } from '$lib/cahier/composants/de_cours/*';
</script>

<Contenu>
	<Partie numero={2} titre="Les opérations de base" />
	<SousPartie numero={1} titre="Addition et soustraction" />
	<Propriete lignes={6}>
		Pour additionner deux nombres relatifs :
		<Item lignes={2}>s'ils sont de même signe, la somme a le même signe et on additionne les distances à zéro ;</Item>
		<Item lignes={3}>
			s'ils sont de signes différents, le signe de la somme est celui du terme de la plus grande distance à zéro, et on soustrait les distances à
			zéro.
		</Item>
	</Propriete>
	<Exemples lignes={4}>
		<Item>
			<math><mn>17</mn><mo>+</mo><mn>5</mn><mo>=</mo><mn>22</mn></math>
		</Item>
		<Item>
			<math><mn>12</mn><mo>+</mo><mo>(</mo><mo>-</mo><mn>4</mn><mo>)</mo><mo>=</mo><mn>8</mn></math>
		</Item>
		<Item>
			<math><mo>-</mo><mn>3</mn><mo>+</mo><mo>(</mo><mo>-</mo><mn>6</mn><mo>)</mo><mo>=</mo><mo>-</mo><mn>9</mn></math>
		</Item>
		<Item>
			<math><mo>-</mo><mn>5</mn><mo>+</mo><mo>(</mo><mo>+</mo><mn>14</mn><mo>)</mo><mo>=</mo><mn>9</mn></math>
		</Item>
	</Exemples>
	<Propriete>Soustraire un nombre revient à ajouter son opposé</Propriete>
	<Exemples lignes={4}>
		<Item>
			<math><mn>124</mn><mo>-</mo><mn>95</mn><mo>=</mo><mn>29</mn></math>
		</Item>
		<Item>
			<math
				><mn>12</mn><mo>-</mo><mo>(</mo><mo>-</mo><mn>4</mn><mo>)</mo><mo>=</mo><mn>12</mn><mo>+</mo><mo>(</mo><mo>+</mo><mn>4</mn><mo>)</mo><mo>=</mo
				><mn>16</mn></math
			>
		</Item>
		<Item>
			<math
				><mo>-</mo><mn>12</mn><mo>-</mo><mo>(</mo><mo>+</mo><mn>6</mn><mo>)</mo><mo>=</mo><mo>-</mo><mn>12</mn><mo>+</mo><mo>(</mo><mo>-</mo><mn>6</mn
				><mo>)</mo><mo>=</mo><mo>-</mo><mn>18</mn></math
			>
		</Item>
		<Item>
			<math
				><mo>-</mo><mn>89</mn><mo>-</mo><mo>(</mo><mo>-</mo><mn>51</mn><mo>)</mo><mo>=</mo><mo>-</mo><mn>89</mn><mo>+</mo><mo>(</mo><mo>+</mo><mn
					>51</mn
				><mo>)</mo><mo>=</mo><mo>-</mo><mn>38</mn></math
			>
		</Item>
	</Exemples>
</Contenu>
