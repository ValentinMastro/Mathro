<script lang="ts">
    interface Props {
        children?: any,
    }
    let { children }: Props = $props();
    import { hauteur_ligne_cahier, taille_texte } from "$lib/cahier/store";
</script>

<div class="item" style="height: {hauteur_ligne_cahier}px;">
    <span style="font-size: {$taille_texte}px;">&bullet;</span> 
    <span style="font-size: {$taille_texte}px;">{@render children()}</span>
</div>

<style>
    .item {
        margin-left: 1.5em;
        width: 100%;
    }
</style>