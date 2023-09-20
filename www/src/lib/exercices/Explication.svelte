<script lang="ts">
    export let explication: string;
    let baliseKatex: boolean;
    import Katex from "svelte-katex";

    function analyserExplication() {
        // Expression régulière pour rechercher les balises Katex
        const regexKatex = /<Katex>([\s\S]*?)<\/Katex>/g;

        // Recherche si la balise Katex est présente
        baliseKatex = regexKatex.test(explication);

        // Si la balise Katex est présente, la supprimer de la chaîne
        if (baliseKatex) {
            explication = explication.replace(regexKatex, (_, contenu) => {
                // Vous pouvez également traiter le contenu ici si nécessaire
                return contenu;
            });
        }
        console.log(baliseKatex, explication)
    }

    analyserExplication()
</script>

<tr class="explication">
    <td class="explication" colspan="7">
        {#if baliseKatex}
            <Katex displayMode>{@html explication}</Katex>
        {:else}
            {@html explication}
        {/if}
    </td>
</tr>

<style>
    tr.explication {
        width: 100%;
        height: fit-content;
        border-color: white;
    }
    td.explication {
        width: 100%;
    }
</style>