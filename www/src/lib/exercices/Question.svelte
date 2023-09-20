<script lang="ts">
    export let enonce: string;
    export let question: any[];
    export let numero_question: number;
    export let numero_reponse: number;
    export let afficher_reponses: boolean;
    export let katex_enonce: boolean;
    export let katex_reponses: boolean;

    import Katex from "svelte-katex";
</script>

<tr>
    <!-- Affichage du numéro de la question -->
    <td class="numero">Q{numero_question+1}</td>
    <!-- Affichage de l'énoncé -->
    <td class="enonce">
        {#if katex_enonce}
            <Katex>{enonce}</Katex>
        {:else}
            {enonce}
        {/if}
    </td>
    {#each question as cellule, numero_cellule}
        {#if (numero_cellule == numero_reponse)}
            <td class="reponse {afficher_reponses ? "bonne" : ""}">
                {#if katex_reponses}
                    <Katex>{cellule}</Katex>
                {:else}
                    {cellule}
                {/if}
            </td>
        {:else}
            <td class="reponse {afficher_reponses ? "mauvaise" : ""}">
                {#if katex_reponses}
                    <Katex>{cellule}</Katex>
                {:else}
                    {cellule}
                {/if}
            </td>
        {/if}
    {/each}
</tr>


<style>
    .numero {
        background-color: cyan;
        border-style: double;
    }
    .bonne {
        background-color: lightgreen;
    }
    tr {
        height: 48px;
        border-style: solid;
    }
    td {
        text-align: center;
        border-style: solid;
        justify-content: center;
    }
</style>