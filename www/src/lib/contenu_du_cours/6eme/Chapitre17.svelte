<script lang="ts">
    import { Chapitre, Partie, SousPartie } from "$lib/chapitrage/all_chapitrages";
    import { Definition, Exemples, Remarque, Paragraphe, Schema, Formule } from "$lib/chapitrage/sections/all_sections";
    import AnimationCube from "$lib/3d_geometrie/AnimationCube.svelte";
    import { math } from 'mathlifier';

    let angle_cylindre: number = 0;
    let angle_cone: number = 0;
    let angle_sphere: number = 0;
    let angle_sphere2: number = 0;

    function to_radians(angle: number): number {
        return angle * Math.PI / 180;
    }

    $: angle_cylindre_rad = to_radians(angle_cylindre);
    $: angle_cone_rad = to_radians(angle_cone);
</script>

<Chapitre numero={17} titre="Volumes">
    <Partie numero={1} titre="Unités de volume et de contenance">
        <Definition>
            La contenance d'un récipient est la mesure de l'espace qu'il peut contenir. Son unité est le litre ({@html math("\\ell")}). <br>
            Le volume d'un solide est la mesure de l'espace qu'il occupe. Son unité est le mètre cube (m<sup>3</sup>). <br>

            <svg viewBox="0 0 500 300" style="width: 50%;">
                <defs>
                    <pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse">
                        <path d="M 25 0 L 0 0 0 25" fill="none" stroke="gray" stroke-width="0.5" />
                    </pattern>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
                <rect x="50" y="100" width="150" height="150" stroke="black" fill="none" />
                <line x1="50" y1="100" x2="100" y2="50" stroke="black" />
                <line x1="200" y1="100" x2="250" y2="50" stroke="black" />
                <line x1="50" y1="250" x2="100" y2="200" stroke="black" stroke-dasharray="5,5" />
                <line x1="200" y1="250" x2="250" y2="200" stroke="black" />
                <line x1="100" y1="50" x2="250" y2="50" stroke="black" />
                <line x1="100" y1="200" x2="250" y2="200" stroke="black" stroke-dasharray="5,5" />
                <line x1="100" y1="50" x2="100" y2="200" stroke="black" stroke-dasharray="5,5" />
                <line x1="250" y1="50" x2="250" y2="200" stroke="black" />
                <text x="15" y="180" font-size="15" fill="black">1 m</text>
                <text x="255" y="120" font-size="15" fill="black">
                    <tspan>
                        Un mètre cube correspond au
                    </tspan>
                    <tspan dx="-201" dy="25">
                        volume d'un cube d'arête 1 m.
                    </tspan>
                </text>
            </svg>
        </Definition>

        <Remarque>
            1 m<sup>3</sup> = 1000 {@html math("\\ell")} <br>
            1 dm<sup>3</sup> = 1 {@html math("\\ell")} <br>
        </Remarque>

        <SousPartie numero={1} titre="Tableau de conversion">
            <table>
                <tr>
                    <th colspan="3">km<sup>3</sup></th>
                    <th colspan="3">hm<sup>3</sup></th>
                    <th colspan="3">dam<sup>3</sup></th>
                    <th colspan="3">m<sup>3</sup></th>
                    <th colspan="3">dm<sup>3</sup></th>
                    <th colspan="3">cm<sup>3</sup></th>
                    <th colspan="3">mm<sup>3</sup></th>
                </tr>
                <tr>
                    <!-- unités dérivées du litre (utilisation du l ronde) -->
                    {#each Array(11) as _, i}
                        <td></td>
                    {/each}
                    <td>kℓ</td>
                    <td>hℓ</td>
                    <td>daℓ</td>
                    <td>ℓ</td>
                    <td>dℓ</td>
                    <td>cℓ</td>
                    <td>mℓ</td>
                    {#each Array(3) as _, i}
                        <td></td>
                    {/each}
                </tr>
                <tr style="height: 100px;">
                    {#each Array(21) as _, i}
                        <td></td>
                    {/each}
                </tr>
            </table>
        </SousPartie>
    </Partie>
    <Partie numero={2} titre="Les polyèdres">
        <Definition>
            Un solide est un objet de l'espace, possédant 3 dimensions : longueur, largeur et hauteur. <br>
            La face d'un solide est une figure plane, en deux dimensions, qui le délimite. <br>
            Une arête est un segment commun à 2 faces. <br>
            Un sommet est le point commun à plusieurs arêtes.
        </Definition>
        <Schema>
            <svg viewBox="0 0 400 400" width='40%'>
                <defs>
                    <pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse">
                        <path d="M 25 0 L 0 0 0 25" fill="none" stroke="gray" stroke-width="0.5" />
                    </pattern>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,6 L9,3 z" fill="black" />
                    </marker>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />

                <!-- cube en perspective -->
                <polygon points="50,100 250,100 250,300 50,300" stroke="black" fill="none" />
                <line x1="50" y1="100" x2="125" y2="25" stroke="black" />
                <line x1="250" y1="100" x2="325" y2="25" stroke="black" />
                <line x1="250" y1="300" x2="325" y2="225" stroke="black" />
                <line x1="50" y1="300" x2="125" y2="225" stroke="black" stroke-dasharray="5,5"/>
                <line x1="125" y1="25" x2="325" y2="25" stroke="black" />
                <line x1="125" y1="225" x2="325" y2="225" stroke="black" stroke-dasharray="5,5"/>
                <line x1="325" y1="25" x2="325" y2="225" stroke="black" />
                <line x1="125" y1="225" x2="125" y2="25" stroke="black" stroke-dasharray="5,5"/>

                <!-- remplissage de la face de droite -->
                <polygon points="250,100 325,25 325,225 250,300" fill="rgba(0, 0, 0, 0.5)" />
                <!-- flèche pointant vers le centre de la face de droite -->
                <line x1="350" y1="162.5" x2="287.5" y2="162.5" stroke="black" marker-end="url(#arrow)" />
                <text x="355" y="165" font-size="15" fill="black" text-anchor="start" >face</text>

                <!-- arête de gauche en rouge -->
                <line x1="50" y1="100" x2="50" y2="300" stroke="red" stroke-width="5" />
                <text x="55" y="200" font-size="15" fill="red" text-anchor="start" >arête</text>

                <!-- sommet en bas, devant à droite en vert -->
                <circle cx="250" cy="300" r="8" fill="green" stroke="white" />
                <text x="260" y="305" font-size="15" fill="green" text-anchor="start" >sommet</text>
            </svg>
        </Schema>
        <Definition>
            Un polyèdre est un solide dont les faces sont des polygones. <br>
            Les polyèdres sont nommés en fonction du nombre de faces qu'ils possèdent :
            <ul style="columns: 2; width: fit-content;">
                <li> tétraèdre : 4 faces </li>
                <li> pentaèdre : 5 faces </li>
                <li> hexaèdre : 6 faces </li>
                <li> octaèdre : 8 faces </li>
                <li> décaèdre : 10 faces </li>
                <li> dodécaèdre : 12 faces </li>
                <li> icosaèdre : 20 faces </li>
            </ul>
        </Definition>
        <SousPartie numero={1} titre="Le cube">
            <Definition>
                Le cube est un hexaèdre régulier : il possède 6 faces carrées de même taille.
            </Definition>
            <Formule>
                Si l'arête d'un cube mesure {@html math("c")}, alors {@html math(`\\text{V}_{cube} = c \\times c \\times c`)}.
            </Formule>
            <Schema>
                <div style="display: flex; flex-direction: row; justify-content: space-around;">
                    <svg viewBox="25 0 350 325" width="30%">
                        <defs>
                            <pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse">
                                <path d="M 25 0 L 0 0 0 25" fill="none" stroke="gray" stroke-width="0.5" />
                            </pattern>
                        </defs>
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
                        
                        <!-- cube en perspective -->
                        <polygon points="50,100 250,100 250,300 50,300" stroke="black" fill="none" />
                        <line x1="50" y1="100" x2="125" y2="25" stroke="black" />
                        <line x1="250" y1="100" x2="325" y2="25" stroke="black" />
                        <line x1="250" y1="300" x2="325" y2="225" stroke="black" />
                        <line x1="50" y1="300" x2="125" y2="225" stroke="black" stroke-dasharray="5,5"/>
                        <line x1="125" y1="25" x2="325" y2="25" stroke="black" />
                        <line x1="125" y1="225" x2="325" y2="225" stroke="black" stroke-dasharray="5,5"/>
                        <line x1="325" y1="25" x2="325" y2="225" stroke="black" />
                        <line x1="125" y1="225" x2="125" y2="25" stroke="black" stroke-dasharray="5,5"/>
                    </svg>
                    <svg viewBox="25 0 350 325" width="30%">
                        <defs>
                            <pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse">
                                <path d="M 25 0 L 0 0 0 25" fill="none" stroke="gray" stroke-width="0.5" />
                            </pattern>
                        </defs>
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
                        
                        <!-- cube en perspective -->
                        <line x1="50" y1="100" x2="250" y2="100" stroke="black" stroke-dasharray="5,5"/>
                        <line x1="250" y1="100" x2="250" y2="300" stroke="black" stroke-dasharray="5,5"/>
                        <line x1="250" y1="300" x2="50" y2="300" stroke="black" />
                        <line x1="50" y1="300" x2="50" y2="100" stroke="black" />
                        <line x1="50" y1="100" x2="125" y2="25" stroke="black" />
                        <line x1="250" y1="100" x2="325" y2="25" stroke="black" stroke-dasharray="5,5"/>
                        <line x1="250" y1="300" x2="325" y2="225" stroke="black" />
                        <line x1="50" y1="300" x2="125" y2="225" stroke="black" />
                        <line x1="125" y1="25" x2="325" y2="25" stroke="black" />
                        <line x1="125" y1="225" x2="325" y2="225" stroke="black"/>
                        <line x1="325" y1="25" x2="325" y2="225" stroke="black" />
                        <line x1="125" y1="225" x2="125" y2="25" stroke="black"/>
                    </svg>
                    <div style="width: 40%; aspect-ratio: 1;">
                        <AnimationCube />
                    </div>
                </div>
            </Schema>
        </SousPartie>
        <SousPartie numero={2} titre="Pavé droit">
            <Definition>
                Un pavé droit (ou parallélépipède rectangle) est un hexaèdre (un polyèdre à 6 faces) dont toutes les faces sont des rectangles.<br>
                Il a 12 arêtes et 8 sommets.
            </Definition>
            <Formule>
                Si le pavé droit est de longueur {@html math(`\\text{L}`)}, de largeur {@html math("\\ell")}
                et de hauteur {@html math("h")}, alors {@html math(`\\text{V}_{pave} = \\text{L} \\times \\ell \\times h`)}.
            </Formule>
            <Schema>
                <div style="display: flex; flex-direction: row; justify-content: space-around;">
                    <svg viewBox="0 0 350 325" width="30%">
                        <defs>
                            <pattern id="grid_40" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="gray" stroke-width="0.5" />
                            </pattern>
                        </defs>
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#grid_40)" />
                        
                        <!-- pavé droit en perspective cavalière
                            longueur : 5*40 = 200
                            hauteur : 3*40 = 120
                        -->
                        <polygon points="40,80 240,80 240,200 40,200" stroke="black" fill="none" />
                        <line x1="40" y1="80" x2="80" y2="40" stroke="black" />
                        <line x1="240" y1="80" x2="280" y2="40" stroke="black" />
                        <line x1="240" y1="200" x2="280" y2="160" stroke="black" />
                        <line x1="40" y1="200" x2="80" y2="160" stroke="black" stroke-dasharray="5,5" />
                        <line x1="80" y1="40" x2="280" y2="40" stroke="black" />
                        <line x1="80" y1="160" x2="280" y2="160" stroke="black" stroke-dasharray="5,5" />
                        <line x1="280" y1="40" x2="280" y2="160" stroke="black" />
                        <line x1="80" y1="160" x2="80" y2="40" stroke="black" stroke-dasharray="5,5" />
                    </svg>
                    <svg viewBox="0 0 350 325" width="30%">
                        <defs>
                            <pattern id="grid_40" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="gray" stroke-width="0.5" />
                            </pattern>
                        </defs>
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#grid_40)" />

                        <!-- pavé droit en perspective cavalière
                            longueur : 3*40 = 120
                            hauteur : 5*40 = 200
                        -->
                        <rect x="120" y="40" width="120" height="200" stroke="black" fill="none" />
                        <line x1="120" y1="40" x2="80" y2="80" stroke="black" />
                        <line x1="240" y1="40" x2="200" y2="80" stroke="black" stroke-dasharray="5,5" />
                        <line x1="240" y1="240" x2="200" y2="280" stroke="black" />
                        <line x1="120" y1="240" x2="80" y2="280" stroke="black" />
                        <line x1="80" y1="80" x2="80" y2="280" stroke="black" />
                        <line x1="200" y1="80" x2="200" y2="280" stroke="black" stroke-dasharray="5,5" />
                        <line x1="80" y1="80" x2="200" y2="80" stroke="black" stroke-dasharray="5,5" />
                        <line x1="80" y1="280" x2="200" y2="280" stroke="black" />
                    </svg>
                </div>
            </Schema>
        </SousPartie>
        <SousPartie numero={3} titre="Pyramide">
            <Definition>
                Une pyramide est un polyèdre dont une face est un polygone (la base) et les autres des triangles (les faces latérales).<br>
                Tous les sommets de la base sont reliés en un point appelé <i>l'apex.</i><br>
            </Definition>
            <Formule>
                Si la pyramide a une hauteur {@html math("h")} et une base d'aire {@html math(`A_{base}`)}, 
                alors {@html math(`\\text{V}_{pyramide} = \\frac{1}{3} \\times A_{base} \\times h`)}.
            </Formule>
            <Schema>
                <svg viewBox="0 10 80 100" width="12em">
                    <defs>
                        <pattern id="grid_10" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="gray" stroke-width="0.5" />
                        </pattern>
                    </defs>
                    <rect x="0" y="0" width="100" height="100" fill="url(#grid_10)" />

                    <path d="M 20 70 L 40 90 L 60 80 L 60 60" fill="none" stroke="black" />
                    <line x1="20" y1="70" x2="60" y2="60" stroke="black" stroke-dasharray="1,1" />
                    <line x1="40" y1="20" x2="20" y2="70" stroke="black" />
                    <line x1="40" y1="20" x2="40" y2="90" stroke="black" />
                    <line x1="40" y1="20" x2="60" y2="80" stroke="black" />
                    <line x1="40" y1="20" x2="60" y2="60" stroke="black" />

                    <path d="M 20 70 L 40 90 L 60 80 L 60 60 Z" fill="red" fill-opacity="0.3" stroke="none" />
                    <line x1="43" y1="20" x2="55" y2="20" stroke="black" stroke-width="0.5" />
                    <polygon points="43,20 45,18 45,22" fill="black" />
                    <rect x="57" y="17" width="11" height="6" fill="white" />
                    <text x="57" y="21" font-size="5" fill="black" text-anchor="start">apex</text>
                    <rect x="18" y="92" width="45" height="6" fill="white" />
                    <text x="40" y="96" font-size="5" fill="red" text-anchor="middle">base quadrilatérale</text>
                </svg>
                <svg viewBox="0 10 80 100" width="12em">
                    <defs>
                        <pattern id="grid_10" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="gray" stroke-width="0.5" />
                        </pattern>
                    </defs>
                    <rect x="0" y="0" width="100" height="100" fill="url(#grid_10)" />

                    <path d="M 30 50 L 20 60 L 30 90 L 40 80 L 50 90 L 70 60 L 60 50 Z" fill="blue" fill-opacity="0.3" stroke="none" />

                    <path d="M 30 50 L 20 60 L 30 90 L 40 80 L 50 90 L 70 60" fill="none" stroke="black" />
                    <path d="M 70 60 L 60 50 L 30 50" fill="none" stroke="black" stroke-dasharray="1,1" />

                    <line x1="70" y1="10" x2="70" y2="60" stroke="black" />
                    <line x1="70" y1="10" x2="30" y2="50" stroke="black" />
                    <line x1="70" y1="10" x2="20" y2="60" stroke="black" />
                    <line x1="70" y1="10" x2="30" y2="90" stroke="black" />
                    <line x1="70" y1="10" x2="40" y2="80" stroke="black" />
                    <line x1="70" y1="10" x2="50" y2="90" stroke="black" />
                    <line x1="70" y1="10" x2="70" y2="60" stroke="black" />

                    <rect x="20" y="92" width="50" height="6" fill="white" />
                    <text x="45" y="96" font-size="5" fill="blue" text-anchor="middle">base heptagonale</text>
                    <rect x="50" y="12" width="11" height="6" fill="white" />
                    <text x="55.5" y="16" font-size="5" fill="black" text-anchor="middle">apex</text>
                </svg>
            </Schema>
        </SousPartie>
        <SousPartie numero={4} titre="Prisme droit">
            <Definition>
                Un prisme droit est un polyèdre dont deux des faces - les bases - sont des polygones identiques et parallèles.<br>
                Les autres faces - les faces latérales - sont des rectangles.<br>
            </Definition>
            <Formule>
                Si le prisme droit a une hauteur {@html math("h")} et une base d'aire {@html math(`A_{base}`)}, 
                alors {@html math(`\\text{V}_{prisme} = A_{base} \\times h`)}.
            </Formule>
            <Schema>
                <svg viewBox="0 10 90 100" width="12em">
                    <defs>
                        <pattern id="grid_10" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="gray" stroke-width="0.5" />
                        </pattern>
                    </defs>
                    <rect x="0" y="0" width="100" height="100" fill="url(#grid_10)" />

                    <polygon points="10,30 40,30 30,20" fill="none" stroke="black" />
                    <line x1="10" y1="30" x2="10" y2="70" stroke="black" />
                    <line x1="40" y1="30" x2="40" y2="70" stroke="black" />
                    <line x1="30" y1="20" x2="30" y2="60" stroke="black" stroke-dasharray="1,1" />
                    <line x1="10" y1="70" x2="40" y2="70" stroke="black" />
                    <line x1="10" y1="70" x2="30" y2="60" stroke="black" stroke-dasharray="1,1"/>
                    <line x1="30" y1="60" x2="40" y2="70" stroke="black" stroke-dasharray="1,1" />

                    <polygon points="50,70 80,70 70,60" fill="none" stroke="black" />
                    <line x1="50" y1="70" x2="50" y2="30" stroke="black" />
                    <line x1="80" y1="70" x2="80" y2="30" stroke="black" />
                    <line x1="70" y1="60" x2="70" y2="20" stroke="black" />
                    <line x1="50" y1="30" x2="80" y2="30" stroke="black" stroke-dasharray="1,1"/>
                    <line x1="50" y1="30" x2="70" y2="20" stroke="black" />
                    <line x1="80" y1="30" x2="70" y2="20" stroke="black" />
                </svg>
                <svg viewBox="0 10 90 100" width="12em">
                    <defs>
                        <pattern id="grid_10" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="gray" stroke-width="0.5" />
                        </pattern>
                    </defs>
                    <rect x="0" y="0" width="100" height="100" fill="url(#grid_10)" />

                    <polygon points="10,30 40,30 30,20" fill="none" stroke="black" />
                    <line x1="10" y1="30" x2="10" y2="70" stroke="black" />
                    <line x1="40" y1="30" x2="40" y2="70" stroke="black" />
                    <line x1="30" y1="20" x2="30" y2="60" stroke="black" stroke-dasharray="1,1" />
                    <line x1="10" y1="70" x2="40" y2="70" stroke="black" />
                    <line x1="10" y1="70" x2="30" y2="60" stroke="black" stroke-dasharray="1,1"/>
                    <line x1="30" y1="60" x2="40" y2="70" stroke="black" stroke-dasharray="1,1" />

                    <polygon points="50,70 80,70 70,60" fill="none" stroke="black" />
                    <line x1="50" y1="70" x2="50" y2="30" stroke="black" />
                    <line x1="80" y1="70" x2="80" y2="30" stroke="black" />
                    <line x1="70" y1="60" x2="70" y2="20" stroke="black" />
                    <line x1="50" y1="30" x2="80" y2="30" stroke="black" stroke-dasharray="1,1"/>
                    <line x1="50" y1="30" x2="70" y2="20" stroke="black" />
                    <line x1="80" y1="30" x2="70" y2="20" stroke="black" />
                </svg>
            </Schema>
        </SousPartie>
    </Partie>
    <Partie numero={3} titre="Solides de révolution">
        <Definition>
            Un solide de révolution est un solide obtenu en faisant tourner une figure plane autour d'un axe.
        </Definition>
        <SousPartie numero={1} titre="Cylindre de révolution">
            <Definition>
                Un cylindre est un solide obtenu en faisant tourner un rectangle autour d'un de ses côtés.
            </Definition>
            <Schema>
                <input type="range" min="0" max="360" step="1" bind:value={angle_cylindre} />
                <svg viewBox="0 0 100 100" width="10em">
                    <defs>
                        <clipPath id="bottom_clip">
                            <rect x="10" y="80" width="80" height="20" /> 
                        </clipPath>
                        <clipPath id="top_clip">
                            <rect x="10" y="60" width="80" height="20" />
                        </clipPath>
                    </defs>
                    <line x1="20" y1="20" x2="20" y2="80" stroke="black" />
                    <line x1="80" y1="20" x2="80" y2="80" stroke="black" />
                    <ellipse cx="50" cy="20" rx="30" ry="10" fill="none" stroke="black" />
                    <ellipse cx="50" cy="80" rx="30" ry="10" fill="none" stroke="black" clip-path="url(#bottom_clip)"/>
                    <ellipse cx="50" cy="80" rx="30" ry="10" fill="none" stroke="black" clip-path="url(#top_clip)" stroke-dasharray="5,5"/>
                </svg>
                <svg viewBox="0 0 100 100" width="10em">
                    <defs>
                        <clipPath id="bottom_clip">
                            <rect x="10" y="80" width="80" height="20" /> 
                        </clipPath>
                        <clipPath id="top_clip">
                            <rect x="10" y="60" width="80" height="20" />
                        </clipPath>
                    </defs>
                    <line x1="20" y1="20" x2="20" y2="80" stroke="black" />
                    <line x1="80" y1="20" x2="80" y2="80" stroke="black" />
                    <ellipse cx="50" cy="20" rx="30" ry="10" fill="none" stroke="black" />
                    <ellipse cx="50" cy="80" rx="30" ry="10" fill="none" stroke="black" clip-path="url(#bottom_clip)"/>
                    <ellipse cx="50" cy="80" rx="30" ry="10" fill="none" stroke="black" clip-path="url(#top_clip)" stroke-dasharray="5,5"/>
                    <path d="M 50 20 l {30*Math.cos(angle_cylindre_rad)} {30*Math.sin(angle_cylindre_rad)/3} l 0 60 L 50 80 l 0 -60" fill="red" fill-opacity="0.4" stroke="black" stroke-width="0.5" />
                </svg>
            </Schema>
        </SousPartie>
        <SousPartie numero={2} titre="Cône de révolution">
            <Definition>
                Un cône est un solide obtenu en faisant tourner un triangle rectangle autour d'un des côtés de l'angle droit.
            </Definition>
            <Schema>
                <input type="range" min="0" max="360" step="1" bind:value={angle_cone} />
                <svg viewBox="0 0 100 100" width="10em">
                    <defs>
                        <clipPath id="bottom_clip">
                            <rect x="10" y="80" width="80" height="20" /> 
                        </clipPath>
                        <clipPath id="top_clip">
                            <rect x="10" y="60" width="80" height="20" />
                        </clipPath>
                    </defs>
                    <line x1="50" y1="20" x2="20" y2="80" stroke="black" />
                    <line x1="50" y1="20" x2="80" y2="80" stroke="black" />
                    <ellipse cx="50" cy="80" rx="30" ry="10" fill="none" stroke="black" clip-path="url(#bottom_clip)"/>
                    <ellipse cx="50" cy="80" rx="30" ry="10" fill="none" stroke="black" clip-path="url(#top_clip)" stroke-dasharray="5,5"/>
                </svg>
                <svg viewBox="0 0 100 100" width="10em">
                    <defs>
                        <clipPath id="bottom_clip">
                            <rect x="10" y="80" width="80" height="20" /> 
                        </clipPath>
                        <clipPath id="top_clip">
                            <rect x="10" y="60" width="80" height="20" />
                        </clipPath>
                    </defs>
                    <line x1="50" y1="20" x2="20" y2="80" stroke="black" />
                    <line x1="50" y1="20" x2="80" y2="80" stroke="black" />
                    <path d="M 50 20 l 0 60 l {30*Math.cos(angle_cone_rad)} {30*Math.sin(angle_cone_rad)/3} Z" fill="red" fill-opacity="0.4" stroke="black" stroke-width="0.5" />
                    <ellipse cx="50" cy="80" rx="30" ry="10" fill="none" stroke="black" clip-path="url(#bottom_clip)"/>
                    <ellipse cx="50" cy="80" rx="30" ry="10" fill="none" stroke="black" clip-path="url(#top_clip)" stroke-dasharray="5,5"/>
                </svg>
            </Schema>
        </SousPartie>
        <SousPartie numero={3} titre="Sphère et boule">
            <Definition>
                On les obtient en faisant tourner un cercle/disque sur lui-même.<br>
                La sphère est vide, la boule est pleine.
            </Definition>
            <Schema>
                <div>
                    <input type="range" min="-90" max="90" step="1" bind:value={angle_sphere} />
                    <input type="range" min="-90" max="90" step="1" bind:value={angle_sphere2} />
                </div>
                <svg viewBox="0 0 100 100" width="10em">
                    <defs>
                        <clipPath id="bottom_clip__sphere">
                            <rect x="10" y="50" width="80" height="50" /> 
                        </clipPath>
                        <clipPath id="top_clip__sphere">
                            <rect x="10" y="0" width="80" height="50" />
                        </clipPath>
                    </defs>
                    <circle cx="50" cy="50" r="30" fill="none" stroke="black" />
                    <ellipse cx="50" cy="50" rx="30" ry="10" fill="none" stroke="black" clip-path="url(#bottom_clip__sphere)" />
                    <ellipse cx="50" cy="50" rx="30" ry="10" fill="none" stroke="black" clip-path="url(#top_clip__sphere)" stroke-dasharray="5,5"/>
                </svg>
                <svg viewBox="0 0 100 100" width="10em">
                    <defs>
                        <clipPath id="bottom_clip__sphere">
                            <rect x="10" y="50" width="80" height="50" /> 
                        </clipPath>
                        <clipPath id="top_clip__sphere">
                            <rect x="10" y="0" width="80" height="50" />
                        </clipPath>
                    </defs>
                    <circle cx="50" cy="50" r="30" fill="none" stroke="black" />
                    <ellipse cx="50" cy="50" rx="30" ry={30 * (90 - Math.abs(angle_sphere))/90} fill="red" fill-opacity="0.4" stroke="black" stroke-width="0.5" />
                    <ellipse cx="50" cy="50" rx="30" ry="10" fill="none" stroke="black" clip-path="url(#bottom_clip__sphere)" />
                    <ellipse cx="50" cy="50" rx="30" ry="10" fill="none" stroke="black" clip-path="url(#top_clip__sphere)" stroke-dasharray="5,5"/>
                </svg>
                <svg viewBox="0 0 100 100" width="10em">
                    <defs>
                        <clipPath id="bottom_clip__sphere">
                            <rect x="10" y="50" width="80" height="50" /> 
                        </clipPath>
                        <clipPath id="top_clip__sphere">
                            <rect x="10" y="0" width="80" height="50" />
                        </clipPath>
                    </defs>
                    <circle cx="50" cy="50" r="30" fill="none" stroke="black" />
                    <ellipse cx="50" cy="50" rx={30 * (90 - Math.abs(angle_sphere2)) / 90} ry="30" fill="green" fill-opacity="0.4" stroke="black" stroke-width="0.5" />
                    <ellipse cx="50" cy="50" rx="30" ry="10" fill="none" stroke="black" clip-path="url(#bottom_clip__sphere)" />
                    <ellipse cx="50" cy="50" rx="30" ry="10" fill="none" stroke="black" clip-path="url(#top_clip__sphere)" stroke-dasharray="5,5"/>
                </svg>
            </Schema>
        </SousPartie>
    </Partie>
</Chapitre>

<style>
    table {
        width: 100%;
        border-collapse: collapse;
        color: black;
    }

    th, td {
        border: 1px solid black;
        padding: 5px;
        text-align: center;
    }
</style>