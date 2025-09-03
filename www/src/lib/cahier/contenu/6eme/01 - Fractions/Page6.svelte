<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Notation, Item, Texte, Exemples, Schema } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={6} titre="Nombres mixtes" />

	<Definition lignes={3}>
		Un nombre mixte est composé :
		<Item>d'un nombre entier {@html math('>1')}</Item>
		<Item>d'une fraction</Item>
	</Definition>
	<Exemples lignes={5}>
		<Item lignes={2}>{@html math('2\\frac{1}{3} = \\dfrac{7}{3}')}</Item>
		<Item lignes={2}>{@html math('3\\frac{4}{5} = \\dfrac{19}{5}')}</Item>
		<Item>{@html math('5\\frac{1}{9} = \\dfrac{46}{9}')}</Item>
	</Exemples>
</Contenu>
