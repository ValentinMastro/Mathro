<script lang="ts">
    import { type ParagrapheProps } from "./*";
    import { hauteur_ligne_cahier } from "$lib/cahier/store";
    let { addStyle = "", lignes = 1, children }: ParagrapheProps = $props();
</script>

<table style='height: {$hauteur_ligne_cahier * lignes}px;  {addStyle}'>
    {@render children()}
</table>

<style>
    table {
        width: 100%;
        border-collapse: collapse;
        text-align: center;
    }
    table {
        border: 1px solid black;
    }
</style>