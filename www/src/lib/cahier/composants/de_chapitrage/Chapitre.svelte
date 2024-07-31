<script lang="ts">
    interface Props {
        titre: string,
    }

    let { titre }: Props = $props();

    import { sommaire } from "$lib/cahier/contenu/sommaires";
    import { niveau, taille_chapitre, separateur_chapitre } from "$lib/cahier/store";

    let numero_chapitre = sommaire($niveau).findIndex((chapitre) => chapitre.titre == titre) + 1;
</script>

<svelte:options runes={true} />

<div class="chapitre" style="font-size: {$taille_chapitre}px; line-height: {$separateur_chapitre}px;">
    <div id="numero">Chapitre {numero_chapitre}</div>
    <div id="titre">{titre}</div>
</div>

<style>
    .chapitre {
        color: rgb(225, 0, 0);
    }
    #numero {        
        position: absolute;
        top: 9.15%;
        left: 2%;
    }
    #titre {
        position: absolute;
        top: 9.15%;
        left: 22%;
        text-wrap: wrap;
    }
</style>