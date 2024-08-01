<script lang="ts">
    interface Props {
        lignes?: number,
        children?: any,
    }
    let { lignes = 1, children }: Props = $props();
    import { hauteur_ligne_cahier, taille_texte, separateur_texte } from "$lib/cahier/store";
</script>

<div class="texte" style="height: {$hauteur_ligne_cahier * lignes}px; line-height: {$separateur_texte}px;">
    {@render children()}
</div>

<style>
    .texte {
        width: 100%;
        position: relative;
    }
    span {
        position: absolute;
        bottom: 0;
        margin-bottom: -0.7ex;
    }
</style>