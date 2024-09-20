<script lang="ts">
    import {
        sommaire,
        categories_visibles,
        type Categories,
    } from "$lib/cahier/contenu/sommaires";

    import {
        niveau,
        taille_sommaire,
        taille_chapitre,
        numero_de_la_page,
    } from "$lib/cahier/store";

    import Pastilles from "./Pastilles.svelte";
	import SelecteurCategories from "./SelecteurCategories.svelte";
</script>

<h2 style="font-size: {$taille_sommaire}px">
    Sommaire
</h2>

<ol class="liste_chapitres" 
    style="font-size: {$taille_chapitre*0.72}px;">
    {#each sommaire($niveau) as chapitre}
        <li class="chapitre" style="visibility: {chapitre.categories.some((c) => categories_visibles.includes(c)) ? "visible" : "hidden"}"
            role="none"
            onclick={() => {
                if (chapitre.premiere_page != undefined) {
                    numero_de_la_page.set(chapitre.premiere_page - (chapitre.premiere_page % 2))
                }
            }}
        >
            <span style="padding-left: 1ex;">{chapitre.titre}</span>
            <div class="categories">
                <Pastilles {chapitre} />
            </div>
        </li>
        <div class="attendus">
            {#if chapitre.attendus != undefined}
                <ul>
                    {#each chapitre.attendus as attendu}
                        <li>{attendu}</li>
                    {/each}
                </ul>
            {/if}
        </div>
    {/each}
</ol>

<div class="liste_categories">
    {#each ["Nombres et calculs", "Espace et géométrie", "Grandeurs et mesures", "Organisation et gestion de données", "Algorithmique et programmation"].map((item) => item as Categories) as categorie}
        {#if sommaire($niveau).some((chapitre) => chapitre.categories.includes(categorie))}
            <SelecteurCategories {categorie} />
        {/if}
    {/each}
</div>

<style>
    h2 {
        text-align: center;
    }

    .liste_chapitres {
        list-style-type: none;
        counter-reset: chapter-counter;

        .chapitre {
            display: flex;
            align-items: flex-start;
            user-select: none;
            &:hover {
                cursor: pointer;
                background-color: aqua;
            }
            &::before {
                content: "Chapitre " counter(chapter-counter) " - ";
                counter-increment: chapter-counter;
            }

            .categories {
                margin-left: auto;
            }
        }

        .attendus {
            display: none;
            font-size: 0.7em;
        }
    }

    .chapitre:hover + .attendus {
        display: block;
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