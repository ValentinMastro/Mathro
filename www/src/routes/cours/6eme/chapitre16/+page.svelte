<script lang="ts">
	import { Chapitre, Partie, SousPartie } from "$lib/chapitrage/all_chapitrages";
    import { Definition, Propriete, Exemples, Remarque, Schema } from "$lib/chapitrage/sections/all_sections";
    import { math, display } from 'mathlifier';
</script>

<Chapitre numero={16} titre="Aires">
    <Partie numero={1} titre="Unités d'aires et conversion">
        <SousPartie numero={1} titre="Concept">
            <Definition>
                L'aire d'une figure est la mesure de sa surface.
            </Definition>
            <Schema>
                <div style="display: flex; justify-content: center; align-items: center;">
                    <svg viewBox="-3 -3 610 610" width="15vw">
                        <defs>
                            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="black" stroke-width="5" stroke-dasharray="15 15"/>
                            </pattern>
                        </defs>
                        <path d="M 200 0 l 0 600 l 400 0 l 0 -300 l -200 0 l 0 -300 z" fill="gray" stroke="black" stroke-width="5"/>
                        <rect x="0" y="0" width="605" height="605" fill="url(#grid)"/>
                    </svg>
                    <p>
                        L'aire de cette figure est de 18 carreaux, <br>
                        car il y a 18 carreaux à l'intérieur de la figure.
                    </p>
                </div>
            </Schema>
        </SousPartie>
        <SousPartie numero={2} titre="Le mètre carré">
            <Definition>
                L'unité légale de l'aire est le mètre carré, noté m².<br>
                Cela correspond à l'aire d'un carré de 1 mètre de côté.
            </Definition>
            <p class="noir">
                Pour convertir les unités d'aires entre elles, on utilise la tableau ci-dessous, 
                en utilisant les règles suivantes : 
            </p>
            <ul class="noir">
                <li>Le chiffre des unités est placé dans la colonne de droite de l'unité d'origine.</li>
                <li>
                    On complète par des 0 jusqu'à arriver à la colonne de droite de la nouvelle unité, 
                    et on place la virgule à cet endroit lorsqu'elle est nécessaire.
                </li>
            </ul>
            <table class="noir">
                <tr>
                    <th colspan="2">km²</th>
                    <th colspan="2">hm²</th>
                    <th colspan="2">dam²</th>
                    <th colspan="2">m²</th>
                    <th colspan="2">dm²</th>
                    <th colspan="2">cm²</th>
                    <th colspan="2">mm²</th>
                </tr>
                <tr style="height: 100px;">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <Exemples>
                <ul>
                    <li>
                        13 hm² = 130 000 m²
                    </li>
                    <li>
                        2,5 km² = 250 000 000 dm²
                    </li>
                    <li>
                        0,02 dm² = 0,000 002 dam²
                    </li>
                </ul>
            </Exemples>
            <Remarque>
                Un hectare (ha) est égal à 1 hm².<br>
                Un are (a) est égal à 1 dam².
            </Remarque>
        </SousPartie>
    </Partie>
    <Partie numero={2} titre="Formules d'aires">
        <SousPartie numero={1} titre="Polygones">
            <table style="color: black; ">
                <tr>
                    <th>Figure</th>
                    <th>Formule</th>
                    <th>Schéma</th>
                </tr>
                <tr>
                    <td>Carré</td>
                    <td>{@html math(`A = c \\times c`)}</td>
                    <td>
                        <svg viewBox="0 0 250 250" style="width: 10vw;">
                            <rect x="50" y="50" width="150" height="150" 
                                stroke="black" stroke-width="3" fill="none"/>
                            <!-- Codage -->
                            <text x="125" y="30" text-anchor="middle" font-size="25pt">côté</text>
                            <line x1="125" y1="40" x2="125" y2="60" stroke="black" stroke-width="3"/>
                            <line x1="125" y1="190" x2="125" y2="210" stroke="black" stroke-width="3"/>
                            <line x1="40" y1="125" x2="60" y2="125" stroke="black" stroke-width="3"/>
                            <line x1="190" y1="125" x2="210" y2="125" stroke="black" stroke-width="3"/>
                        </svg>
                    </td>
                </tr>
                <tr>
                    <td>Rectangle</td>
                    <td>{@html math(`A = L \\times \\ell`)}</td>
                    <td>
                        <svg viewBox="-50 0 350 180" style="width: 20vw;">
                            <rect x="50" y="50" width="150" height="100" 
                                stroke="black" stroke-width="3" fill="none"/>
                            <!-- Codage -->
                            <text x="125" y="30" text-anchor="middle" font-size="20pt">longueur</text>
                            <text x="260" y="110" text-anchor="middle" font-size="20pt">largeur</text>
                            <line x1="125" y1="40" x2="125" y2="60" stroke="black" stroke-width="3"/>
                            <line x1="125" y1="140" x2="125" y2="160" stroke="black" stroke-width="3"/>
                            <line x1="40" y1="100" x2="60" y2="100" stroke="black" stroke-width="3"/>
                            <line x1="190" y1="100" x2="210" y2="100" stroke="black" stroke-width="3"/>
                        </svg>
                    </td>
                </tr>
                <tr>
                    <td>Triangle</td>
                    <td>{@html math(`A = b \\times h \\div 2`)}</td>
                    <td>
                        <svg viewBox="0 0 250 250" style="width: 10vw;">
                            <polygon points="50,200 200,200 125,50" 
                                stroke="black" stroke-width="3" fill="none"/>
                            <!-- Codage -->
                            <text x="125" y="230" text-anchor="middle" font-size="20pt" fill="green">base</text>
                            <text x="180" y="150" text-anchor="middle" font-size="20pt" fill="red">hauteur</text>
                            <line x1="125" y1="200" x2="125" y2="50" stroke="red" stroke-width="3"/>
                            <line x1="50" y1="200" x2="200" y2="200" stroke="lightgreen" stroke-width="4"/>
                        </svg>
                    </td>
                </tr>
                <tr>
                    <td>Losange</td>
                    <td>{@html math(`A = d \\times D \\div 2`)}</td>
                    <td>
                        <svg viewBox="0 0 250 250" style="width: 12vw;">
                            <polygon points="125,80 230,125 125,170 20,125" 
                                stroke="black" stroke-width="3" fill="none"/>
                            <!-- Codage -->
                            <text x="135" y="120" text-anchor="middle" font-size="20pt" fill="red">d</text>
                            <line x1="125" y1="170" x2="125" y2="80" stroke="red" stroke-width="3"/>
                            <text x="100" y="120" text-anchor="middle" font-size="20pt" fill="green">D</text>
                            <line x1="20" y1="125" x2="230" y2="125" stroke="lightgreen" stroke-width="3"/>
                        </svg>
                    </td>
                </tr>
            </table>
        </SousPartie>
        <SousPartie numero={2} titre="Disque">
            <Propriete>
                L'aire d'un disque de rayon {@html math(`r`)} est donnée par la formule :<br>
                {@html display(`A = \\pi \\times \\text{rayon} \\times \\text{rayon}`)}
            </Propriete>
            <Exemples>
                <ul>
                    <li>
                        L'aire d'un disque de rayon 5 cm : 
                        {@html display(`
                            \\begin{align*}
                                A &= \\pi \\times r \\times r \\\\
                                &= \\pi \\times 5~cm \\times 5~cm \\\\
                                &= 78,54~cm^2
                            \\end{align*}
                        `)}
                    </li>
                    <li>
                        L'aire d'un <span style="color: red">quart de</span> disque de rayon 2 m :
                        {@html display(`
                            \\begin{align*}
                                A &= \\textcolor{red}{\\frac{1}{4}} \\times \\pi \\times r \\times r \\\\
                                &= \\textcolor{red}{\\frac{1}{4}} \\times \\pi \\times 2~m \\times 2~m \\\\
                                &= 3,14~m^2
                            \\end{align*}
                        `)}
                    </li>
                </ul>
            </Exemples>
        </SousPartie>
    </Partie>
</Chapitre>

<!--
    Pour illustrer les conversions, on peut utiliser 2 schémas :
    - un schéma avec un carré de 10 m de côté,
    - un schéma avec un carré de 1 dam de côté.
    De ce fait, on montre alors que 1 dam² = 100 m².
-->

<style>
    .noir {
        color: black;
    }
    table {
        width: 80%;
        margin: auto;
        border-collapse: collapse;
    }
    th, td {
        border: 1px solid black;
        padding: 5px;
        text-align: center;
    }
</style>