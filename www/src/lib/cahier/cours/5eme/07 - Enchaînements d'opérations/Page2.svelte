<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemples, Methode, Item } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={2} titre="Vérifier la vraisemblance d'un résultat" />
	<Methode lignes={2}>Pour vérifier qu'un calcul est juste, on peut effectuer un calcul approché.</Methode>
	<Exemples lignes={6}>
		<Item lignes={3}>
			Calculer {@html math(`2 \\times \\pi \\times 5,9 `)}. <br />
			On peut approcher le calcul par {@html math(`2 \\times 3 \\times 6 = 36`)}. <br />
			Donc {@html math(`2 \\times \\pi \\times 5,9 \\approx 36`)}.
		</Item>
		<Item lignes={3}>
			Calculer {@html math('\\frac{1}{2} \\times 52,1 \\times 31 \\times 31')} <br />
			On peut approcher le calcul par {@html math('\\frac{1}{2} \\times 50 \\times 30 \\times 30 = 22500')} <br />
			Donc {@html math('\\frac{1}{2} \\times 52,1 \\times 31 \\times 31 \\approx 22500')}.
		</Item>
	</Exemples>
</Contenu>
