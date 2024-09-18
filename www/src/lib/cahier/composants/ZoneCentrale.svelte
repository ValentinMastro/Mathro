<script lang="ts">
    import type { Component } from "svelte";

    import { numero_de_la_page, nombre_de_pages, niveau, plein_ecran, largeur_plein_ecran } from "$lib/cahier/store";
    import PageDeCahier from "./PageDeCahier.svelte";
    import Scroll from "./Scroll.svelte";

    let pages_chargees: number = $state(0);

    async function charger_page(numero_de_page: number) {
        let page: Component = await import(`$lib/cahier/contenu/${$niveau}eme/Page${numero_de_page.toString().padStart(3, "0")}.svelte`);
        pages_chargees += 1;
        return page;
    }

    async function charger_pages() {
        var range = Array(nombre_de_pages($niveau)).keys();
        return Promise.all(
            [...range].map(
                async (i) => {
                    return await charger_page(i);
                }
            )
        )
    }
</script>

<div id="zone">
    {#await charger_pages() }
        <p>Chargement... {pages_chargees}/{nombre_de_pages($niveau)}</p>
    {:then pages}
        {#if $plein_ecran}
            <input id="largeur" type="range" min="0" max="100" bind:value={$largeur_plein_ecran} />
            <Scroll pages={pages} />
        {:else}
            <PageDeCahier numero_de_page={$numero_de_la_page} contenu={pages[$numero_de_la_page].default} />
            <PageDeCahier numero_de_page={$numero_de_la_page + 1} contenu={pages[$numero_de_la_page + 1].default} />
        {/if}
    {/await}
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