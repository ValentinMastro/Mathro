<script lang="ts">
	import { Chapitre, Contenu, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Formule, Item, Remarque } from '$lib/cahier/composants/de_cours/*';
</script>

<Chapitre titre="Puissances" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Les puissances de 10" />
	<SousPartie numero={1} titre="De la multiplication aux puissances" />
	<Definition lignes={2}>
		Soit <math><mi>n</mi></math>
		un nombre entier positif non nul.
		<br />
		<math>
			<msup>
				<mn>10</mn>
				<mi>n</mi>
			</msup>
		</math>
		(se lit « 10 puissance
		<math><mi>n</mi></math>
		») est le produit de
		<math><mi>n</mi></math>
		 facteurs égaux à 10.
	</Definition>
	<Exemples lignes={4}>
		<Item>
			<math>
				<msup>
					<mn>10</mn>
					<mn>9</mn>
				</msup>
				<mo>=</mo>
				<mn>10</mn>
				<mo>×</mo>
				<mn>10</mn>
				<mo>×</mo>
				<mn>10</mn>
				<mo>×</mo>
				<mn>10</mn>
				<mo>×</mo>
				<mn>10</mn>
				<mo>×</mo>
				<mn>10</mn>
				<mo>×</mo>
				<mn>10</mn>
				<mo>×</mo>
				<mn>10</mn>
				<mo>×</mo>
				<mn>10</mn>
				<mo>=</mo>
				<mn>1 000 000 000</mn>
			</math>
		</Item>
		<Item>
			<math>
				<msup>
					<mn>10</mn>
					<mn>4</mn>
				</msup>
				<mo>=</mo>
				<mn>10</mn>
				<mo>×</mo>
				<mn>10</mn>
				<mo>×</mo>
				<mn>10</mn>
				<mo>×</mo>
				<mn>10</mn>
				<mo>=</mo>
				<mn>10 000</mn>
			</math>
		</Item>
		<Item>
			<math>
				<msup>
					<mn>10</mn>
					<mn>5</mn>
				</msup>
				<mo>=</mo>
				<mn>10</mn>
				<mo>×</mo>
				<mn>10</mn>
				<mo>×</mo>
				<mn>10</mn>
				<mo>×</mo>
				<mn>10</mn>
				<mo>×</mo>
				<mn>10</mn>
				<mo>=</mo>
				<mn>100 000</mn>
			</math>
		</Item>
		<Item>
			<math>
				<msup>
					<mn>10</mn>
					<mn>2</mn>
				</msup>
				<mo>=</mo>
				<mn>10</mn>
				<mo>×</mo>
				<mn>10</mn>
				<mo>=</mo>
				<mn>100</mn>
			</math>
		</Item>
	</Exemples>
	<Remarque>
		<center>
			<math>
				<msup>
					<mn>10</mn>
					<mn>0</mn>
				</msup>
				<mo>=</mo>
				<mn>1</mn>
			</math>
		</center>
	</Remarque>
	<Formule>
		<center>
			<math>
				<msup>
					<mn>10</mn>
					<mrow>
						<mi>n</mi>
						<mo>+</mo>
						<mi>p</mi>
					</mrow>
				</msup>
				<mo>=</mo>
				<msup>
					<mn>10</mn>
					<mi>n</mi>
				</msup>
				<mo>×</mo>
				<msup>
					<mn>10</mn>
					<mi>p</mi>
				</msup>
			</math>
		</center>
	</Formule>
	<Exemples lignes={2}>
		<Item>
			<math>
				<msup>
					<mn>10</mn>
					<mn>2</mn>
				</msup>
				<mo>×</mo>
				<msup>
					<mn>10</mn>
					<mn>3</mn>
				</msup>
				<mo>=</mo>
				<msup>
					<mn>10</mn>
					<mrow>
						<mn>2</mn>
						<mo>+</mo>
						<mn>3</mn>
					</mrow>
				</msup>
				<mo>=</mo>
				<msup>
					<mn>10</mn>
					<mn>5</mn>
				</msup>
				<mo>=</mo>
				<mn>100 000</mn>
			</math>
		</Item>
		<Item>
			<math>
				<msup>
					<mn>10</mn>
					<mn>3</mn>
				</msup>
				<mo>×</mo>
				<msup>
					<mn>10</mn>
					<mn>4</mn>
				</msup>
				<mo>=</mo>
				<msup>
					<mn>10</mn>
					<mrow>
						<mn>3</mn>
						<mo>+</mo>
						<mn>4</mn>
					</mrow>
				</msup>
				<mo>=</mo>
				<msup>
					<mn>10</mn>
					<mn>7</mn>
				</msup>
			</math>
		</Item>
	</Exemples>
</Contenu>
