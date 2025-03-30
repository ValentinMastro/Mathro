<script lang="ts">
    import type { Component } from "svelte";

    import { numero_de_la_page, niveau, plein_ecran, largeur_plein_ecran } from "$lib/cahier/store";
    import PageDeCahier from "./PageDeCahier.svelte";
    import Scroll from "./Scroll.svelte";

    let importation_pages: Record<string, { default: Component }>;

    switch ($niveau) {
        case 4: importation_pages = import.meta.glob("$lib/cahier/{composants/{Page0,PageDeGarde,sommaire/Sommaire},contenu/4eme/*/*}.svelte", { eager: true}); break;
        case 5: importation_pages = import.meta.glob("$lib/cahier/{composants/{Page0,PageDeGarde,sommaire/Sommaire},contenu/5eme/*/*}.svelte", { eager: true}); break;
        case 6: importation_pages = import.meta.glob("$lib/cahier/{composants/{Page0,PageDeGarde,sommaire/Sommaire},contenu/6eme/*/*}.svelte", { eager: true}); break;
        default: throw new Error("Niveau inconnu");
    }

    let pages: Component[] = Object.entries(importation_pages).map(([_, page]) => page.default);
    let PageGauche: Component = $derived(pages[$numero_de_la_page]);
    let PageDroite: Component = $derived(pages[$numero_de_la_page + 1]);
</script>

<div id="zone">
    {#if $plein_ecran}
        <input id="largeur" type="range" min="0" max="100" bind:value={$largeur_plein_ecran} />
        <Scroll pages={pages} />
    {:else}
        <PageDeCahier numero_de_page={$numero_de_la_page}>
            <PageGauche />
        </PageDeCahier>
        <PageDeCahier numero_de_page={$numero_de_la_page + 1}>
            <PageDroite />
        </PageDeCahier>
    {/if}
</div>

<style>
    #zone {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;

        display: flex;
        justify-content: space-evenly;
    }
    #largeur {
        position: fixed;
        bottom: 1vh;
        right: 1vw;
        width: 5vw;
        z-index: 2;
    }
    @media print {
        #largeur {
            display: none;
        }
    }
</style>