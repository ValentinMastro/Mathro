<script lang="ts">
    interface Props {
        apres_un_titre?: boolean,
        children?: any,
    }

    let { apres_un_titre = false, children }: Props = $props();
</script>

<svelte:options runes={true} />

<div id="contenu" class="{apres_un_titre ? "apres_un_titre" : "pas_de_titre"}">
    {@render children()}
</div>

<style>
    #contenu {
        position: absolute;
        left: 20%;
        width: 80%;
    }

    .pas_de_titre {
        top: 9.38%;
        height: 82.8%;
    }

    .apres_un_titre {
        top: 14.1%;
        height: 78.08%;
    }
</style>