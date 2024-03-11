<script lang="ts">
    import { display } from "mathlifier";

    export let explication: string;
    let baliseKatex: boolean;

    function analyserExplication() {
        // Expression régulière pour rechercher les balises Katex
        const regexKatex = /<Katex>([\s\S]*?)<\/Katex>/g;

        // Recherche si la balise Katex est présente
        baliseKatex = regexKatex.test(explication);

        // Si la balise Katex est présente, la supprimer de la chaîne
        if (baliseKatex) {
            explication = explication.replace(regexKatex, (_, contenu) => {
                return contenu;
            });
        }
        console.log(baliseKatex, explication)
    }

    analyserExplication()
</script>

<tr class="explication">
    <td class="question"></td>
    <td class="explication" colspan="6">
        {#if baliseKatex}
            {@html display(explication)}
        {:else}
            <div class="texte">
                {@html explication}
            </div>
        {/if}
    </td>
</tr>

<style>
    tr.explication {
        width: 100%;
        height: fit-content;
        border-color: white;
        background-color: cyan;
    }
    td.question {
        width: 100px;
    }
    div.texte {
        text-align: center;
        padding-top: 10px;
        padding-bottom: 10px;
    }
</style>