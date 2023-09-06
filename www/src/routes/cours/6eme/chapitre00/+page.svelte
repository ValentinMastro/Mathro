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
                <li>158 : cinq cinquante-huit</li>
                <li>185 : cinq quatre-vingt-cinq</li>
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
                <tr class="ligneblanche">
                    {#each Array(9) as _}
                        <td></td>
                    {/each}
                </tr>
            </table>
        </SousPartie>
        <SousPartie numero={2} titre="Décomposition d'un nombre">
            <Propriete>
                Il est possible de décomposer un nombre selon la position de ses chiffres.
            </Propriete>
            <Exemple exercice={undefined} nombre={0}>
                <tr><td><Katex>45 =</Katex> 4 dizaines et 5 unités</td></tr>
                <tr><td><Katex>765 =</Katex> 7 centaines, 6 dizaines et 5 unités</td></tr>
                <tr><td><Katex>1~350 =</Katex> 1 millier, 3 centaines et 5 dizaines</td></tr>
                <tr><td><Katex>29~543 =</Katex> 2 dizaines de milliers, 9 milliers, 5 centaines, 4 dizaines et 3 dizaines</td></tr>
            </Exemple>
        </SousPartie>
    </Partie>
    <Partie numero={2} titre="Comparaison">
        
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