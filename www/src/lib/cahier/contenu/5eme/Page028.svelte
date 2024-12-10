<script lang="ts">
    import { Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition } from "$lib/cahier/composants/de_cours/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";
</script>

<Contenu>
    <Partie numero={2} titre="Les différents types de parallélogrammes" />
    <LigneVide />
    <Definition>
        Un rectangle est un parallélogramme qui a un angle droit.
    </Definition>
</Contenu>
