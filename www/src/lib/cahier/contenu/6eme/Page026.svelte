<script lang="ts">
	import { Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Definition, Item, Paragraphe, Schema } from "$lib/cahier/composants/de_cours/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from 'mathlifier';
</script>

<Contenu>
    <Partie numero={4} titre="Médiatrice" />
        <LigneVide />
        <Definition lignes={2}>
            La <i>médiatrice</i> d'un segment est la droite perpendiculaire à ce segment et passant par son milieu.
        </Definition>
        <Paragraphe nom_du_paragraphe="Consigne">
            Tracer la médiatrice du segment {@html math("[\\text{AB}]")}.
        </Paragraphe>
        <Schema lignes={10}>
            {#snippet svg()}
                <defs>
                    <style>
                        .point26 {
                            font-size: 60px;
                            text-anchor: middle;
                            vertical-align: center;
                        }
                        .droite26 {
                            font-size: 60px;
                            text-anchor: middle;
                            vertical-align: center;
                            font-style: italic;
                        }
                    </style>
                </defs>
                <line x1={200} y1={200} x2={800} y2={800} stroke="black" stroke-width={5} />
                <text x={200 - 30} y={200 - 30} class="point26">A</text>
                <text x={800 + 40} y={800 + 40} class="point26">B</text>
                <circle cx={200} cy={200} r={10} fill="black" />
                <circle cx={800} cy={800} r={10} fill="black" />
                <!-- Milieu -->
                <text x={500} y={500 - 30} class="point26" fill="green">I</text>
                <text x={350} y={350} text-anchor="middle" alignment-baseline="middle" font-size={60} fill="red">|</text>
                <text x={650} y={650} text-anchor="middle" alignment-baseline="middle" font-size={60} fill="red">|</text>
                <!-- Médiatrice -->
                <line x1={100} y1={900} x2={900} y2={100} stroke="red" stroke-width={5} />
                <text x={100 - 30} y={900 - 30} class="droite26" fill="red">(m)</text>
                <!-- Angle droit -->
                <rect x={500} y={500} width={25} height={25} fill="black" transform="rotate(-45,500,500)" />
            {/snippet}
            {#snippet html()}
                <LigneVide />
                <Paragraphe nom_du_paragraphe="Protocole" lignes={5}>
                    <Item lignes={2}>
                        Avec la règle, déterminer {@html math("\\text{I}")} le milieu du segment {@html math("[\\text{AB}]")}.
                    </Item>
                    <Item lignes={3}>
                        Avec l'équerre, tracer la droite perpendiculaire à {@html math("[\\text{AB}]")} passant <br>
                        par {@html math("\\text{I}")}.
                    </Item>
                </Paragraphe>
            {/snippet}
        </Schema>
</Contenu>