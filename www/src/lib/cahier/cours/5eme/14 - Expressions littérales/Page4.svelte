<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemples, Item, Methode } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={4} titre="Distributivité simple" />
	<Methode lignes={3}>
		Pour réduire une expression de la forme {@html math('ax + bx')}, on utilise la distributivité :
		<Item>{@html math('ax + bx = (a + b)x')}</Item>
	</Methode>
	<Exemples lignes={3}>
		<Item>{@html math('3x + 5x = (3 + 5)x = 8x')}</Item>
		<Item>{@html math('7a - 2a = (7 - 2)a = 5a')}</Item>
		<Item>{@html math('4{,}5x + 1{,}5x = (4{,}5 + 1{,}5)x = 6x')}</Item>
	</Exemples>
</Contenu>
