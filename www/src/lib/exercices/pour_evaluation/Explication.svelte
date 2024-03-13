<script lang="ts">
    import { math, display } from "mathlifier";

    export let explication: string;
    export let format_explication: "Texte" | "HTML" | "LatexInline" | "LatexDisplay";
</script>

<tr class="explication">
    <td class="question"></td>
    <td class="explication" colspan="6">
        {#if format_explication === "Texte"}
            <div class="texte">{explication}</div>
        {/if}
        {#if format_explication === "HTML"}
            {@html explication}
        {/if}
        {#if format_explication === "LatexInline"}
            {@html math(explication)}
        {/if}
        {#if format_explication === "LatexDisplay"}
            {@html display(explication)}
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