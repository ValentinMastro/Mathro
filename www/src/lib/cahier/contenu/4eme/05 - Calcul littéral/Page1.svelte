<script lang="ts">
	import { Chapitre, Partie, SousPartie, Contenu } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemple, Paragraphe, Item } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
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
		{@html math('3 \\times a + 2 \\times b')} est une expression littérale contenant 2 variables : {@html math('a')} et {@html math('b')}. Elle est
		composée de 3 opérations : 2 multiplications et 1 addition.
	</Exemple>
	<Paragraphe couleur="rouge" nom_du_paragraphe="Convention d'écriture" lignes={4}>
		Le symbole de multiplication est facultatif :
		<Item>entre deux variables : {@html math('ab')} signifie {@html math('a \\times b')}</Item>
		<Item>entre une variable et un nombre : {@html math('3a')} signifie {@html math('3 \\times a')}</Item>
		<Item>avec une parenthèse : {@html math('3(a+2)')} signifie {@html math('3 \\times (a+2)')}</Item>
	</Paragraphe>
</Contenu>
