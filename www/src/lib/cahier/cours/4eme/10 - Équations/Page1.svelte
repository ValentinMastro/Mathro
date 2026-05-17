<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item } from '$lib/cahier/composants/de_cours/*';
</script>

<Chapitre titre="Équations" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Concept" />
	<Definition lignes={4}>
		Une équation est une égalité contenant une variable <i>inconnue</i>
		, souvent désignée par la lettre
		<math><mi>x</mi></math>
		.
		<br />
		Lorsqu'en remplaçant la valeur de l'inconnue, l'égalité est vérifiée, on dit que cette valeur est une
		<i>solution</i>
		 de l'équation.
	</Definition>
	<Exemples lignes={18}>
		<Item lignes={9}>
			Dans l'équation <math>
				<mn>2</mn>
				<mi>x</mi>
				<mo>+</mo>
				<mn>5</mn>
				<mo>=</mo>
				<mn>3</mn>
			</math>
			:
			<Item lignes={4}>
				Si je remplace <math><mi>x</mi></math>
				par
				<math>
					<mo>-</mo>
					<mn>1</mn>
				</math>
				,
				<br />
				à gauche du égal, j'aurai
				<math>
					<mn>2</mn>
					<mo>×</mo>
					<mo>(</mo>
					<mo>-</mo>
					<mn>1</mn>
					<mo>)</mo>
					<mo>+</mo>
					<mn>5</mn>
					<mo>=</mo>
					<menclose notation="box" style="color:red"><mn>3</mn></menclose>
				</math>
				<br />
				et à droite du égal, j'aurai
				<math><menclose notation="box" style="color:red"><mn>3</mn></menclose></math>
				.
				<br />
				<span style="color: red">-1 est une solution de l'équation</span>
			</Item>
			<Item lignes={4}>
				Si je remplace <math><mi>x</mi></math>
				par 2,
				<br />
				à gauche du égal, j'aurai
				<math>
					<mn>2</mn>
					<mo>×</mo>
					<mn>2</mn>
					<mo>+</mo>
					<mn>5</mn>
					<mo>=</mo>
					<mn>4</mn>
					<mo>+</mo>
					<mn>5</mn>
					<mo>=</mo>
					<menclose notation="box" style="color:red"><mn>9</mn></menclose>
				</math>
				<br />
				et à droite du égal, j'aurai
				<math><menclose notation="box" style="color:red"><mn>3</mn></menclose></math>
				.
				<br />
				<span style="color: red">2 n'est pas une solution de l'équation</span>
			</Item>
		</Item>
		<Item lignes={9}>
			Dans l'équation <math>
				<mn>7</mn>
				<mi>x</mi>
				<mo>+</mo>
				<mn>5</mn>
				<mo>=</mo>
				<mn>6</mn>
				<mi>x</mi>
				<mo>+</mo>
				<mn>6</mn>
			</math>
			:
			<Item lignes={4}>
				Si je remplace <math><mi>x</mi></math>
				par 0,
				<br />
				à gauche du égal, j'aurai
				<math>
					<mn>7</mn>
					<mo>×</mo>
					<mn>0</mn>
					<mo>+</mo>
					<mn>5</mn>
					<mo>=</mo>
					<mn>0</mn>
					<mo>+</mo>
					<mn>5</mn>
					<mo>=</mo>
					<menclose notation="box" style="color:red"><mn>5</mn></menclose>
				</math>
				<br />
				et à droite du égal, j'aurai
				<math>
					<mn>6</mn>
					<mo>×</mo>
					<mn>0</mn>
					<mo>+</mo>
					<mn>6</mn>
					<mo>=</mo>
					<mn>0</mn>
					<mo>+</mo>
					<mn>6</mn>
					<mo>=</mo>
					<menclose notation="box" style="color:red"><mn>6</mn></menclose>
				</math>
				.
				<br />
				<span style="color: red">0 n'est pas une solution de l'équation</span>
			</Item>
			<Item lignes={4}>
				Si je remplace <math><mi>x</mi></math>
				par 1,
				<br />
				à gauche du égal, j'aurai
				<math>
					<mn>7</mn>
					<mo>×</mo>
					<mn>1</mn>
					<mo>+</mo>
					<mn>5</mn>
					<mo>=</mo>
					<mn>7</mn>
					<mo>+</mo>
					<mn>5</mn>
					<mo>=</mo>
					<menclose notation="box" style="color:red"><mn>12</mn></menclose>
				</math>
				<br />
				et à droite du égal, j'aurai
				<math>
					<mn>6</mn>
					<mo>×</mo>
					<mn>1</mn>
					<mo>+</mo>
					<mn>6</mn>
					<mo>=</mo>
					<mn>6</mn>
					<mo>+</mo>
					<mn>6</mn>
					<mo>=</mo>
					<menclose notation="box" style="color:red"><mn>12</mn></menclose>
				</math>
				.
				<br />
				<span style="color: red">1 est une solution de l'équation</span>
			</Item>
		</Item>
	</Exemples>
</Contenu>
