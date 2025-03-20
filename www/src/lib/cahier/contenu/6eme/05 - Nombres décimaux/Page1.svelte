<script lang="ts">
	import { Chapitre, Contenu, DansLaMarge, Partie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Tableau, LigneTableau, Exemples, Item } from "$lib/cahier/composants/de_cours/*";
	import { Nombre } from "$lib/cahier/composants/de_marge/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    let nombre_1 = $state(123.456_789);
    let nombre_2 = $state(13.482);
    let nombre_3 = $state(0.7894);

    function chiffre(nombre: number, puissance: number | undefined) {
        if (puissance == undefined) {
            return ",";
        }
        return Math.floor((nombre / Math.pow(10, puissance))) % 10;
    }

    function nombre_de(nombre: number, puissance: number) {
        return Math.floor((nombre / Math.pow(10, puissance)));
    }
</script>

<Chapitre titre="Nombres décimaux" />

<DansLaMarge>
    <LigneVide lignes={17} />
    <Nombre bind:valeur={nombre_1} min={0} max={999} step={0.000_001} />
    <Nombre bind:valeur={nombre_2} min={0} max={999} step={0.000_001} />
    <Nombre bind:valeur={nombre_3} min={0} max={999} step={0.000_001} />
</DansLaMarge>

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
            {#each [nombre_1, nombre_2, nombre_3] as nombre}
                <LigneTableau>
                    {#each [2, 1, 0, undefined, -1, -2, -3, -4, -5, -6] as puissance}
                        <td>{chiffre(nombre, puissance)}</td>
                    {/each}
                </LigneTableau>
            {/each}
        </Tableau>


        <Exemples lignes={8}>
            <Item lignes={4}>
                {nombre_2.toLocaleString("fr-FR")} :
                <Item>le chiffre des unités est {chiffre(nombre_2, 0)}</Item>
                <Item>le chiffre des centièmes est {chiffre(nombre_2, -2)}</Item>
                <Item>le nombre des dixièmes est {nombre_de(nombre_2, -1)}</Item>
            </Item>
            <Item lignes={4}>
                {nombre_3.toLocaleString("fr-FR", {minimumFractionDigits: 4, maximumFractionDigits: 6})} :
                <Item>le chiffre des dix-millièmes est {chiffre(nombre_3, -4)}</Item>
                <Item>le nombre de millièmes est {nombre_de(nombre_3, -3)}</Item>
                <Item>le nombre de dix-millièmes est {nombre_de(nombre_3, -4)}</Item>
            </Item>
        </Exemples>
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