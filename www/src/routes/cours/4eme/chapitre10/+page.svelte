<script lang="ts">
	import { Chapitre, Partie } from "$lib/chapitrage/all_chapitrages";
	import { Definition, Exemples } from "$lib/chapitrage/sections/all_sections";
	import { math, display } from 'mathlifier';
</script>

<Chapitre numero={10} titre="Probabilités">
	<Partie numero={1} titre="Concept">
		<Definition>
			Une expérience est aléatoire si on ne peut pas connaître à l'avance 
			le résultat - l'issue - de l'expérience.
		</Definition>
		<Exemples>
			<ul>
				<li>Un pile ou face</li>
				<li>Un lancer de dé</li>
				<li>Un tirage de boules dans une urne</li>
				<li>Choisir une lettre au hasard dans l'alphabet français</li>
			</ul>
		</Exemples>
		<Definition>
			L'ensemble des issues de l'expérience aléatoire est l'univers noté {@html math(`\\Omega`)}.
		</Definition>
		<Exemples>
			<ul>
				<li>
					Pour un pile ou face, {@html math(`\\Omega = \\{ \\text{Pile}, \\text{Face} \\}`)}
				</li>
				<li>
					Pour un lancer de dé, {@html math(`\\Omega = \\{ 1, 2, 3, 4, 5, 6 \\}`)}
				</li>
				<li>
					Tirer une lettre au hasard dans l'alphabet français, {@html math(`\\Omega = \\{ \\text{A}, \\text{B}, \\text{C}, \\dots, \\text{Z} \\}`)}
				</li>
			</ul>
		</Exemples>
		<Definition>
			Un évènement est un ensemble d'issues de l'expérience aléatoire.
		</Definition>
		<Exemples>
			<ul>
				<li>
					Expérience : lancer un dé<br>
					{@html math(`\\text{A} = `)} « Obtenir un nombre pair » {@html math(` = \\{ 2, 4, 6 \\}`)}<br>
					{@html math(`\\text{B} = `)} « Obtenir un nombre impair » {@html math(` = \\{ 1, 3, 5 \\}`)}
				</li>
				<li>
					Expérience : tirer une lettre au hasard dans l'alphabet français<br>
					{@html math(`\\text{C} = `)} « Obtenir une voyelle » {@html math(` = \\{ \\text{A}, \\text{E}, \\text{I}, \\text{O}, \\text{U} \\}`)}<br>
					{@html math(`\\text{D} = `)} « Obtenir une lettre » {@html math(` = \\{ \\text{B}, \\text{C}, \\dots, \\text{Z} \\}`)}
				</li>
			</ul>
		</Exemples>
	</Partie>
</Chapitre>
