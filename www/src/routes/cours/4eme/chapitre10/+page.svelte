<script lang="ts">
	import Chapitre from "$lib/chapitrage/Chapitre.svelte";
	import Partie from "$lib/chapitrage/Partie.svelte";
	import Definition from "$lib/chapitrage/sections/Definition.svelte";
	import Exemples from "$lib/chapitrage/sections/Exemples.svelte";

	import Katex from "svelte-katex";
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
			L'ensemble des issues de l'expérience est l'univers noté <Katex>{`\\Omega`}</Katex>.
		</Definition>
		<Exemples>
			<ul>
				<li>
					Pour un pile ou face, <Katex>{`\\Omega = \\{ \\text{Pile}, \\text{Face} \\}`}</Katex>
				</li>
				<li>
					Pour un lancer de dé, <Katex>{`\\Omega = \\{ 1, 2, 3, 4, 5, 6 \\}`}</Katex>
				</li>
				<li>
					Tirer une lettre au hasard dans l'alphabet français, <Katex>{`\\Omega = \\{ \\text{A}, \\text{B}, \\text{C}, \\dots, \\text{Z} \\}`}</Katex>
				</li>
			</ul>
		</Exemples>
		<Definition>
			Un évènement est un ensemble d'issues de l'expérience.
		</Definition>
		<Exemples>
			<ul>
				<li>
					Expérience : lancer un dé<br>
					<Katex>{`\\text{A} = «~\\text{Obtenir un nombre pair}~» = \\{ 2, 4, 6 \\}`}</Katex><br>
					<Katex>{`\\text{B} = «~\\text{Obtenir un nombre impair}~» = \\{ 1, 3, 5 \\}`}</Katex>
				</li>
				<li>
					Expérience : tirer une lettre au hasard dans l'alphabet français<br>
					<Katex>{`\\text{C} = «~\\text{Obtenir une voyelle}~» = \\{ \\text{A}, \\text{E}, \\text{I}, \\text{O}, \\text{U}, \\text{Y} \\}`}</Katex><br>
					<Katex>{`\\text{D} = «~\\text{Obtenir une lettre}~» = \\{ \\text{B}, \\text{C}, \\dots, \\text{Z} \\}`}</Katex>
				</li>
			</ul>
		</Exemples>
	</Partie>
</Chapitre>
