<!-- 
    Sélecteur de catégorie : 
        - Lorsqu'on clique sur lui, on affiche ou on cache les chapitres de cette catégorie.
        - La couleur de fond du sélecteur est la couleur de la catégorie si elle est visible, sinon grise.
-->
<script lang="ts">
    import { taille_chapitre } from "$lib/cahier/store";
    import { type Categories, couleur_de_la_categorie, categories_visibles } from "$lib/cahier/contenu/sommaires";

    let { categorie }: { categorie: Categories } = $props();
</script>

<div style="font-size: {$taille_chapitre*0.8}px;">
    <span class="categorie" style="background-color: {categories_visibles.includes(categorie) ? couleur_de_la_categorie(categorie) : "gray"};" >
        {categorie}
    </span>
</div>

<style>
    .categorie {
        font-weight: bold;
        color: white;
        padding-left: 0.5em;
        padding-right: 0.5em;
        border-radius: 0.5em;
        user-select: none;
    }
</style>