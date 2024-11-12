<script lang="ts">
	import { Contenu, Partie, SousPartie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Item, Paragraphe, Schema } from "$lib/cahier/composants/de_cours/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from 'mathlifier';
</script>

<Contenu>
    <Partie numero={3} titre="Constructions" />
        <SousPartie numero={1} titre="Construire une droite perpendiculaire à une autre" />
            <LigneVide />
            <Paragraphe nom_du_paragraphe="Consigne">
                Tracer une droite {@html math("(d')")} perpendiculaire à {@html math("(d)")} passant par {@html math("\\text{A}")}.
            </Paragraphe>
            <LigneVide />
            <Schema lignes={8} aspectRatioSVG={1.25}>
                {#snippet svg()}
                    <defs>
                        <style>
                            .point25 { font-size: 60px; text-anchor: middle; vertical-align: center; }
                            .droite25 { font-size: 60px; text-anchor: middle; vertical-align: center; font-style: italic; }
                        </style>
                    </defs>
                    <line x1={0} y1={500} x2={1000} y2={500} stroke="red" stroke-width={5} />
                    <line x1={625} y1={0} x2={625} y2={1000} stroke="blue" stroke-width={5} />
                    <text x={900} y={470} class="droite25" fill="red">(d)</text>
                    <text x={530} y={900} class="droite25" fill="blue">(d')</text>
                    <text x={625 + 30} y={500 - 30} class="point25" fill="black">A</text>
                    <circle cx={625} cy={500} r={10} fill="black" />
                    <rect x={625} y={500} width={30} height={30} fill="black" />
                {/snippet}
                {#snippet html()}
                    <Paragraphe nom_du_paragraphe="Protocole" lignes={4}>
                        <Item lignes={2}>
                            Faire glisser l'équerre le long de {@html math("\\color{red} (d)")}, jusqu'à alignement avec {@html math("\\text{A}")}.
                        </Item>
                        <Item lignes={2}>
                            Tracer la droite {@html math("\\color{blue} (d')")}, le long de l'équerre.
                        </Item>
                    </Paragraphe>
                {/snippet}
            </Schema>
            <LigneVide />
        <SousPartie numero={2} titre="Construire une droite parallèle à une autre" />
            <LigneVide />
            <Paragraphe nom_du_paragraphe="Consigne">
                Tracer une droite {@html math("(d')")} parallèle à {@html math("(d)")} passant par {@html math("\\text{A}")}.
            </Paragraphe>
            <LigneVide />
            <Schema lignes={8} aspectRatioSVG={1.25}>
                {#snippet svg()}
                    <defs>
                        <style>
                            .point25 { font-size: 60px; text-anchor: middle; vertical-align: center; }
                            .droite25 { font-size: 60px; text-anchor: middle; vertical-align: center; font-style: italic; }
                        </style>
                    </defs>
                    <line x1={0} y1={125} x2={1000} y2={125} stroke="red" stroke-width={5} />
                    <line x1={0} y1={750} x2={1000} y2={750} stroke="blue" stroke-width={5} />
                    <line x1={625} y1={0} x2={625} y2={1000} stroke="green" stroke-width={5} />
                    <text x={900} y={200} class="droite25" fill="red">(d)</text>
                    <text x={900} y={820} class="droite25" fill="blue">(d')</text>
                    <text x={550} y={900} class="droite25" fill="green">(d*)</text>
                    <text x={625 + 30} y={750 - 30} class="point25" fill="black">A</text>
                    <rect x={625} y={125} width={30} height={30} fill="black" />
                    <rect x={625} y={750} width={30} height={30} fill="black" />
                    <circle cx={625} cy={750} r={10} fill="black" />
                {/snippet}
                {#snippet html()}
                    <Paragraphe nom_du_paragraphe="Protocole" lignes={8}>
                        <Item lignes={2}>
                            Faire glisser l'équerre le long de {@html math("\\color{red} (d)")}, jusqu'à alignement avec {@html math("\\text{A}")}.
                        </Item>
                        <Item lignes={2}>
                            Tracer la droite {@html math("\\color{green} (d*)")}, le long de l'équerre.
                        </Item>
                        <Item lignes={2}>
                            Faire glisser l'équerre le long de {@html math("\\color{green} (d*)")}, jusqu'à alignement avec {@html math("\\text{A}")}.
                        </Item>
                        <Item lignes={2}>
                            Tracer la droite {@html math("\\color{blue} (d')")}, le long de l'équerre.
                        </Item>
                    </Paragraphe>
                {/snippet}
            </Schema>
</Contenu>