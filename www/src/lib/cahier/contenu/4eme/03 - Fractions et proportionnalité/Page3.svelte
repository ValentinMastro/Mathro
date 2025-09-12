<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Propriete, Exemple, Item } from '$lib/cahier/composants/de_cours/*';

	import { display, math } from 'mathlifier';
</script>

<Contenu>
	<SousPartie numero={1} titre="Addition et soustraction" />
	<Propriete lignes={4.4}>
		Pour additionner deux fractions, il faut qu'elles aient le même dénominateur.<br />
		Soient quatre nombres {@html math('a, b, c, d')} avec {@html math('b \\neq 0, d \\neq 0')}.<br />
		{@html display('\\dfrac{a}{b} + \\dfrac{c}{d} = \\dfrac{a \\times d + c \\times b}{b \\times d}')}
	</Propriete>

	<Exemple lignes={1}>
		<Item>
			{@html math('\\dfrac{3}{4} + \\dfrac{2}{5} = \\dfrac{3 \\times 5 + 2 \\times 4}{4 \\times 5} = \\dfrac{15 + 8}{20} = \\dfrac{23}{20}')}
		</Item>
	</Exemple>
</Contenu>
