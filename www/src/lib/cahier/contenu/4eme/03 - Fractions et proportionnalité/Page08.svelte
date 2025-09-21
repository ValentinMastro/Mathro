<script lang="ts">
	import { Contenu } from '$lib/cahier/composants/de_chapitrage/*';
	import SousPartie from '$lib/cahier/composants/de_chapitrage/SousPartie.svelte';
	import { Demonstration, Exemples, Item, Propriete } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<SousPartie numero={5} titre="Commutativité" />
	<Propriete>
		{@html math('x \\% \\text{ de } y = y \\% \\text{ de } x')}
	</Propriete>
	<Demonstration>
		{@html math('x \\% \\text{ de } y = \\dfrac{x}{100} \\times y = \\dfrac{y}{100} \\times x = y \\% \\text{ de } x')}
	</Demonstration>
	<Exemples lignes={2}>
		<Item>
			{@html math('12 \\% \\text{ de } 50 = 50 \\% \\text{ de } 12 = 6')}
		</Item>
		<Item>
			{@html math('20 \\% \\text{ de } 25 = 25 \\% \\text{ de } 20 = 5')}
		</Item>
	</Exemples>
</Contenu>
