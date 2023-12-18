<script lang="ts">
	import { onMount } from "svelte";
    import JSZip from "jszip";
    import init, { generer_evaluation } from "exercices";

	import BoutonRafraichir from "$lib/BoutonRafraichir.svelte";
	import Question from "./Question.svelte";
	import Explication from "./Explication.svelte";
	import Addition from "$lib/scratch/blocs/operations/Addition.svelte";

    export let niveau: number;
    export let numero_evaluation: number;
    let afficher_reponses: boolean = false;
    let afficher_mauvaises_reponses: boolean = false;
    let afficher_explications: boolean = false;
    let graine_selectionnee: number = 0;
    
    const TABLEAU: any[][][] = Array(256).fill(0).map(
        () => Array(20).fill(0).map(
            () => []
        )
    );
    const KATEX_ENONCE: boolean[] = Array(20).fill(true);
    const KATEX_REPONSES: boolean[] = Array(20).fill(true)

    interface EvaluationInterface {
        evaluations: {
            questions: {
                type: "QCM",
                enonce: string,
                reponse: {
                    bonne: string,
                    mauvaises: string[]
                },
                katex_enonce: boolean,
                katex_reponses: boolean,
                explication: string
            }[]
        }[]
    }

    async function generer_evaluation_depuis_executable(niveau: number, id_evaluation: number): Promise<EvaluationInterface> {
        const REQUETE_API = await fetch('/api/from_rust', {
            method: 'POST',
            body: JSON.stringify({niveau, id_evaluation}),
            headers: {
                'Content-Type': 'application/json',
                'Content-Encoding': 'gzip'
            }
        });
        return await REQUETE_API.json();
    }

    async function recuperer_evaluation_compressee(niveau: number, id_evaluation: number) {
        const REQUETE_API = await fetch('/api/from_zip', {
            method: 'POST',
            body: JSON.stringify({niveau, id_evaluation}),
            headers: {
                'Content-Type': 'application/json',
                'Content-Encoding': 'gzip'
            }
        }).then((reponse) => {
            if (reponse.status == 200) {
                return reponse;
            } 
        })

        if (REQUETE_API == null) {
            return {evaluations: []}
        }

        // reponse est un string qui contient le contenu du fichier zip en base64
        // on souhaite le décompresser pour obtenir le contenu du fichier json qui est à l'intérieur
        let reponse: string = await REQUETE_API.json();
        let evaluation: EvaluationInterface = {evaluations: []};

        var zip = new JSZip();
        zip = await zip.loadAsync(reponse, {base64: true});
        var fichier = zip.file("data.json");

        if (fichier == null) {
            console.log("Erreur : fichier introuvable");
            return evaluation;
        }

        var decompression = await fichier.async("string");
        evaluation = JSON.parse(decompression);

        if (evaluation == null) {
            console.log("Erreur : fichier vide");
            return evaluation;
        }

        return evaluation
    }

    async function get_evaluation(niveau: number = 6, id_evaluation: number = 1) {
        let evaluation: EvaluationInterface = generer_evaluation(niveau, id_evaluation);

        if (evaluation.evaluations.length == 0) {
            evaluation = await generer_evaluation_depuis_executable(niveau, id_evaluation);
        }

        evaluation.evaluations.forEach((liste_questions, graine: number) => {
            liste_questions.questions.forEach((question, numero_question: number) => {
                TABLEAU[graine][numero_question] = [question.enonce, ...reponses_melangees(question.reponse, graine, numero_question), question.explication]
                if (graine == 0) {
                    KATEX_ENONCE[numero_question] = question.katex_enonce;
                    KATEX_REPONSES[numero_question] = question.katex_reponses;
                }
            })
        })
    }

    function randomIntFromInterval(min: number , max: number) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    let index = 0
    let indexes: number[][] = Array(256).fill(0).map(() => [])
    function reponses_melangees(rep: {bonne: string, mauvaises: string[]}, graine: number, numero_question: number) {
        let melange = [rep.bonne, ...rep.mauvaises];
        index = randomIntFromInterval(0, melange.length - 1);
        indexes[graine][numero_question] = index;
        [melange[0], melange[index]] = [melange[index], melange[0]];

        return melange
    }

    function changer_graine() {
        graine_selectionnee = (graine_selectionnee+1) % 256
    }

    onMount(async () => {
        await get_evaluation(niveau, numero_evaluation);
    });
</script>

<div class="options">
    <div class="selecteurs">
        <div>
            <input id="surbrillance_reponses" type="checkbox" bind:checked={afficher_reponses} />
            <label for="surbrillance_reponses">Afficher les réponses</label>
        </div>
        <div>
            <input id="cacher_mauvaises_reponses" type="checkbox" bind:checked={afficher_mauvaises_reponses} />
            <label for="cacher_mauvaises_reponses">Cacher les mauvaises réponses</label>
        </div>
        <div>
            <input id="explications" type="checkbox" bind:checked={afficher_explications} />
            <label for="explications">Afficher les explications</label>
        </div>
    </div>
    <div class="boutons">
        <BoutonRafraichir clique={changer_graine}/>
        <input bind:value={graine_selectionnee} type="number" min={0} max={255} />
    </div>
</div>


<!-- 
    La variable TABLEAU contient les données faisant référence 
    à toutes les évaluations (entre la n°0 et la n°255).
-->
<div class="tout">
{#each TABLEAU as evaluation, graine_index}
<!-- Seule une seule évaluation (identifiée par sa graine) est affichée -->
{#if graine_index == graine_selectionnee}
    <table>
        <tr>
            <th style="width: 120px;">
                Évaluation n°{numero_evaluation}<br>
                {niveau}ème #{graine_index}
            </th>
            <th>Question</th>
            {#if afficher_mauvaises_reponses}
                <th>Réponse</th>
            {:else}
                <th>A</th>
                <th>B</th>
                <th>C</th>
                <th>D</th>
                <th>E</th>
            {/if}
        </tr>
        <!-- evaluation contient toutes les questions (en général 20) -->
        {#each evaluation as cellules_question, numero_question }
            <Question 
                    enonce={cellules_question[0]}
                    katex_enonce={KATEX_ENONCE[numero_question]}
                    question={cellules_question.slice(1,-1)}
                    katex_reponses={KATEX_REPONSES[numero_question]}
                    
                    numero_question={numero_question}
                    numero_reponse={indexes[graine_index][numero_question]}
                    bind:afficher_reponses
                    bind:afficher_mauvaises_reponses
                    />
            {#if afficher_explications}
                <Explication 
                    explication={cellules_question[6]}
                />
            {/if}
        {/each}
    </table>
    <div class="finpage"></div>
{/if}
{/each}
</div>

<style>
    .tout {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    table {
        width: 100%;
        background-color: white;
        color: black;
        user-select: none;
    }
    tr {
        height: 48px;
    }
    table, tr {
        border-style: solid;
        border-collapse: collapse;
    }
    div.options {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        
    }
    div.selecteurs {
        display: flex;
        flex-direction: column;
    }
    div.boutons {
        display: flex;
        column-gap: 10px;
    }
    @media print {
        .tout {
            display: block;
        }
        .finpage {
            break-before: page;
            clear: both;
        }
        div.options {
            display: none;
        }
        tr {
            height: fit-content;
        }
    }
</style>