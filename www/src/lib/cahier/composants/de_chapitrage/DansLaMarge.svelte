<script lang="ts">
    interface Props {
        apres_un_titre?: boolean,
        children?: any,
    }

    let { apres_un_titre = false, children }: Props = $props();
</script>

<svelte:options runes={true} />

<div id="marge" class="{apres_un_titre ? "apres_un_titre" : "pas_de_titre"}">
    {@render children()}
</div>

<style>
    #marge {
        position: absolute;
        left: 0%;
        width: 20%;
    }

    .pas_de_titre {
        --top: 8.6%;
        top: var(--top);
        height: calc(92.18% - var(--top));
    }

    .apres_un_titre {
        top: 14.1%;
        height: 78.08%;
    }
</style>