<script lang="ts">
	import { Chapitre, Contenu, DansLaMarge, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { TheoremeDefinition, Exemples, Item } from '$lib/cahier/composants/de_cours/*';
	import { Nombre } from '$lib/cahier/composants/de_marge/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import { math } from 'mathlifier';

	let dividende = $state(1997);
	let diviseur = $state(27);
	let quotient = $derived(Math.floor(dividende / diviseur));
	let reste = $derived(dividende % diviseur);
</script>

<Chapitre titre="Nombres premiers" />

<DansLaMarge apres_un_titre>
	<LigneVide lignes={10} />
	<Nombre bind:valeur={dividende} label="dividende" min={1000} max={9999} />
	<Nombre bind:valeur={diviseur} label="diviseur" min={10} max={99} />
</DansLaMarge>

<Contenu apres_un_titre>
	<Partie numero={1} titre="Division euclidienne" />
	<TheoremeDefinition lignes={5}>
		À deux nombres entiers, le <i>dividende</i> et le <i>diviseur</i>, on associe deux autres nombres entiers, le <i>quotient</i> et le <i>reste</i>,
		<u>de manière unique</u>, tels que :
		<Item>{@html math('\\text{dividende} = \\text{diviseur} \\times \\text{quotient} + \\text{reste}')}</Item>
		<Item>{@html math('0 \\leq \\text{reste} < \\text{diviseur}')}</Item>
	</TheoremeDefinition>
	<Exemples lignes={5}>
		<Item>{@html math(`${dividende} = ${diviseur} \\times ${quotient} + ${reste}`)}</Item>
		<Item>le dividende est {dividende}</Item>
		<Item>le diviseur est {diviseur}</Item>
		<Item>le quotient est {quotient}</Item>
		<Item>le reste est {reste}</Item>
	</Exemples>
</Contenu>
