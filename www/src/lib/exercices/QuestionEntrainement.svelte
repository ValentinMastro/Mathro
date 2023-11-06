<script lang="ts">
    import Katex from "svelte-katex";

    interface InterfaceQuestion {
        type: "QCM",
        enonce: string,
        reponse: {
            bonne: string,
            mauvaises: string[]
        },
        katex_enonce: boolean,
        katex_reponses: boolean,
        explication: string
    };
    export let question: InterfaceQuestion;
    export let index_question: number;
    export let nombre_de_questions: number;
    
    function melanger_reponses(reponse: {bonne: string, mauvaises: string[]}) {
        var reponses_melangees: string[] = [];
        reponses_melangees.push(reponse.bonne);
        reponse.mauvaises.forEach((mauvaise_reponse) => {
            reponses_melangees.push(mauvaise_reponse);
        });
        reponses_melangees.sort(() => Math.random() - 0.5);
        return reponses_melangees;
    }
    
    let reponses: string[] = melanger_reponses(question.reponse);
    let index_bonne_reponse: number = reponses.indexOf(question.reponse.bonne);
    let reponse_selectionnee: number|undefined = undefined;
</script>

<div class="question">
    <div class="enonce">
        <div id="numero_question">
            <u>Question {index_question+1}/{nombre_de_questions}</u>
        </div>
        <div id="contenu_enonce">
            {#if question.katex_enonce}
                <Katex>{question.enonce}</Katex>
            {:else}
                <p>{@html question.enonce}</p>
            {/if}
        </div>
    </div>
    <div class="separateur"></div>
    <div class="zone_droite">
        <div id="liste_reponse">
            {#each reponses as reponse, index_reponse}
                <div class="reponse">
                    <input on:change={() => reponse_selectionnee = index_reponse}
                        type="radio" id="reponse_{index_reponse}" name="reponse" />
                    <label for="reponse_{index_reponse}">
                        {#if question.katex_reponses}
                            <p><Katex>{reponse}</Katex></p>
                        {:else}
                            <p>{@html reponse}</p>
                        {/if}
                    </label>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .question {
        display: flex;
        flex-direction: row;
        height: 90vh;
        width: 100%;
        background-color: red;
    }
    .separateur {
        width: 0.5%;
        background-color: white;
    }
    .enonce {
        height: 100%;
        width: 50%;
    }
    #numero_question {
        font-size: 3vw;
        font-weight: bold;
        font-family: "Katex_Main";
        height: 30%;

        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        background-color: green;
        text-align: center;
    }
    #contenu_enonce {
        height: 70%;
        background-color: blue;
        font-size: 2vw;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .zone_droite {
        height: 100%;
        width: 50%;
        background-color: red;
    }
    #liste_reponse {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .reponse {
        display: flex;
        flex-direction: row;
        align-items: center;
        column-gap: 10px;
    }
    .reponse input {
        width: 25px;
        height: 25px;
    }
    .reponse label {
        font-size: 2vw;
    }
</style>