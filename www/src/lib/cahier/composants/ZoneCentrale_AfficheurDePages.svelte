<script lang="ts">
    import { numero_de_la_page, nombre_de_pages, niveau, nombre_de_pages_a_afficher } from "../store";
    import PageDeCahier from "./PageDeCahier.svelte";

    async function recuperer_pages() {
        let pages = [];
        for (let i = 0; i <= nombre_de_pages($niveau); i++) {
            pages.push(await import(`$lib/cahier/contenu/${$niveau}eme/Page${i.toString().padStart(3, "0")}.svelte`));
        }
        return pages;
    }
</script>

<div id="zone">
    {#await recuperer_pages() }
        <p>Chargement...</p>
    {:then pages}
        <PageDeCahier numero_de_page={$numero_de_la_page} contenu={pages[$numero_de_la_page].default} />
        {#if $nombre_de_pages_a_afficher == 2}
            <PageDeCahier numero_de_page={$numero_de_la_page + 1} contenu={pages[$numero_de_la_page + 1].default} />
        {/if}
    {/await}
</div>

<style>
    #zone {
        width: 100vw;
        height: 100vh;
        background-color: blue;
        position: absolute;
        top: 0;
        left: 0;

        display: flex;
        justify-content: space-evenly;
    }
</style>