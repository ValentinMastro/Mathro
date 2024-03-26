<script lang="ts">
	import { Chapitre, Partie } from "$lib/chapitrage/all_chapitrages";
	import { Definition, Exemples, Paragraphe } from "$lib/chapitrage/sections/all_sections";
	import { math, display } from 'mathlifier';

	let numero_boules: number[] = [
		1, 1, 1, 5,
		2, 6, 6, 2, 
		2, 4, 4, 6
	]
	let couleur_boules: string[] = [
		"gray", "gray", "white", "white",
		"gray", "gray", "white", "white",
		"white", "gray", "gray", "gray"
	]
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
					{@html math(`\\text{C} = `)} « Obtenir une voyelle » {@html math(` = \\{ \\text{A}, \\text{E}, \\text{I}, \\text{O}, \\text{U}, \\text{Y} \\}`)}<br>
					{@html math(`\\text{D} = `)} « Obtenir une consonne» {@html math(` = \\{ \\text{B}, \\text{C}, \\dots, \\text{Z} \\}`)}
				</li>
			</ul>
		</Exemples>
		<Definition>
			Un évènement A est dit :
			<ul>
				<li>Impossible si {@html math(`A = \\emptyset`)}, autrement dit si A ne peut pas se réaliser</li>
				<li>Certain si {@html math(`A = \\Omega`)}, autrement dit si A se réalise à chaque fois</li>
			</ul>
		</Definition>
		<Paragraphe nom="Récapitulatif" couleur="red">
			<div style="color: black; border: 1px black solid; width: fit-content;">
				On considère une urne contenant des boules blanches ou grises, et numérotées :
				<ol>
					<li>Si on s’intéresse à la couleur de la boule, quelles sont les issues possibles ?</li>
					<li>Si on s’intéresse au numéro écrit sur la boule, quelles sont les issues possibles ?</li>
					<li>Donne un événement certain de se réaliser.</li>
					<li>Donne un événement impossible.</li>
				</ol>
				<div style="display: flex; justify-content: center;">
					<svg viewBox="-5 -5 {320+10} {240+10}" width="15em">
						{#each Array(12) as _, index }
							<circle cx={40 + 80*(index%4)} cy={40 + 80*Math.floor(index/4)} r="40" stroke="black" fill={couleur_boules[index]} />
							<text x={40 + 80*(index%4)} y={48 + 80*Math.floor(index/4)} text-anchor="middle" alignment-baseline="middle" font-size="30">{numero_boules[index]}</text>
						{/each}
					</svg>
				</div>
			</div>
			<ol>
				<li>Les issues possibles sont : {@html math(`\\Omega = \\{ \\text{Blanche}, \\text{Grise} \\}`)}</li>
				<li>Les issues possibles sont : {@html math(`\\Omega = \\{ 1, 2, 4, 5, 6 \\}`)}</li>
				<li>Un événement certain est : « Obtenir une boule »</li>
				<li>Un événement impossible est : « Obtenir une boule rouge »</li>
			</ol>
		</Paragraphe>
	</Partie>
</Chapitre>
