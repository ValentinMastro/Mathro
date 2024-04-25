<script lang="ts">
    import { getChapitre } from '$lib/contenu_du_cours/6eme/chapitres';
    import type { PageData } from "./$types";
    export let data: PageData;

    let Chapitre = getChapitre(data.numero_chapitre);
</script>

<Chapitre />