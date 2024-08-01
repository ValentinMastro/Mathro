<script lang="ts">
    import Contenu from "$lib/cahier/composants/de_chapitrage/Contenu.svelte";
    import Partie from "$lib/cahier/composants/de_chapitrage/Partie.svelte";

    import Definition from "$lib/cahier/composants/de_cours/Definition.svelte";
	import Ligne from "$lib/cahier/composants/de_cours/Ligne.svelte";
    import Propriete from "$lib/cahier/composants/de_cours/Propriete.svelte";
    import Schema from "$lib/cahier/composants/de_cours/Schema.svelte";

    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";
</script>

<Contenu>
    <Partie numero={2} titre="Triangle rectangle et hypoténuse" />
        <LigneVide />
        <Definition>
            Un triangle rectangle est une figure à 3 côtés qui a un angle droit.
        </Definition>
        <LigneVide />
        <Definition>
            L'hypoténuse d'un triangle rectangle est le côté opposé à l'angle droit.
        </Definition>
        <LigneVide />
        <Propriete>
            L'hypoténuse est le côté le plus long d'un triangle rectangle.
        </Propriete>
</Contenu>