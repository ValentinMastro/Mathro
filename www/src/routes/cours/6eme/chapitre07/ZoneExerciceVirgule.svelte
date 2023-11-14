<script lang="ts">
    let enonce: string = "50 × 100";
    
    let a, b, precision_a, precision_b: number;

    let nombre_questions_repondues: number = 0;
    let reponses: boolean[] = [];

    function verifierReponse(valeur: string): boolean {
        console.log(valeur);
        return false;
    }

    function genererQuestion() {
        a = Math.floor(Math.random() * 900 + 1000);
        precision_a = Math.floor(Math.random() * 5); // on décale la virgule de 0 à 4 chiffres

        b = 1000
        precision_b = Math.floor(Math.random() * 7); // on décale la virgule de 0 à 4 chiffres

        var a_str = (a * Math.pow(10, -precision_a)).toLocaleString();
        var b_str;

        if (precision_b <= 3) {
            b_str = (b * Math.pow(10, -precision_b)).toLocaleString();
            enonce = `${a_str} × ${b_str}`;
        } else {
            b_str = (b * Math.pow(10, precision_b - 6)).toLocaleString();
            enonce = `${a_str} ÷ ${b_str}`;
        }
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