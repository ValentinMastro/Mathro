<script lang="ts">
    interface Props {
        numero: number,
        titre: string,
    }

    let { numero, titre }: Props = $props();
</script>

<svelte:options runes={true} />

<div class="partie">
    {numero} - {titre}
</div>