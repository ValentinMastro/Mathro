<script lang="ts">
	import { Contenu, DansLaMarge, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemple, Exemples, Item, MultiItem, Propriete, Texte } from '$lib/cahier/composants/de_cours/*';
	import { Slider } from '$lib/cahier/composants/de_marge/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={2} titre="Pourcentages" />
	<SousPartie numero={1} titre="En tant que fraction" />
	<Definition>
		{@html math('p\\% = \\dfrac{p}{100}')}
	</Definition>
	<Exemples>
		<MultiItem colonnes={3}>
			<Item>
				{@html math('50 \\% = \\dfrac{50}{100} = \\dfrac{1}{2}')}
			</Item>
			<Item>
				{@html math('75 \\% = \\dfrac{75}{100} = \\dfrac{3}{4}')}
			</Item>
			<Item>
				{@html math('25 \\% = \\dfrac{25}{100} = \\dfrac{1}{4}')}
			</Item>
		</MultiItem>
	</Exemples>
	<SousPartie numero={2} titre="Le pourcentage d'un nombre" />
	<Definition>
		Calculer {@html math('p\\% \\text{ de } x')} revient à calculer {@html math('\\dfrac{p}{100} \\times x')}.
	</Definition>
	<Exemples lignes={5}>
		<Item lignes={1}>
			{@html math('25 \\% \\text{ de } 12 = \\dfrac{25}{100} \\times 12 = 3')}
		</Item>
		<LigneVide />
		<Item lignes={1}>
			{@html math('60 \\% \\text{ de } 50 = \\dfrac{60}{100} \\times 50 = 30')}
		</Item>
		<LigneVide />
		<Item lignes={1}>
			{@html math('75 \\% \\text{ de } 32 = \\dfrac{75}{100} \\times 32 = 24')}
		</Item>
	</Exemples>
</Contenu>
