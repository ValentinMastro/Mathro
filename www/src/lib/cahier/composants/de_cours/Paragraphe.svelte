<script lang="ts">
    import { Texte, type ParagrapheProps } from "./*";
    
    import { taille_texte, separateur_texte, hauteur_ligne_cahier } from "$lib/cahier/store";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";
    
    let { 
        addStyle = "", 
        nom_du_paragraphe = "Paragraphe",
        couleur = "noir",
        lignes = 1,
        lignes_vides = 1, 
        children 
    }: ParagrapheProps = $props();
</script>

{#if children == undefined}
    <Texte>
        <span id="no_child" style="color: var(--{couleur})">
            {nom_du_paragraphe} :
        </span>
    </Texte>
{:else}
    <div style="color: var(--{couleur}); font-size: {$taille_texte}px; line-height: {$separateur_texte}px;">
        <div class="titre_de_section" style="height: {$hauteur_ligne_cahier}px;">
            <span>
                {nom_du_paragraphe} :
            </span>
        </div>
        <div class="contenu_de_section" style="height: {$hauteur_ligne_cahier * lignes}px">
            <div style="{addStyle}">
                {@render children()}
            </div>
        </div>
    </div>
    <LigneVide lignes={lignes_vides} />
{/if}

<style>
    span#no_child {
        text-decoration: underline;
    }
    .titre_de_section {
        width: 100%;
        position: relative;
    }
    .titre_de_section > span {
        position: absolute;
        bottom: 0;
        margin-bottom: -0.13em;
        text-decoration: underline;
    }
    .contenu_de_section {
        width: 100%;
        display: flex;
    }
    .contenu_de_section > div {
        width: 100%;
        align-self: flex-end;
        margin-bottom: -0.7ex;
    }
</style>