<script lang="ts">
	import { Contenu, DansLaMarge, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Convention, Definitions, Exemples, Item } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import { math } from 'mathlifier';
</script>

<DansLaMarge>
	<LigneVide lignes={8} />
	{@html math('1 \\ell = 1 dm^3')}
</DansLaMarge>

<Contenu>
	<Partie numero={1} titre="Unité de volume et de contenance" />
	<Definitions lignes={3}>
		<Item>Le volume d'un objet mesure l'espace qu'il contient.</Item>
		<Item lignes={2}>
			La contenance d'un objet mesure l'espace qu'il peut contenir.
			<span style="color: var(--bleu);">(sac, coffre de voiture, ...)</span>
		</Item>
	</Definitions>
	<Convention lignes={2}>
		Le volume se mesure en mètres cubes ({@html math('m^3')}).<br />
		La contenance se mesure en litres ({@html math('\\ell')}).
	</Convention>
	<Exemples lignes={3}>
		<Item>
			{@html math('72,5~dam^3 = 7250000~xdm^3')}
		</Item>
		<Item>
			{@html math('0,01~cm^3 = 0,000~000~000~000~01~hm^3')}
		</Item>
		<Item>
			{@html math('2,6~\\ell = 0,026~da\\ell')}
		</Item>
	</Exemples>
</Contenu>
