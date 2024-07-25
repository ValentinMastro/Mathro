<script lang="ts">
    import { numero_de_la_page, nombre_de_pages, nombre_de_pages_a_afficher, niveau } from "../store";

    async function recuperer_pages() {
        //return [await import(`$lib/cahier/contenu/6eme/Page000.svelte`)]
        let pages = [];
        for (let i = 0; i < nombre_de_pages($niveau); i++) {
            pages.push(await import(`$lib/cahier/contenu/${$niveau}eme/Page${i.toString().padStart(3, "0")}.svelte`));
        }
        return pages;
    }
</script>

<div id="zone">
    {#await recuperer_pages() }
        <p>Chargement...</p>
    {:then pages} 
        {#if $numero_de_la_page == -1}
            <div class="page_simple"></div>
        {/if}
        {#each pages as page,index}
            {#if index == $numero_de_la_page || index == $numero_de_la_page + 1}
                <div class="page_simple">
                    <svelte:component this={page.default} />
                    <span class="numero">Page {index}</span>
                </div>
            {/if}
        {/each}
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
        transition: all 0.3s ease;

        display: flex;
        overflow-x: scroll;
    }
    .page_simple {
        color: black;
        background-color: white;
        width: 50%;
        min-width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;

        position: relative;
    }
    .numero {
        position: absolute;
        bottom: 1%;
        left: 1%;
    }
</style>