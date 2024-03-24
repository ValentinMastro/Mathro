<script lang="ts">
    import { Chapitre, Partie } from "$lib/chapitrage/all_chapitrages";
    import { Definition, Exemples, Paragraphe } from "$lib/chapitrage/sections/all_sections";
    import { math, display } from 'mathlifier';
</script>

<Chapitre numero={9} titre="Équation">
    <Partie numero={1} titre="Concept">
        <Definition>
            Une équation est une égalité contenant une variable <i>inconnue</i>, souvent désignée par la lettre {@html math('x')}.<br>
            Lorsqu'en remplaçant la valeur de l'inconnue, l'égalité est vérifiée, on dit que cette valeur est une <i>solution</i> de l'équation.
        </Definition>
        <Exemples>
            <ul>
                <li>
                    Dans l'équation {@html math('2x+5 = 3')}:
                    <ul>
                        <li>
                            Si je remplace {@html math('x')} par -1, <br>
                            à gauche du égal, j'aurai {@html math('2 \\times (-1) + 5 = \\fcolorbox{red}{white}{3}')} <br>
                            et à droite du égal, j'aurai {@html math('\\fcolorbox{red}{white}{3}')}.<br>
                            <span style="color: red">-1 est une solution de l'équation</span>
                        </li>
                        <li>
                            Si je remplace {@html math('x')} par 2, <br>
                            à gauche du égal, j'aurai {@html math('2 \\times 2 + 5 = 4 + 5 = \\fcolorbox{red}{white}{9}')} <br>
                            et à droite du égal, j'aurai {@html math('\\fcolorbox{red}{white}{3}')}.<br>
                            <span style="color: red">2 n'est pas une solution de l'équation</span>
                        </li>
                    </ul>
                </li>
                <li>
                    Dans l'équation {@html math('7x+5 = 6x+6')} :
                    <ul>
                        <li>
                            Si je remplace {@html math('x')} par 0, <br>
                            à gauche du égal, j'aurai {@html math('7 \\times 0 + 5 = 0 + 5 = \\fcolorbox{red}{white}{5}')} <br>
                            et à droite du égal, j'aurai {@html math('6 \\times 0 + 6 = 0 + 6 = \\fcolorbox{red}{white}{6}')}.<br>
                            <span style="color: red">0 n'est pas une solution de l'équation</span>
                        </li>
                        <li>
                            Si je remplace {@html math('x')} par 1, <br>
                            à gauche du égal, j'aurai {@html math('7 \\times 1 + 5 = 7 + 5 = \\fcolorbox{red}{white}{12}')} <br>
                            et à droite du égal, j'aurai {@html math('6 \\times 1 + 6 = 6 + 6 = \\fcolorbox{red}{white}{12}')}.<br>
                            <span style="color: red">1 est une solution de l'équation</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </Exemples>
    </Partie>
    <Partie numero={2} titre="Résolution d'équations du premier degré">
        <Paragraphe couleur="red" nom="Règle 1">
            Dans une équation, on peut ajouter ou retirer la même quantité dans chaque membre de l'équation.
        </Paragraphe>
        <Exemples>
            <ul>
                <li>
                    Dans l'équation {@html math('2x+5=3')}, on peut retirer 5 dans chaque membre de l'équation.<br>
                    {@html display(`
                        \\begin{aligned}
                            2x+5 &= 3 \\\\
                            2x+5 \\textcolor{red}{-5} &= 3 \\textcolor{red}{-5} \\\\
                            2x &= -2
                        \\end{aligned}
                    `)}
                </li>
                <li>
                    Dans l'équation {@html math('7x+5 = 6x+6')}, on peut retirer {@html math('6x')} dans chaque membre de l'équation.<br>
                    {@html display(`
                        \\begin{aligned}
                            7x+5 &= 6x+6 \\\\
                            7x+5 \\textcolor{red}{-6x} &= 6x+6 \\textcolor{red}{-6x} \\\\
                            x+5 &= 6
                        \\end{aligned}
                    `)}
                    On peut également retirer 5 dans chaque membre de l'équation.<br>
                    {@html display(`
                        \\begin{aligned}
                            x+5 &= 6 \\\\
                            x+5 \\textcolor{red}{-5} &= 6 \\textcolor{red}{-5} \\\\
                            x &= 1
                        \\end{aligned}
                    `)}
                </li>
            </ul>
        </Exemples>
        <Paragraphe couleur="red" nom="Règle 2">
            Dans une équation, on peut multiplier ou diviser chaque membre de l'équation par un même nombre non nul.
        </Paragraphe>
        <Exemples>
            <ul>
                <li>
                    Dans l'équation {@html math('2x = -2')}, on peut diviser chaque membre de l'équation par 2.<br>
                    {@html display(`
                        \\begin{aligned}
                            2x &= -2 \\\\
                            \\dfrac{2x}{\\textcolor{red}{2}} &= \\dfrac{-2}{\\textcolor{red}{2}} \\\\
                            x &= -1
                        \\end{aligned}
                    `)}
                </li>
                <li>
                    Dans l'équation {@html math('\\dfrac{x}{5} = 22')}, on peut multiplier chaque membre de l'équation par 5.<br>
                    {@html display(`
                        \\begin{aligned}
                            \\dfrac{x}{5} &= 22 \\\\
                            \\dfrac{x}{5} \\textcolor{red}{\\times 5} &= 22 \\textcolor{red}{\\times 5} \\\\
                            x &= 110
                        \\end{aligned}
                    `)}
                </li>
            </ul>
        </Exemples>
    </Partie>
</Chapitre>