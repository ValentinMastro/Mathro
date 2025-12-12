<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Paragraphe, Texte } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import { display } from 'mathlifier';
</script>

<Chapitre titre="Calculs avec fractions" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Addition et soustraction" />

	<Texte lignes={2} couleur="bleu">
		Partons de l'exemple suivant :
		{@html display('\\dfrac{3}{7} + \\dfrac{2}{21} = ?')}
	</Texte>

	<Paragraphe nom_du_paragraphe="Problème :">Les dénominateurs ne sont pas égaux.</Paragraphe>

	<Texte>
		{@html display(
			'\\dfrac{ 3 {\\color{red} \\times 3 } }{ 7 {\\color{red} \\times 3} } + \\dfrac{2}{21} = \\dfrac{9}{21} + \\dfrac{2}{21} = \\dfrac{11}{21}'
		)}
	</Texte>

	<Texte lignes={2} couleur="bleu">
		Partons de l'exemple suivant :
		{@html display(`\\dfrac{3}{8} - \\dfrac{1}{4} = ?`)}
	</Texte>
	<Paragraphe nom_du_paragraphe="Problème :">Les dénominateurs ne sont pas égaux.</Paragraphe>
	<Texte>
		{@html display(`
            \\dfrac{3}{8}
            -
            \\dfrac
            {1 {\\color{red}\\times 2}}
            {4 {\\color{red}\\times 2}}
            =
            \\dfrac{3}{8}
            -
            \\dfrac{2}{8}
            =
            \\dfrac{1}{8}
        `)}
	</Texte>
</Contenu>
