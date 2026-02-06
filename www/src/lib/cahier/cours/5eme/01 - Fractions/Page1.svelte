<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Notation, Item, Vocabulaire } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

	import { math } from 'mathlifier';
</script>

<Chapitre titre="Fractions" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Concept" />
	<Definition lignes={2}>
		Soient deux nombres entiers {@html math('a')} et {@html math('b')} avec {@html math('b \\neq 0')}.<br />
		Le quotient de {@html math('a')} par {@html math('b')} est le nombre qui, multiplié par {@html math('b')}, est égal à {@html math('a')}.<br />
	</Definition>
	<Notation lignes={1.3}>
		On le note {@html math('\\dfrac{a}{b}')}.
	</Notation>
	<Exemples lignes={7}>
		<Item lignes={4}>
			{@html math('\\dfrac{7}{3}')} est le quotient de 7 par 3.<br /><br />
			{@html math('\\dfrac{7}{3} \\times 3 = \\dfrac{7}{\\cancel{3}} \\times \\cancel{3} = 7')}<br />
		</Item>
		<Item lignes={3}>
			{@html math('\\dfrac{17}{6}')} est le quotient de 17 par 6. <br /> <br />
			{@html math('\\dfrac{17}{6} \\times 6 = \\dfrac{17}{\\cancel{6}} \\times \\cancel{6} = 17')}
		</Item>
	</Exemples>
</Contenu>
