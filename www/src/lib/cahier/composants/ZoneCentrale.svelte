<script lang="ts">
    import type { Component } from "svelte";

    import { numero_de_la_page, nombre_de_pages, niveau, plein_ecran, largeur_plein_ecran } from "$lib/cahier/store";
    import PageDeCahier from "./PageDeCahier.svelte";
    import Scroll from "./Scroll.svelte";

    let pages_chargees: number = $state(0);

    let liste_des_pages = import.meta.glob("$lib/cahier/composants/{PageDeGarde,sommaire/Sommaire}.svelte");

    switch ($niveau) {
        case 4: liste_des_pages = import.meta.glob("$lib/cahier/{composants/{Page0,PageDeGarde,sommaire/Sommaire},contenu/4eme/*/*}.svelte"); break;
        case 5: liste_des_pages = import.meta.glob("$lib/cahier/{composants/{Page0,PageDeGarde,sommaire/Sommaire},contenu/5eme/*/*}.svelte"); break;
        case 6: liste_des_pages = import.meta.glob("$lib/cahier/{composants/{Page0,PageDeGarde,sommaire/Sommaire},contenu/6eme/*/*}.svelte"); break;
        default: throw new Error("Niveau inconnu");
    }

    async function charger_page(path: string) {
        let page: Component = await import(path);
        pages_chargees += 1;
        return page;
    }

    async function charger_pages() {
        return Promise.all(
            Object.entries(liste_des_pages).map(async ([key, _value]: [string, unknown]) => charger_page(key))
        );
    }
</script>

<div id="zone">
    {#await charger_pages() }
        <p>Chargement...</p>
    {:then pages}
        {#if $plein_ecran}
            <input id="largeur" type="range" min="0" max="100" bind:value={$largeur_plein_ecran} />
            <Scroll pages={pages} />
        {:else}
            {@const PageGauche: Component = pages[$numero_de_la_page].default}
            {@const PageDroite: Component = pages[$numero_de_la_page + 1].default}
            <PageDeCahier numero_de_page={$numero_de_la_page}>
                <PageGauche />
            </PageDeCahier>
            <PageDeCahier numero_de_page={$numero_de_la_page + 1}>
                <PageDroite />
            </PageDeCahier>
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