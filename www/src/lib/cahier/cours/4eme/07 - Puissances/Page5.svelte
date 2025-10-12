<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Methode, Exemple } from '$lib/cahier/composants/de_cours/*';
	import { LatexAlign } from '$lib/cahier/composants/math/*';

	import { math } from 'mathlifier';
</script>

<Contenu>
	<SousPartie numero={5} titre="Conversion d'unités" />
	<Methode>Comment convertir une valeur dans une autre unité ?</Methode>
	<Exemple>
		Convertir {@html math('9 \\times 10^{11}')} mW en GW <small>(Puissance électrique d'un réacteur nucléaire)</small>
	</Exemple>

	<LatexAlign
		code={` 9 \\times 10^{11} \\color{red} \\text{ mW} \\color{blue}
                &= 9 \\times 10^{11} \\color{red}\\times 10^{-12} \\text{ GW} \\color{blue} \\\\
                &= 9 \\times 10^{11+(-12)} \\text{ GW} \\\\
                &= 9 \\times 10^{-1} \\text{ GW} `}
		lignes={4}
	/>

	<Exemple>
		Convertir 0,000 000 84 nm en km <small>(Rayon d'un proton)</small>
	</Exemple>
	<LatexAlign
		code={` 0{,}000~000~84 \\color{red} \\text{ nm} \\color{blue}
                &= \\color{forestgreen} 8{,}4 \\times 10^{-7} \\color{blue} \\color{red} \\text{ nm} \\color{blue} \\\\
                &= 8{,}4 \\times 10^{-7} \\color{red} \\times 10^{-12} \\text{ km} \\color{blue} \\\\
                &= 8{,}4 \\times 10^{-7+(-12)} \\text{ km} \\\\
                &= 8{,}4 \\times 10^{-19} \\text{ km} `}
		lignes={5}
	/>
</Contenu>
