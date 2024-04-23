<script lang="ts">
    import { Chapitre, Partie, SousPartie } from "$lib/chapitrage/all_chapitrages";
    import { Definition, Schema, Notation, Propriete, Paragraphe } from "$lib/chapitrage/sections/all_sections";
    import { math, display } from 'mathlifier';
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
            {@html math("(d_1) // (d_2)")}
        </Notation>

        <Definition>    import Katex from "svelte-katex";
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
            {@html math("(d_5) \\perp (d_6)")}
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
        <SousPartie numero={1} titre="Première propriété">
            <Propriete>
                Si deux droites sont parallèles à une même droite, alors elles sont parallèles entre elles.
                <div    class="explication"
                        title="Si (d1) est parallèle à (d2) et (d2) est parallèle à (d3), alors (d1) est parallèle à (d3).">
                    {@html math("(d_1) // (d_2) \land (d_2) // (d_3) \implies (d_1) // (d_3)")}
                </div>
            </Propriete>
            <Schema>
                <svg viewBox="0 0 220 200" width="40ex">
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
                    <div class="exercice">
                        <u>Exercice :</u>
                        <ul>
                            <li>Tracer un rectangle ABCD</li>
                            <li>Tracer {@html math("(d) // (AB)")} </li>
                            <li>Montrer que {@html math("(d) // (CD)")}</li>
                        </ul>
                    </div>
                    <svg viewBox="0 0 400 200" style="height: 30ex;">
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
                            {@html math("(d) // (AB)")}
                        </li>
                        <li>
                            ABCD est un rectangle, donc : {@html math("(AB) // (CD)")}
                        </li>
                    </ul>
                </Paragraphe>
                <u>Or : </u> Si deux droites sont parallèles à une même droite, alors elles sont parallèles entre elles.<br>
                <u>Donc : </u> {@html math("(d)//(CD)")}
            </Paragraphe>
        </SousPartie>
        <SousPartie numero={2} titre="Deuxième propriété">
            <Propriete>
                Si deux droites sont perpendiculaires à une même droite, alors elles sont parallèles entre elles.
                <div class="explication"
                    title="Si (d1) est perpendiculaire à (d2) et (d2) est perpendiculaire à (d3), alors (d1) est parallèle à (d3)."
                >
                    {@html display("(d_1) \\perp (d_2) \\land (d_2) \\perp (d_3) \\implies (d_1) // (d_3)")}
                </div>
            </Propriete>
            <Schema>
                <svg viewBox="0 0 220 200" width="40ex">
                    <line x1="50" y1="200" x2="150" y2="0" stroke="black" />
                    <line x1="0" y1="0" x2="200" y2="100" stroke="black" />
                    <line x1="0" y1="100" x2="200" y2="200" stroke="black" />
                    <text x={180} y={85} font-family="Katex_Main" font-size="12px">
                        (d )
                        <tspan dx="-2.9ex" dy="0.3em" font-size="8px">1</tspan>
                    </text>
                    <text x={150} y={15} font-family="Katex_Main" font-size="12px">
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
                    <div class="exercice">
                        <u>Exercice :</u><br>
                        <svg viewBox="0 0 400 200" style="height: 15ex;">
                            <line x1="50" y1="40" x2="320" y2="40" stroke="black" />
                            <line x1="50" y1="160" x2="320" y2="160" stroke="black" />
                            <line x1="50" y1="40" x2="50" y2="160" stroke="black" />
                            <text x="200" y="30" font-family="Katex_Main" font-size="15px" text-anchor="middle">
                                plafond
                            </text>
                            <text x="200" y="175" font-family="Katex_Main" font-size="15px" text-anchor="middle">
                                sol
                            </text>
                            <text x="40" y="100" font-family="Katex_Main" font-size="15px" text-anchor="end">
                                mur
                            </text>
                            <rect x="50" y="40" width="10" height="10" stroke="black" fill="none" />
                            <rect x="50" y="150" width="10" height="10" stroke="black" fill="none" />
                        </svg>
                        <br>
                        Démontrer que le sol est parallèle au plafond.
                    </div>
                </div>
                <Paragraphe couleur="blue" nom="On sait que">
                    <ul>
                        <li>
                            {@html math("(\\text{sol}) \\perp (\\text{mur})")}
                        </li>
                        <li>
                            {@html math("(\\text{plafond}) \\perp (\\text{mur})")}
                        </li>
                    </ul>
                </Paragraphe>
                <u>Or : </u> Si deux droites sont perpendiculaires à une même droite, alors elles sont parallèles entre elles.<br>
                <u>Donc : </u> {@html math("(\\text{sol}) // (\\text{plafond})")}
            </Paragraphe>
        </SousPartie>
        <SousPartie numero={3} titre="Troisième propriété">
            <Propriete>
                Si deux droites sont parallèles, alors toute droite perpendiculaire à l'une est perpendiculaire à l'autre.
                <div class="explication"
                    title="Si (d1) est parallèle à (d2) et (d2) est perpendiculaire à (d3), alors (d1) est perpendiculaire à (d3).">
                    {@html display("(d_1) // (d_2) \\land (d_2) \\perp (d_3) \\implies (d_1) \\perp (d_3)")}
                </div>
            </Propriete>
            <Schema>
                <svg viewBox="0 0 220 200" width="40ex">
                    <line x1="50" y1="200" x2="150" y2="0" stroke="black" />
                    <line x1="0" y1="0" x2="200" y2="100" stroke="black" />
                    <line x1="0" y1="100" x2="200" y2="200" stroke="black" />
                    <text x={180} y={85} font-family="Katex_Main" font-size="12px">
                        (d )
                        <tspan dx="-2.9ex" dy="0.3em" font-size="8px">1</tspan>
                    </text>
                    <text x={150} y={15} font-family="Katex_Main" font-size="12px">
                        (d )
                        <tspan dx="-2.9ex" dy="0.3em" font-size="8px">3</tspan>
                    </text>
                    <text x={180} y={185} font-family="Katex_Main" font-size="12px">
                        (d )
                        <tspan dx="-2.9ex" dy="0.3em" font-size="8px">2</tspan>
                    </text>
                </svg>
            </Schema>
            <Paragraphe couleur="blue" nom="Exemple de rédaction">
                <div class="conteneur_flex">
                    <div class="exercice">
                        <u>Exercice :</u>
                        <ul>
                            <li>Tracer un triangle ABC rectangle en A</li>
                            <li>Tracer {@html math("(DE) // (AC)")} telle que {@html math("E \\in (AB)")} </li>
                            <li>Montrer que ADE est un triangle rectangle.</li>
                        </ul>
                    </div>
                    <svg viewBox="0 0 400 200" style="height: 15ex;">
                        <!-- Triangle ABC rectangle en A -->
                        <line x1="50" y1="180" x2="200" y2="180" stroke="black" />
                        <line x1="50" y1="180" x2="200" y2="50" stroke="black" />
                        <line x1="200" y1="50" x2="200" y2="180" stroke="black" />
                        <text x="200" y="195" font-family="Katex_Main" font-size="15px" text-anchor="middle">
                            A
                        </text>
                        <text x="200" y="40" font-family="Katex_Main" font-size="15px" text-anchor="middle">
                            C
                        </text>
                        <text x="50" y="195" font-family="Katex_Main" font-size="15px" text-anchor="middle">
                            B
                        </text>
                        <!-- Tracer (DE)//(AC) telle que E \in (AB) -->
                        <line x1="320" y1="30" x2="320" y2="180" stroke="black" />
                        <line x1="320" y1="30" x2="200" y2="180" stroke="black" />
                        <line x1="200" y1="180" x2="320" y2="180" stroke="black" />
                        <text x="320" y="25" font-family="Katex_Main" font-size="15px" text-anchor="middle">
                            D
                        </text>
                        <text x="320" y="195" font-family="Katex_Main" font-size="15px" text-anchor="middle">
                            E
                        </text>
                        <rect x="190" y="170" width="10" height="10" stroke="none" fill="red" />
                        <rect x="310" y="170" width="10" height="10" stroke="none" fill="red" />
                    </svg>
                </div>
                <Paragraphe couleur="blue" nom="On sait que">
                    <ul>
                        <li>
                            ABC est un triangle rectangle en A : {@html math("(AB) \\perp (AC)")}
                        </li>
                        <li>
                            {@html math("(DE) // (AC)")}
                        </li>
                    </ul>
                </Paragraphe>
                <u>Or : </u> Si deux droites sont parallèles, alors toute droite perpendiculaire à l'une est perpendiculaire à l'autre.<br>
                <u>Donc : </u> {@html math("(DE) \\perp (AB)")}<br>
                Comme {@html math("E \\in (AB)")}, alors {@html math("(DE) \\perp (AE)")}<br>
                Donc ADE est un triangle rectangle en E.
            </Paragraphe>
        </SousPartie>
    </Partie>
    <Partie numero={3} titre="Distance entre un point et une droite">
        <Definition>
            La <i>distance</i> entre un point et une droite est la longueur du segment perpendiculaire à la droite passant par le point.<br>
            C'est <i>le plus court chemin</i> entre le point et la droite.
        </Definition>
        <Schema>
            <svg viewBox="0 0 600 200">
                <line x1="0" y1="0" x2="200" y2="100" stroke="black" />
                <text x={180} y={85} font-family="Katex_Main" font-size="12px">
                    (d )
                    <tspan dx="-2.9ex" dy="0.3em" font-size="8px">1</tspan>
                </text>
                <circle cx="46" cy="73" r="2" fill="red" stroke="none" />
                <text x={42} y={85} font-family="Katex_Main" font-size="10px" fill="red">C</text>
                <line x1="46" y1="73" x2="65" y2="32" stroke="red" />
                <text x={38} y={15} font-family="Katex_Main" font-size="10px" fill="red">A</text>
                <text x={128} y={60} font-family="Katex_Main" font-size="10px" fill="red">B</text>
                <line x1={38-5} y1={15+5} x2={38-3} y2={15} stroke="red" />
                <line x1={128-5} y1={60+5} x2={128-3} y2={60} stroke="red" />
                <rect   width="5" height="5" stroke="none" 
                        style="transform-box: fill-box; transform-origin: center; transform: rotate(25deg);" 
                        x="63" y="33" fill="green"></rect>
            </svg>
        </Schema>
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
    .exercice {
        width: fit-content; 
        height: fit-content; 
        padding: 5px; 
        border: 2px solid blue;
    }
</style>