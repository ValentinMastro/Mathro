<script lang="ts">
    export let enonce: string;
    export let reponse: any;
    let reponses: boolean[] = [];
    let nombre_questions_repondues = 0;
    export let genererQuestion: (enonce: string, reponse: any) => void;
    export let verifierReponse: (valeur: string) => boolean;
    
    function gererToucheAppuyee(event: KeyboardEvent) : void {
        let input = event.target as HTMLInputElement;
        let valeur = input.value;

        if (event.key === "Enter") {
            input.value = "";
            reponses.push(verifierReponse(valeur));
            nombre_questions_repondues++;
            genererQuestion(enonce, reponse);
        }
    }

    genererQuestion(enonce, reponse);
</script>

<div id="racine" style="width: 40vw; height: 20vw;">
    <div id="enonce">{enonce}</div>
    <div id="input">
        <input  type="number" 
                style="width: 100%; height: 90%; font-size: 2em; text-align: center;"
                on:keypress={gererToucheAppuyee}
        />
    </div>
    <div id="resultat">
        {#each Array(20) as _, index}
            {#if index < nombre_questions_repondues}
            <div 
                class='{reponses[index] ? "bonne_reponse" : "mauvaise_reponse"}'
                style="height: 100%; aspect-ratio: 1; border-radius: 50%;" />
            {/if}
        {/each}
    </div>
</div>

<style>
    #racine {
        border: 1px solid black;
        padding: 5px;
        display: flex; 
        flex-direction: column;
        justify-content: flex-start;
    }
    #enonce {
        height: 45%;
        color: black;
        font-size: 4vw;
        font-family: Katex_Main;
        text-align: center;
        line-height: 2em;
    }
    #input {
        height: 40%;
        font-family: Katex_Main;
        width: 90%;
        margin: auto auto;
    }
    #resultat {
        height: 5%;
        display: flex;
        flex-direction: row;
        column-gap: 1vw;
    }
    .bonne_reponse {
        background-color: green;
    }
    .mauvaise_reponse {
        background-color: red;
    }
</style>