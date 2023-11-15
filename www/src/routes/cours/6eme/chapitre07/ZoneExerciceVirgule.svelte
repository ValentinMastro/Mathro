<script lang="ts">
    import { Decimal } from "decimal.js";
    Decimal.set({ precision: 5, rounding: 4 })

    let enonce: string = "50 × 100";
    let a, b, reponse: Decimal;
    let multiplication = true;

    let nombre_questions_repondues: number = 0;
    let reponses: boolean[] = [];

    function verifierReponse(valeur: string): boolean {
        return new Decimal(valeur).eq(reponse);
    }

    function genererQuestion() {
        a = Decimal.random().mul(Math.pow(10, Math.floor(Math.random() * 3)));
        b = new Decimal(10).pow(Math.floor(Math.random() * 3));
        multiplication = Math.random() < 0.5;

        enonce = `${a.toString().replace(".",",")} ${multiplication ? "×" : "÷"  } ${b}`;
        reponse = multiplication ? a.mul(b) : a.div(b);
    }

    function gererToucheAppuyee(event: KeyboardEvent) {
        let input = event.target as HTMLInputElement;
        let valeur = input.value;

        if (event.key === "Enter") {
            reponses.push(verifierReponse(valeur));
            nombre_questions_repondues++;
            genererQuestion();
        }
    }

    genererQuestion();
</script>

<div id="racine" style="width: 40%; height: 30vh;">
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
        font-size: 3em;
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