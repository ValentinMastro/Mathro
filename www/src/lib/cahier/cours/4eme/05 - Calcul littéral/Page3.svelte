<script lang="ts">
	import { Contenu, SousPartie, DansLaMarge } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<SousPartie numero={3} titre="Somme et produit" />
	<Definition lignes={3}>
		Quand la dernière opération d'une expression littérale est :
		<Item>une addition ou une soustraction, l'expression est une <i>somme</i>.</Item>
		<Item>une multiplication ou une division, l'expression est un <i>produit</i>.</Item>
	</Definition>
	<Exemples lignes={2}>
		<Item>{@html math('3 \\times a + 2 \\times b')} est une somme.</Item>
		<Item>{@html math('3(a + b)')} est un produit.</Item>
	</Exemples>
</Contenu>
