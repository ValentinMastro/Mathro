<script lang="ts">
	import { Chapitre, Partie, SousPartie, Contenu } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemple, Paragraphe, Item } from '$lib/cahier/composants/de_cours/*';
</script>

<Chapitre titre="Calcul littéral" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Les expressions littérales" />
	<SousPartie numero={1} titre="Écriture" />
	<Definition lignes={2}>Une expression littérale est un ensemble d'opérations contenant des nombres et des lettres.</Definition>
	<Definition lignes={2}>
		Dans une expression littérale, une lettre représente un nombre, cette lettre est appelée <i>une variable</i>.
	</Definition>
	<Exemple lignes={2}>
		<math><mn>3</mn><mo>×</mo><mi>a</mi><mo>+</mo><mn>2</mn><mo>×</mo><mi>b</mi></math> est une expression littérale contenant 2 variables : <math><mi>a</mi></math> et <math><mi>b</mi></math>. Elle est
		composée de 3 opérations : 2 multiplications et 1 addition.
	</Exemple>
	<Paragraphe couleur="rouge" nom_du_paragraphe="Convention d'écriture" lignes={4}>
		Le symbole de multiplication est facultatif :
		<Item>entre deux variables : <math><mi>a</mi><mi>b</mi></math> signifie <math><mi>a</mi><mo>×</mo><mi>b</mi></math></Item>
		<Item>entre une variable et un nombre : <math><mn>3</mn><mi>a</mi></math> signifie <math><mn>3</mn><mo>×</mo><mi>a</mi></math></Item>
		<Item>avec une parenthèse : <math><mn>3</mn><mo>(</mo><mi>a</mi><mo>+</mo><mn>2</mn><mo>)</mo></math> signifie <math><mn>3</mn><mo>×</mo><mo>(</mo><mi>a</mi><mo>+</mo><mn>2</mn><mo>)</mo></math></Item>
	</Paragraphe>
</Contenu>
