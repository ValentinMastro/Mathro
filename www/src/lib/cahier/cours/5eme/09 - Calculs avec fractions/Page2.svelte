<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Item, Paragraphe } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import { math, alignStar } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={2} titre="Exemples d'exercices" />

	<Paragraphe nom_du_paragraphe="Énoncé" lignes={6}>
		Un gâteau est coupé en 4 morceaux.<br />
		Albert a {@html math('\\frac{1}{2}')} du gâteau.<br />
		Bernard a {@html math('\\frac{1}{8}')} du gâteau.<br />
		Camille a {@html math('\\frac{3}{16}')} du gâteau.<br />
		Que reste-t-il pour Danielle ?<br />
		<LigneVide />
	</Paragraphe>
	<Paragraphe nom_du_paragraphe="Solution" lignes={6}>
		{@html alignStar(`
            &\\dfrac{1}{\\color{green}1}
            - \\dfrac{1}{2}
            - \\dfrac{1}{8}
            - \\dfrac{3}{16}
            \\\\
            &=
            \\dfrac{1 \\times 16}{1 \\times 16}
            - \\dfrac{1 \\times 8}{2 \\times 8}
            - \\dfrac{1 \\times 2}{8 \\times 2}
            - \\dfrac{3}{16}
            \\\\
            &=
            \\dfrac{16}{16}
            - \\dfrac{8}{16}
            - \\dfrac{2}{16}
            - \\dfrac{3}{16}
            \\\\
            &=
            \\dfrac{3}{16}
        `)}
	</Paragraphe>
	<Paragraphe nom_du_paragraphe="Énoncé" lignes={5}>
		Sur mon disque dur :
		<Item>
			{@html math('\\frac{1}{3}')} de l'espace est utilisé pour les vidéos.
		</Item>
		<Item>
			{@html math('\\frac{1}{6}')} de l'espace est utilisé pour les images.
		</Item>
		<Item>
			{@html math('\\frac{1}{24}')} de l'espace est utilisé pour des logiciels.
		</Item>
		Quelle fraction de l'espace disque n'est pas utilisé ?
	</Paragraphe>
	<LigneVide />
	<Paragraphe nom_du_paragraphe="Solution" lignes={6}>
		{@html alignStar(`
            & 1 - \\frac{1}{3} - \\frac{1}{6} - \\frac{1}{24}
            \\\\
            &=
            \\frac{1 \\times 24}{1 \\times 24} -\\frac{1 \\times 8}{3 \\times 8} - \\frac{1 \\times 4}{6 \\times 4} - \\frac{1}{24}
            \\\\
            &=
            \\frac{24}{24} - \\frac{8}{24} - \\frac{4}{24} - \\frac{1}{24}
            \\\\
            &=
            \\frac{11}{24}
        `)}
	</Paragraphe>
</Contenu>
