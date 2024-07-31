<script lang="ts">
    import { hauteur_ligne_cahier } from "$lib/cahier/store";
</script>

<svelte:options runes={true} />

<div class="ligne-vide" style="height: {$hauteur_ligne_cahier}px; width: 100%;"></div>