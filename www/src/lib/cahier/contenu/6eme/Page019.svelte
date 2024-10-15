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
                <td colspan={3}>Partie entière</td>
                <td class="virgule">,</td>
                <td colspan={3} style="border-right: 1px dashed black">Partie décimale</td>
            </LigneTableau>
            <LigneTableau>
                {#each ["centaine", "dizaine", "unité", "virgule", "dixième", "centième", "millième", "dix-millième", "cent-millième", "millionnième"] as t}
                    <td class="vertical {t == "virgule" ? "virgule" : ""}">{t}</td>
                {/each}
            </LigneTableau>
        </Tableau>
</Contenu>

<style>
    td {
        border: 1px solid black;
        text-transform: uppercase;
    }
    .vertical {
        writing-mode: vertical-rl;
        text-orientation: upright;
        text-align: start;
        padding: 12px;
    }
    .virgule {
        color: red;
    }
</style>