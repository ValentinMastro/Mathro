<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definitions, Exemple, Item, Methode, Remarque } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={3} titre="Différentes écritures d'un nombre décimal" />
	<Definitions lignes={4}>
		On distingue trois manières d'écrire un nombre décimal :
		<Item>la forme décimale ({@html math('\\color{blue}3,4')})</Item>
		<Item>une forme fractionnaire ({@html math('\\color{blue}\\frac{34}{10} ~\\text{ou}~ \\color{blue}\\frac{17}{5}')})</Item>
		<Item>en pourcentage ({@html math('\\color{blue}340~\\%')})</Item>
	</Definitions>
	<Exemple lignes={12}>
		Prenons le nombre décimal {@html math('0,2')}.
		<Item lignes={3}>
			Pour l'écrire sous forme fractionnaire, on peut utiliser une fraction décimale. <br />
			<div class="centre">
				{@html math('0,2')} = 2 dixièmes = {@html math('\\frac{2}{10}')}
			</div>
		</Item>
		<Item lignes={2}>
			On peut simplifier la fraction.
			<div class="centre">
				{@html math('\\frac{2}{10} = \\frac{2 \\times 1}{2 \\times 5} = \\frac{1}{5}')}
			</div>
		</Item>
		<Item lignes={6}>
			Pour l'écrire sous forme de pourcentage, il faut trouver une fraction égale à {@html math('0,2')} qui a un dénominateur de 100.
			<div class="centre">
				{@html math('0,2 = \\frac{?}{100}')}
			</div>
			On sait que {@html math('0,2 = \\frac{2}{10}')}, on peut alors multiplier le numérateur et le dénominateur par 10.
			<div class="centre">
				{@html math('\\frac{2}{10} = \\frac{2 \\times 10}{10 \\times 10} = \\frac{20}{100} = 20~\\%')}
			</div>
		</Item>
	</Exemple>
	<Remarque lignes={3}>
		<Item lignes={2}>
			Multiplier par {@html math('0,5')} revient à prendre la moitié d'un nombre, c'est-à-dire diviser par 2.
		</Item>
		<Item>
			Multiplier par {@html math('0,1')} revient à diviser par 10.
		</Item>
	</Remarque>
</Contenu>

<style>
	.centre {
		text-align: center;
	}
</style>
