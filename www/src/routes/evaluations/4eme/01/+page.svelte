<script lang="ts">
	import { onMount } from "svelte";
	import Katex from "svelte-katex";
    import Switch from "$lib/Switch.svelte";
	import BoutonRafraichir from "$lib/BoutonRafraichir.svelte";

    let afficher_reponses: boolean = false;
    let graine: number = 0;
    
    let questions: any[] = Array(20)
    const tableau: any[][] = Array(20).fill(0).map(() => [])

    onMount(async () => {
        async function generer_exercice(type: string, niveau: number, id_exercice: number, graine: number) {
            const response = await fetch('/api', {
                method: 'POST',
                body: JSON.stringify({ type, niveau, id_exercice, graine }),
                headers: {
                    'content-type': 'application/json',
                },
            });
            let json = await response.json()
            return json
        }

        async function exercice(nombre_a_generer: number, id: number, type: string, niveau: number, id_exercice: number, graine: number) {
            for (var i = 0; i < nombre_a_generer; i++) {
                questions[id+i] = await generer_exercice(type, niveau, id_exercice, graine+i);
            }
        }

        async function remplir_tableau(graine: number) {
            // Addition
            await exercice(4, 0, "qcm", 4, 1, graine)
            // Soustraction
            await exercice(4, 4, "qcm", 4, 2, graine)
            // Multiplication
            await exercice(3, 8, "qcm", 4, 3, graine)
            // Addition et Multiplication
            await exercice(3, 11, "qcm", 4, 6, graine)
            // Carre
            await exercice(3, 14, "qcm", 4, 4, graine)
            // Racine carrée
            await exercice(3, 17, "qcm", 4, 5, graine)

            for (var i = 0; i < tableau.length; i++) {
                tableau[i] = [questions[i].enonce, ...reponses_melangees(questions[i].reponse)]
            }
        }

        remplir_tableau(graine)
    })

    function randomIntFromInterval(min: number , max: number) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    let index = 0
    let indexes: number[] = []
    function reponses_melangees(rep: {bonne: string, mauvaises: string[]}) {
        let melange = [rep.bonne, ...rep.mauvaises];
        index = randomIntFromInterval(0, melange.length - 1);
        indexes.push(index+1);
        [melange[0], melange[index]] = [melange[index], melange[0]];

        return melange
    }

    function test() {
        graine = (graine + 3) % 255
    }
</script>

<div class="boutons">
    <BoutonRafraichir clique={test}/>
    <Switch bind:afficher_reponses />
</div>


<table>
    <tr>
        <th></th>
        <th>Question</th>
        <th>A</th>
        <th>B</th>
        <th>C</th>
        <th>D</th>
        <th>E</th>
    </tr>
    {#each tableau as ligne, numero_ligne }
        <tr>
            <td class='q'>Q{numero_ligne+1}</td>
            {#each ligne as data, i}
                {#if (i == 0)}
                    <td class="enonce"><Katex>{data}</Katex></td>
                {:else if (i == indexes[numero_ligne])}
                    <td class="reponse {afficher_reponses ? "bonne" : ""}"><Katex>{data}</Katex></td>
                {:else}
                    <td class="reponse {afficher_reponses ? "mauvaise" : ""}"><Katex>{data}</Katex></td>
                {/if}
            {/each}
        </tr>
    {/each}
</table>


<style>
    table {
        user-select: none;
    }
    tr {
        height: 48px;
    }
    td {
        text-align: center;
    }
    td.q {
        border-style: double;
    }
    table, tr, td {
        border-style: solid;
        border-collapse: collapse;
    }
    .q {
        background-color: blue;
    }
    .reponse {
        
    }
    .bonne {
        background-color: green;
    }
    .mauvaise {
        
    }
    div.boutons {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: 10px;
        column-gap: 10px;
    }
</style>