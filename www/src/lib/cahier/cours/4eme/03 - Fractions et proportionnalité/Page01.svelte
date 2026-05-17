<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Notation, Item } from '$lib/cahier/composants/de_cours/*';
</script>

<Chapitre titre="Fractions et proportionnalité" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Calculs fractionnaires" />
	<Definition lignes={3}>
		Soient deux nombres <math><mi>a</mi></math> et <math><mi>b</mi></math> avec <math><mi>b</mi><mo>≠</mo><mn>0</mn></math>.<br />
		Le quotient de <math><mi>a</mi></math> par <math><mi>b</mi></math> est le nombre qui, lorsqu'il est multiplié par <math><mi>b</mi></math>, donne <math><mi>a</mi></math>.
	</Definition>
	<Notation>
		Il se note <math><mfrac><mi>a</mi><mi>b</mi></mfrac></math> et se lit "a sur b".
	</Notation>

	<Exemples lignes={3}>
		<Item lignes={2}>
			<math><mfrac><mn>3</mn><mn>4</mn></mfrac><mo>×</mo><mn>4</mn><mo>=</mo><mfrac><mn>3</mn><menclose notation="updiagonalstrike"><mn>4</mn></menclose></mfrac><mo>×</mo><menclose notation="updiagonalstrike"><mn>4</mn></menclose><mo>=</mo><mn>3</mn></math>
		</Item>
		<Item>
			<math><mfrac><mn>7,2</mn><mn>5,8</mn></mfrac><mo>×</mo><mn>5,8</mn><mo>=</mo><mfrac><mn>7,2</mn><menclose notation="updiagonalstrike"><mn>5,8</mn></menclose></mfrac><mo>×</mo><menclose notation="updiagonalstrike"><mn>5,8</mn></menclose><mo>=</mo><mn>7,2</mn></math>
		</Item>
	</Exemples>
</Contenu>
