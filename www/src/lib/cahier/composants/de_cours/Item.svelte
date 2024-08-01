<script lang="ts">
    interface Props {
        lignes?: number,
        children?: any,
    }
    let { lignes = 1, children }: Props = $props();
    import { hauteur_ligne_cahier, taille_texte } from "$lib/cahier/store";
</script>

<div class="item" style="height: {$hauteur_ligne_cahier * lignes}px;">
    <span style="font-size: {$taille_texte}px;">&bullet;</span> 
    <span style="font-size: {$taille_texte}px;">{@render children()}</span>
</div>

<style>
    .item {
        margin-left: 1.5em;
        width: 95%;
    }
</style>