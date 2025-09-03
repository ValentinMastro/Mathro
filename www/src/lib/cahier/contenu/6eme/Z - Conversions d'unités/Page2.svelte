<script lang="ts">
	import { Contenu, DansLaMarge, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemples, Methode, Remarque, Item } from '$lib/cahier/composants/de_cours/*';
	import { Slider } from '$lib/cahier/composants/de_marge/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

	import { math } from 'mathlifier';

	let puissance = $state(2);

	let pow10 = $derived(Math.pow(10, puissance));
	let pow10Neg = $derived(Math.pow(10, -puissance).toLocaleString('fr-FR', { maximumFractionDigits: 6 }));

	let produit = $derived((3.14 * Math.pow(10, puissance)).toLocaleString('fr-FR'));
	let quotient = $derived((3.14 / Math.pow(10, puissance)).toLocaleString('fr-FR', { maximumFractionDigits: 6 }));
</script>

<DansLaMarge>
	<LigneVide lignes={15} />
	<Slider min={0} max={4} bind:valeur={puissance} />
</DansLaMarge>

<Contenu>
	<Partie numero={2} titre="Multiplier et diviser par 1, 10, 100, 1000, etc." />
	<LigneVide />
	<Methode lignes={4}>
		<Item lignes={2}>Multiplier par 1, 10, 100, 1000, etc. revient à déplacer la virgule vers la droite.</Item>
		<Item lignes={2}>Diviser par 1, 10, 100, 1000, etc. revient à déplacer la virgule vers la gauche.</Item>
	</Methode>
	<Remarque lignes={4}>
		<Item>Diviser par 1 revient à multiplier par 1.</Item>
		<Item>Diviser par 10 revient à multiplier par 0,1.</Item>
		<Item>Diviser par 100 revient à multiplier par 0,01.</Item>
		<Item>Diviser par 1000 revient à multiplier par 0,001.</Item>
	</Remarque>
	<LigneVide />
	<Exemples lignes={2}>
		<Item>{@html math(`3{,}14 \\times ${pow10} = ${produit}`)}</Item>
		<Item>{@html math(`3{,}14 \\div ${pow10} = 3{,}14 \\times ${pow10Neg} = ${quotient}`)}</Item>
	</Exemples>
</Contenu>
