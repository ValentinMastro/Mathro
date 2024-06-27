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
        </Schema>
    </Partie>
</Chapitre>