<script lang="ts">
	import { Chapitre, Contenu, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Remarque, Item } from '$lib/cahier/composants/de_cours/*';
</script>

<Chapitre titre="Opérations sur les nombres relatifs" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Natures des nombres" />
	<SousPartie numero={1} titre="Nombres entiers" />
	<Definition lignes={2}>
		Un nombre <i>entier naturel</i> permet de compter des éléments. Il est positif et n'a pas de partie décimale.
	</Definition>
	<Exemples lignes={3}>
		<Item><math><mn>5</mn></math> est un nombre entier naturel</Item>
		<Item><math><mrow><mo>−</mo><mn>5</mn></mrow></math> n'est pas un nombre entier naturel</Item>
		<Item><math><mn>5,5</mn></math> n'est pas un nombre entier naturel</Item>
	</Exemples>
	<Definition lignes={2}>
		Un nombre <i>entier relatif</i> n'a pas de partie décimale et peut être positif comme négatif.
	</Definition>
	<Remarque>
		<math><mn>0</mn></math> est considéré comme un nombre négatif <i>et</i> positif.
	</Remarque>
</Contenu>
