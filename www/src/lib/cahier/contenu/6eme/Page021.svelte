<script lang="ts">
    import { Contenu, DansLaMarge, Partie, SousPartie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Exemple, Exemples, Item, Schema } from "$lib/cahier/composants/de_cours/*";
	import { Nombre } from "$lib/cahier/composants/de_marge/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from "mathlifier";

    let abscisses_graduations: {index: number, abscisse: number}[] = 
        [...Array(11).keys()]
        .map(i => ({
            index: i,
            abscisse: 300 + 100*(i+1)
        }));

    let nombre = $state(1.23)
</script>

<DansLaMarge>
    <LigneVide lignes={5} />
    <Nombre bind:valeur={nombre} min={1} max={2} step={0.01} />
</DansLaMarge>

<Contenu>
    <Partie numero={3} titre="Repérage sur une droite graduée" />
        <LigneVide />
        <Exemple />
        <Schema lignes={10} aspectRatioSVG={1.7}>
            {#snippet svg()}
                <line x1={300} x2={1500} y1={200} y2={200} stroke="black" stroke-width={5} />
                {#each abscisses_graduations as {index, abscisse}}
                    {#if index == 0 || index == 10}
                        <line x1={abscisse} x2={abscisse} y1={170} y2={230} stroke="black" stroke-width={5} />
                        <text x={abscisse} y={150} font-size={50} text-anchor="middle">{index/10}</text>
                    {:else}
                        <line x1={abscisse} x2={abscisse} y1={185} y2={215} stroke="black" stroke-width={5} />
                    {/if}
                {/each}
            {/snippet}
        </Schema>
</Contenu>