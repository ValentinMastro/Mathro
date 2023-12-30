<script lang="ts">
    export let titre: string;
    import Paragraphe from "./Paragraphe.svelte";
</script>

<Paragraphe couleur="red" nom={titre} >
    <slot />
</Paragraphe>