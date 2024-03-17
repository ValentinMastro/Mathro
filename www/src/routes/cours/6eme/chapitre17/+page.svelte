<script lang="ts">
    import { Chapitre, Partie, SousPartie } from "$lib/chapitrage/all_chapitrages";
    import { Definition, Exemples, Remarque, Paragraphe, Schema, Formule } from "$lib/chapitrage/sections/all_sections";
    import AnimationCube from "$lib/3d_geometrie/AnimationCube.svelte";
    import { math } from 'mathlifier';
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