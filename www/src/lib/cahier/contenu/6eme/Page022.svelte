<script lang="ts">
    import { Chapitre, Contenu, Partie, DansLaMarge } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Item, Notation, Schema, Texte } from "$lib/cahier/composants/de_cours/*";
    import { Slider } from "$lib/cahier/composants/de_marge/*"
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from 'mathlifier';

    let rayon: number = 800;
    let slider: number = $state(50);
    let slider_2: number = $state(200);
    let angle: number = $derived(slider * Math.PI / 180);

    let point_intersection_1 = $derived({
        x: 500 + 200 / Math.tan(angle),
        y: 600 // 400 + rayon * Math.sin(angle)
    });
    let point_intersection_2 = $derived({
        x: 500 + (100 + slider_2) / Math.tan(angle),
        y: 500 + slider_2 // 400 + rayon * Math.sin(angle)
    });
</script>

<Chapitre titre="Droites" />

<DansLaMarge>
    <LigneVide lignes={15} />
    <Slider min={25} max={155} bind:valeur={slider} />
    <Slider min={-400} max={400} bind:valeur={slider_2} />
</DansLaMarge>

<Contenu apres_un_titre>
    <Partie numero={1} titre="Relations entre deux droites" />
        <LigneVide />
        <Definition lignes={4}>
            <Item lignes={2}>
                Deux droites sont <i>parallèles</i> si elles n'ont aucun point d'intersection.
            </Item>
            <Item lignes={2}>
                Lorsque deux droites possèdent un point d'intersection, elles sont <i>sécantes</i> en ce point.
            </Item>
        </Definition>
        <LigneVide />
        <Notation>
            Si {@html math('(d)')} et {@html math("(d')")} sont parallèles, 
            on note {@html math("(d) \\backslash\\backslash (d')")}.
        </Notation>
        <LigneVide lignes={2} />
        <Schema lignes={10}>
            {#snippet svg()}
                <defs>
                    <style>
                        text {
                            font-size: 60px;
                            text-anchor: middle;
                            vertical-align: center;
                        }
                        .droite {
                            font-style: italic;
                        }
                    </style>
                </defs>
                <line x1={0} y1={600} x2={1000} y2={600} stroke="red" stroke-width={5} />
                <text x={500} y={670} fill="red" class="droite">(d)</text>
                <line x1={500 - rayon * Math.cos(angle)} y1={400 - rayon * Math.sin(angle)} x2={500 + rayon * Math.cos(angle)} y2={400 + rayon * Math.sin(angle)} stroke="green" stroke-width={5} /> 
                <text x={500 - rayon / 2 * Math.cos(angle)} y={200} fill="green" class="droite">(d'')</text>
                <line x1={0} y1={500 + slider_2} x2={1000} y2={500 + slider_2} stroke="blue" stroke-width={5} />
                <text x={300} y={570 + slider_2} fill="blue" class="droite">(d')</text>
                <!-- points d'intersection -->
                <circle cx={point_intersection_1.x} cy={point_intersection_1.y} r={10} fill="black" />
                <text x={point_intersection_1.x} y={point_intersection_1.y - 30} fill="black">I</text>
                <circle cx={point_intersection_2.x} cy={point_intersection_2.y} r={10} fill="black" />
                <text x={point_intersection_2.x} y={point_intersection_2.y - 30} fill="black">K</text>
            {/snippet}
            {#snippet html()}
                <LigneVide />
                <Texte>{@html math("{\\color{red} (d)} \\backslash \\backslash {\\color{blue} (d')}")}</Texte>
                <Texte>{@html math('{\\color{red} (d)}')} et {@html math("{\\color{green} (d'')}")}  sont sécantes en {@html math("\\text{I}")}.</Texte>
                <Texte>{@html math("{\\color{blue} (d')}")} et {@html math("{\\color{green} (d'')}")}  sont sécantes en {@html math("\\text{K}")}.</Texte>
            {/snippet}
        </Schema>
</Contenu>

