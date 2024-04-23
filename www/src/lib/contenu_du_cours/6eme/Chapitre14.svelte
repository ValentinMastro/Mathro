<script lang="ts">
    import { Chapitre, Partie } from "$lib/chapitrage/all_chapitrages";
    import { Paragraphe, Exemples, Remarque } from "$lib/chapitrage/sections/all_sections";
    import { math, display } from 'mathlifier';
</script>

<Chapitre numero={14} titre="Enchainement d'opérations">
    <Partie numero={1} titre="Commutativité et associativité de l'addition et de la multiplication">
        <Paragraphe nom="Règle" couleur="red">
            Dans un calcul ne comportant <u>que</u> des additions, on peut les effectuer dans n'importe quel ordre.
        </Paragraphe>
        <Exemples>
            <ul class="exemples">
                <li>
                    {@html display(`
                        \\begin{align*}
                            &72 + 85 + 28 + 15 \\\\
                            =& \\textcolor{red}{72 + 28} + \\textcolor{green}{85+15} \\\\
                            =& 100 + 100 \\\\
                            =& 200 
                        \\end{align*}
                    `)}
                </li>
                <li>
                    {@html display(`
                        \\begin{align*}
                            & 1+2+3+4+5+6+7+8+9+10 \\\\
                            =& \\textcolor{red}{1+10} + \\textcolor{green}{2+9} + \\textcolor{blue}{3+8} + \\textcolor{orange}{4+7} + \\textcolor{purple}{5+6} \\\\
                            =& 11 + 11 + 11 + 11 + 11 \\\\
                            =& 55
                        \\end{align*}
                    `)}
                </li>
            </ul>
        </Exemples>
        <Paragraphe nom="Règle" couleur="red">
            Dans un calcul ne comportant <u>que</u> des multiplications, on peut les effectuer dans n'importe quel ordre.
        </Paragraphe>
        <Exemples>
            <ul class="exemples">
                <li>
                    {@html display(`
                        \\begin{align*}
                            & 2 \\times 19 \\times 5 \\\\
                            =& 2 \\times 5 \\times 19 \\\\
                            =& 10 \\times 19 \\\\
                            =& 190
                        \\end{align*}
                    `)}
                </li>
                <li>
                    {@html display(`
                        \\begin{align*}
                            & 33 \\times 9 \\\\
                            =& 3 \\times 11 \\times 9 \\\\
                            =& 3 \\times 9 \\times 11 \\\\
                            =& 27 \\times 11 \\\\
                            =& 297
                        \\end{align*}
                    `)} 
                </li>
            </ul>
        </Exemples>
    </Partie>
    <Partie numero={2} titre="Priorité des opérations">
        <Paragraphe nom="Règle" couleur="red">
            Dans un calcul comportant plusieurs opérations de natures différentes, on effectue :
            <ul>
                <li>les opérations entre parenthèses</li>
                <li>puis, les multiplications et les divisions</li>
                <li>et enfin, les additions et les soustractions</li>
            </ul>
        </Paragraphe>
        <Remarque>
            Si deux opérations de même nature apparaissent dans un calcul, on les effectue de gauche à droite.
        </Remarque>
    </Partie>
</Chapitre>

<style>
    ul.exemples {
        list-style-type: none;
        columns: 2;
    }
</style>