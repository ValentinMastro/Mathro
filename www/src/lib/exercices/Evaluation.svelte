<script lang="ts">
	import { onMount } from "svelte";
	import Katex from "svelte-katex";
    import Switch from "$lib/Switch.svelte";
	import BoutonRafraichir from "$lib/BoutonRafraichir.svelte";
	import Question from "./Question.svelte";
	import Explication from "./Explication.svelte";

    export let niveau: number;
    export let numero_evaluation: number;
    let afficher_reponses: boolean = false;
    let graine_selectionnee: number = 0;
    
    const TABLEAU: any[][][] = Array(256).fill(0).map(
        () => Array(20).fill(0).map(
            () => []
        )
    );
    const KATEX_ENONCE: boolean[] = Array(20).fill(true);
    const KATEX_REPONSES: boolean[] = Array(20).fill(true)

    interface EvaluationInterface {
        questions_graine: {
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

    async function get_evaluation(niveau: number = 6, id_evaluation: number = 1, graine: number = 0) {
        const REQUETE_API = await fetch('/api', {
            method: 'POST',
            body: JSON.stringify({niveau, id_evaluation}),
            headers: {
                'content-type': 'application/json'
            }
        });
        let evaluation: EvaluationInterface = await REQUETE_API.json();
        evaluation.questions_graine.forEach((liste_questions, graine: number) => {
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

<div class="boutons">
    <BoutonRafraichir clique={changer_graine}/>
    <Switch bind:afficher_reponses />
</div>


<!-- 
    La variable TABLEAU contient les données faisant référence 
    à toutes les évaluations (entre la n°0 et la n°255).
-->
<div class="tout">
{#each TABLEAU as evaluation, graine_index}
<!-- Seule une seule évaluation (identifiée par sa graine) est affichée -->
{#if graine_selectionnee == graine_index}
    <table>
        <tr>
            <th>#{graine_index}</th>
            <th>Question</th>
            <th>A</th>
            <th>B</th>
            <th>C</th>
            <th>D</th>
            <th>E</th>
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
                    />
            {#if afficher_reponses}
                <Explication 
                    explication={cellules_question[6]}
                />
            {/if}
        {/each}
    </table>
{/if}
{/each}
</div>

<style>
    .tout {
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 100px;
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
    div.boutons {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: 10px;
        column-gap: 10px;
    }
</style>