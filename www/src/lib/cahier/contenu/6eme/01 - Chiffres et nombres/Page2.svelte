<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemples, Item, Propriete } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<SousPartie numero={3} titre="Décomposition" />
	<Propriete lignes={2}>Il est possible de décomposer un nombre selon la position de ses chiffres.</Propriete>
	<Exemples lignes={5}>
		<Item lignes={2}>
			{@html math('325 = 300 + 20 + 5 = 3 \\times 100 + 2 \\times 10 + 5 \\times 1')} <br />
			{@html math('~~~~~~~~~ = \\text{ 3 centaines, 2 dizaines et 5 unités }')}
		</Item>
		<Item lignes={3}>
			{@html math('105~037 = 100~000 + 5~000 + 30 + 7')} <br />
			{@html math('~~~~~~~~~~~~~~~~ = 1 \\times 100~000 + 5 \\times 1~000 + 3 \\times 10 + 7 \\times 1')} <br />
			{@html math('~~~~~~~~~~~~~~~~ = \\text{ 1 centaine de milliers, 5 milliers, 3 dizaines et 7 unités }')}
		</Item>
	</Exemples>
</Contenu>
