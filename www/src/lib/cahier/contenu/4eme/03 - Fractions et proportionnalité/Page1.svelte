<script lang="ts">
	import { Chapitre, Contenu, Partie, DansLaMarge } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Notation, Item } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

	import { math } from 'mathlifier';

	let facteur_1: number = $state(2);
	let facteur_2: number = $state(5);
</script>

<Chapitre titre="Fractions et proportionnalité" />

<DansLaMarge apres_un_titre lignes_vides={23}>
	<input type="range" min={1} max={10} bind:value={facteur_1} style="width: 80%" />
	<input type="range" min={1} max={5} bind:value={facteur_2} style="width: 80%" />
</DansLaMarge>

<Contenu apres_un_titre>
	<Partie numero={1} titre="Calculs fractionnaires" />
	<Definition lignes={3}>
		Soient deux nombres {@html math('a')} et {@html math('b')} avec {@html math('b \\neq 0')}.<br />
		Le quotient de {@html math('a')} par {@html math('b')} est le nombre qui, lorsqu'il est multiplié par {@html math('b')}, donne {@html math('a')}.
	</Definition>
	<Notation lignes={1.3}>
		On le note {@html math('\\dfrac{a}{b}')} et on le lit "a sur b".
	</Notation>

	<Exemples lignes={3}>
		<Item>
			{@html math('\\dfrac{3}{4} \\times 4 = \\dfrac{3}{\\cancel{4}} \\times \\cancel{4} = 3')}
		</Item>
		<LigneVide />
		<Item>
			{@html math('\\dfrac{7{,}2}{5{,}8} \\times 5{,}8 = \\dfrac{7{,}2}{\\cancel{5{,}8}} \\times \\cancel{5{,}8} = 7{,}2')}
		</Item>
	</Exemples>
</Contenu>
