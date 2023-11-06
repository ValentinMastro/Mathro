<script lang="ts">
	import { onMount } from "svelte";
    import Katex from "svelte-katex";
    import QuestionEntrainement from "./QuestionEntrainement.svelte";

    export let niveau: number;
    export let nombre_de_questions: number;

    interface Entrainement {
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
    }

    let id_max: number = (niveau == 4) ? 2999 : 7999;

    async function generer_entrainement_depuis_executable() {
        const REQUETE_API = await fetch('/api/entrainement', {
            method: 'POST',
            body: JSON.stringify({niveau: niveau, nombre_de_questions: nombre_de_questions, id_max: id_max}),
            headers: {
                'Content-Type': 'application/json',
                'Content-Encoding': 'gzip'
            }
        });
        return await REQUETE_API.json();
    }

    let LISTE_QUESTIONS: Promise<Entrainement> = generer_entrainement_depuis_executable();
    let question_en_cours = 0;

    $: if (question_en_cours < 0) {
        question_en_cours = 0;
    } else if (question_en_cours > 19) {
        question_en_cours = 19;
    }
</script>

{#await LISTE_QUESTIONS}
    <p>Chargement des questions...</p>
{:then LISTE_QUESTIONS}
    <div id="entrainement">
        <div class="changement precedent" on:click={() => question_en_cours--} role="none" >
            <svg viewBox="0 0 100 100">
                <path style="fill: blue" d="M 100 0 L 0 50 L 100 100 Z" />
            </svg>
        </div>
        <div id="liste">
            {#each LISTE_QUESTIONS.questions as question, index_question }
            {#if index_question == question_en_cours}
                <QuestionEntrainement {question} {index_question} {nombre_de_questions} />
            {/if}
            {/each}
        </div>
        <div class="changement suivant" on:click={() => question_en_cours++} role="none" >
            <svg viewBox="0 0 100 100">
                <path style="fill: blue" d="M 0 0 L 100 50 L 0 100 Z" />
            </svg>
        </div>
    </div>
{/await}

<style>
    #entrainement {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    #liste {
        width: 95%;
    }
    .changement {
        width: 2.5%;
    }
</style>