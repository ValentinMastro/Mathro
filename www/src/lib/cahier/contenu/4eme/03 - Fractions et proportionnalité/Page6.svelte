<script lang="ts">
    import { Contenu, DansLaMarge, Partie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Propriete, Schema } from "$lib/cahier/composants/de_cours/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from "mathlifier";

    let longueur: number = $state(1);
    let cx = 1500;
    let cy = 450;

    function degrees_en_radians(deg: number) {
        return deg * 180 / Math.PI;
    }

    function cos(deg: number) {
        return Math.cos(degrees_en_radians(deg));
    }

    function sin(deg: number) {
        return Math.sin(degrees_en_radians(deg));
    }
</script>

<DansLaMarge>
    <LigneVide lignes={10} />
    <input type="range" bind:value={longueur} min="1" max="5" style="width: 80%;" />
</DansLaMarge>

<Contenu>
    <Partie numero={4} titre="Échelles" />
        <LigneVide />
        <Propriete lignes={3}>
            Si les longueurs (en mètres) sont multipliées par un facteur {@html math("k")}, <br>
            alors les aires (en mètres carrés) sont multipliées par {@html math("k^2")}, <br>
            et les volumes (en mètres cubes) sont multipliés par {@html math("k^3")}.
        </Propriete>

        <LigneVide />
        <Schema lignes={10} aspectRatioSVG={2} >
            {#snippet svg()}
                <line x1="100" y1="5" x2={100 * (longueur + 1)} y2="5" stroke="black" stroke-width="8" />
                <text x={100 + (longueur - 1) * 50} y="70" font-size="60" fill="black">× {longueur}</text>

                {#each Array(longueur) as _, i}
                    {#each Array(longueur) as _, j}
                        <rect x={100 * (i+1) + 8} y={100 * (j+4) + 10} width="90" height="90" fill="black" />
                    {/each}
                {/each}
                <text x={100 + (longueur - 1) * 50} y="370" font-size="60" fill="black">× {longueur*longueur}</text>

                {#each Array(longueur) as _, i}
                    {#each Array(longueur) as _, j}
                        <polygon points="{cx},{cy} {cx},{cy+100} {cx+100*cos(30)},{cy+100-100*sin(30)} {cx+100*cos(30)},{cy-100*sin(30)}"
                            fill="red"
                            stroke="black"
                            stroke-width="8"
                            transform={`translate(${-100 * cos(30) * i}, ${100 * j + 100 * sin(30) * i})`}
                        />
                        <polygon points="{cx-200},{cy-100} {cx-200},{cy} {cx-100*cos(30)-200},{cy-100*sin(30)} {cx-100*cos(30)-200},{cy-100*sin(30)-100}"
                            fill="green"
                            stroke="black"
                            stroke-width="8"
                            transform={`translate(${100 * cos(30) * i}, ${100 * j + 100 * sin(30) * i + 100})`}
                        />
                        <polygon points="{cx-100},{cy-100*sin(30)} {cx-100-100*cos(30)},{cy} {cx-100},{cy+100*sin(30)} {cx-100+100*cos(30)},{cy} Z" 
                            fill="blue"
                            stroke="black"
                            stroke-width="8"
                            transform={`translate(${-10 + 100 * i + 100*cos(30)*j}, ${-10 + 100 * sin(30) * j + 100 * sin(30) * i})`}
                        />
                    {/each}
                {/each}
                <text x="1600" y="1000" font-size="60" fill="black">× {longueur*longueur*longueur}</text>
            {/snippet}
        </Schema>
</Contenu>