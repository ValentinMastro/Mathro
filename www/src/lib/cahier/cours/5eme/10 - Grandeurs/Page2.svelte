<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemple, Formules } from '$lib/cahier/composants/de_cours/*';
	import { LatexAlign } from '$lib/cahier/composants/math/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<SousPartie numero={2} titre="Cercle" />
	<Definition lignes={2}>
		Le nombre {@html math('\\pi')} est une constante mathématique. C'est le coefficient de proportionnalité entre la longueur d'un cercle et son diamètre.
	</Definition>
	<Formules lignes={2}>
		{@html math('\\mathcal{P}_{\\text{cercle}} = \\pi \\times \\text{diamètre}')}
		<br />
		{@html math('\\mathcal{P}_{\\text{cercle}} = 2 \\times \\pi \\times \\text{rayon}')}
	</Formules>
	<Exemple>Calculer le périmètre d'un cercle de rayon 5 cm.</Exemple>
	<LatexAlign
		lignes={4}
		code={`
		    \\mathcal{P}_{\\text{cercle}} &= 2 \\times \\pi \\times \\text{rayon} \\\\
                &= 2 \\times \\pi \\times 5~\\text{cm} \\\\
                &= 10\\pi~\\text{cm} \\, {\\color{red} \\longleftarrow \\text{valeur exacte}} \\\\
                &\\approx 31{,}4~\\text{cm} \\, {\\color{red} \\longleftarrow \\text{valeur approchée}}
            `}
	/>
	<Exemple>Calculer le périmètre d'un quart de disque de rayon 8 cm.</Exemple>
	<LatexAlign
		lignes={5}
		code={`
                \\mathcal{P}_{\\text{\\textcolor{red}{quart} de disque}} &= { \\color{red} \\frac{1}{4} } \\times 𝒫_{\\text{disque}} \\\\
                &= (1 \\div 4) \\times 2 \\times \\pi \\times \\text{rayon} \\\\
                &= (1 \\div 4) \\times 2 \\times \\pi \\times 8~\\text{cm} \\\\
                &= 4\\pi~\\text{cm} \\, {\\color{red} \\longleftarrow \\text{valeur exacte}} \\\\
                &\\approx 12{,}57~\\text{cm} \\, {\\color{red} \\longleftarrow \\text{valeur approchée}}
            `}
	/>
</Contenu>
