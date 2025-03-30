<script lang="ts">
	import { Chapitre, Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Exemples, Item, Definition, TheoremeDefinition } from "$lib/cahier/composants/de_cours/*";

	import { math } from "mathlifier";
</script>

<Chapitre titre="Division euclidienne" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Concept" />
		<TheoremeDefinition lignes={4}>
			À deux entiers positifs (le dividende et le diviseur),
			on associe <u>de façon unique</u> deux nombres entiers (le quotient et le reste) tels que :
			<Item>
				{@html math("\\text{dividende} = \\text{diviseur} \\times \\text{quotient} + \\text{reste}")}
			</Item>
			<Item>
				{@html math("0 \\leq \\text{reste} < \\text{diviseur}")}
			</Item>
		</TheoremeDefinition>
		<Exemples lignes={2}>
			<Item>{@html math("19 = 3 \\times 6 + 1")}</Item>
			<Item>{@html math("255 = 16 \\times 15 + 15")}</Item>
		</Exemples>
		
	<Partie numero={2} titre="Multiples et diviseurs" />
		<Definition lignes={2}>
			Dans une division euclidienne, si le reste est égal à 0,
			le dividende est un multiple du diviseur.
		</Definition>
		<Exemples lignes={5}>
			On peut dire que :
			<Item>
				15 est un multiple de 5
			</Item>
			<Item>
				15 est divisible par 5
			</Item>
			<Item>
				5 est un diviseur de 15
			</Item>
			<Item>
				15 est dans la table de 5
			</Item>
		</Exemples>
</Contenu>
