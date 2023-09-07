<script lang="ts">
    import SousPartie from "$lib/chapitrage/SousPartie.svelte";
    import Definition from "$lib/chapitrage/sections/Definition.svelte";
</script>

<SousPartie numero={3} titre={"Les nombres décimaux"}>
    <Definition>
        Une fraction décimale est une fraction 
        dont le dénominateur est égal à 1, 10, 100, 1000, etc.
    </Definition>
    <Definition>
        Un nombre décimal est un nombre qui peut s'écrire 
        sous forme d'une fraction décimale.
    </Definition>
</SousPartie>