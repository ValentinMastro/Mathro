<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Notation, Item } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Chapitre titre="Fractions et proportionnalité" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Calculs fractionnaires" />
	<Definition lignes={3}>
		Soient deux nombres {@html math('a')} et {@html math('b')} avec {@html math('b \\neq 0')}.<br />
		Le quotient de {@html math('a')} par {@html math('b')} est le nombre qui, lorsqu'il est multiplié par {@html math('b')}, donne {@html math('a')}.
	</Definition>
	<Notation>
		Il se note {@html math('\\dfrac{a}{b}')} et se lit "a sur b".
	</Notation>

	<Exemples lignes={3}>
		<Item lignes={2}>
			{@html math('\\dfrac{3}{4} \\times 4 = \\dfrac{3}{\\cancel{4}} \\times \\cancel{4} = 3')}
		</Item>
		<Item>
			{@html math('\\dfrac{7{,}2}{5{,}8} \\times 5{,}8 = \\dfrac{7{,}2}{\\cancel{5{,}8}} \\times \\cancel{5{,}8} = 7{,}2')}
		</Item>
	</Exemples>
</Contenu>
