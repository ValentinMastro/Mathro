<script lang="ts">
	import { Contenu, DansLaMarge, Partie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Definition, Schema, Texte } from "$lib/cahier/composants/de_cours/*";
	import { Slider } from "$lib/cahier/composants/de_marge/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from 'mathlifier';

    let slider: number = $state(0);
    let point_b = $derived({
        x: 1000 + slider * 500,
        y: 1000 + slider * (-1000)
    });
    // 1 carreau du cahier = 0.8 cm
    // 1000 unités du SVG = 6 carreaux du cahier = 4.8 cm
    let distance_ab = $derived(
        (   
            Math.sqrt(
                (point_b.x - 500) ** 2 + (point_b.y - 1000/3) ** 2
            )
            * 4.8 / 1000
        )
        .toLocaleString('fr-FR', { maximumFractionDigits: 3 })
        .replace('.', '{,}')
    );
</script>

<DansLaMarge>
    <LigneVide lignes={21} />
    <Slider min={0} max={1} pas={0.001} bind:valeur={slider} />
    <Texte>
        {@html math(`\\text{AB} \\approx ${distance_ab}~\\text{cm}`)}
    </Texte>
</DansLaMarge>

<Contenu>
    <Partie numero={2} titre="Distances" />
        <LigneVide />
        <Definition lignes={2}>
            La <i>distance entre deux points</i> est la longueur du plus court chemin entre eux.
        </Definition>
        <LigneVide />
        <Schema lignes={6} aspectRatioSVG={2.75}>
            {#snippet svg()}
                <defs>
                    <style>
                        .point23 {
                            font-size: 90px;
                            text-anchor: middle;
                            vertical-align: center;
                        }
                    </style>
                </defs>
                <circle cx={500} cy={333.33} r={15} fill="black" />
                <circle cx={2500} cy={666.66} r={15} fill="black" />
                <text class="point23" x={500} y={333.33 - 30}>A</text>
                <text class="point23" x={2500} y={666.66 - 30}>B</text>
                <line x1={500} y1={333.33} x2={2500} y2={666.66} stroke="black" stroke-width={5} />
            {/snippet}
            {#snippet html()}
                <LigneVide />
                <Texte>
                    {@html math("\\text{AB} \\approx 9{,}7~\\text{cm}")}
                </Texte>
            {/snippet}
        </Schema>
        <Definition lignes={3}>
            La <i>distance entre un point et une droite</i> est la longueur du plus court chemin
            entre ce point et cette droite, c'est-à-dire le segment perpendiculaire à cette droite, 
            d'extrémité ce point.
        </Definition>
        <LigneVide />
        <Schema lignes={6} aspectRatioSVG={1.75}>
            {#snippet svg()}
                <defs>
                    <style>
                        .point24 { font-size: 90px; text-anchor: middle; vertical-align: center; }
                        .droite24 { font-size: 90px; text-anchor: middle; vertical-align: center; font-style: italic; }
                    </style>
                </defs>
                <!-- le point et la droite -->
                <circle cx={500} cy={1000/3} r={12} fill="black" />
                <text class="point24" x={500 - 40} y={1000/3 - 20} fill="black">A</text>
                <line x1={1000} y1={1000} x2={1500} y2={0} stroke="red" stroke-width={5} />
                <text class="droite24" x={1250 + 120} y={500} fill="red">(d)</text>
                <!-- -->
                <line x1={500} y1={1000/3} x2={point_b.x} y2={point_b.y} stroke="green" stroke-width={8} />
                <circle cx={point_b.x} cy={point_b.y} r={12} fill="green" />
                <text class="point24" x={point_b.x} y={point_b.y - 30}>B</text>
            {/snippet}
            {#snippet html()}
                <LigneVide lignes={2} />
                <Texte>
                    {@html math(`\\text{distance}(\\text{A}, {\\color{red} (d)}) \\approx 3{,}578~\\text{cm}`)}
                </Texte>
            {/snippet}
        </Schema>
</Contenu>