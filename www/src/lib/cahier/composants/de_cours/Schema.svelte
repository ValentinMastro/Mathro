<script lang="ts">
    interface Props {
        lignes?: number,
        aspectRatioSVG?: number,
        svg?: any,
        html?: any,
        position_html?: 'gauche' | 'droite',
    }
    let { lignes = 1, aspectRatioSVG = 1/1, svg, html, position_html = 'droite' }: Props = $props();
    import { hauteur_ligne_cahier } from "$lib/cahier/store";
</script>

{#snippet afficher_svg()}
    {#if svg}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {1000*aspectRatioSVG} 1000">
            {@render svg()}
        </svg>
    {/if}
{/snippet}
    
{#snippet afficher_html()}
    {#if html}
        <div id="html">
            {@render html()}
        </div>
    {/if}
{/snippet}

<div class="schema" style="--hauteur: {$hauteur_ligne_cahier}px; --lignes: {lignes}; --aspectRatioSVG: {aspectRatioSVG}">
    {#if position_html === 'gauche'}
        {@render afficher_html()}
        {@render afficher_svg()}
    {:else}
        {@render afficher_svg()}
        {@render afficher_html()}
    {/if}
</div>

<style>
    .schema {
        display: flex;
        align-items: center;
        width: calc(100% * 80/79);
        height: calc(var(--hauteur) * var(--lignes));

        --largeur-svg: calc(var(--hauteur) * var(--lignes) * var(--aspectRatioSVG));
        --largeur-html: calc(100% - var(--largeur-svg));
    }
    svg {
        height: 100%;
        width: var(--largeur-svg);
    }
    #html {
        height: 100%;
        width: var(--largeur-html);
    }
</style>