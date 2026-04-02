<script lang="ts">
	import { Contenu } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Definition>Un évènement est un ensemble d'issues de l'expérience aléatoire.</Definition>
	<Exemples lignes={4}>
		<Item>Pour un pile ou face, {@html math(`\\Omega = \\{ \\text{Pile}, \\text{Face} \\}`)}</Item>
		<Item>Pour un lancer de dé, {@html math(`\\Omega = \\{ 1, 2, 3, 4, 5, 6 \\}`)}</Item>
		<Item lignes={2}>Tirer une lettre au hasard dans l'alphabet français, {@html math(`\\Omega = \\{ \\text{A}, \\text{B}, \\text{C}, \\dots, \\text{Z} \\}`)}</Item>
	</Exemples>
	<Exemples lignes={6}>
		<Item lignes={3}>
			Expérience : lancer un dé<br />
			{@html math(`\\text{A} = `)} « Obtenir un nombre pair » {@html math(` = \\{ 2, 4, 6 \\}`)}<br />
			{@html math(`\\text{B} = `)} « Obtenir un nombre impair » {@html math(` = \\{ 1, 3, 5 \\}`)}
		</Item>
		<Item lignes={3}>
			Expérience : tirer une lettre au hasard dans l'alphabet français<br />
			{@html math(`\\text{C} = `)} « Obtenir une voyelle » {@html math(
				` = \\{ \\text{A}, \\text{E}, \\text{I}, \\text{O}, \\text{U}, \\text{Y} \\}`
			)}<br />
			{@html math(`\\text{D} = `)} « Obtenir une consonne» {@html math(` = \\{ \\text{B}, \\text{C}, \\dots, \\text{Z} \\}`)}
		</Item>
	</Exemples>
	<Definition lignes={3}>
		Un évènement A est dit :
		<Item>
			Impossible si {@html math(`A = \\emptyset`)}, autrement dit si A ne peut pas se réaliser
		</Item>
		<Item>
			Certain si {@html math(`A = \\Omega`)}, autrement dit si A se réalise à chaque fois
		</Item>
	</Definition>
</Contenu>
