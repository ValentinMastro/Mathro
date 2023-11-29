<script lang="ts">
    import ListeEvaluation from "$lib/exercices/ListeEvaluation.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<ListeEvaluation niveau={data.niveau} nombre_evaluations_a_afficher={data.nombre_evaluations} />