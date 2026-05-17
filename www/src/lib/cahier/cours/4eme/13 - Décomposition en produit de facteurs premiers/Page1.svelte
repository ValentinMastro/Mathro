<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item, Paragraphe, Remarque } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
</script>

<Chapitre titre="Décomposition en facteurs premiers" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Nombres premiers" />
	<LigneVide />
	<Definition lignes={3}>
		Soient <math><mi>a</mi></math>
		et
		<math><mi>b</mi></math>
		deux entiers naturels.
		<br />
		On dit que
		<math><mi>a</mi></math>
		est un
		<i>diviseur</i>
		de
		<math><mi>b</mi></math>
		si
		<math><mi>b</mi></math>
		est un multiple de
		<math><mi>a</mi></math>
		.
		<br />
		Autrement dit, le reste de la division euclidienne de
		<math><mi>b</mi></math>
		par
		<math><mi>a</mi></math>
		 est nul.
	</Definition>
	<Exemples lignes={5}>
		<Item>
			3 est un diviseur de 15 car <math>
				<mn>15</mn>
				<mo>=</mo>
				<mn>3</mn>
				<mo>×</mo>
				<mn>5</mn>
			</math>
			.
		</Item>
		<Item>
			7 est un diviseur de 21 car <math>
				<mn>21</mn>
				<mo>=</mo>
				<mn>7</mn>
				<mo>×</mo>
				<mn>3</mn>
			</math>
			.
		</Item>
		<Item>
			5 est un diviseur de 25 car <math>
				<mn>25</mn>
				<mo>=</mo>
				<mn>5</mn>
				<mo>×</mo>
				<mn>5</mn>
			</math>
			.
		</Item>
		<Item>
			1 est un diviseur de 43 car <math>
				<mn>43</mn>
				<mo>=</mo>
				<mn>1</mn>
				<mo>×</mo>
				<mn>43</mn>
			</math>
			.
		</Item>
		<Item>
			78 est un diviseur de 78 car <math>
				<mn>78</mn>
				<mo>=</mo>
				<mn>78</mn>
				<mo>×</mo>
				<mn>1</mn>
			</math>
			.
		</Item>
	</Exemples>
	<Definition lignes={2}>
		Un entier naturel est <i>premier</i>
		s'il n'a que deux diviseurs : 1 et lui-même. S'il n'est pas premier, on dit qu'il est
		<i>composé</i>
		.
	</Definition>
	<Remarque>1 n'est pas considéré comme un nombre premier.</Remarque>
	<Exemples lignes={3}>
		<Item>
			17 est premier, il ne peut s'écrire que <math>
				<mn>1</mn>
				<mo>×</mo>
				<mn>17</mn>
			</math>
			.
		</Item>
		<Item>
			15 est composé, il peut s'écrire <math>
				<mn>1</mn>
				<mo>×</mo>
				<mn>15</mn>
			</math>
			ou
			<math>
				<mn>3</mn>
				<mo>×</mo>
				<mn>5</mn>
			</math>
			.
		</Item>
		<Item>
			24 est composé, il peut s'écrire
			<math>
				<mn>1</mn>
				<mo>×</mo>
				<mn>24</mn>
			</math>
			,
			<math>
				<mn>2</mn>
				<mo>×</mo>
				<mn>12</mn>
			</math>
			,
			<math>
				<mn>3</mn>
				<mo>×</mo>
				<mn>8</mn>
			</math>
			,
			<math>
				<mn>4</mn>
				<mo>×</mo>
				<mn>6</mn>
			</math>
			.
		</Item>
	</Exemples>
	<Paragraphe couleur="rouge" nom_du_paragraphe="À connaître par cœur" lignes={2}>
		Les nombres premiers inférieurs à 30 sont :
		<br />
		2, 3, 5, 7, 11, 13, 17, 19, 23, 29
	</Paragraphe>
</Contenu>
