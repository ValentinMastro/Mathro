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
		Convertir {@html math('900~000~000')} W en GW <small>(Puissance électrique d'un réacteur nucléaire)</small>
	</Exemple>

	<LatexAlign
		code={` \\textcolor{forestgreen}{900~000~000} \\text{ W}
                &= \\color{forestgreen} 9 \\times 10^8 \\color{red} \\text{ W} \\\\
                &= 9 \\times 10^8 \\color{red} \\times 10^{-9} \\text{ GW} \\\\
                &= 9 \\times 10^{8+(-9)} \\text{ GW} \\\\
                &= 9 \\times 10^{-1} \\text{ GW} \\\\
                &= 0{,}9 \\text{ GW}
        `}
		lignes={5}
	/>

	<Exemple>
		Convertir 0,000 000 84 nm en m <small>(Rayon d'un proton)</small>
	</Exemple>
	<LatexAlign
		code={` 0{,}000~000~84 \\color{red} \\text{ nm} \\color{blue}
                &= \\color{forestgreen} 8{,}4 \\times 10^{-7} \\color{blue} \\color{red} \\text{ nm} \\color{blue} \\\\
                &= 8{,}4 \\times 10^{-7} \\color{red} \\times 10^{-9} \\text{ m} \\color{blue} \\\\
                &= 8{,}4 \\times 10^{-7+(-9)} \\text{ m} \\\\
                &= 8{,}4 \\times 10^{-16} \\text{ m} `}
		lignes={5}
	/>
</Contenu>
