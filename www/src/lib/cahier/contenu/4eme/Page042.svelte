<script lang="ts">
	import { Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Paragraphe, Exemples, Item } from "$lib/cahier/composants/de_cours/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";
    import { math, display } from 'mathlifier';

</script>

<Contenu>
    <Partie numero={2} titre="Résolution d'équations du premier degré" />
        <LigneVide />
        <Paragraphe couleur="red" nom_du_paragraphe="Règle 1" lignes={2}>
            Dans une équation, on peut ajouter ou retirer la même quantité dans chaque membre de l'équation.
        </Paragraphe>
        <Exemples lignes={17}>
            <Item lignes={5}>
                Dans l'équation {@html math('2x+5=3')}, on peut retirer 5 dans chaque membre de l'équation.<br>
                {@html display(`
                    \\begin{aligned}
                        2x+5 &= 3 \\\\
                        2x+5 \\textcolor{red}{-5} &= 3 \\textcolor{red}{-5} \\\\
                        2x &= -2
                    \\end{aligned}
                `)}
            </Item>
            <LigneVide />
            <Item lignes={10}>
                Dans l'équation {@html math('7x+5 = 6x+6')}, on peut retirer {@html math('6x')} dans chaque membre de l'équation.<br>
                {@html display(`
                    \\begin{aligned}
                        7x+5 &= 6x+6 \\\\
                        7x+5 \\textcolor{red}{-6x} &= 6x+6 \\textcolor{red}{-6x} \\\\
                        x+5 &= 6
                    \\end{aligned}
                `)}
                <LigneVide lignes={0.5}/>
                On peut également retirer 5 dans chaque membre de l'équation.<br>
                {@html display(`
                    \\begin{aligned}
                        x+5 &= 6 \\\\
                        x+5 \\textcolor{red}{-5} &= 6 \\textcolor{red}{-5} \\\\
                        x &= 1
                    \\end{aligned}
                `)}
            </Item>
        </Exemples>
    
</Contenu>