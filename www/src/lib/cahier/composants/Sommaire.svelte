<script lang="ts">
    import { sommaire, couleur_de_la_categorie } from "$lib/cahier/contenu/sommaires";
    import type { Categories } from "$lib/cahier/contenu/sommaires";
    import { numero_de_la_page, niveau } from "../store";
    import { taille_sommaire, taille_chapitre } from "../store";

    let categories_visibles = $state(["Nombres et calculs", 
                            "Espace et géométrie", "Grandeurs et mesures", 
                            "Organisation et gestion de données", "Algorithmique et programmation"]);
</script>

<h2 style="font-size: {$taille_sommaire}px">Sommaire</h2>

{#snippet ma_categorie(categorie: Categories)}
    <span style="font-size: {$taille_chapitre*0.8}px; color: {categories_visibles.includes(categorie) ? couleur_de_la_categorie(categorie) : "gray"}; user-select: none;" >
        &#x25CF;
    </span>
{/snippet}

{#snippet selecteur_de_categorie(categorie: Categories)}
    <div
        style="font-size: {$taille_chapitre*0.8}px;"
        role="none"
        onclick={() => {
            if (categories_visibles.includes(categorie)) {
                categories_visibles = categories_visibles.filter((c) => c != categorie);
            } else {
                categories_visibles = [...categories_visibles, categorie];
            }
        }}
    >
        <span class="categorie" style="background-color: {categories_visibles.includes(categorie) ? couleur_de_la_categorie(categorie) : "gray"};" >
            {categorie}
        </span>
    </div>
{/snippet}

<ol style="font-size: {$taille_chapitre*0.67}px;">
    {#each sommaire($niveau) as chapitre}
        <li style="visibility: {chapitre.categories.some((c) => categories_visibles.includes(c)) ? "visible" : "hidden"}"
            role="none"
            onclick={() => {
                if (chapitre.premiere_page != undefined) {
                    numero_de_la_page.set(chapitre.premiere_page - (chapitre.premiere_page % 2))
                }
            }}
        >
            <span style="width: 1ex"></span>
            <span>{chapitre.titre}</span>
            <div class="categories">
                {#if chapitre.categories.includes("Nombres et calculs")}
                    {@render ma_categorie("Nombres et calculs")}
                {/if}
                {#if chapitre.categories.includes("Espace et géométrie")}
                    {@render ma_categorie("Espace et géométrie")}
                {/if}
                {#if chapitre.categories.includes("Grandeurs et mesures")}
                    {@render ma_categorie("Grandeurs et mesures")}
                {/if}
                {#if chapitre.categories.includes("Organisation et gestion de données")}
                    {@render ma_categorie("Organisation et gestion de données")}
                {/if}
                {#if chapitre.categories.includes("Algorithmique et programmation")}
                    {@render ma_categorie("Algorithmique et programmation")}
                {/if}
            </div>
        </li>
    {/each}
</ol>

<div class="liste_categories">
    {#each ["Nombres et calculs", "Espace et géométrie", "Grandeurs et mesures", "Organisation et gestion de données", "Algorithmique et programmation"] as categorie}
        {#if sommaire($niveau).some((chapitre) => chapitre.categories.includes(categorie as Categories))}
            {@render selecteur_de_categorie(categorie as Categories)}
        {/if}
    {/each}
</div>

<style>
    ol {
        list-style-type: none;
        counter-reset: chapter-counter;
    }

    li::before {
        content: "Chapitre " counter(chapter-counter) " - ";
        counter-increment: chapter-counter;
    }

    li {
        display: flex;
        align-items: flex-start;
    }

    .categories {
        margin-left: auto;
    }

    h2 {
        text-align: center;
    }

    .categorie {
        font-weight: bold;
        color: white;
        padding-left: 0.5em;
        padding-right: 0.5em;
        border-radius: 0.5em;
        user-select: none;
    }

    .liste_categories {
        display: flex;
        justify-content: space-evenly;
        margin-top: auto;
        margin-bottom: auto;
        flex-wrap: wrap;
        row-gap: 0.5em;
    }
</style>