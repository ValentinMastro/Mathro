<script lang="ts">
	import { Chapitre, Contenu, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Formule, Formules, Item, MultiItem } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Formule>
		<center>
			{@html math(`10^{-n} = \\dfrac{1}{10^n}`)}
		</center>
	</Formule>
	<Exemples lignes_vides={3}>
		<MultiItem colonnes={2}>
			<Item bullet="">{@html math('10^{-1} = \\dfrac{1}{10^1} = \\dfrac{1}{10} = 0{,}1')}</Item>
			<Item bullet="">{@html math('10^{-3} = \\dfrac{1}{10^3} = \\dfrac{1}{1~000} = 0{,}001')}</Item>
		</MultiItem>
	</Exemples>
	<Formule>
		<center>
			{@html math(`\\dfrac{10^n}{10^p} = 10^{n-p}`)}
		</center>
	</Formule>
	<Exemples lignes_vides={3}>
		<MultiItem colonnes={2}>
			<Item bullet="">{@html math('\\dfrac{10^3}{10^1} = 10^{3-1} = 10^2 = 100')}</Item>
			<Item bullet="">{@html math('\\dfrac{10^5}{10^7} = 10^{5-7} = 10^{-2} = 0{,}01')}</Item>
		</MultiItem>
	</Exemples>
	<Formule>
		<center>
			{@html math(`(10^n)^p = 10^{n \\times p}`)}
		</center>
	</Formule>
	<Exemples>
		<MultiItem colonnes={2}>
			<Item bullet="">{@html math('(10^2)^3 = 10^{2 \\times 3} = 10^6')}</Item>
			<Item bullet="">{@html math('(10^{-4})^{-2} = 10^{-4 \\times (-2)} = 10^8')}</Item>
		</MultiItem>
	</Exemples>
</Contenu>
