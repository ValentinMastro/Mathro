<script lang="ts">
    import { Chapitre, Partie, SousPartie, Contenu, DansLaMarge } from "$lib/cahier/composants/de_chapitrage/*";
    import { Tableau, LigneTableau, Texte, Exemples, Item, Propriete } from "$lib/cahier/composants/de_cours/*";
    import { Nombre } from "$lib/cahier/composants/de_marge/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    let numero_1 = $state(1234);
    let numero_2 = $state(15234900);
    let numero_3 = $state(1500036000);
    let surbrillances = $state([false, false, false, false, false, false]);

    function chiffre(n: number, puissance: number): number {
        return Math.floor(n / 10 ** puissance) % 10;
    }

    function chiffre_sans_zeros_inutiles(n: number, puissance: number): number | string {
        if (10**puissance > n) return "";
        return chiffre(n, puissance);
    }

    function nombre(n: number, puissance: number): number {
        return Math.floor(n / 10 ** puissance);
    }
</script>


<Chapitre titre="Nombres entiers" />
    
<DansLaMarge apres_un_titre={true}>
    <LigneVide lignes={5} />
    <Nombre bind:valeur={numero_1} min={1000} max={9999}/>
    <Nombre bind:valeur={numero_2} min={10000000} max={99999999}/>
    <Nombre bind:valeur={numero_3} min={1000000000} max={9999999999}/>
</DansLaMarge>

{#snippet ligne_de_chiffres(index_surbrillance_chiffre: number, puissance_chiffre: number, index_surbrillance_nombre: number, puissance_nombre: number, numero: number, )}
    {#each Array(12) as _, index}
        {#if surbrillances[index_surbrillance_chiffre] && index == 11-puissance_chiffre || surbrillances[index_surbrillance_nombre] && index <= 11-puissance_nombre}
            <td class="hover" style="border-right: 1px solid black;">
                {chiffre_sans_zeros_inutiles(numero, 11-index)}
            </td>
        {:else}
            <td style="border-right: 1px solid black;">
                {chiffre_sans_zeros_inutiles(numero, 11-index)}
            </td>
        {/if}
    {/each}
{/snippet}
{#snippet ligne_de_texte(index_surbrillance: number, numero: number, puissance: number, texte: string)}
    <Item>
        {chiffre(numero, puissance)} est 
        <span role="tooltip" onmouseenter={() => surbrillances[index_surbrillance] = true} onmouseleave={() => surbrillances[index_surbrillance] = false}>
            {texte}
        </span> de {numero.toLocaleString()}.
    </Item>
{/snippet}
{#snippet ligne_de_texte_nombre(index_surbrillance: number, numero: number, puissance: number, texte: string)}
    <Item>
        {nombre(numero, puissance)} est 
        <span role="tooltip" onmouseenter={() => surbrillances[index_surbrillance] = true} onmouseleave={() => surbrillances[index_surbrillance] = false}>
            {texte}
        </span> de {numero.toLocaleString()}.
    </Item>
{/snippet}

<Contenu apres_un_titre={true}>
    <Partie numero={1} titre="Chiffres et nombres" />
        <SousPartie numero={1} titre="Tableau de numération" />
        <LigneVide />
        <Tableau>
            <LigneTableau>
                <td colspan={3}>Milliards</td>
                <td colspan={3}>Millions</td>
                <td colspan={3}>Milliers</td>
                <td colspan={3}>Unités</td>
            </LigneTableau>
            <LigneTableau>
                {#each Array(4) as _, index}
                    <td>C</td>
                    <td>D</td>
                    <td style="border-right: 1px solid black;">U</td>
                {/each}
            </LigneTableau>
            <LigneTableau>{@render ligne_de_chiffres(0, 2, 3, 1, numero_1)}</LigneTableau>
            <LigneTableau>{@render ligne_de_chiffres(1, 4, 4, 4, numero_2)}</LigneTableau>
            <LigneTableau>{@render ligne_de_chiffres(2, 9, 5, 6, numero_3)}</LigneTableau>
        </Tableau>

        <LigneVide />
        <SousPartie numero={2} titre="Chiffres et nombres" />
            <Exemples lignes={6}>
                {@render ligne_de_texte(0, numero_1, 2, "le chiffre des centaines")}
                {@render ligne_de_texte(1, numero_2, 4, "le chiffre des dizaines de milliers")}
                {@render ligne_de_texte(2, numero_3, 9, "le chiffre des milliards")}
                {@render ligne_de_texte_nombre(3, numero_1, 1, "le nombre des dizaines")}
                {@render ligne_de_texte_nombre(4, numero_2, 4, "le nombre des dizaines de milliers")}
                {@render ligne_de_texte_nombre(5, numero_3, 6, "le nombre des millions")}
            </Exemples>
    
    <LigneVide />
    <SousPartie numero={3} titre="Décomposition" />
        <Propriete lignes={2}>
            Il est possible de décomposer un nombre selon la position de ses chiffres.
        </Propriete>
</Contenu>

<style>
    td.hover {
        background-color: rgb(255,0,0);
        color: white;
        font-weight: bold;
    }
</style>