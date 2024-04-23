<script lang="ts">
    import { Chapitre, Partie, SousPartie } from "$lib/chapitrage/all_chapitrages";
    import { Definition, Exemples, Propriete, Paragraphe } from "$lib/chapitrage/sections/all_sections";
    import { math, display } from 'mathlifier';
</script>

<Chapitre numero={12} titre="Proportionnalité">
    <Partie numero={1} titre="Grandeurs proportionnelles">
        <SousPartie numero={1} titre="Concept">
            <Definition>
                Une grandeur est une caractéristique quantifiable (souvent associée à une unité).
            </Definition>
            <Exemples>
                Distance (m), Prix (€), Durée (s), Température (°C), Masse (kg), Énergie (J), Puissance (W), Tension (V)
            </Exemples>
            <Definition>
                Deux grandeurs sont proportionnelles si, pour une valeur de l'une, la valeur de l'autre est obtenue en la multipliant par un nombre constant, 
                appelé coefficient de proportionnalité.
            </Definition>
            <Exemples>
                <ul>
                    <li>Le côté et le périmètre d'un carré sont proportionnels.</li>
                    <li>L'âge et la taille d'une personne ne sont pas proportionnels.</li>
                </ul>
            </Exemples>
        </SousPartie>
        <SousPartie numero={2} titre="Tableau de proportionnalité">
            <Exemples>
                <ul class="liste_sans_puce" style="columns: 2;">
                    <li>
                        <table class="donnees" style="width: 100%;">
                            <tr>
                                <th>Nombre de pommes</th>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <th>Prix (€)</th>
                                <td>0,30</td>
                                <td>0,60</td>
                                <td>0,90</td>
                            </tr>
                        </table>
                    </li>
                    <li>
                        <table class="donnees" style="width: 100%;">
                            <tr>
                                <th>Durée (h)</th>
                                <td>1</td>
                                <td>5</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <th>Distance (km)</th>
                                <td>50</td>
                                <td>250</td>
                                <td>500</td>
                            </tr>
                        </table>
                    </li>
                </ul>
            </Exemples>
        </SousPartie>
        <SousPartie numero={3} titre="Représentation graphique">
            <Propriete>
                Dans un graphique représentant deux grandeurs proportionnelles, les points sont alignés avec l'origine ;
                ils forment une droite passant par l'origine.
            </Propriete>
            <Exemples>
                <div style="display: flex; flex-direction: row; align-items: center; justify-content: space-between;">
                    <table class="donnees" style="height: fit-content;">
                        <tr>
                            <th>Nombre de pommes</th>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <th>Prix (€)</th>
                            <td>0,30</td>
                            <td>0,60</td>
                            <td>0,90</td>
                        </tr>
                    </table>
                    <svg viewBox="0 100 1000 900" style="width: 30%;">
                        <!-- Axes -->
                        <line x1="100" y1="900" x2="900" y2="900" stroke="black" stroke-width="2" />
                        <line x1="100" y1="900" x2="100" y2="100" stroke="black" stroke-width="2" />
                        <!-- Graduations -->
                        {#each [0, 1, 2, 3] as x}
                            <line x1={100 + x * 200} y1="890" x2={100 + x * 200} y2="910" stroke="black" stroke-width="2" />
                            <text x={100 + x * 200} y="940" text-anchor="middle" font-size="30px">{x}</text>
                        {/each}
                        {#each [0.10, 0.20, 0.30, 0.40, 0.50, 0.60, 0.70, 0.80, 0.90] as y}
                            <line x1="110" y1={900 - y * 800} x2="90" y2={900 - y * 800} stroke="black" stroke-width="2" />
                            <text x="80" y={900 - y * 800} text-anchor="end" dominant-baseline="middle" font-size="30px">{y.toLocaleString("fr-FR", {minimumFractionDigits: 2})}</text>
                        {/each}
                        <!-- Points -->
                        {#each [0.30, 0.60, 0.90] as y}
                            <circle cx={100 + (y/0.3) * 200} cy={900 - y * 800} r="10" fill="black" />
                            <line x1={100 + (y/0.3) * 200} y1="900" x2={100 + (y/0.3) * 200} y2={900 - y * 800} stroke="red" stroke-width="2" stroke-dasharray="2 4" />
                            <line x1="100" y1={900 - y * 800} x2={100 + (y/0.3) * 200} y2={900 - y * 800} stroke="red" stroke-width="2" stroke-dasharray="2 4" />
                        {/each}
                        <!-- Droite passant par tous les points -->
                        <line x1="100" y1="900" x2="850" y2="0" stroke="blue" stroke-width="2" />
                    </svg>
                </div>
            </Exemples>
        </SousPartie>
    </Partie>
    <Partie numero={2} titre="Quatrième proportionnelle">
        <div style="color: black">
            Dans cette partie, on liste plusieurs méthodes pour trouver la quatrième valeur d'un tableau de 
            proportionnalité.
        </div>

        <table class="raisins" style="color: black; margin: auto;">
            <tr>
                <th style="width: fit-content;">Masse de raisins (kg)</th>
                <td>3</td>
                <td>6</td>
            </tr>
            <tr>
                <th>Prix (€)</th>
                <td>7,80</td>
                <td>?</td>
            </tr>
        </table>

        <div style="display: flex; flex-direction: row; ">
            <SousPartie numero={1} titre="Homogénéité">
                <Paragraphe couleur="red" nom="Méthode">
                    Multiplier ou diviser toute une colonne par la même valeur.
                </Paragraphe>
                <svg viewBox="0 0 1100 300" style="width: 100%;">
                    <defs>
                        <style>
                            .text_raisins {
                                font-size: 28px;
                                text-anchor: middle;
                                dominant-baseline: middle;
                            }
                            .bold {
                                font-weight: bold;
                            }
                        </style>
                        <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
                            <path d="M0,0 L0,6 L9,3 z" fill="red" />
                        </marker>
                    </defs>
                    <!-- Tableau -->
                        <!-- Lignes horizontales -->
                    <line x1="100" y1="100" x2="1000" y2="100" stroke="black" stroke-width="2" />
                    <line x1="100" y1="150" x2="1000" y2="150" stroke="black" stroke-width="2" />
                    <line x1="100" y1="200" x2="1000" y2="200" stroke="black" stroke-width="2" />
                        <!-- Lignes verticales -->
                    <line x1="100" y1="100" x2="100" y2="200" stroke="black" stroke-width="2" />
                    <line x1="400" y1="100" x2="400" y2="200" stroke="black" stroke-width="2" />
                    <line x1="700" y1="100" x2="700" y2="200" stroke="black" stroke-width="2" />
                    <line x1="1000" y1="100" x2="1000" y2="200" stroke="black" stroke-width="2" />
                    <!-- Contenu -->
                    <text x="250" y="130" class="text_raisins bold">Masse de raisins (kg)</text>
                    <text x="250" y="180" class="text_raisins bold">Prix (€)</text>
                    <text x="550" y="130" class="text_raisins">3</text>
                    <text x="850" y="130" class="text_raisins">6</text>
                    <text x="550" y="180" class="text_raisins">7,80</text>
                    <text x="850" y="180" class="text_raisins">?</text>
                    <!-- Flèches -->
                    <path d="M550,80 a 150 30 0 0 1 300 0" stroke="red" stroke-width="2" fill="none" marker-end="url(#arrow)" />
                    <path d="M550,220 a 150 30 0 0 0 300 0" stroke="red" stroke-width="2" fill="none" marker-end="url(#arrow)" />
                    <!-- Légende -->
                    <text x="700" y="70" class="text_raisins" fill="red">× 2</text>
                    <text x="700" y="230" class="text_raisins" fill="red">× 2</text>
                </svg>
            </SousPartie>
            <SousPartie numero={2} titre="Passage à l'unité">
                <Paragraphe couleur="red" nom="Méthode">
                    Se ramener à une colonne contenant le nombre 1.
                </Paragraphe>
                <svg viewBox="0 0 1100 300" style="width: 100%;">
                    <defs>
                        <style>
                            .text_raisins {
                                font-size: 28px;
                                text-anchor: middle;
                                dominant-baseline: middle;
                            }
                            .bold {
                                font-weight: bold;
                            }
                        </style>
                        <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
                            <path d="M0,0 L0,6 L9,3 z" fill="red" />
                        </marker>
                    </defs>
                    <!-- Tableau -->
                        <!-- Lignes horizontales -->
                    <line x1="100" y1="100" x2="1000" y2="100" stroke="black" stroke-width="2" />
                    <line x1="100" y1="150" x2="1000" y2="150" stroke="black" stroke-width="2" />
                    <line x1="100" y1="200" x2="1000" y2="200" stroke="black" stroke-width="2" />
                        <!-- Lignes verticales -->
                    <line x1="100" y1="100" x2="100" y2="200" stroke="black" stroke-width="2" />
                    <line x1="400" y1="100" x2="400" y2="200" stroke="black" stroke-width="2" />
                    <line x1="600" y1="100" x2="600" y2="200" stroke="black" stroke-width="2" />
                    <line x1="800" y1="100" x2="800" y2="200" stroke="black" stroke-width="2" />
                    <line x1="1000" y1="100" x2="1000" y2="200" stroke="black" stroke-width="2" />
                    <!-- Contenu -->
                    <text x="250" y="130" class="text_raisins bold">Masse de raisins (kg)</text>
                    <text x="250" y="180" class="text_raisins bold">Prix (€)</text>
                    <text x="500" y="130" class="text_raisins">3</text>
                    <text x="700" y="130" class="text_raisins">1</text>
                    <text x="500" y="180" class="text_raisins">7,80</text>
                    <text x="700" y="180" class="text_raisins">?</text>
                    <text x="900" y="130" class="text_raisins">6</text>
                    <text x="900" y="180" class="text_raisins">?</text>
                    <!-- Flèches -->
                    <path d="M500,80 a 100 30 0 0 1 150 0" stroke="red" stroke-width="2" fill="none" marker-end="url(#arrow)" />
                    <path d="M500,220 a 100 30 0 0 0 150 0" stroke="red" stroke-width="2" fill="none" marker-end="url(#arrow)" />
                    <path d="M720,80 a 100 30 0 0 1 150 0" stroke="red" stroke-width="2" fill="none" marker-end="url(#arrow)" />
                    <path d="M720,220 a 100 30 0 0 0 150 0" stroke="red" stroke-width="2" fill="none" marker-end="url(#arrow)" />
                    <!-- Légende -->
                    <text x="580" y="50" class="text_raisins" fill="red">÷ 3</text>
                    <text x="580" y="250" class="text_raisins" fill="red">÷ 3</text>
                    <text x="800" y="50" class="text_raisins" fill="red">× 6</text>
                    <text x="800" y="250" class="text_raisins" fill="red">× 6</text>
                </svg>
            </SousPartie>
        </div>
        <SousPartie numero={3} titre="Coefficient de proportionnalité">
            <Paragraphe couleur="red" nom="Méthode">
                Calculer le coefficient de proportionnalité, 
                c'est-à-dire le nombre par lequel on multiplie pour passer d'une grandeur à l'autre.
            </Paragraphe>
            <svg viewBox="0 0 1100 300" style="width: 50%;">
                <defs>
                    <style>
                        .text_raisins {
                            font-size: 28px;
                            text-anchor: middle;
                            dominant-baseline: middle;
                        }
                        .bold {
                            font-weight: bold;
                        }
                    </style>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,6 L9,3 z" fill="red" />
                    </marker>
                </defs>
                <!-- Tableau -->
                    <!-- Lignes horizontales -->
                <line x1="100" y1="100" x2="800" y2="100" stroke="black" stroke-width="2" />
                <line x1="100" y1="150" x2="800" y2="150" stroke="black" stroke-width="2" />
                <line x1="100" y1="200" x2="800" y2="200" stroke="black" stroke-width="2" />
                    <!-- Lignes verticales -->
                <line x1="100" y1="100" x2="100" y2="200" stroke="black" stroke-width="2" />
                <line x1="400" y1="100" x2="400" y2="200" stroke="black" stroke-width="2" />
                <line x1="600" y1="100" x2="600" y2="200" stroke="black" stroke-width="2" />
                <line x1="800" y1="100" x2="800" y2="200" stroke="black" stroke-width="2" />
                <!-- Contenu -->
                <text x="250" y="130" class="text_raisins bold">Masse de raisins (kg)</text>
                <text x="250" y="180" class="text_raisins bold">Prix (€)</text>
                <text x="500" y="130" class="text_raisins">3</text>
                <text x="700" y="130" class="text_raisins">6</text>
                <text x="500" y="180" class="text_raisins">7,80</text>
                <text x="700" y="180" class="text_raisins">?</text>
                <!-- Flèches -->
                <path d="M830,120 a 20 30 0 0 1 10 60" stroke="red" stroke-width="2" fill="none" marker-end="url(#arrow)" />
                <!-- Légende -->
                <text x="930" y="150" class="text_raisins" fill="red" text-anchor="start">× 2,60 €/kg</text>
            </svg>
        </SousPartie>
        <SousPartie numero={4} titre="Additivité">
            <Paragraphe couleur="red" nom="Méthode">
                Additionner les contenus de deux colonnes
                (ou soustraire les contenus de deux colonnes).
            </Paragraphe>
            <svg viewBox="0 0 1100 300" style="width: 50%;">
                <defs>
                    <style>
                        .text_raisins {
                            font-size: 28px;
                            text-anchor: middle;
                            dominant-baseline: middle;
                        }
                        .bold {
                            font-weight: bold;
                        }
                    </style>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,6 L9,3 z" fill="red" />
                    </marker>
                </defs>
                <!-- Tableau -->
                    <!-- Lignes horizontales -->
                <line x1="100" y1="100" x2="1000" y2="100" stroke="black" stroke-width="2" />
                <line x1="100" y1="150" x2="1000" y2="150" stroke="black" stroke-width="2" />
                <line x1="100" y1="200" x2="1000" y2="200" stroke="black" stroke-width="2" />
                    <!-- Lignes verticales -->
                <line x1="100" y1="100" x2="100" y2="200" stroke="black" stroke-width="2" />
                <line x1="400" y1="100" x2="400" y2="200" stroke="black" stroke-width="2" />
                <line x1="600" y1="100" x2="600" y2="200" stroke="black" stroke-width="2" />
                <line x1="800" y1="100" x2="800" y2="200" stroke="black" stroke-width="2" />
                <line x1="1000" y1="100" x2="1000" y2="200" stroke="black" stroke-width="2" />
                <!-- Contenu -->
                <text x="250" y="130" class="text_raisins bold">Masse de raisins (kg)</text>
                <text x="250" y="180" class="text_raisins bold">Prix (€)</text>
                <text x="500" y="130" class="text_raisins">3</text>
                <text x="700" y="130" class="text_raisins">6</text>
                <text x="500" y="180" class="text_raisins">7,80</text>
                <text x="700" y="180" class="text_raisins">15,60</text>
                <text x="900" y="130" class="text_raisins">9</text>
                <text x="900" y="180" class="text_raisins">?</text>
                <!-- Flèches -->
                <text x="600" y="70" class="text_raisins" style="font-size: 40px;">+</text>
                <text x="600" y="235" class="text_raisins" style="font-size: 40px;">+</text>
                <circle cx="600" cy="67" r="15" stroke="black" fill="none" />
                <circle cx="600" cy="233" r="15" stroke="black" fill="none" />

                <path d="M500,100 l 0 -33 l 84 0 " stroke="black" stroke-width="2" fill="none" />
                <path d="M700,100 l 0 -33 l -84 0 " stroke="black" stroke-width="2" fill="none" />
                <path d="M500,200 l 0 33 l 84 0 " stroke="black" stroke-width="2" fill="none" />
                <path d="M700,200 l 0 33 l -84 0 " stroke="black" stroke-width="2" fill="none" />

                <path d="M600,100 m 0 -48 l 0 -15 l 300 0 l 0 45 " stroke="red" stroke-width="2" fill="none" marker-end="url(#arrow)" />
                <path d="M600,200 m 0 48 l 0 15 l 300 0 l 0 -45 " stroke="red" stroke-width="2" fill="none" marker-end="url(#arrow)" />
            </svg>
        </SousPartie>
        <SousPartie numero={5} titre="Produit en croix">
            <Paragraphe couleur="red" nom="Méthode">
                Multiplier les deux valeurs en diagonale et diviser par la troisième valeur.
            </Paragraphe>
            <svg viewBox="0 0 1100 300" style="width: 50%;">
                <defs>
                    <style>
                        .text_raisins {
                            font-size: 28px;
                            text-anchor: middle;
                            dominant-baseline: middle;
                        }
                        .bold {
                            font-weight: bold;
                        }
                    </style>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,6 L9,3 z" fill="red" />
                    </marker>
                </defs>
                <!-- Tableau -->
                <line x1="100" y1="100" x2="1000" y2="100" stroke="black" stroke-width="2" />
                <line x1="100" y1="150" x2="1000" y2="150" stroke="black" stroke-width="2" />
                <line x1="100" y1="200" x2="1000" y2="200" stroke="black" stroke-width="2" />
                    <!-- Lignes verticales -->
                <line x1="100" y1="100" x2="100" y2="200" stroke="black" stroke-width="2" />
                <line x1="400" y1="100" x2="400" y2="200" stroke="black" stroke-width="2" />
                <line x1="600" y1="100" x2="600" y2="200" stroke="black" stroke-width="2" />
                <line x1="1000" y1="100" x2="1000" y2="200" stroke="black" stroke-width="2" />
                <!-- Contenu -->
                <text x="250" y="130" class="text_raisins bold">Masse de raisins (kg)</text>
                <text x="250" y="180" class="text_raisins bold">Prix (€)</text>
                <text x="500" y="130" class="text_raisins">3</text>
                <text x="800" y="130" class="text_raisins">8</text>
                <text x="500" y="180" class="text_raisins">7,80</text>
                <text x="800" y="180" class="text_raisins">? = 7,80 × 8 ÷ 3 = </text>
                <text x="960" y="180" class="text_raisins" fill="red">20,80</text>
                <!-- Flèches -->
                <path d="M550,175 l 100 -50 l -100 0 l 100 50 " stroke="red" stroke-width="2" fill="none" marker-end="url(#arrow)" />
                <text x="900" y="150" class="text_raisins" fill="red"></text>
            </svg>
        </SousPartie>
    </Partie>
    <Partie numero={3} titre="Pourcentages">
        <Definition>
            Un pourcentage est une fraction dont le dénominateur est 100.
        </Definition>
        <Exemples>
            <ul class="col5">
                <li>{@html math("27 \\% = \\frac{27}{100}")}</li>
                <li>{@html math("50 \\% = \\frac{50}{100} = \\frac{1}{2}")}</li>
                <li>{@html math("25 \\% = \\frac{25}{100} = \\frac{1}{4}")}</li>
                <li>{@html math("75 \\% = \\frac{75}{100} = \\frac{3}{4}")}</li>
                <li>{@html math("100 \\% = \\frac{100}{100} = 1")}</li>
            </ul>
        </Exemples>
        <Propriete>
            Pour calculer un pourcentage d'une valeur, on <i>multiple</i> cette valeur par le pourcentage.
        </Propriete>
        <Exemples>
            <ul>
                <li style="padding-bottom: 1ex;">Calculer 26 % de 80 € : {@html math("\\frac{26}{100} \\times 80 = 26 \\times 80 \\div 100 = 20,80~€")}</li>
                <li>Calculer 73 % de 80 € : {@html math("\\frac{73}{100} \\times 80 = 73 \\times 80 \\div 100 = 58,40~€")}</li>
            </ul>
        </Exemples>
    </Partie>
    <Partie numero={4} titre="Le nombre π">
        <Definition>
            Le nombre π est le coefficient de proportionnalité entre le diamètre d'un cercle et son périmètre.
        </Definition>
    </Partie>
</Chapitre>

<style>
    .liste_sans_puce {
        list-style-type: none;
    }
    .donnees {
        border-collapse: collapse;
        width: 50%;
        margin-bottom: 2em;
    }
    .donnees th, .donnees td {
        border: 1px solid black;
        padding: 8px;
        text-align: center;
    }

    .raisins {
        width: 50%;
        color: black;
        padding: 2px;
        border-collapse: collapse;
    }
    .raisins th {
        text-align: left;
    }
    .raisins th, .raisins td {
        width: 30%;
        border: 1px solid black;
        padding: 2px;
    }
    .raisins td {
        text-align: center;
    }

    .col5 {
        columns: 5;
    }

    @media print {
        .col5 {
            columns: 3;
        }
    }
</style>