<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definitions, Exemples, Item } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={3} titre="Carré et cube" />
	<Definitions lignes={2}>
		<Item>{@html math('a^2 = a \\times a \\quad\\quad\\quad')} (se lit "a au carré")</Item>
		<Item>{@html math('a^3 = a \\times a \\times a \\quad\\quad')} (se lit "a au cube")</Item>
	</Definitions>
	<Exemples lignes={5}>
		<Item>{@html math('4^2 = 4 \\times 4 = 16')}</Item>
		<Item>{@html math('4^3 = 4 \\times 4 \\times 4 = 64')}</Item>
		<Item lignes={2}>{@html math('\\left(\\dfrac{2}{5}\\right)^2 = \\dfrac{2}{5} \\times \\dfrac{2}{5} = \\dfrac{4}{25}')}</Item>
		<Item>{@html math('(-4)^3 = (-4) \\times (-4) \\times (-4) = -64')}</Item>
	</Exemples>
</Contenu>
