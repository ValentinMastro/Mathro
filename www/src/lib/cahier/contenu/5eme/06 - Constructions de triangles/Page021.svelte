<script lang="ts">
    import { Chapitre, Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
	import DansLaMarge from "$lib/cahier/composants/de_chapitrage/DansLaMarge.svelte";
	import { Propriete, Item, Schema, Texte, Exemple } from "$lib/cahier/composants/de_cours/*";
	import { Slider } from "$lib/cahier/composants/de_marge/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from "mathlifier";

    let slider: number = 1;
    let points = [
        { x: 125, y: 125 },
        { x: 1250, y: 250 },
        { x: 500, y: 875 }
    ];
</script>

<Chapitre titre="Construction de triangles" />

<DansLaMarge>
    <LigneVide lignes={15} />
    <Slider min={1} max={3} bind:valeur={slider} />
</DansLaMarge>

<Contenu apres_un_titre>
    <Partie numero={1} titre="Inégalité triangulaire" />
        <LigneVide />
        <Propriete lignes={6}>
            Dans un triangle, la longueur d'un côté est inférieure à la somme des 
            longueurs des deux autres côtés. <br>
            Autrement dit, dans le triangle ABC : <br>
            <Item>{@html math("\\text{AB} \\leqslant \\text{AC} + \\text{BC}")}</Item>
            <Item>{@html math("\\text{BC} \\leqslant \\text{AB} + \\text{AC}")}</Item>
            <Item>{@html math("\\text{AC} \\leqslant \\text{AB} + \\text{BC}")}</Item>
        </Propriete>
        <LigneVide />
        <Schema lignes={8} aspectRatioSVG={1.375}>
            {#snippet svg()}
                <defs>
                    <style>
                        .point21 {
                            font-size: 60px;
                            text-anchor: middle;
                            dominant-baseline: middle;
                        }
                    </style>
                </defs>
                {#each points as point, index}
                    <line 
                        x1={point.x}
                        y1={point.y}
                        x2={points[(index + 1) % points.length].x} 
                        y2={points[(index + 1) % points.length].y} 
                        stroke={slider == index + 1 ? "blue" : "red"} 
                        stroke-width={8} 
                    />
                {/each}
                <text x={points[0].x} y={points[0].y} class="point21" dx={-30}>A</text>
                <text x={points[1].x} y={points[1].y} class="point21" dx={30}>B</text>
                <text x={points[2].x} y={points[2].y} class="point21" dy={50}>C</text>
            {/snippet}
            {#snippet html()}
                <LigneVide lignes={3} />
                <Texte lignes={2}>
                    Le chemin bleu est plus court <br>
                    que le chemin rouge.
                </Texte>
            {/snippet}
        </Schema>
        <LigneVide />
        <Propriete lignes={2}>
            Un triangle ne peut pas avoir un côté plus long que la somme des deux autres.
        </Propriete>
        <Exemple />
        <Schema lignes={5} aspectRatioSVG={1.6}>
            {#snippet svg()}
                <defs>
                    <style>
                        .mesure21 {
                            font-size: 80px;
                            text-anchor: middle;
                            dominant-baseline: middle;
                        }
                    </style>
                </defs>
                <polygon points="200,200 800,100 600,900" stroke="black" fill="none" stroke-width={8} />
                <text x={(200 + 800) / 2} y={(200 + 100) / 2} dx={-50} dy={-50} class="mesure21">2 cm</text>
                <text x={(800 + 600) / 2} y={(100 + 900) / 2} dx={120} class="mesure21">7 cm</text>
                <text x={(600 + 200) / 2} y={(900 + 200) / 2} dx={-120} class="mesure21">3 cm</text>
            {/snippet}
            {#snippet html()}
                <Texte lignes={4}>
                    Ce triangle n'existe pas. <br>
                    En effet, {@html math(" 7 > 2 + 3")}. <br>
                    Cela signifierait qu'il serait plus court de faire un détour {@html math("\\Rightarrow")} impossible.
                </Texte>
            {/snippet}
        </Schema>
</Contenu>