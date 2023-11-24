<script lang="ts">
	import Chapitre from "$lib/chapitrage/Chapitre.svelte";
    import Partie from "$lib/chapitrage/Partie.svelte";
    import Definition from "$lib/chapitrage/sections/Definition.svelte";
	import Notation from "$lib/chapitrage/sections/Notation.svelte";
	import Schema from "$lib/chapitrage/sections/Schema.svelte";
    import Propriete from "$lib/chapitrage/sections/Propriete.svelte";
    import Paragraphe from "$lib/chapitrage/sections/Paragraphe.svelte";

    import Katex from "svelte-katex";
</script>


<Chapitre numero={8} titre="Droites parallèles et perpendiculaires">
    <Partie numero={1} titre="Constructions et définitions">
        <Definition>
            Deux droites sont <i>parallèles</i> si elles n'ont aucun point d'intersection.
        </Definition>
        <Schema>
            <svg viewBox="0 0 600 200">
                <line x1="0" y1="50" x2="200" y2="150" stroke="black" />
                <line x1="0" y1="0" x2="200" y2="100" stroke="black" />
                <text x={180} y={85} font-family="Katex_Main" font-size="12px">
                    (d )
                    <tspan dx="-2.9ex" dy="0.3em" font-size="8px">1</tspan>
                </text>
                <text x={180} y={135} font-family="Katex_Main" font-size="12px">
                    (d )
                    <tspan dx="-2.9ex" dy="0.3em" font-size="8px">2</tspan>
                </text>
                <text x={150} y={40} font-family="Katex_Main" font-size="10px" fill="blue">
                    outils: règle et équerre
                </text>
            </svg>
        </Schema>
        <Notation>
            <Katex>(d_1) // (d_2)</Katex>
        </Notation>

        <Definition>
            Deux droites sont sécantes, si elles ont un point d'intersection.
        </Definition>
        <Schema>
            <svg viewBox="0 0 600 200">
                <line x1="0" y1="50" x2="200" y2="150" stroke="black" />
                <line x1="50" y1="0" x2="40" y2="200" stroke="black" />
                <text x={50} y={10} font-family="Katex_Main" font-size="12px">
                    (d )
                    <tspan dx="-2.9ex" dy="0.3em" font-size="8px">3</tspan>
                </text>
                <text x={180} y={135} font-family="Katex_Main" font-size="12px">
                    (d )
                    <tspan dx="-2.9ex" dy="0.3em" font-size="8px">4</tspan>
                </text>
                <text x={150} y={40} font-family="Katex_Main" font-size="10px" fill="blue">
                    outil: règle
                </text>
                <circle cx="46" cy="73" r="2" fill="red" stroke="none" />
                <text x={50} y={73} font-family="Katex_Main" font-size="10px" fill="red">I</text>
            </svg>
        </Schema>
        <Notation>
            <span style="font-family: Katex_Main;">(d<sub>3</sub>) et (d<sub>4</sub>) sont sécantes en I.</span>
        </Notation>

        <Definition>
            Deux droites sécantes sont <i>perpendiculaires</i> si elles forment un angle droit.
        </Definition>
        <Schema>
            <svg viewBox="0 0 600 200">
                <line x1="0" y1="50" x2="200" y2="150" stroke="black" />
                <line x1="130" y1="0" x2="40" y2="200" stroke="black" />
                <text x={130} y={10} font-family="Katex_Main" font-size="12px">
                    (d )
                    <tspan dx="-2.9ex" dy="0.3em" font-size="8px">5</tspan>
                </text>
                <text x={180} y={135} font-family="Katex_Main" font-size="12px">
                    (d )
                    <tspan dx="-2.9ex" dy="0.3em" font-size="8px">6</tspan>
                </text>
                <text x={150} y={40} font-family="Katex_Main" font-size="10px" fill="blue">
                    outils: règle et équerre
                </text>
            </svg>
        </Schema>
        <Notation>
            <Katex>(d_5) \perp (d_6)</Katex>
        </Notation>

        <Definition>
            Deux droites sont <i>confondues</i> si elles ont une infinité de points d'intersection, 
            autrement dit, elles sont superposées.
        </Definition>
        <Schema>
            <svg viewBox="0 0 600 200">
                <line x1="0" y1="150" x2="200" y2="50" stroke="black" />
                <line x1="0" y1="150" x2="200" y2="50" stroke="red" stroke-dasharray="3,7" />
                <text x={160} y={50} font-family="Katex_Main" font-size="12px">
                    (d )
                    <tspan dx="-2.9ex" dy="0.3em" font-size="8px">7</tspan>
                </text>
                <text x={20} y={160} font-family="Katex_Main" font-size="12px" fill="red">
                    (d )
                    <tspan dx="-2.9ex" dy="0.3em" font-size="8px">8</tspan>
                </text>
            </svg>
        </Schema>
    </Partie>
    <Partie numero={2} titre="Relations entre 3 droites">
        <Propriete>
            Si deux droites sont parallèles à une même droite, alors elles sont parallèles entre elles.
            <div    class="explication"
                    title="Si (d1) est parallèle à (d2) et (d2) est parallèle à (d3), alors (d1) est parallèle à (d3).">
                <Katex displayMode>
                    (d_1) // (d_2) \land (d_2) // (d_3) \implies (d_1) // (d_3)
                </Katex>
            </div>
        </Propriete>
        <Schema>
            <svg viewBox="0 0 600 200">
                <line x1="0" y1="50" x2="200" y2="150" stroke="black" />
                <line x1="0" y1="0" x2="200" y2="100" stroke="black" />
                <line x1="0" y1="100" x2="200" y2="200" stroke="black" />
                <text x={180} y={85} font-family="Katex_Main" font-size="12px">
                    (d )
                    <tspan dx="-2.9ex" dy="0.3em" font-size="8px">1</tspan>
                </text>
                <text x={180} y={135} font-family="Katex_Main" font-size="12px">
                    (d )
                    <tspan dx="-2.9ex" dy="0.3em" font-size="8px">2</tspan>
                </text>
                <text x={180} y={185} font-family="Katex_Main" font-size="12px">
                    (d )
                    <tspan dx="-2.9ex" dy="0.3em" font-size="8px">3</tspan>
                </text>
            </svg>
        </Schema>
        <Paragraphe couleur="blue" nom="Exemple de rédaction">
            <div class="conteneur_flex">
                <div style="width: fit-content; height: fit-content; padding: 5px; border: 2px solid blue;">
                    <u>Exercice :</u>
                    <ul>
                        <li>Tracer un rectangle ABCD</li>
                        <li>Tracer <Katex>(d) // (AB)</Katex></li>
                        <li>Montrer que <Katex>(d) // (CD)</Katex></li>
                    </ul>
                </div>
                <svg viewBox="0 0 400 200" style="height: 25ex;">
                    <rect x="100" y="50" width="200" height="100" stroke="black" fill="none" />
                    <line x1="0" y1="20" x2="400" y2="20" stroke="black" />
                    <text x="30" y="35" font-family="Katex_Main" font-size="12px">
                        (d)
                    </text>
                    <text x="90" y="45" font-family="Katex_Main" font-size="12px">
                        A
                    </text>
                    <text x="300" y="45" font-family="Katex_Main" font-size="12px">
                        B
                    </text>
                    <text x="90" y="160" font-family="Katex_Main" font-size="12px">
                        C
                    </text>
                    <text x="300" y="160" font-family="Katex_Main" font-size="12px">
                        D
                    </text>
            </div>
            <Paragraphe couleur="blue" nom="On sait que">
                <ul>
                    <li>
                        <Katex>(d) // (AB)</Katex>
                    </li>
                    <li>
                        ABCD est un rectangle, donc : <Katex>(AB) // (CD)</Katex>
                    </li>
                </ul>
            </Paragraphe>
            <u>Or : </u> Si deux droites sont parallèles à une même droite, alors elles sont parallèles entre elles.<br>
            <u>Donc : </u> <Katex>(d) // (CD)</Katex>
        </Paragraphe>
        <Propriete>
            Si deux droites sont perpendiculaires à une même droite, alors elles sont parallèles entre elles.
            <div class="explication"
                title="Si (d1) est perpendiculaire à (d2) et (d2) est perpendiculaire à (d3), alors (d1) est parallèle à (d3)."
            >
                <Katex displayMode>
                    (d_1) \perp (d_2) \land (d_2) \perp (d_3) \implies (d_1) // (d_3)
                </Katex>
            </div>
        </Propriete>
    </Partie>
</Chapitre>

<style>
    .conteneur_flex {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    .explication {
        width: fit-content;
        height: fit-content;
    }
</style>