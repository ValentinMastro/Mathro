<script lang="ts">
	import { Contenu, SousPartie, DansLaMarge } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item } from '$lib/cahier/composants/de_cours/*';
</script>

<Contenu>
	<SousPartie numero={3} titre="Somme et produit" />
	<Definition lignes={3}>
		Quand la dernière opération d'une expression littérale est :
		<Item>une addition ou une soustraction, l'expression est une <i>somme</i>.</Item>
		<Item>une multiplication ou une division, l'expression est un <i>produit</i>.</Item>
	</Definition>
	<Exemples lignes={2}>
		<Item><math><mn>3</mn><mo>×</mo><mi>a</mi><mo>+</mo><mn>2</mn><mo>×</mo><mi>b</mi></math> est une somme.</Item>
		<Item><math><mn>3</mn><mo>(</mo><mi>a</mi><mo>+</mo><mi>b</mi><mo>)</mo></math> est un produit.</Item>
	</Exemples>
</Contenu>
