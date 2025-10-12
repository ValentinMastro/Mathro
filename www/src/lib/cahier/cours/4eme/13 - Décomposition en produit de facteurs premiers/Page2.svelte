<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Item, Paragraphe, Exemples } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={2} titre="Décomposition en facteurs premiers" />
	<LigneVide />
	<Paragraphe couleur="rouge" nom_du_paragraphe="Théorème fondamental de l'arithmétique" lignes={2}>
		Pour n'importe quel entier naturel {@html math('\\geqslant 2')}, il existe une <u>unique</u> façon de le décomposer en produit de nombres premiers.
	</Paragraphe>
	<Exemples lignes={4}>
		<Item>
			{@html math('219 = 3 \\times 73')}
		</Item>
		<Item>
			{@html math('110 = 2 \\times 5 \\times 11')}
		</Item>
		<Item>
			{@html math('625 = 5 \\times 5 \\times 5 \\times 5 = 5^4')}
		</Item>
		<Item>
			{@html math('360 = 2 \\times 2 \\times 2 \\times 3 \\times 3 \\times 5 = 2^3 \\times 3^2 \\times 5')}
		</Item>
	</Exemples>
</Contenu>
