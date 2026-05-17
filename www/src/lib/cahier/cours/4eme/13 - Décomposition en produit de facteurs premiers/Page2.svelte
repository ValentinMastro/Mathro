<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Item, Paragraphe, Exemples } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
</script>

<Contenu>
	<Partie numero={2} titre="Décomposition en facteurs premiers" />
	<LigneVide />
	<Paragraphe couleur="rouge" nom_du_paragraphe="Théorème fondamental de l'arithmétique" lignes={2}>
		Pour n'importe quel entier naturel <math><mo>⩾</mo><mn>2</mn></math>, il existe une <u>unique</u> façon de le décomposer en produit de nombres premiers.
	</Paragraphe>
	<Exemples lignes={4}>
		<Item>
			<math><mn>219</mn><mo>=</mo><mn>3</mn><mo>×</mo><mn>73</mn></math>
		</Item>
		<Item>
			<math><mn>110</mn><mo>=</mo><mn>2</mn><mo>×</mo><mn>5</mn><mo>×</mo><mn>11</mn></math>
		</Item>
		<Item>
			<math><mn>625</mn><mo>=</mo><mn>5</mn><mo>×</mo><mn>5</mn><mo>×</mo><mn>5</mn><mo>×</mo><mn>5</mn><mo>=</mo><msup><mn>5</mn><mn>4</mn></msup></math>
		</Item>
		<Item>
			<math><mn>360</mn><mo>=</mo><mn>2</mn><mo>×</mo><mn>2</mn><mo>×</mo><mn>2</mn><mo>×</mo><mn>3</mn><mo>×</mo><mn>3</mn><mo>×</mo><mn>5</mn><mo>=</mo><msup><mn>2</mn><mn>3</mn></msup><mo>×</mo><msup><mn>3</mn><mn>2</mn></msup><mo>×</mo><mn>5</mn></math>
		</Item>
	</Exemples>
</Contenu>
