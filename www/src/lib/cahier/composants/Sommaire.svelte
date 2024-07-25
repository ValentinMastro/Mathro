<script lang="ts">
    import { sommaire_6eme, couleur_de_la_categorie } from "$lib/cahier/contenu/sommaires";

    let categories_visibles = $state(["Nombres et calculs", 
                            "Espace et géométrie", "Grandeurs et mesures", 
                            "Organisation et gestion de données", "Algorithmique et programmation"]);
    $inspect(categories_visibles);
</script>

<h2>Sommaire</h2>

{#snippet ma_categorie(categorie)}
    <span class="categorie" style="background-color: {categories_visibles.includes(categorie) ? couleur_de_la_categorie(categorie) : "gray"};" >{categorie}</span>
{/snippet}

{#snippet selecteur_de_categorie(categorie)}
    <div
        role="none"
        onclick={() => {
            if (categories_visibles.includes(categorie)) {
                categories_visibles = categories_visibles.filter((c) => c != categorie);
            } else {
                categories_visibles = [...categories_visibles, categorie];
            }
        }}
    >
        {@render ma_categorie(categorie)}
    </div>
{/snippet}

<ol>
    {#each sommaire_6eme as chapitre}
        <li style="visibility: {chapitre.categories.some((c) => categories_visibles.includes(c)) ? "visible" : "hidden"}">
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
    {@render selecteur_de_categorie("Nombres et calculs")}
    {@render selecteur_de_categorie("Espace et géométrie")}
    {@render selecteur_de_categorie("Grandeurs et mesures")}
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

    span.categorie {
        user-select: none;
        color: white;
        font-weight: bold;
        font-size: 0.85em;

        padding-left: 0.6em;
        padding-right: 0.6em;
        border-radius: 8px;
    }

    .categories {
        margin-left: auto;
    }

    h2 {
        text-align: center;
    }

    .liste_categories {
        display: flex;
        justify-content: space-evenly;
        margin-top: auto;
        margin-bottom: auto;
    }
</style>