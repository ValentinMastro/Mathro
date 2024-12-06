<script lang="ts">
    import { Contenu, SousPartie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Propriete, Schema } from "$lib/cahier/composants/de_cours/*";
	import Item from "$lib/cahier/composants/de_cours/Item.svelte";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";
</script>

<Contenu>
    <Definition>
        Un triangle équilatéral possède 3 côtés de même longueur.
    </Definition>
    <Schema lignes={5}>
        {#snippet svg()}
            <defs>
                <polygon id="triangle_équilatéral" points="200,800 800,800 {200+600*Math.cos(Math.PI/3)},{800-600*Math.sin(Math.PI/3)}" />
            </defs>
            <use href="#triangle_équilatéral" stroke="black" fill="none" stroke-width="8" />
            <text x={(200+800)/2} y={(800+800)/2} fill='red' font-size='80'>|</text> 
            <text x={(200+200+600*Math.cos(Math.PI/3))/2} y={(800+800-600*Math.sin(Math.PI/3))/2} fill='red' font-size='80'>|</text>
            <text x={(800+200+600*Math.cos(Math.PI/3))/2} y={(800+800-600*Math.sin(Math.PI/3))/2} fill='red' font-size='80'>|</text>
        {/snippet}
    </Schema>

    <SousPartie numero={3} titre='Les différents types de quadrilatères' />
        <LigneVide />
        <Definition lignes={4}>
            <Item>
                Un rectangle possède 4 angles droits.
            </Item>
            <Item>
                Un losange possède 4 côtés de même longueur.
            </Item>
            <Item lignes={2}>
                Un carré est à la fois un rectangle et un losange : 
                il possède 4 angles droits et 4 côtés de même longueur.
            </Item>
        </Definition>
        <LigneVide />
        <Schema lignes={10} aspectRatioSVG={2}>
            {#snippet svg()}
                <defs>
                    <rect id="rectangle" x={100} y={100} width={500} height={300} />
                    <rect id="carre" x={200} y={600} width={300} height={300} />
                    <polygon id="losange" points="1200,200 1400,500 1200,800 1000,500" />
                </defs>
                <use href="#rectangle" stroke="black" fill="none" stroke-width={6} />
                <use href="#losange" stroke="black" fill="none" stroke-width={6} />
                <use href="#carre" stroke="black" fill="none" stroke-width={6} />
                {#each [{x: 100, y: 100}, {x: 570, y: 100}, {x: 570, y: 370}, {x: 100, y: 370}] as {x, y}}
                    <rect x={x} y={y} width={30} height={30} fill="red" />
                    <rect x={x*3/5+130} y={y+500} width={30} height={30} fill="red" />
                {/each}
            {/snippet}
        </Schema>
</Contenu>