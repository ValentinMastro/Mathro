<script lang="ts">
	import { Contenu } from "$lib/cahier/composants/de_chapitrage/*";
    import { Paragraphe, Exemples, Item } from "$lib/cahier/composants/de_cours/*";
    import { math, display } from 'mathlifier';
</script>

<Contenu>
    <Paragraphe couleur="rouge" nom_du_paragraphe="Règle 2" lignes={2}>
        Dans une équation, on peut multiplier ou diviser chaque membre de l'équation par un même nombre non nul.
    </Paragraphe>
    <Exemples lignes={10}>
        <Item lignes={6}>
            Dans l'équation {@html math('2x = -2')}, on peut diviser chaque membre de l'équation par 2.<br>
            {@html display(`
                \\begin{aligned}
                    2x &= -2 \\\\
                    \\dfrac{2x}{\\textcolor{red}{2}} &= \\dfrac{-2}{\\textcolor{red}{2}} \\\\
                    x &= -1
                \\end{aligned}
            `)}
        </Item>
        <Item lignes={4}>
            Dans l'équation {@html math('\\dfrac{x}{5} = 22')}, on peut multiplier chaque membre de l'équation par 5.<br>
            {@html display(`
                \\begin{aligned}
                    \\dfrac{x}{5} &= 22 \\\\
                    \\dfrac{x}{5} \\textcolor{red}{\\times 5} &= 22 \\textcolor{red}{\\times 5} \\\\
                    x &= 110
                \\end{aligned}
            `)}
        </Item>
    </Exemples>
</Contenu>