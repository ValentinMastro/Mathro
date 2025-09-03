<script lang="ts">
	import { Contenu, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={2} titre="Plusieures écritures" />
	<SousPartie numero={1} titre="Fractions décimales" />
	<Definition lignes={2}>Une fraction décimale est une fraction dont le dénominateur est 1, 10, 100, 1000, etc.</Definition>
	<Exemples lignes={5}>
		<Item lignes={2}>
			{@html math('0{,}5 = \\dfrac{5}{10}')}
		</Item>
		<Item lignes={2}>
			{@html math('3{,}87 = \\dfrac{387}{100}')}
		</Item>
		<Item>
			{@html math('0{,}007 = \\dfrac{7}{1000}')}
		</Item>
	</Exemples>
	<SousPartie numero={2} titre="Décomposition" />
	<Exemples lignes={9}>
		<Item lignes={4}>
			{@html math('3{,}87')} <br />
			{@html math('= 3 + 0{,}8 + 0{,}07')} <br />
			{@html math('= 3 + 8 \\times 0{,}1 + 7 \\times 0{,}01')} <br />
			{@html math('= 3 + \\dfrac{8}{10} + \\dfrac{7}{100}')}
		</Item>
		<LigneVide />
		<Item lignes={4}>
			{@html math('54{,}123~4')} <br />
			{@html math('= 54 + 0{,}1 + 0{,}02 + 0{,}003 + 0{,}000~4')} <br />
			{@html math('= 54 + 1 \\times 0{,}1 + 2 \\times 0{,}01 + 3 \\times 0{,}001 + 4 \\times 0{,}000~1')} <br />
			{@html math('= 54 + \\dfrac{1}{10} + \\dfrac{2}{100} + \\dfrac{3}{1~000} + \\dfrac{4}{10~000}')}
		</Item>
	</Exemples>
</Contenu>
