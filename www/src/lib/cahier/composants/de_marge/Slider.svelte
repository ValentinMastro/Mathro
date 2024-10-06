<script lang="ts">
    interface Props {
        valeur: number,
        label?: string,
        min: number,
        max: number,
        pas?: number,
    }

    import { hauteur_ligne_cahier } from "$lib/cahier/store";

    let { valeur = $bindable(), label = "", min, max, pas = 1 }: Props = $props();
</script>

<div style="height: {$hauteur_ligne_cahier}px;">
    {#if label}
        <label for="slider">{label}</label>
    {/if}
    <input id="slider" type="range" bind:value={valeur} {min} {max} step={pas} />
</div>


<style>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    label {
        margin-left: 3%;
        margin-right: 3%;
    }
    input {
        width: 95%;
    }
</style>