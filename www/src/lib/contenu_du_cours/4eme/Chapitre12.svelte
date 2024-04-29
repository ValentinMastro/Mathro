<script lang="ts">
    import { Chapitre, Partie, SousPartie, SousSousPartie } from "$lib/chapitrage/all_chapitrages";
    import { Definition, Paragraphe, Formule, Schema } from "$lib/chapitrage/sections/all_sections";
    import { math, display } from 'mathlifier';
    import AnimationCube from "$lib/3d_geometrie/AnimationCube.svelte";
</script>

<Chapitre numero={12} titre="Solides de l'espace, volume et contenance">
    <Definition>
        Un solide est un objet de l'espace, possédant trois dimensions : longueur, largeur, hauteur.<br>
        La face d'un solide est une figure plane, en deux dimensions, qui le délimite.<br>
        Une arête est un segment commun à deux faces.<br>
        Un sommet est le point commun à plusieurs arêtes.
    </Definition>
    <svg viewBox="0 100 1000 320">
        <defs>
            <marker id="fleche" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="black" />
            </marker>
        </defs>
        <!-- Face de droite -->
        <path d="M 600 200 l 70 -70 l 0 200 l -70 70 Z" fill="gray" stroke="none" />
        <!-- Cube en perspective cavalière -->
        <rect x="400" y="200" width="200" height="200" fill="none" stroke="black" stroke-width="2" />
        <path d="M 400 200 l 70 -70 l 200 0 l 0 200" fill="none" stroke="black" stroke-width="2" />
        <path d="M 600 200 l 70 -70" fill="none" stroke="black" stroke-width="2" />
        <path d="M 600 400 l 70 -70" fill="none" stroke="black" stroke-width="2" />
        <path d="M 400 400 l 70 -70 l 200 0" fill="none" stroke="black" stroke-width="2" stroke-dasharray="2 5" />
        <path d="M 470 330 l 0 -200" fill="none" stroke="black" stroke-width="2" stroke-dasharray="2 5" />
        <!-- Légendes -->
        <text x="750" y="250" text-anchor="start" dominant-baseline="middle" font-size="20px" stroke="none" fill="black">
            Face
        </text>
        <line x1="740" y1="250" x2="650" y2="250" stroke="black" stroke-width="2" marker-end="url(#fleche)" />
        <text x="250" y="300" text-anchor="middle" dominant-baseline="middle" font-size="20px" stroke="none" fill="black">
            Arête
        </text>
        <line x1="280" y1="300" x2="380" y2="300" stroke="black" stroke-width="2" marker-end="url(#fleche)" />
        <text x="750" y="130" text-anchor="start" dominant-baseline="middle" font-size="20px" stroke="none" fill="black">
            Sommet
        </text>
        <line x1="740" y1="130" x2="680" y2="130" stroke="black" stroke-width="2" marker-end="url(#fleche)" />
    </svg>

    <Partie numero={1} titre="Volume et contenance">
        <Definition>
            Le volume d'un solide est la place qu'il occupe dans l'espace.<br>
            La contenance d'un récipient est le volume de liquide qu'il peut contenir.
        </Definition>
        <Paragraphe couleur="red" nom="Convention">
            Dans le Système International d'unités (SI), le volume s'exprime en mètres cubes (m<sup>3</sup>).<br>
            On exprime la contenance en litres (&#x2113;), sachant que 1000 &#x2113; = 1 m<sup>3</sup>.
        </Paragraphe>
        <table id="unites_volumes">
            <caption>Tableau de conversion des unités de volume et de contenance</caption>
            <tr>
                {#each Array(11) as _}
                    <th></th>
                {/each}
                <th>k&#x2113;</th>
                <th>h&#x2113;</th>
                <th>da&#x2113;</th>
                <th>&#x2113;</th>
                <th>d&#x2113;</th>
                <th>c&#x2113;</th>
                <th>m&#x2113;</th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
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
                {#each Array(21) as _}
                    <td />
                {/each}
            </tr>
        </table>
    </Partie>
    <Partie numero={2} titre="Solides de l'espace">
        <SousPartie numero={1} titre="Polyèdres">
            <Definition>
                Un polyèdre est un solide dont toutes les faces sont des polygones.
            </Definition>
            <Paragraphe couleur="black" nom="Nomenclature">
                <ul>
                    <li>Un tétraèdre a 4 faces</li>
                    <li>Un hexaèdre a 6 faces</li>
                    <li>Un octaèdre a 8 faces</li>
                    <li>Un décaèdre a 10 faces</li>
                    <li>Un dodécaèdre a 12 faces</li>
                </ul>
            </Paragraphe>
            <SousSousPartie numero={1} titre="Le cube">
                <Definition>
                    Un cube est un hexaèdre régulier, c'est-à-dire un polyèdre dont toutes les faces sont des carrés.<br>
                    Il a 12 arêtes et 8 sommets.
                </Definition>
                <Formule>
                    Si l'arête d'un cube mesure {@html math("c")}, alors {@html math(`\\text{V}_{cube} = c^3`)}.
                </Formule>
                <Schema>
                    <div style="display: flex; justify-content: space-around;">
                        <svg viewBox="380 120 300 350" style="width: 20%;">
                            <rect x="400" y="200" width="200" height="200" fill="none" stroke="black" stroke-width="2" />
                            <path d="M 400 200 l 50 -50 l 200 0 l 0 200" fill="none" stroke="black" stroke-width="2" />
                            <path d="M 600 200 l 50 -50" fill="none" stroke="black" stroke-width="2" />
                            <path d="M 600 400 l 50 -50" fill="none" stroke="black" stroke-width="2" />
                            <path d="M 400 400 l 50 -50 l 200 0" fill="none" stroke="black" stroke-width="2" stroke-dasharray="2 5" />
                            <path d="M 450 350 l 0 -200" fill="none" stroke="black" stroke-width="2" stroke-dasharray="2 5" />
                            <text x="390" y="430" text-anchor="start" dominant-baseline="middle" font-size="20px" stroke="none" fill="black">
                                Cube en perspective cavalière
                            </text>
                        </svg>
                        <div style="width: 40%; aspect-ratio: 1;">
                            <AnimationCube />
                        </div>
                    </div>
                </Schema>
            </SousSousPartie>
            <SousSousPartie numero={2} titre="Pavé droit">
                <Definition>
                    Un pavé droit (ou parallélépipède rectangle) est un hexaèdre (un polyèdre à 6 faces) dont toutes les faces sont des rectangles.<br>
                    Il a 12 arêtes et 8 sommets.
                </Definition>
                <Formule>
                    Si le pavé droit est de longueur {@html math(`\\text{L}`)}, de largeur {@html math("\\ell")}
                    et de hauteur {@html math(`\\text{h}`)}, alors {@html math(`\\text{V}_{pave} = \\text{L} \\times \\ell \\times h`)}.
                </Formule>
            </SousSousPartie>
            <SousSousPartie numero={3} titre="Pyramide">
                <Definition>
                    Une pyramide est un polyèdre dont une face est un polygone (la base) et les autres des triangles (les faces latérales).<br>
                    Tous les sommets de la base sont reliés en un point appelé <i>l'apex.</i><br>
                </Definition>
                <Formule>
                    Si la pyramide a une hauteur {@html math(`\\text{h}`)} et une base d'aire {@html math(`A_{base}`)}, 
                    alors {@html math(`\\text{V}_{pyramide} = \\frac{1}{3} \\times A_{base} \\times h`)}.
                </Formule>
            </SousSousPartie>
            <SousSousPartie numero={4} titre="Prisme droit">
                <Definition>
                    Un prisme droit est un polyèdre dont deux des faces - les bases - sont des polygones identiques et parallèles.<br>
                    Les autres faces - les faces latérales - sont des rectangles.<br>
                </Definition>
                <Formule>
                    Si le prisme droit a une hauteur {@html math(`\\text{h}`)} et une base d'aire {@html math(`A_{base}`)}, 
                    alors {@html math(`\\text{V}_{prisme} = A_{base} \\times h`)}.
                </Formule>
            </SousSousPartie>
        </SousPartie>
        <SousPartie numero={2} titre="Solides de révolution">
            <Definition>
                Un solide de révolution est un solide obtenu en faisant tourner un polygone autour d'un axe.<br>
                L'axe de révolution est une droite passant par le centre du polygone.
            </Definition>
            <SousSousPartie numero={1} titre="Cylindre de revolution">
                <Definition>
                    Un cylindre de révolution est un solide obtenu en faisant tourner un rectangle autour d'un de ses côtés.<br>
                </Definition>
                <Formule>
                    Si le cylindre a une hauteur {@html math(`h`)} et un rayon de base {@html math(`r`)}, 
                    alors {@html math(`\\text{V}_{cylindre} = \\pi r^2 \\times h`)}.
                </Formule>
            </SousSousPartie>
            <SousSousPartie numero={2} titre="Cône de révolution">
                <Definition>
                    Un cône de révolution est un solide obtenu en faisant tourner un triangle rectangle autour d'un des deux côtés qui n'est pas l'hypoténuse.<br>
                </Definition>
                <Formule>
                    Si le cône a une hauteur {@html math(`h`)} et un rayon de base {@html math(`r`)}, 
                    alors {@html math(`\\text{V}_{cone} = \\frac{1}{3} \\times \\pi r^2 \\times h`)}.
                </Formule>
            </SousSousPartie>
            <SousSousPartie numero={3} titre="Sphère et boule">
                <Definition>
                    Une sphère est un solide de révolution obtenu en faisant tourner un cercle autour de son diamètre.<br>
                    Une boule est une sphère pleine.
                </Definition>
                <Formule>
                    Si la sphère a un rayon {@html math(`r`)}, 
                    alors {@html math(`\\text{A}_{sphere} = 4 \\times \\pi r^2`)}
                    et {@html math(`\\text{V}_{boule} = \\frac{4}{3} \\times \\pi r^3`)}.
                </Formule>
            </SousSousPartie>
        </SousPartie>
    </Partie>
</Chapitre>

<style>
    #unites_volumes {
        border-collapse: collapse;
        margin: 0 auto;
        color: black;
    }
    #unites_volumes th, #unites_volumes td {
        border: 1px solid black;
        padding: 5px;
        width: calc(100% / 21);
    }
    #unites_volumes tr:last-child {
        height: 10ex;
    }
    #unites_volumes caption {
        margin-top: 2em;
        margin-bottom: 0.5em;
    }
</style>