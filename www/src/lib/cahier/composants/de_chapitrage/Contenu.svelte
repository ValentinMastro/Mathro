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
        width: 79%;
    }

    .pas_de_titre {
        --top: 8.6%;
        top: var(--top);
        height: calc(92.18% - var(--top));
        background-color: none;
    }

    .apres_un_titre {
        top: 14.1%;
        height: 78.08%;
    }
</style>