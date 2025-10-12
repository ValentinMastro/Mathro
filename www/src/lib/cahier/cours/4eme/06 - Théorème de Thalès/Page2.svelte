<script lang="ts">
    import { Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Paragraphe, Texte, Schema, Exemple, Item } from "$lib/cahier/composants/de_cours/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math, alignStar } from "mathlifier";
</script>

<Contenu>
    <Partie numero={2} titre="Rédaction" />
        <LigneVide />
        <Exemple lignes={25}>
            <Schema lignes={10} aspectRatioSVG={2}>
                {#snippet svg()}
                    <defs>
                        <marker
                            id="arrow"
                            viewBox="0 0 10 10"
                            refX="5"
                            refY="5"
                            markerWidth="6"
                            markerHeight="6"
                            orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" />
                        </marker>
                        <style>
                            text {
                                font-size: 60px;
                                fill: black;
                            }
                        </style>
                    </defs>
    
                    <path d="M 100 500 L 840 100 L 900 900 Z" stroke="black" fill="none" stroke-width={4} />
                    <line x1="560" x2="600" y1="252" y2="748" stroke="black" stroke-width={4} />
                    <text x="80" y="500" text-anchor="end">U</text>
                    <text x="860" y="100" text-anchor="start">X</text>
                    <text x="920" y="900" text-anchor="start">Y</text>
                    <text x="560" y="220" text-anchor="middle">V</text>
                    <text x="600" y="810" text-anchor="middle">W</text>
    
                    <line x1="100" x2="520" y1="460" y2="240" stroke="red" stroke-width={4} marker-start="url(#arrow)" marker-end="url(#arrow)" />
                    <line x1="100" x2="560" y1="540" y2="780" stroke="red" stroke-width={4} marker-start="url(#arrow)" marker-end="url(#arrow)" />
                    <text x="260" y="340" text-anchor="middle" fill="red">4 cm</text>
                    <text x="280" y="740" text-anchor="middle" fill="red">4,5 cm</text>
    
                    <line x1="140" x2="820" y1="500" y2="140" stroke="green" stroke-width={4} marker-start="url(#arrow)" marker-end="url(#arrow)" />
                    <line x1="140" x2="860" y1="500" y2="840" stroke="green" stroke-width={4} marker-start="url(#arrow)" marker-end="url(#arrow)" />
                    <text x="500" y="400" text-anchor="middle" fill="green">8 cm</text>
                    
                    <text x="600" y="980" text-anchor="middle">Les droites (WV) et (XY) sont parallèles.</text>
                    <text x="1000" y="500" text-anchor="start">Question :</text>
                    <line x1="1000" x2="1240" y1="510" y2="510" stroke="black" stroke-width={4} />
                    <text x="1000" y="620" text-anchor="start">Calculer la longueur UY.</text>
                {/snippet}
            </Schema>

            <LigneVide lignes={2} />

            <u>On sait que :</u>
                <Item>les points U, V, X sont alignés</Item>
                <Item>les points U, W, Y sont alignés</Item>
                <Item>{@html math("(\\text{WV})//(\\text{XY})")}</Item>
            <u>D'après</u> le théorème de Thalès : <br>
                
            {@html alignStar(`
                \\frac{\\text{UX}}{\\text{UV}} &= \\frac{\\text{UY}}{\\text{UW}} = \\frac{\\text{XY}}{\\text{VW}} \\\\[0.5cm]
                \\frac{8}{4} &= \\frac{\\text{UY}}{4{,}5} = \\frac{\\text{XY}}{\\text{VW}} \\\\[0.5cm]
                \\text{UY} &= \\frac{8 \\times 4{,}5}{4} = 9 & \\text{(produit en croix)} \\\\[0.5cm]
            `)}
        </Exemple>

</Contenu>