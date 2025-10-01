<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import { math } from 'mathlifier';

	import { SERIE_1, SERIE_2, afficher_serie, médiane, étendue } from './store.svelte';
</script>

<Contenu>
	<SousPartie numero={2} titre="Étendue" />
	<Definition lignes={2}>
		<i>L'étendue</i> d'une série statistique est la différence entre la plus grande valeur (le maximum) et la plus petite valeur (le minimum).
	</Definition>
	<Exemples lignes={2}>
		<Item>
			{@html math(afficher_serie(SERIE_1) + '\\longrightarrow')}
			L'étendue est {@html math(`
                    ${Math.max(...SERIE_1)} - ${Math.min(...SERIE_1)} =
                    ${étendue(SERIE_1)}
                `)}
		</Item>
		<Item>
			{@html math(afficher_serie(SERIE_2) + '\\longrightarrow')}
			L'étendue est {@html math(`
                    ${Math.max(...SERIE_2)} - ${Math.min(...SERIE_2)} =
                    ${étendue(SERIE_2)}
                `)}
		</Item>
	</Exemples>
	<SousPartie numero={3} titre="Médiane" />
	<Definition lignes={4}>
		La <i>médiane</i> d'une série statistique est la valeur partageant la série en deux parties de même effectif.<br />
		La première partie contient les valeurs inférieures à la médiane, la seconde partie contient les valeurs supérieures à la médiane.
	</Definition>
	<Exemples lignes={4}>
		{@html math(afficher_serie(SERIE_2))} <br />
		La médiane est {@html math(médiane(SERIE_2).toLocaleString())}. <br />
		En effet, on peut scinder cette série en deux : <br />
		{@html math(afficher_serie(SERIE_2.filter((e) => e < médiane(SERIE_2))))} et
		{@html math(afficher_serie(SERIE_2.filter((e) => e > médiane(SERIE_2))))}
	</Exemples>
</Contenu>
