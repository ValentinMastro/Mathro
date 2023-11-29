<script lang="ts">
    import Evaluation from "$lib/exercices/Evaluation.svelte";
    import type { PageData } from "./$types";
    
    export let data: PageData;
</script>

<Evaluation niveau={data.niveau} numero_evaluation={data.numero} />