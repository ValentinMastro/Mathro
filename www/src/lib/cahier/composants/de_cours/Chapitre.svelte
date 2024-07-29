<script lang="ts">
    interface Props {
        titre: string,
    }

    let { titre }: Props = $props();

    import { sommaire_6eme } from "$lib/cahier/contenu/sommaires";
    let numero_chapitre = sommaire_6eme.findIndex((chapitre) => chapitre.titre == titre) + 1;
</script>

<svelte:options runes={true} />

<div class="chapitre">
    <div id="numero">Chapitre {numero_chapitre}</div>
    <div id="titre">{titre}</div>
</div>

<style>
    .chapitre {
        color: rgb(225, 0, 0);
        font-size: 2.3vh;
    }
    #numero {        
        position: absolute;
        top: 9.1%;
        left: 2%;
        line-height: 2.7vh;
    }
    #titre {
        position: absolute;
        top: 9.1%;
        left: 22%;
        text-wrap: wrap;
        line-height: 2.7vh;
    }
</style>