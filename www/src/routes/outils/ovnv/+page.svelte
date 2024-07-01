<!--
    OVNV : On veut nos voeux

    Outil de génération d'emploi du temps pour les enseignants, la vie scolaire et l'administration.
    SPA (Single Page Application)

    3 phases :

    A. Récolte des données
        Construction du squelette de l'emploi du temps (ex : à quelle heure commence le premier cours de la journée)
        Liste des enseignants avec, pour chacun d'entre eux :
            -> la liste des salles dans laquelle ils enseignent
            -> leur(s) voeu(x), c'est-à-dire les heures auxquelles ils ne souhaitent pas enseigner
            -> leur répartition pédagogique (combien de classes ils ont en charge)
        Liste des classes avec, pour chacune d'entre elles :
            -> la liste des enseignants qui enseignent dans cette classe
            -> leur répartition horaire (combien d'heures de cours par semaine par matière)
        Liste des matières avec, pour chacune d'entre elles :
            -> la liste des classes dans lesquelles elle est enseignée
            -> la liste des enseignants qui l'enseignent

    B. Génération des emplois du temps

    C. Affichage des emplois du temps
        Possibilité d'exporter au format PDF

    Note :  les données sont stockées localement
            elles peuvent être exportées en JSON
            puis être importées pour continuer l'utilisation du programme
-->

<script lang="ts">
    import Menu from "./menu/Menu.svelte";
    import PhaseA from "./phaseA/PhaseA.svelte";
    import PhaseB from "./phaseB/PhaseB.svelte";
    import PhaseC from "./phaseC/PhaseC.svelte";

    import { phase } from "./stores";

    let phase_actuelle: "Menu" | "A" | "B" | "C" = "Menu";

    phase.subscribe((valeur) => {
        phase_actuelle = valeur;
    });
</script>

{#if phase_actuelle == "Menu"}
    <Menu />
{:else if phase_actuelle == "A"}
    <PhaseA />
{:else if phase_actuelle == "B"}
    <PhaseB />
{:else if phase_actuelle == "C"}
    <PhaseC />
{/if}