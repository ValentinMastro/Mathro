<script lang="ts">
    export let niveau: string;
    export let nombre_evaluations_a_afficher: number;
    
    function afficher(index: number) {
        return ("00" + index).slice(-2)
    }
</script>

<div id="liste_evaluation">
    {#each Array(nombre_evaluations_a_afficher) as _, index}
        <a href="/evaluations/{niveau}/{afficher(index+1)}">
            <div class="evaluation">
                Évaluation {afficher(index+1)}
            </div>
        </a>
    {/each}
</div>

<style>
    #liste_evaluation {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 25px;
    }
    .evaluation {
        background-color: white;
        color: black;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
        padding-bottom: 10px;

        font: normal 3ex "Katex_Main";
        border-radius: 5px;
    }
    a {
        text-decoration: none;
    }
</style>