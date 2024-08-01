<script lang="ts">
    import { numero_de_la_page, nombre_de_pages, niveau, plein_ecran, largeur_plein_ecran } from "../store";
    import PageDeCahier from "./PageDeCahier.svelte";
    import type { Component } from "svelte";

    async function recuperer_pages() {
        let pages = [];
        for (let i = 0; i <= nombre_de_pages($niveau); i++) {
            let page: Component = await import(`$lib/cahier/contenu/${$niveau}eme/Page${i.toString().padStart(3, "0")}.svelte`);
            pages.push(page);
        }
        return pages;
    }
</script>

<div id="zone">
    {#await recuperer_pages() }
        <p>Chargement...</p>
    {:then pages}
        {#if $plein_ecran}
            <input id="largeur" type="range" min="0" max="100" bind:value={$largeur_plein_ecran} />
            <div id="scroll">
                {#each pages as page, i}
                    {#if i != 0 && i != nombre_de_pages($niveau)}
                        <PageDeCahier numero_de_page={i} contenu={page.default} />
                    {/if}
                {/each}
            </div>
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
    #scroll {
        display: flex;
        flex-direction: column;
        gap: 1vh;
        overflow-y: scroll;
        width: 100%;
        height: fit-content;
        align-items: center;
    }
    #largeur {
        position: fixed;
        bottom: 1vh;
        right: 1vw;
        width: 5vw;
        z-index: 2;
    }
</style>