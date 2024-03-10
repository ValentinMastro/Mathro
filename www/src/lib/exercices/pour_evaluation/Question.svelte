<script lang="ts">
    export let enonce: string;
    export let reponses: InterfaceReponses;
    export let numero_question: number;
    export let afficher_reponses: boolean;
    export let afficher_mauvaises_reponses: boolean;
    export let type_enonce: FormatEnonce;
    export let type_reponses: FormatReponses;

    import { math } from 'mathlifier';

    interface InterfaceReponses {
        bonne: string;
        mauvaises: string[];
    }

    interface FormatEnonce {
        type: "Texte" | "Latex",
    }

    interface FormatReponses {
        type: "Texte" | "Latex" | "Nombre" | { "QuantitéAvecUnité": string },
    }

    function formatter_nombre(nombre: string): string {
        return Number(nombre).toLocaleString('fr-FR', { maximumFractionDigits: 20 });
    }

    let index_reponse: number = Math.floor(Math.random() * 5);
    let reponses_melangees: string[] = [...reponses.mauvaises.slice(0, index_reponse), reponses.bonne, ...reponses.mauvaises.slice(index_reponse) ];
</script>

<tr>
    <!-- Affichage du numéro de la question -->
    <td class="numero">Q{numero_question+1}</td>
    <!-- Affichage de l'énoncé -->
    <td class="enonce">
        {#if type_enonce.type == "Texte"}
            {@html enonce}
        {:else if type_enonce.type == "Latex"}
            {@html math(enonce)}
        {/if}
    </td>
    {#each reponses_melangees as reponse, index}
        <td class="reponse {afficher_reponses && index == index_reponse ? "bonne" : ""} {afficher_mauvaises_reponses && index != index_reponse ? "mauvaise" : ""}">
            {#if type_reponses.type == "Texte"}
                {@html reponse}
            {:else if type_reponses.type == "Latex"}
                {@html math(reponse)}
            {:else if type_reponses.type == "Nombre"}
                {@html formatter_nombre(reponse) }
            {:else}
                {@html formatter_nombre(reponse) + " " + type_reponses.type["QuantitéAvecUnité"]}
            {/if}
        </td>
    {/each}
</tr>

<style>
    .numero {
        background-color: cyan;
        border-style: double;
        width: fit-content;
    }
    .bonne {
        background-color: lightgreen;
        width: fit-content;
    }
    .mauvaise {
        display: none;
        width: fit-content;
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