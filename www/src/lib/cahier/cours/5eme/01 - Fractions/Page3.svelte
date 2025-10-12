<script lang="ts">
	import { Contenu, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item, Methode, Paragraphe, Propriete } from '$lib/cahier/composants/de_cours/*';
	import Texte from '$lib/cahier/composants/de_cours/Texte.svelte';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

	import { math } from 'mathlifier';
</script>

<Contenu>
	<SousPartie numero={2} titre="Addition de fractions" />
	<Propriete lignes={2}>Pour additionner deux fractions, il faut qu'elles aient le même dénominateur.</Propriete>
	<Exemples lignes={4}>
		<Item lignes={2}>
			{@html math(`\\dfrac{1}{3} + \\dfrac{4}{3} = \\dfrac{1 + 4}{3} = \\dfrac{5}{3}`)}.
		</Item>
		<Item lignes={2}>
			{@html math(`\\dfrac{2}{5} + \\dfrac{4}{5} = \\dfrac{2 + 4}{5} = \\dfrac{6}{5}`)}.
		</Item>
	</Exemples>
	<Methode>Si les fractions n'ont pas le même dénominateur :</Methode>
	<Texte lignes={2}>
		{@html math(`\\dfrac{2}{5} + \\dfrac{3}{15} \\longrightarrow`)} il faudrait que les deux fractions soient sur 15.
	</Texte>
	<Texte lignes={2}>
		On se demande alors {@html math(`\\dfrac{2}{5} = \\dfrac{?}{15}`)}.
	</Texte>
	<Texte lignes={2}>
		On trouve que {@html math(`\\dfrac{2}{5} = \\dfrac{6}{15}`)}.
	</Texte>
	<Texte lignes={2}>
		Donc {@html math(
			`{\\color{red} \\dfrac{2}{5}} + \\dfrac{3}{15} = {\\color{red} \\dfrac{6}{15}} + \\dfrac{3}{15} = \\dfrac{6 + 3}{15} = \\dfrac{9}{15}`
		)}.
	</Texte>
</Contenu>
