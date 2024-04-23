<script lang="ts">
    import { Chapitre, Partie, SousPartie } from "$lib/chapitrage/all_chapitrages";
    import { Definition, Propriete, Paragraphe, Exemples } from "$lib/chapitrage/sections/all_sections";
    import { math, display } from 'mathlifier';
	import AnimationComparaison from "$lib/module/AnimationComparaison.svelte";
</script>

<Chapitre numero={0} titre="Notation positionnelle des nombres">
    <Partie numero={1} titre="Chiffres et nombres">
        <Definition>
            Pour écrire des nombres, on utilise des symboles appelés <emph>chiffres</emph>. <br>
            Il en existe dix : 0 1 2 3 4 5 6 7 8 9 que l'on peut combiner.
        </Definition>
        <Paragraphe couleur="red" nom="Convention">
            Modifier l'ordre des chiffres change la valeur du nombre.
        </Paragraphe>
        <Exemples>
            Avec les chiffres 1, 5 et 8, il est possible de former les nombres : 
            <ul>
                <li>158 : cent cinquante-huit</li>
                <li>185 : cent quatre-vingt-cinq</li>
                <li>518 : cinq cent dix-huit</li>
                <li>581 : cinq cent quatre-ving-un</li>
                <li>815 : huit cent quinze</li>
                <li>851 : huit cent cinquante-et-un</li>
            </ul>
        </Exemples>

        <SousPartie numero={1} titre="Tableau de numération">
            <table class="tableau">
                <tr>
                    <th colspan={3}>Millions</th>
                    <th colspan={3}>Milliers</th>
                    <th colspan={3}>Unités</th>
                </tr>
                <tr>
                    <td>Centaines</td>
                    <td>Dizaines</td>
                    <td>Unités</td>
                    <td>Centaines</td>
                    <td>Dizaines</td>
                    <td>Unités</td>
                    <td>Centaines</td>
                    <td>Dizaines</td>
                    <td>Unités</td>
                </tr>
                <tr style="text-align: center; color: red;">
                    <td></td>
                    <td>1</td>
                    <td>2</td>
                    <td>0</td>
                    <td>4</td>
                    <td>5</td>
                    <td>3</td>
                    <td>9</td>
                    <td>8</td>
                </tr>
                <tr class="ligneblanche">
                    {#each Array(9) as _}
                        <td></td>
                    {/each}
                </tr>
            </table>

            <Exemples>
                Dans le nombre 12 045 398 :
                <ul>
                    <li>le chiffre des dizaines de milliers : 4</li>
                    <li>le nombre de dizaines de milliers : 1204</li>
                    <li>le chiffre des centaines : 3</li>
                    <li>le nombre de centaines : 120 453</li>
                </ul>
            </Exemples>
        </SousPartie>
        <SousPartie numero={2} titre="Décomposition d'un nombre">
            <Propriete>
                Il est possible de décomposer un nombre selon la position de ses chiffres.
            </Propriete>
            <Exemples>
                <ul style="list-style-type: none">
                    <li>
                        {@html display(`
                        \\begin{align*} 
                            45 &= \\text{4 dizaines et 5 unités} \\\\ 
                            &= 40 + 5 \\\\
                            &= 4 \\times 10 + 5 \\times 1
                        \\end{align*}`)}
                    </li>
                    <li>
                        {@html display(`
                        \\begin{align*} 
                            765 &= \\text{7 centaines, 6 dizaines et 5 unités} \\\\ 
                            &= 700+60+5 \\\\
                            &= 7 \\times 100 + 6 \\times 10 + 5 \\times 1
                        \\end{align*}`)}
                    </li>
                    <li>
                        {@html display(`
                        \\begin{align*} 
                            1~350 &= \\text{1 millier, 3 centaines et 5 dizaines} \\\\ 
                            &= 1000+300+50 \\\\
                            &= 1 \\times 1~000 + 3 \\times 100 + 5 \\times 10
                        \\end{align*}`)}
                    </li>
                    <li>
                        {@html display(`
                        \\begin{align*} 
                        29~543 &= \\text{2 dizaines de milliers, 9 milliers, 5 centaines, 4 dizaines et 3 unités} \\\\ 
                            &= 20~000+9~000+500+40+3 \\\\
                            &= 2 \\times 10~000 + 9 \\times 1~000 + 5 \\times 100 + 4 \\times 10 + 3 \\times 1
                        \\end{align*}`)}
                    </li>
                </ul>
            </Exemples>
        </SousPartie>
    </Partie>
    <Partie numero={2} titre="Comparaison">
        <Definition>
            Comparer deux nombres consite à dire lequel est le plus grand ou le plus petit.<br>
            Pour cela, on utilise les symboles :
            <ul>
                <li>&lt; (plus petit que)</li>
                <li>&gt; (plus grand que)</li>
                <li>= (égal)</li>
                <li>&le; (plus petit ou égal à)</li>
                <li>&ge; (plus grand ou égal à)</li>
            </ul>
        </Definition>
        <!-- <AnimationComparaison /> -->
        <Exemples>
            {@html display(`
                \\begin{align*} 
                    35 &\\lt 40 \\\\
                    5{,}4 &\\gt 5{,}2 \\\\
                    98 &= 3+95 \\\\ 
                    3{,}2 + 0{,}2 &\\leq 3{,}4 \\\\
                    65 &\\geq 54 + 11
                \\end{align*}`)}
        </Exemples>
        <Definition>
            Ordre croissant : du plus petit au plus grand <br>
            Ordre décroissant : du plus grand au plus petit
        </Definition>
        <Exemples>
            <ul>
                <li>{@html math("1 \\lt 2 \\lt 7 \\lt 12")}</li>
                <li>{@html math("19 \\gt 18 \\gt 15 \\gt 8")}</li>
            </ul>
        </Exemples>
    </Partie>
    <Partie numero={3} titre="Encadrement">
        <Definition>
            Encadrer un nombre, c'est le placer entre deux autres nombres, le premier lui est inférieur, 
            le deuxième lui est supérieur.<br>
        </Definition>
        <Exemples>
            <ul>
                <li>{@html math("3 \\lt 6 \\lt 9")}</li>
                <li>{@html math("40 \lt 47 \lt 50")} (encadrement à la dizaine)</li>
                <li>{@html math("83{,}2 \\lt 83{,}27 \\lt 83{,}3")} (encadrement au dixième)</li>
            </ul>
        </Exemples>
    </Partie>
</Chapitre>

<style>
    table {
        color: black;
        width: 70vw;
    }
    table.tableau, table.tableau th, table.tableau tr td {
        border: 1px solid black;
        border-collapse: collapse;
    }
    .ligneblanche {
        height: 100px;
    }
</style>