<script lang="ts">
    import { Chapitre, Partie, SousPartie } from "$lib/chapitrage/all_chapitrages";
    import { Definition, Propriete, Schema, Paragraphe, Formule, Exemples, Remarque, Notation } from "$lib/chapitrage/sections/all_sections";
    import { math, display } from 'mathlifier';
</script>

<Chapitre numero={14} titre="Repérage dans un pavé droit">
    <Partie numero={1} titre="Sur une droite (1 dimension)">
        <Definition>
            Une droite graduée est une droite munie de 3 éléments : 
            <ul>
                <li>un point, appelé l'origine</li>
                <li>une unité de longueur</li>
                <li>un sens</li>
            </ul>
        </Definition>
        <Exemples singulier>
            <svg viewBox="0 0 100 20" style="height: 5em">
                <defs>
                    <marker id="triangle" viewBox="0 0 10 10" refX="0" refY="5" markerUnits="strokeWidth" markerWidth="4" markerHeight="3" orient="auto">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="black" />
                    </marker>
                </defs>
                <line x1="0" y1="10" x2="90" y2="10" stroke="black" marker-end="url(#triangle)" stroke-width="0.5" />
                {#each Array(8) as _, i}
                    <line x1={(i+1) * 10} y1="9" x2={(i+1) * 10} y2="11" stroke="black" stroke-width="0.5" />
                {/each}
            </svg>
        </Exemples>
        <Definition>
            L'abscisse d'un point est le nombre permettant de le repérer sur la droite graduée
        </Definition>
        <Exemples singulier>
            <svg viewBox="0 0 100 20" style="height: 5em">
                <defs>
                    <marker id="triangle" viewBox="0 0 10 10" refX="0" refY="5" markerUnits="strokeWidth" markerWidth="4" markerHeight="3" orient="auto">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="black" />
                    </marker>
                </defs>
                <line x1="0" y1="10" x2="90" y2="10" stroke="black" marker-end="url(#triangle)" stroke-width="0.5" />
                {#each Array(8) as _, i}
                    <line x1={(i+1) * 10} y1="9" x2={(i+1) * 10} y2="11" stroke="black" stroke-width="0.5" />
                {/each}
                <text x="40" y="15" font-size="5" fill="black" text-anchor="middle">0</text>
                <text x="50" y="15" font-size="5" fill="black" text-anchor="middle">1</text>
                <text x="10" y="8" font-size="5" fill="black" text-anchor="middle">A</text>
                <text x="30" y="8" font-size="5" fill="black" text-anchor="middle">B</text>
                <text x="60" y="8" font-size="5" fill="black" text-anchor="middle">C</text>
                <text x="80" y="8" font-size="5" fill="black" text-anchor="middle">D</text>
            </svg>
        </Exemples>
        <Notation>
            {@html math("\\text{A}(-3) \\quad \\text{B}(-1) \\quad \\text{C}(2) \\quad \\text{D}(4)") }
        </Notation>
    </Partie>
    <Partie numero={2} titre="Sur le plan (2 dimensions)">
        <Definition>
            Un repère orthogonal est constitué de 3 éléments : 
            <ul>
                <li>un point, appelé l'origine du repère</li>
                <li>l'axe des abscisses</li>
                <li>l'axe des ordonnées</li>
            </ul>
            Les axes des abscisses et des ordonnées sont perpendiculaires.
        </Definition>
        <Notation>
            {@html math("(\\text{O};x;y)") } est le repère orthogonal constitué de l'origine {@html math("\\text{O}") }, 
            de l'axe des abscisses {@html math("x") } et de l'axe des ordonnées {@html math("y") }.
        </Notation>
        <Definition>
            À chaque point du plan, on associe deux nombres que l'on appellent ses coordonnées : 
            son <i>abscisse</i> (horizontale) et son <i>ordonnée</i> (verticale).
        </Definition>
        <Schema>
            <svg viewBox="0 -5 105 105" style="height: 30em">
                <defs>
                    <marker id="triangle" viewBox="0 0 10 10" refX="0" refY="5" markerUnits="strokeWidth" markerWidth="4" markerHeight="3" orient="auto">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="black" />
                    </marker>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="black" stroke-width="0.1" />
                    </pattern>
                    <style>
                        text {
                            font-family: 'Katex_Math';
                            text-anchor: middle;
                            font-size: 0.4em;
                            fill: black;
                        }
                        .point {
                            font-family: 'Katex_Math_Regular';
                        }
                    </style>
                    <g id="croix">
                        <line x1="-1" y1="-1" x2="1" y2="1" stroke="black" stroke-width="0.3" />
                        <line x1="-1" y1="1" x2="1" y2="-1" stroke="black" stroke-width="0.3" />
                    </g>
                </defs>
                <rect x="0" y="0" width="100" height="100" fill="url(#grid)" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="black" marker-end="url(#triangle)" stroke-width="0.5" />
                <line x1="50" y1="100" x2="50" y2="0" stroke="black" marker-end="url(#triangle)" stroke-width="0.5" />
                <text x="46" y="56" class="point">O</text>
                <text x="47" y="5">y</text>
                <text x="97" y="49">x</text>
                <use x="30" y="60" href="#croix" />
                <text x="26" y="66" class="point">T</text>
                <use x="80" y="10" href="#croix" />
                <text x="76" y="16" class="point">U</text>
                <use x="50" y="30" href="#croix" />
                <text x="46" y="36" class="point">V</text>
                <use x="90" y="50" href="#croix" />
                <text x="86" y="56" class="point">W</text>
            </svg>
        </Schema>
        <Notation>
            {@html math("\\text{T}(-2 ; -1), \\text{U}(3 ; 4), \\text{V}(0 ; 2), \\text{W}(4 ; 0)") }
        </Notation>
        <Paragraphe nom="Méthode" couleur="red">
            Pour calculer la distance entre 2 points d'un repère orthogonal, on peut utiliser les coordonnées des points et 
            le théorème de Pythagore.
        </Paragraphe>
        <Exemples singulier>
            <svg viewBox="0 -5 105 105" style="height: 30em">
                <defs>
                    <marker id="triangle" viewBox="0 0 10 10" refX="0" refY="5" 
                            markerUnits="strokeWidth" markerWidth="4" markerHeight="3" 
                            orient="auto">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="black" />
                    </marker>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="black" stroke-width="0.1" />
                    </pattern>
                    <style>
                        text {
                            font-family: 'Katex_Math';
                            text-anchor: middle;
                            font-size: 0.4em;
                            fill: black;
                        }
                        .point {
                            font-family: 'Katex_Math_Regular';
                        }
                        .distance {
                            font-family: 'Katex_Math_Regular';
                            font-size: 0.3em;
                            fill: red;
                        }
                    </style>
                    <g id="croix">
                        <line x1="-1" y1="-1" x2="1" y2="1" stroke="black" stroke-width="0.3" />
                        <line x1="-1" y1="1" x2="1" y2="-1" stroke="black" stroke-width="0.3" />
                    </g>
                </defs>
                <rect x="0" y="0" width="100" height="100" fill="url(#grid)" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="black" marker-end="url(#triangle)" stroke-width="0.5" />
                <line x1="50" y1="100" x2="50" y2="0" stroke="black" marker-end="url(#triangle)" stroke-width="0.5" />
                <text x="46" y="56" class="point">O</text>
                <text x="47" y="5">y</text>
                <text x="97" y="49">x</text>
                <use x="70" y="20" href="#croix" />
                <text x="66" y="18" class="point">A</text>
                <use x="40" y="70" href="#croix" />
                <text x="36" y="76" class="point">B</text>
                <line x1="70" y1="20" x2="40" y2="70" stroke="red" stroke-width="0.5" />
                <line x1="70" y1="20" x2="70" y2="70" stroke="green" stroke-width="0.5" />
                <line x1="40" y1="70" x2="70" y2="70" stroke="green" stroke-width="0.5" />
                <rect x="68" y="68" width="2" height="2" fill="green" />
                <text x="18" y="21" class="point">A(2;3)</text>
                <text x="18" y="28" class="point">B(-1;-2)</text>
                <text x="55" y="75" class="distance">3</text>
                <text x="72" y="48" class="distance">5</text>
        </Exemples>
        <p style="color: blue;">
            {@html math("[\\text{AB}]")} est l'hypoténuse du triangle rectangle.
        </p>
        <p style="color: red;">
            {@html math("\\Delta y = 3 - (-2) = 3 + (+2) = 5")} <br>
            {@html math("\\Delta x = 2 - (-1) = 2 + (+1) = 3")}
        </p>
        <p style="color: blue;">
            D'après le théorème de Pythagore : <br>
            {@html display(`
                \\begin{align*}
                    \\text{AB}^2 &= \\Delta x^2 + \\Delta y^2 \\\\
                    \\text{AB}^2 &= 3^2 + 5^2 \\\\
                    \\text{AB}^2 &= 9 + 25 \\\\
                    \\text{AB}^2 &= 34 \\\\
                    \\text{AB} &= \\sqrt{34} \\\\
                    \\text{AB} &\\approx 5{,}83
                \\end{align*}
            `)}
        </p>
    </Partie>
</Chapitre>