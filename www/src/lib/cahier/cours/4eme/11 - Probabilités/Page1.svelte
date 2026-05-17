<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
</script>

<Chapitre titre="Probabilités" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Concept" />
	<LigneVide />
	<Definition lignes={2}>Une expérience est aléatoire si on ne peut pas connaître à l'avance le résultat - l'issue - de l'expérience.</Definition>
	<Exemples lignes={4}>
		<Item>Un pile ou face</Item>
		<Item>Un lancer de dé</Item>
		<Item>Un tirage de boules dans une urne</Item>
		<Item>Choisir une lettre au hasard dans l'alphabet français</Item>
	</Exemples>
	<Definition>
		L'ensemble des issues de l'expérience aléatoire est l'univers noté <math><mi>Ω</mi></math>.
	</Definition>
	<Exemples lignes={4}>
		<Item>Pour un pile ou face, <math><mi>Ω</mi><mo>=</mo><mo>{</mo><mtext>Pile</mtext><mo>,</mo><mtext>Face</mtext><mo>}</mo></math></Item>
		<Item>Pour un lancer de dé, <math><mi>Ω</mi><mo>=</mo><mo>{</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>6</mn><mo>}</mo></math></Item>
		<Item lignes={2}>
			Tirer une lettre au hasard dans l'alphabet français, <math><mi>Ω</mi><mo>=</mo><mo>{</mo><mtext>A</mtext><mo>,</mo><mtext>B</mtext><mo>,</mo><mtext>C</mtext><mo>,</mo><mo>…</mo><mo>,</mo><mtext>Z</mtext><mo>}</mo></math>
		</Item>
	</Exemples>
</Contenu>
