<script lang="ts">
    import Evaluation from "$lib/exercices/Evaluation.svelte";
    import type { PageData } from "./$types";
    
    export let donnees: PageData;
</script>

<Evaluation niveau={donnees.niveau} numero_evaluation={donnees.numero} />