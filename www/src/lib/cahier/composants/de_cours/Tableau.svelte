<script lang="ts">
    import { type ParagrapheProps } from "./*";
    import { hauteur_ligne_cahier, taille_texte } from "$lib/cahier/store";
    let { addStyle = "", lignes = 1, children }: ParagrapheProps = $props();
</script>

<table style='height: {$hauteur_ligne_cahier * lignes}px; font-size: {$taille_texte}px;  {addStyle}'>
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