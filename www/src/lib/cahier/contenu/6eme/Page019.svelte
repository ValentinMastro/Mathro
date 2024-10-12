<script lang="ts">
	import { Chapitre, Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Tableau, LigneTableau } from "$lib/cahier/composants/de_cours/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";
</script>

<Chapitre titre="Nombres décimaux" />

<Contenu apres_un_titre>
    <Partie numero={1} titre="Le tableau de numération décimal" />
        <LigneVide />
        <Tableau>
            <LigneTableau>
                <td>Centaines</td>
                <td>Dizaines</td>
                <td>Unités</td>
                <td>,</td>
                <td>Dixièmes</td>
                <td>Centièmes</td>
                <td>Millièmes</td>
                <td></td>
            </LigneTableau>
        </Tableau>
</Contenu>

<style>
    td {
        border: 1px solid black;
        padding: 5px;
        writing-mode: vertical-rl;
        text-orientation: upright;
    }
</style>