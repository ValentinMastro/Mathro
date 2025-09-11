<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Item, Exemples, MultiItem } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={6} titre="Nombres mixtes" />

	<Definition lignes={3}>
		Un nombre mixte est composé :
		<Item>d'un nombre entier {@html math('>1')}</Item>
		<Item>d'une fraction</Item>
	</Definition>
	<Exemples>
		<MultiItem>
			<Item>{@html math('\\large{2} \\footnotesize{\\frac{1}{3}}')}</Item>
			<Item>{@html math('\\large{3} \\footnotesize{\\frac{4}{5}}')}</Item>
			<Item>{@html math('\\large{5} \\footnotesize{\\frac{1}{9}}')}</Item>
		</MultiItem>
	</Exemples>
</Contenu>
