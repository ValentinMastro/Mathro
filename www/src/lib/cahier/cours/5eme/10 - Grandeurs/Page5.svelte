<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemple, Formule } from '$lib/cahier/composants/de_cours/*';
	import { LatexAlign } from '$lib/cahier/composants/math/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<SousPartie numero={2} titre="Disque" />
	<Formule>
		{@html math('\\mathcal{A}_{\\text{disque}} = \\pi \\times \\text{rayon} \\times \\text{rayon}')}
	</Formule>
	<Exemple>Calculer l'aire d'un disque de rayon 5 cm.</Exemple>
	<LatexAlign
		lignes={4}
		code={`
		    \\mathcal{A}_{\\text{disque}} &= \\pi \\times \\text{rayon} \\times \\text{rayon} \\\\
                &= \\pi \\times 5~\\text{cm} \\times 5~\\text{cm} \\\\
                &= 25\\pi~\\text{cm}^2 \\, {\\color{red} \\longleftarrow \\text{valeur exacte}} \\\\
                &\\approx 78{,}54~\\text{cm}^2 \\, {\\color{red} \\longleftarrow \\text{valeur approchée}}
            `}
	/>
	<Exemple>Calculer l'aire d'un quart de disque de rayon 8 cm.</Exemple>
	<LatexAlign
		lignes={5}
		code={`
                \\mathcal{A}_{\\text{\\textcolor{red}{quart} de disque}} &= { \\color{red} \\frac{1}{4} } \\times \\mathcal{A}_{\\text{disque}} \\\\
                &= (1 \\div 4) \\times \\pi \\times \\text{rayon} \\times \\text{rayon} \\\\
                &= (1 \\div 4) \\times \\pi \\times 8~\\text{cm} \\times 8~\\text{cm} \\\\
                &= 16\\pi~\\text{cm}^2 \\, {\\color{red} \\longleftarrow \\text{valeur exacte}} \\\\
                &\\approx 50{,}24~\\text{cm}^2 \\, {\\color{red} \\longleftarrow \\text{valeur approchée}}
            `}
	/>
</Contenu>
