<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item } from '$lib/cahier/composants/de_cours/*';
</script>

<Contenu>
	<SousPartie numero={2} titre="La racine carrée d'un nombre" />
	<Definition lignes={2}>
		La racine carrée d'un nombre est l'opération réciproque du carré d'un <br />
		nombre. Elle se note avec le symbole « radical » :
		<math><msqrt><mspace width="1em" /></msqrt></math>
		.
	</Definition>
	<Exemples lignes={3}>
		<Item>
			La racine carrée de 144 est 12 car <math>
				<mn>12</mn>
				<mo>×</mo>
				<mn>12</mn>
				<mo>=</mo>
				<mn>144</mn>
			</math>
			.
		</Item>
		<Item>
			<math>
				<msqrt><mn>64</mn></msqrt>
				<mo>=</mo>
				<mn>8</mn>
			</math>
			car
			<math>
				<mn>8</mn>
				<mo>×</mo>
				<mn>8</mn>
				<mo>=</mo>
				<mn>64</mn>
			</math>
			.
		</Item>
		<Item>
			<math>
				<msqrt><mn>2,25</mn></msqrt>
				<mo>=</mo>
				<mn>1,5</mn>
			</math>
			car
			<math>
				<mn>1,5</mn>
				<mo>×</mo>
				<mn>1,5</mn>
				<mo>=</mo>
				<mn>2,25</mn>
			</math>
			.
		</Item>
	</Exemples>
</Contenu>
