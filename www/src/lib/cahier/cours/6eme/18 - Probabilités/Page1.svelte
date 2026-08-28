<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Chapitre titre="Probabilités" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Vocabulaire" />
	<Definition lignes={2}>
		Une expérience est <i>aléatoire</i>
		si on ne peut pas prévoir à l'avance son résultat.
	</Definition>
	<Exemples lignes={5}>
		<Item>Jouer au loto</Item>
		<Item>Lancer un dé</Item>
		<Item>Tirer une carte au hasard dans un paquet mélangé</Item>
		<Item>Choisir un nombre au hasard entre 1 et 9</Item>
		<Item>Pile ou face</Item>
	</Exemples>
	<Definition lignes={2}>
		L'
		<i>issue</i>
		d'une expérience aléatoire est un résultat possible de l'expérience.
		<br />
		L'ensemble des issues possibles est l'
		<i>univers</i>
		, noté {@html math('\\Omega')}
	</Definition>
	<Exemples lignes={3}>
		<Item>Lancer un dé : {@html math('\\Omega = \\{1, 2, 3, 4, 5, 6\\}')}</Item>
		<Item>Pile ou face : {@html math('\\Omega = \\{ \\text{Pile}, \\text{Face}\\}')}</Item>
		<Item>
			Choisir une lettre au hasard dans l'alphabet français : {@html math('\\Omega = \\{ \\text{A}, \\text{B}, \\text{C}, \\ldots, \\text{Z}\\}')}
		</Item>
	</Exemples>
</Contenu>
