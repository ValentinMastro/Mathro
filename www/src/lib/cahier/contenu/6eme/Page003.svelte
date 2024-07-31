<script lang="ts">
    import Contenu from "$lib/cahier/composants/de_chapitrage/Contenu.svelte";
    import Chapitre from "$lib/cahier/composants/de_chapitrage/Chapitre.svelte";
    import Partie from "$lib/cahier/composants/de_chapitrage/Partie.svelte";
</script>


<Chapitre titre="Connaître les différentes écritures d’un nombre décimal" />
    
<Contenu apres_un_titre={true}>
    {#each Array(29) as i}
    <Partie numero={1} titre="Chiffres et nombres" />
    {/each}
</Contenu>
