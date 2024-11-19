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
        <Exemple>
            Tracer {@html math("\\text{ABC}")} tel que {@html math("\\text{AB} = 5\\,\\text{cm}")}, {@html math("\\text{AC} = 4\\,\\text{cm}")} et {@html math("\\text{BC} = 3\\,\\text{cm}")}.
        </Exemple>
        <Schema lignes={10}>
            {#snippet svg()}
                <defs>
                    <style>
                        .point22 {
                            text-anchor: center;
                            font-size: 60px;
                        }
                    </style>
                </defs>
                <line x1={200} x2={200+500} y1={800} y2={800} stroke="black" stroke-width={8} />
                <!-- arcs de cercle -->
                <!-- arc de centre (200,800) et de rayon 300 de angle1 à angle2 -->
                {@const angle1 = Math.acos(-Math.PI)}
                {@const angle2 = Math.acos(Math.PI)}
                <path d={`
                    M ${200+500} ${800}
                    A 300 300 0 0 0 ${200+500-Math.cos(angle1)*300} ${800-Math.sin(angle1)*300}
                `} fill="none" stroke="black" stroke-width={8} />
                <!-- côtés -->
                {@const extension = 200}
                <line x1={200} y1={800} x2={200+Math.cos(Math.acos(3/5))*(400+extension)} y2={800-Math.sin(Math.acos(3/5))*(400+extension)} stroke="black" stroke-width={8} />
                <line x1={200+500} y1={800} x2={200+500-Math.cos(Math.acos(4/5))*(300+extension)} y2={800-Math.sin(Math.acos(4/5))*(300+extension)} stroke="black" stroke-width={8} />
                <!-- points -->
                <text x={200-20} y={800+20} class="point21">B</text>
                <text x={200+500+20} y={800+20} class="point21">A</text>
                <text x={200+500-Math.cos(Math.acos(4/5))*400} y={800-Math.sin(Math.acos(4/5))*400-50} class="point21">C</text>
            {/snippet}
        </Schema>
</Contenu>

