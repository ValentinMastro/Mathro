<script lang="ts">
    import Katex from "svelte-katex";

    import Chapitre from "$lib/chapitrage/Chapitre.svelte";
    import Partie from "$lib/chapitrage/Partie.svelte";
    import SousPartie from "$lib/chapitrage/SousPartie.svelte";
    import Definition from "$lib/chapitrage/sections/Definition.svelte";
    import Exemple from "$lib/chapitrage/sections/Exemple.svelte";
    import Remarque from "$lib/chapitrage/sections/Remarque.svelte";
    import Schema from "$lib/chapitrage/sections/Schema.svelte";
    import Propriete from "$lib/chapitrage/sections/Propriete.svelte";
    import Paragraphe from "$lib/chapitrage/sections/Paragraphe.svelte";
    import Exemples from "$lib/chapitrage/sections/Exemples.svelte"
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
        <Schema fonctionAnimation={(ctx) => {
            ctx.font = "50px serif"

            function chiffre(digit, x1, y1, x2, y2, t) {
                ctx.fillText(digit, x1*(1-t) + x2*t, y1*(1-t) + y2*t)
            }

            var dt = 1/60   // durée/60
            var t = dt
            var sens = true
            var scenario = 0
            var valeur = ""

            async function update() {
                if (t >= 1) {
                    sens = false
                    ctx.fillText(valeur, 0, 60)
                    await new Promise(r => setTimeout(r, 2000));
                } else if (t <= 0) {
                    sens = true
                    scenario = (scenario + 1) % 3
                }
                t += (sens ? dt : -dt)

                ctx.clearRect(0, 0, 1000, 300)
                if (scenario == 0) {
                    chiffre("1", 30, 40, 145, 120, t)
                    chiffre("5", 130, 40, 170, 120, t)
                    chiffre("8", 230, 40, 195, 120, t)
                    valeur = "cent cinquante-huit"
                } else if (scenario == 1) {
                    chiffre("1", 30, 40, 170, 120, t)
                    chiffre("5", 130, 40, 145, 120, t)
                    chiffre("8", 230, 40, 195, 120, t)
                    valeur = "cinq cent dix-huit"
                } else if (scenario == 2) {
                    chiffre("1", 30, 40, 195, 120, t)
                    chiffre("5", 130, 40, 170, 120, t)
                    chiffre("8", 230, 40, 145, 120, t)
                    valeur = "huit cent cinquante-et-un"
                }

                requestAnimationFrame(update)
            }
            update()
        }} />
        <Exemple nombre={0} exercice={undefined}>
            Avec les chiffres 1, 5 et 8, il est possible de former les nombres : 
            <ul>
                <li>158 : cent cinquante-huit</li>
                <li>185 : cent quatre-vingt-cinq</li>
                <li>518 : cinq cent dix-huit</li>
                <li>581 : cinq cent quatre-ving-un</li>
                <li>815 : huit cent quinze</li>
                <li>851 : huit cent cinquante-et-un</li>
            </ul>
        </Exemple>

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
                    <li><Katex displayMode>{`
                        \\begin{align*} 
                            45 &= \\text{4 dizaines et 5 unités} \\\\ 
                            &= 40 + 5 \\\\
                            &= 4 \\times 10 + 5 \\times 1
                        \\end{align*}`}</Katex></li>
                    <li><Katex displayMode>{`
                        \\begin{align*} 
                            765 &= \\text{7 centaines, 6 dizaines et 5 unités} \\\\ 
                            &= 700+60+5 \\\\
                            &= 7 \\times 100 + 6 \\times 10 + 5 \\times 1
                        \\end{align*}`}</Katex></li>
                    <li><Katex displayMode>{`
                        \\begin{align*} 
                            1~350 &= \\text{1 millier, 3 centaines et 5 dizaines} \\\\ 
                            &= 1000+300+50 \\\\
                            &= 1 \\times 1~000 + 3 \\times 100 + 5 \\times 10
                        \\end{align*}`}</Katex></li>
                    <li><Katex displayMode>{`
                        \\begin{align*} 
                        29~543 &= \\text{2 dizaines de milliers, 9 milliers, 5 centaines, 4 dizaines et 3 unités} \\\\ 
                            &= 20~000+9~000+500+40+3 \\\\
                            &= 2 \\times 10~000 + 9 \\times 1~000 + 5 \\times 100 + 4 \\times 10 + 3 \\times 1
                        \\end{align*}`}</Katex></li>
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
        <Exemples>
            <Katex displayMode>{`
                \\begin{align*} 
                    35 &\\lt 40 \\\\
                    5{,}4 &\\gt 5{,}2 \\\\
                    98 &= 3+95 \\\\ 
                    3{,}2 + 0{,}2 &\\leq 3{,}4 \\\\
                    65 &\\geq 54 + 11
                \\end{align*}`}</Katex>
        </Exemples>
        <Definition>
            Ordre croissant : du plus petit au plus grand <br>
            Ordre décroissant : du plus grand au plus petit
        </Definition>
        <Exemples>
            <ul>
                <li><Katex> 1 \lt 2 \lt 7 \lt 12</Katex></li>
                <li><Katex> 19 \gt 18 \gt 15 \gt 8</Katex></li>
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