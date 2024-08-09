<script lang="ts">
    interface Props {
        bullet?: string,
        bullet_color?: string,
        lignes?: number,
        children?: any,
    }
    let { bullet = "&bullet;", bullet_color = undefined, lignes = 1, children }: Props = $props();
    import { hauteur_ligne_cahier, taille_texte } from "$lib/cahier/store";
</script>

<div class="item" style="height: {$hauteur_ligne_cahier * lignes}px;">
    {#if bullet_color}
        <span style="font-size: {$taille_texte}px; color: {bullet_color}">{@html bullet}</span>
    {:else}
        <span style="font-size: {$taille_texte}px;">{@html bullet}</span> 
    {/if}
    <span style="font-size: {$taille_texte}px;">{@render children()}</span>
</div>

<style>
    .item {
        margin-left: 1.5em;
        width: 95%;
    }
</style>