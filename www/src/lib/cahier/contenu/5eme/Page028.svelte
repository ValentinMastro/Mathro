<script lang="ts">
    import { Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Demonstration, Propriete } from "$lib/cahier/composants/de_cours/*";
	import Texte from "$lib/cahier/composants/de_cours/Texte.svelte";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";
</script>

<Contenu>
    <Partie numero={2} titre="Les différents types de parallélogrammes" />
    <LigneVide />
    <Definition>
        Un rectangle est un parallélogramme qui a un angle droit.
    </Definition>
    <Demonstration lignes={4}>
        Si un parallélogramme a un angle droit, alors l'angle opposé est aussi un angle droit.<br>
        De plus, deux angles consécutifs sont supplémentaires, donc les deux autres angles sont aussi droits.
    </Demonstration>
    <Propriete>
        Les diagonales d'un rectangle sont de même longueur.
    </Propriete>
    <LigneVide />
    <Definition>
        Un losange est un parallélogramme qui a ses côtés de même longueur.
    </Definition>
    <Propriete>
        Les diagonales d'un losange sont perpendiculaires.
    </Propriete>
    <LigneVide />
    <Definition lignes={2}>
        Un carré est un rectangle et un losange.<br>
        Il hérite des propriétés du rectangle et du losange.
    </Definition>
</Contenu>
