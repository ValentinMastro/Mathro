<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item, Remarque, Propriete, Texte } from '$lib/cahier/composants/de_cours/*';
</script>

<Contenu>
	<Partie numero={2} titre="Puissances à base quelconque" />
	<Definition>
		Soit <math><mi>a</mi></math> un nombre réel non nul et <math><mi>n</mi></math> un nombre entier relatif.
	</Definition>
	<Texte couleur="vert">
		<center>
			<math><msup><mi>a</mi><mi>n</mi></msup><mo>=</mo><munder><mrow><mi>a</mi><mo>×</mo><mi>a</mi><mo>×</mo><mo>⋯</mo><mo>×</mo><mi>a</mi></mrow><mrow><mi>n</mi><mspace width="0.2em"/><mtext>facteurs</mtext></mrow></munder></math><br />
		</center>
	</Texte>
	<Texte couleur="vert">
		<math><mi>a</mi></math> est la <i>base</i> de la puissance et <math><mi>n</mi></math> est son <i>exposant</i>.
	</Texte>
	<Remarque>
		Pour n'importe quelle base <math><mi>a</mi></math>, on a <math><msup><mi>a</mi><mn>0</mn></msup><mo>=</mo><mn>1</mn></math>.
	</Remarque>
	<Propriete>
		Pour tout nombre <math><mi>x</mi></math>, <math><msup><mi>x</mi><mn>2</mn></msup></math> est positif.
	</Propriete>
	<Propriete lignes={3}>
		Si <math><mi>x</mi></math> est un nombre négatif, <math><msup><mi>x</mi><mi>n</mi></msup></math> est :
		<Item>positif si <math><mi>n</mi></math> est un entier pair</Item>
		<Item>négatif si <math><mi>n</mi></math> est un entier impair</Item>
	</Propriete>
	<Exemples lignes={3}>
		<Item>
			<math><msup><mrow><mo>(</mo><mo>-</mo><mn>2</mn><mo>)</mo></mrow><mn>5</mn></msup><mo>=</mo><mo>-</mo><mn>32</mn></math> est négatif car 5 est impair.
		</Item>
		<Item>
			<math><msup><mrow><mo>(</mo><mo>-</mo><mn>6</mn><mo>)</mo></mrow><mn>6</mn></msup><mo>=</mo><mn>46656</mn></math> est positif car 6 est pair.
		</Item>
		<Item>
			<math><msup><mrow><mo>(</mo><mo>-</mo><mn>3</mn><mo>)</mo></mrow><mn>10</mn></msup><mo>=</mo><mn>59049</mn></math> est positif car 10 est pair.
		</Item>
	</Exemples>
</Contenu>
