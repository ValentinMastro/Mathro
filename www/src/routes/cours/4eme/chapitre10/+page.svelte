<script lang="ts">
	import { Chapitre, Partie } from "$lib/chapitrage/all_chapitrages";
	import { Definition, Exemples, Paragraphe, Propriete } from "$lib/chapitrage/sections/all_sections";
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
	<Partie numero={2} titre="Approche quantitative">
		<Definition>
			La probabilité d'un évènement est un nombre entre 0 et 1 :
			<ul>
				<li>quand ce nombre est égal à 0, l'évènement est impossible</li>
				<li>quand ce nombre est proche de 0, l'évènement est peu probable</li>
				<li>quand ce nombre est proche de 1, l'évènement est très probable</li>
				<li>quand ce nombre est égal à 1, l'évènement est certain</li>
			</ul>
		</Definition>
		<Paragraphe couleur="black" nom="Conséquence">
			{@html math(`P(\\emptyset) = 0`)} et {@html math(`P(\\Omega) = 1`)}
		</Paragraphe>
		<Definition>
			Soit A un évènement.<br>
			{@html math(`\\overline{A}`)} est l'évènement contraire de A.
		</Definition>
		<Exemples>
			<ul>
				<li>
					Je lance un dé : <br>
					A = « Avoir un 6 » <br>
					{@html math(`\\overline{A}`)} = « Ne pas avoir un 6 » = « Avoir un 1, 2, 3, 4 ou 5 »
				</li>
				<li>
					Je tire au sort une lettre dans l'alphabet : <br>
					B = « Avoir une consonne » <br>
					{@html math(`\\overline{B}`)} = « Ne pas avoir une consonne » = « Avoir une voyelle »
				</li>
			</ul>
		</Exemples>
		<Propriete>
			Soit A un évènement.<br>
			{@html math(`p(A)+p(\\overline{A}) = 1`)}<br>
			{@html math(`p(\\overline{A}) = 1 - p(A)`)}
		</Propriete>
		<Exemples>
			<u>Expérience aléatoire : </u> Tirer une carte dans un jeu de 32 cartes <br>
			<u>Question : </u> {@html math(`p(\\text{avoir un valet ou une dame}) = ?`)}<br>
			<u>Solution : </u>
			<ul>
				<li>{@html math(`p(\\text{avoir un valet ou une dame}) = \\dfrac{8}{32}`)}</li>
				<li>{@html math(`p(\\text{ne pas avoir un valet ou une dame}) = 1 - \\dfrac{8}{32} = \\dfrac{32}{32} - \\dfrac{8}{32} = \\dfrac{24}{32}`)}</li>
			</ul>
		</Exemples>
	</Partie>
</Chapitre>
