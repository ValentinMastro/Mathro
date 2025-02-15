<script lang="ts">
	import { Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Tableau, LigneTableau, Exemples } from "$lib/cahier/composants/de_cours/*";
	import Item from "$lib/cahier/composants/de_cours/Item.svelte";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";
	import { math } from "mathlifier";


</script>

<Contenu>
    <Partie numero={3} titre="Unités d'aires et conversions" />
        <LigneVide />
        <Tableau lignes={6}>
            <LigneTableau lignes={1}>
                {#each Array(3) as _}
                    <td class=unite1col></td>
                {/each}
                <td class=unite1col>ha</td>
                <td class=unite1col></td>
                <td class=unite1col>a</td>
                {#each Array(8) as _}
                    <td class=unite1col></td>
                {/each}
            </LigneTableau>
            <LigneTableau lignes={1}>
                <td colspan={2} class=unite>km²</td>
                <td colspan={2} class=unite>hm²</td>
                <td colspan={2} class=unite>dam²</td>
                <td colspan={2} class=unite>m²</td>
                <td colspan={2} class=unite>dm²</td>
                <td colspan={2} class=unite>cm²</td>
                <td colspan={2} class=unite>mm²</td>
            </LigneTableau>
            {#each Array(4) as _}
                <LigneTableau lignes={1}>
                    {#each Array(14) as __}
                        <td class=unite1col></td>
                    {/each}
                </LigneTableau>
            {/each}
        </Tableau>
        <LigneVide />
        <Exemples lignes={4}>
            <Item>
                {@html math("1{,}5~\\text{m}² = 15~000~\\text{cm}²")}
            </Item>
            <Item>
                {@html math("0{,}02~\\text{hm}² = 0{,}000~2~\\text{km}²")}
            </Item>
            <Item>
                {@html math("365~\\text{mm}² = 0{,}000~003~65~\\text{dam}²")}
            </Item>
            <Item>
                {@html math("10~\\text{ha} = 100~000~\\text{m}²")}
            </Item>
        </Exemples>
</Contenu>

<style>
    td {
        border: 2px solid black;
    }
    .unite {
        width: calc(100% / 7);
    }
    .unite1col {
        width: calc(100% / 14);
    }
</style>