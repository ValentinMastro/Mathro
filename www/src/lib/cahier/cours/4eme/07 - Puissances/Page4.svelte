<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item, Methode, Remarque } from '$lib/cahier/composants/de_cours/*';
</script>

<Contenu>
	<SousPartie numero={3} titre="Écriture scientifique d'un nombre décimal" />
	<Definition lignes={4}>
		L'écriture scientifique d'un nombre décimal est <i>l'unique</i>
		écriture de la forme
		<math>
			<mi>a</mi>
			<mo>×</mo>
			<msup>
				<mn>10</mn>
				<mi>n</mi>
			</msup>
		</math>
		où :
		<Item>
			<math><mi>a</mi></math>
			est un nombre décimal tel que
			<math>
				<mn>1</mn>
				<mo>⩽</mo>
				<mi>a</mi>
				<mo>&lt;</mo>
				<mn>10</mn>
			</math>
		</Item>
		<Item>
			<math><mi>n</mi></math>
			 est un entier relatif
		</Item>
	</Definition>
	<Exemples lignes={8}>
		<Item>
			<math>
				<mn>120 546</mn>
				<mo>=</mo>
				<mn>1,205 46</mn>
				<mo>×</mo>
				<msup>
					<mn>10</mn>
					<mn>5</mn>
				</msup>
			</math>
		</Item>
		<Item>
			<math>
				<mn>0,436</mn>
				<mo>=</mo>
				<mn>4,36</mn>
				<mo>×</mo>
				<msup>
					<mn>10</mn>
					<mrow>
						<mo>-</mo>
						<mn>1</mn>
					</mrow>
				</msup>
			</math>
		</Item>
		<Item>
			<math>
				<mn>540 000</mn>
				<mo>=</mo>
				<mn>5,4</mn>
				<mo>×</mo>
				<msup>
					<mn>10</mn>
					<mn>5</mn>
				</msup>
			</math>
		</Item>
		<Item>
			<math>
				<mn>0,008 76</mn>
				<mo>=</mo>
				<mn>8,76</mn>
				<mo>×</mo>
				<msup>
					<mn>10</mn>
					<mrow>
						<mo>-</mo>
						<mn>3</mn>
					</mrow>
				</msup>
			</math>
		</Item>
		<Item>
			<math>
				<mn>0,071 5</mn>
				<mo>=</mo>
				<mn>7,15</mn>
				<mo>×</mo>
				<msup>
					<mn>10</mn>
					<mrow>
						<mo>-</mo>
						<mn>2</mn>
					</mrow>
				</msup>
			</math>
		</Item>
		<Item>
			<math>
				<mn>12,34</mn>
				<mo>=</mo>
				<mn>1,234</mn>
				<mo>×</mo>
				<msup>
					<mn>10</mn>
					<mn>1</mn>
				</msup>
			</math>
		</Item>
		<Item>
			<math>
				<mn>0,000 16</mn>
				<mo>=</mo>
				<mn>1,6</mn>
				<mo>×</mo>
				<msup>
					<mn>10</mn>
					<mrow>
						<mo>-</mo>
						<mn>4</mn>
					</mrow>
				</msup>
			</math>
		</Item>
		<Item>
			<math>
				<mn>6,725</mn>
				<mo>=</mo>
				<mn>6,725</mn>
				<mo>×</mo>
				<msup>
					<mn>10</mn>
					<mn>0</mn>
				</msup>
			</math>
		</Item>
	</Exemples>
</Contenu>
