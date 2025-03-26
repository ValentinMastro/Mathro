<script lang="ts">
    import { Contenu } from "$lib/cahier/composants/de_chapitrage/*";
    import { Methode, Exemples, Texte } from "$lib/cahier/composants/de_cours/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math, alignStar } from "mathlifier";
</script>

<Contenu>
    <Methode>
        Comment convertir une valeur dans une autre unité ?
    </Methode>
    <Exemples lignes={10}>
        <Texte>
            <u title="Puissance électrique d'un réacteur nucléaire">Convertir {@html math("9 \\times 10^{11}")} mW en GW</u>
        </Texte>
            {@html alignStar(`
                9 \\times 10^{11} \\color{red} \\text{ mW} \\color{blue} 
                &= 9 \\times 10^{11} \\color{red}\\times 10^{-12} \\text{ GW} \\color{blue} \\\\[-0.1em]
                &= 9 \\times 10^{11+(-12)} \\text{ GW} \\\\[-0.1em]
                &= 9 \\times 10^{-1} \\text{ GW}
            `)}
        <LigneVide lignes={0.5} />
        <Texte>
            <u title="Rayon d'un proton">Convertir 0,000 000 84 nm en km</u>
        </Texte>
            {@html alignStar(`
                    0{,}000~000~84 \\color{red} \\text{ nm} \\color{blue} 
                    &= \\color{green} 8{,}4 \\times 10^{-7} \\color{blue} \\color{red} \\text{ nm} \\color{blue} \\\\[-0.1em]
                    &= 8{,}4 \\times 10^{-7} \\color{red} \\times 10^{-12} \\text{ km} \\color{blue} \\\\[-0.1em]
                    &= 8{,}4 \\times 10^{-7+(-12)} \\text{ km} \\\\[-0.1em]
                    &= 8{,}4 \\times 10^{-19} \\text{ km} \\\\[-0.1em]
            `)}
    </Exemples>
</Contenu>