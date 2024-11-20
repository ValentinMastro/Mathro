<script lang="ts">
	import { Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Exemple, Item, Protocole, Schema } from "$lib/cahier/composants/de_cours/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from "mathlifier";
</script>

<Contenu>
    <Partie numero={3} titre="Construire un triangle avec 2 longueurs et 1 angle" />
        <LigneVide />
        <Protocole lignes={5}>
            <Item>
                Avec la règle, tracer le côté le plus long du triangle.
            </Item>
            <Item lignes={2}>
                Avec le rapporteur et la règle, tracer une demi-droite pour former l'angle donné.
            </Item>
            <Item lignes={2}>
                Placer le troisième point du triangle sur la demi-droite en utilisant la deuxième longueur donnée.
            </Item>
        </Protocole>
        <LigneVide />
        <Exemple>
            Tracer {@html math("\\text{DEF}")} tel que 
                {@html math("\\text{DE} = 5\\,\\text{cm}")}, 
                {@html math("\\text{EF} = 3\\,\\text{cm}")} et 
                {@html math("\\widehat{\\text{DEF}} = 45^{\\circ}")}.
        </Exemple>
        <Schema lignes={10} aspectRatioSVG={0.8}>
            {#snippet svg()}
                <defs>
                    <style>
                        .point23 {
                            text-anchor: center;
                            font-size: 60px;
                        }
                    </style>
                </defs>
                <line x1={200} x2={200+500} y1={800} y2={800} stroke="black" stroke-width={8} />
                <!-- côtés -->
                <line x1={200+500} y1={800} x2={0} y2={100} stroke="black" stroke-width={8} />
                <line 
                    x1={200} 
                    y1={800} 
                    x2={200+500-Math.cos(Math.PI/4)*500/Math.sqrt(2)} 
                    y2={800-Math.sin(Math.PI/4)*500/Math.sqrt(2)} 
                    stroke="black" stroke-width={8} />
                <!-- points -->
                <text x={200-50} y={800+20} class="point23">D</text>
                <text x={200+500+20} y={800+20} class="point23">E</text>
                <text x={200+500/2} y={800-500/2-50} class="point23">F</text>
                <text x={200+500-150} y={800-20} class="point23">45°</text>
            {/snippet}
            {#snippet html()}
                <LigneVide />
                <Protocole lignes={5}>
                    <Item lignes={2}>
                        Tracer le segment {@html math("\\text{DE}")} de <br>
                        longueur 5 cm.
                    </Item>
                    <Item>
                        Tracer un angle de 45° en partant de {@html math("\\text{E}")}.
                    </Item>
                    <Item lignes={2}>
                        Placer le point {@html math("\\text{F}")} sur la demi-droite en <br>
                        utilisation la longueur 3 cm.
                    </Item>
                </Protocole>
            {/snippet}
        </Schema>
</Contenu>

