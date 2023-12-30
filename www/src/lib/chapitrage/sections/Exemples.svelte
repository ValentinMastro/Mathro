<script lang="ts">
    import Paragraphe from "./Paragraphe.svelte";
    export let singulier: boolean = false;
</script>

<Paragraphe couleur="blue" nom="{singulier ? "Exemple" : "Exemples"}">
    <slot />
</Paragraphe>`;