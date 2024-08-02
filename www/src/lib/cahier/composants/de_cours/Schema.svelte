<script lang="ts">
    interface Props {
        lignes?: number,
        aspectRatioSVG?: number,
        svg?: any,
        html?: any,
    }
    let { lignes = 1, aspectRatioSVG = 1/1, svg, html }: Props = $props();
    import { hauteur_ligne_cahier } from "$lib/cahier/store";
</script>

<div 
    class="schema" 
    style="height: {$hauteur_ligne_cahier * lignes}px;"
>
    {#if svg}
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 {1000*aspectRatioSVG} 1000"
            height={$hauteur_ligne_cahier * lignes}
            width={$hauteur_ligne_cahier * lignes * aspectRatioSVG}
        >
            {@render svg()}
        </svg>
    {/if}
    {#if html}
        <div 
            class="contenu_html"
            style="height: {$hauteur_ligne_cahier * lignes}px; width: calc(100% - {$hauteur_ligne_cahier * lignes * aspectRatioSVG}px);"
        >
            {@render html()}
        </div>
    {/if}
</div>

<style>
    .schema {
        display: flex;
        align-items: center;
        width: 100%;
    }
</style>