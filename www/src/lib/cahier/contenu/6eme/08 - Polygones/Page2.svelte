<script lang="ts">
	import { Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Exemple, Item, Protocole, Schema } from "$lib/cahier/composants/de_cours/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from "mathlifier";
</script>

<Contenu>
    <Partie numero={2} titre="Construire un triangle avec 3 longueurs" />
        <LigneVide />
        <Protocole lignes={7}>
            <Item>
                Avec la règle, tracer le côté le plus long du triangle.
            </Item>
            <Item lignes={2}>
                Avec le compas, tracer un arc de cercle de rayon égal à la longueur du deuxième côté.
            </Item>
            <Item lignes={2}>
                Avec le compas, tracer un arc de cercle de rayon égal à la longueur du troisième côté.
            </Item>
            <Item lignes={2}>
                Relier le point d'intersection des deux arcs de cercle au premier segment.
            </Item>
        </Protocole>
        <LigneVide />
        <Exemple>
            Tracer {@html math("\\text{ABC}")} tel que {@html math("\\text{AB} = 5\\,\\text{cm}")}, {@html math("\\text{AC} = 4\\,\\text{cm}")} et {@html math("\\text{BC} = 3\\,\\text{cm}")}.
        </Exemple>
        <Schema lignes={10} aspectRatioSVG={0.8}>
            {#snippet svg()}
                <defs>
                    <style>
                        .point31 {
                            text-anchor: center;
                            font-size: 60px;
                        }
                    </style>
                </defs>
                <line x1={200} x2={200+500} y1={800} y2={800} stroke="black" stroke-width={8} />
                <!-- arcs de cercle -->
                <!-- arc de centre (200,800) et de rayon 300 -->
                <circle cx={200} cy={800} r={300} fill="none" stroke="black" stroke-width={8}
                    stroke-dasharray="10,10" />
                <!-- arc de centre (200+500,800) et de rayon 400 -->
                <circle cx={200+500} cy={800} r={400} fill="none" stroke="black" stroke-width={8}
                    stroke-dasharray="10,10" />
                <!-- côtés -->
                <line x1={200} y1={800} x2={200+Math.cos(Math.acos(3/5))*300} y2={800-Math.sin(Math.acos(3/5))*300} stroke="black" stroke-width={8} />
                <line x1={200+500} y1={800} x2={200+500-Math.cos(Math.acos(4/5))*400} y2={800-Math.sin(Math.acos(4/5))*400} stroke="black" stroke-width={8} />
                <!-- points -->
                <text x={200-20} y={800+20} class="point31">B</text>
                <text x={200+500+20} y={800+20} class="point31">A</text>
                <text x={200+500-Math.cos(Math.acos(4/5))*400} y={800-Math.sin(Math.acos(4/5))*400-50} class="point31">C</text>
            {/snippet}
            {#snippet html()}
                <LigneVide />
                <Protocole lignes={7}>
                    <Item lignes={2}>
                        Tracer le segment {@html math("\\text{AB}")} de <br>
                        longueur 5 cm.
                    </Item>
                    <Item lignes={2}>
                        Puisque {@html math("\\text{AC} = 4\\,\\text{cm}")}, tracer un arc de <br>
                        cercle de centre {@html math("\\text{A}")} et de rayon 4 cm.
                    </Item>
                    <Item lignes={2}>
                        Puisque {@html math("\\text{BC} = 3\\,\\text{cm}")}, tracer un arc de <br>
                        cercle de centre {@html math("\\text{B}")} et de rayon 3 cm.
                    </Item>
                    <Item>
                        Relier le point d'intersection à {@html math("\\text{A}")} et à {@html math("\\text{B}")}.
                    </Item>
                </Protocole>
            {/snippet}
        </Schema>
</Contenu>

