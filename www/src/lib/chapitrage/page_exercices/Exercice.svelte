<script lang="ts">
    import { Question, Enonce, Corrige } from "$lib/chapitrage/page_exercices/all_exercices";
    export let numero: number;
</script>

<h2>Exercice {numero}</h2>
<Question numero={1} />