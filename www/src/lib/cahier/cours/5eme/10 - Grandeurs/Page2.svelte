<script lang="ts">
	import { Contenu } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemples, Item, Texte } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

	import { alignStar } from 'mathlifier';
</script>

<Contenu>
	<Exemples lignes={12}>
		<Item>Calculer le périmètre d'un cercle de rayon 5 cm.</Item>
		<Texte lignes={4}>
			{@html alignStar(`
                𝒫_{\\text{cercle}} &= 2 \\times \\pi \\times \\text{rayon} \\\\
                &= 2 \\times \\pi \\times 5~\\text{cm} \\\\
                &= 10\\pi~\\text{cm} \\, {\\color{red} \\longleftarrow \\text{valeur exacte}} \\\\
                &\\approx 31{,}4~\\text{cm} \\, {\\color{red} \\longleftarrow \\text{valeur approchée}}
            `)}
		</Texte>
		<LigneVide />
		<Item>Calculer l'aire d'un quart de disque de rayon 8 cm.</Item>
		<Texte lignes={5}>
			{@html alignStar(`
                𝒜_{\\text{\\textcolor{red}{quart} de disque}} &= { \\color{red} \\frac{1}{4} } \\times 𝒜_{\\text{disque}} \\\\
                &= \\frac{1}{4} \\times \\pi \\times \\text{rayon} \\times \\text{rayon} \\\\
                &= \\frac{1}{4} \\times \\pi \\times 8~\\text{cm} \\times 8~\\text{cm} \\\\
                &= 16\\pi~\\text{cm}² \\, {\\color{red} \\longleftarrow \\text{valeur exacte}} \\\\
                &\\approx 50{,}27~\\text{cm}² \\, {\\color{red} \\longleftarrow \\text{valeur approchée}}
            `)}
		</Texte>
	</Exemples>
</Contenu>
