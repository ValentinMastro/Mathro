<script lang="ts">
    import { Chapitre, Partie, SousPartie } from "$lib/chapitrage/all_chapitrages";
    import { Definition, Exemples, Paragraphe, Remarque } from "$lib/chapitrage/sections/all_sections";
    import { math, display } from 'mathlifier';
    import DiagrammeCirculaire from "./DiagrammeCirculaire.svelte";

    // Nombre d'habitant à Meaux par année
    let donnees_1 = {
        1982: 45005,
        1990: 48305,
        1999: 49421,
        2007: 48653,
        2013: 53766,
        2019: 55750
    }
    // Prix moyen d'un kg de baguette de pain en France par année
    // source : https://www.insee.fr/fr/statistiques/serie/000442423?idbank=000442423
    let donnees_2 = {
        "1992-01": 2.12,
        "1997-01": 2.4,
        "2002-01": 2.70,
        "2007-01": 3.13,
        "2012-01": 3.43,
        "2017-01": 3.46,
        "2022-01": 3.64,
        "2023-11": 4.05
    }
    // Population de Meaux en 2019 par grandes tranches d'âge
    let donnees_3 = {
        "0-14": 12585,
        "15-29": 11830,
        "30-44": 11536,
        "45-59": 9798,
        "60-74": 6536,
        "75 +": 3465,
        "TOTAL": 55750
    }
    // Emploi selon la catégorie socioprofessionnelle en 2022
    // source : https://www.insee.fr/fr/statistiques/2489546
    let donnees_4 = {
        "Agriculteurs": 1.6,
        "Artisans": 6.8,
        "Cadres": 21.7,
        "Intermédiaires": 24.6,
        "Employés": 26.0,
        "Ouvriers": 18.9,
        "?": 0.4,
        "TOTAL": 100
    }
</script>

<Chapitre numero={18} titre="Tableaux et diagrammes">
    <Partie numero={1} titre="Tableaux">
        <SousPartie numero={1} titre="Tableau à une entrée">
            <p style="color: black;">On se sert des tableaux pour ranger, classer, classifier des données.</p>
            <Exemples singulier>
                <table>
                    <tr>
                        <td>couleurs des yeux</td>
                        <td>bleus</td>
                        <td>verts</td>
                        <td>marrons</td>
                        <td>vairons</td>
                        <td>total</td>
                    </tr>
                    <tr>
                        <td>nombre d'élèves</td>
                        <td>3</td>
                        <td>7</td>
                        <td>15</td>
                        <td>1</td>
                        <td>26</td>
                    </tr>
                </table>
            </Exemples>
            <Paragraphe couleur="blue" nom="Exemple de lecture">
                Sur les 26 élèves, 7 ont les yeux verts.
            </Paragraphe>
        </SousPartie>
        <SousPartie numero={2} titre="Tableau à double entrée">
            <table>
                <tr>
                    <td></td>
                    <td>noir</td>
                    <td>blond</td>
                    <td>châtain</td>
                    <td>brun</td>
                    <td>roux</td>
                </tr>
                <tr>
                    <td>garçons</td>
                    <td>5</td>
                    <td>3</td>
                    <td>4</td>
                    <td>1</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>filles</td>
                    <td>9</td>
                    <td>7</td>
                    <td>6</td>
                    <td>2</td>
                    <td>8</td>
                </tr>
            </table>
            <Paragraphe couleur="blue" nom="Exemple de lecture">
                Il y a 7 filles aux cheveux blonds.
            </Paragraphe>
        </SousPartie>
    </Partie>
    <Partie numero={2} titre="Diagrammes et graphiques">
        <SousPartie numero={1} titre="Graphique cartésien">
            <Definition>
                Dans un repère orthogonal, on place des points dont les coordonnées sont les valeurs du tableau.
            </Definition>
            <Exemples singulier>
                Prix moyen d'un kg de baguette de pain en France.

                <table>
                    <tr>
                        <td>Année</td>
                        <td>1997-01</td>
                        <td>2007-01</td>
                        <td>2017-01</td>
                    </tr>
                    <tr>
                        <td>Prix (€)</td>
                        <td>2,40</td>
                        <td>3,13</td>
                        <td>3,46</td>
                    </tr>
                </table>
                <svg viewBox="0 0 500 200" width="50em">
                    <line x1="50" y1="180" x2="450" y2="180" stroke="black" />
                    <line x1="50" y1="180" x2="50" y2="20" stroke="black" />
                    {#each [0, 1, 2, 3, 4] as valeur, i}
                        <line x1="45" y1={180 - 40*valeur} x2="50" y2={180 - 40*valeur} stroke="black" />
                        <line x1="50" y1={180 - 40*valeur} x2="450" y2={180 - 40*valeur} stroke="black" stroke-width="1" stroke-dasharray="1,4" />
                        <text x="40" y={180 - 40*valeur + 5} text-anchor="end">{valeur}</text>
                    {/each}
                    {#each ["1997-01", "2007-01", "2017-01"] as annee, i}
                        <line x1={400*(i+1)/3} y1="180" x2={400*(i+1)/3} y2="190" stroke="black" />
                        <text x={400*(i+1)/3} y="200" text-anchor="middle" font-size="0.7em">{annee}</text>
                    {/each}
                    {#each [2.40, 3.13, 3.46] as prix, i}
                        <text x={400*(i+1)/3} y={195 - 40*prix - 10} text-anchor="middle">X</text>
                    {/each}
                    <line x1={400/3} y1={180 - 40*2.40} x2={400*2/3} y2={180 - 40*3.13} stroke="black" />
                    <line x1={400*2/3} y1={180 - 40*3.13} x2={400} y2={180 - 40*3.46} stroke="black" />
                </svg>
            </Exemples>
        </SousPartie>
        <SousPartie numero={2} titre="Diagramme en barres/en bâtons">
            <Definition>
                Un <i>diagramme en barres</i> permet de représenter des données par des barres de hauteurs proportionnelles.
            </Definition>
            <Remarque>
                On l'utilise le plus souvent pour comparer des valeurs entre elles.
            </Remarque>
            <Exemples>
                <ul class="liste_sans_marquage" style="padding: 0px; columns: 2;">
                    <li>
                        <table class="donnees">
                            <caption>Nombre d'habitants à Meaux par année</caption>
                            <tr>
                                <th>Année</th>
                                {#each Object.keys(donnees_1) as annee}
                                    <th>{annee}</th>
                                {/each}
                            </tr>
                            <tr>
                                <th>Nombre d'habitants</th>
                                {#each Object.values(donnees_1) as valeur}
                                    <td>{valeur.toLocaleString("fr-FR")}</td>
                                {/each}
                            </tr>
                        </table>
                        <svg viewBox="0 0 1000 1000">
                            <!-- Axes -->
                            <line x1="100" y1="900" x2="100" y2="100" stroke="black" stroke-width="2" />
                            <line x1="100" y1="900" x2="900" y2="900" stroke="black" stroke-width="2" />
                            <!-- Graduations horizontales -->
                            {#each Object.keys(donnees_1) as annees, i}
                                <line x1={100 + 800*(i+0.5)/Object.keys(donnees_1).length} y1="900" x2={100 + 800*(i+0.5)/Object.keys(donnees_1).length} y2="910" stroke="black" stroke-width="2" />
                                <text x={100 + 800*(i+0.5)/Object.keys(donnees_1).length} y="930" text-anchor="middle" font-size="22">{annees}</text>
                            {/each}
                            <!-- Graduations verticales -->
                            {#each [0, 10000, 20000, 30000, 40000, 50000, 60000] as valeur, i}
                                <line x1="90" y1={900 - 800*valeur/60000} x2="100" y2={900 - 800*valeur/60000} stroke="black" stroke-width="2" />
                                <line x1="100" y1={900 - 800*valeur/60000} x2="900" y2={900 - 800*valeur/60000} stroke="black" stroke-width="1" stroke-dasharray="1,4" />
                                <text x="80" y={900 - 800*valeur/60000 + 5} text-anchor="end" font-size="22">{valeur.toLocaleString("fr-FR")}</text>
                            {/each}
                            <!-- Barres -->
                            {#each Object.values(donnees_1) as valeur, i}
                                <rect x={100 + 800*(i+0.5)/Object.values(donnees_1).length - 20} y={900 - 800*valeur/60000} width="40" height={800*valeur/60000} fill="black" />
                                <text x={100 + 800*(i+0.5)/Object.values(donnees_1).length} y={900 - 800*valeur/60000 - 10} text-anchor="middle" font-size="22">{valeur.toLocaleString("fr-FR")}</text>
                            {/each}
                            <!-- Légendes -->
                            <text x="950" y="910" text-anchor="middle" font-size="22">Année</text>
                            <text x="100" y="80" text-anchor="middle" font-size="22">Nombre d'habitants</text>
                        </svg>
                    </li>
                    <li>
                        <table class="donnees">
                            <caption>Prix moyen d'un kg de baguette de pain en France</caption>
                            <tr>
                                <th>Année</th>
                                {#each Object.keys(donnees_2) as annee}
                                    <th>{annee}</th>
                                {/each}
                            </tr>
                            <tr>
                                <th style="width: fit-content">Prix</th>
                                {#each Object.values(donnees_2) as valeur}
                                    <td>{valeur.toLocaleString("fr-FR", {minimumFractionDigits: 2, maximumFractionDigits: 2})} €</td>
                                {/each}
                            </tr>
                        </table>
                        <svg viewBox="0 0 1000 1000">
                            <!-- Axes -->
                            <line x1="100" y1="900" x2="100" y2="100" stroke="black" stroke-width="2" />
                            <line x1="100" y1="900" x2="900" y2="900" stroke="black" stroke-width="2" />
                            <!-- Graduations horizontales -->
                            {#each Object.keys(donnees_2) as annees, i}
                                <line x1={100 + 800*(i+0.5)/Object.keys(donnees_2).length} y1="900" x2={100 + 800*(i+0.5)/Object.keys(donnees_2).length} y2="910" stroke="black" stroke-width="2" />
                                <text x={100 + 800*(i+0.5)/Object.keys(donnees_2).length} y="930" text-anchor="middle" font-size="22">{annees}</text>
                            {/each}
                            <!-- Graduations verticales -->
                            {#each [0, 1, 2, 3, 4, 5] as valeur, i}
                                <line x1="90" y1={900 - 800*valeur/5} x2="100" y2={900 - 800*valeur/5} stroke="black" stroke-width="2" />
                                <line x1="100" y1={900 - 800*valeur/5} x2="900" y2={900 - 800*valeur/5} stroke="black" stroke-width="1" stroke-dasharray="1,4" />
                                <text x="80" y={900 - 800*valeur/5 + 5} text-anchor="end" font-size="22">{valeur.toLocaleString("fr-FR", {maximumFractionDigits: 2})} €</text>
                            {/each}
                            <!-- Barres -->
                            {#each Object.values(donnees_2) as valeur, i}
                                <rect x={100 + 800*(i+0.5)/Object.values(donnees_2).length - 20} y={900 - 800*valeur/5} width="40" height={800*valeur/5} fill="black" />
                                <text x={100 + 800*(i+0.5)/Object.values(donnees_2).length} y={900 - 800*valeur/5 - 10} text-anchor="middle" font-size="22">{valeur.toLocaleString("fr-FR", {minimumFractionDigits: 2, maximumFractionDigits: 2})} €</text>
                            {/each}
                            <!-- Légendes -->
                            <text x="950" y="910" text-anchor="middle" font-size="22">Année</text>
                            <text x="100" y="80" text-anchor="middle" font-size="22">Prix (€)</text>
                        </svg>
                    </li>
                </ul>
            </Exemples>
        </SousPartie>
        <SousPartie numero={3} titre="Diagramme circulaire">
            <Definition>
                Un diagramme circulaire est un disque partagé en secteurs angulaires proportionnels aux valeurs qu'ils représentent.
            </Definition>
            <Remarque>
                On l'utilise le plus souvent lorsque le total des valeurs est connu et pertinent.
            </Remarque>
            <Exemples>
                <ul class="liste_sans_marquage" style="padding: 0px; columns: 2;">
                    <li>
                        <DiagrammeCirculaire donnees={donnees_3} width={1250}
                        caption="Population de Meaux (77284) en 2019 par grandes tranches d'âge"
                        etiquette_1="Tranche d'âge"
                        etiquette_2="Nombre d'habitants" />
                    </li>
                    <li style="letter-spacing: -0.09em;">
                        <DiagrammeCirculaire donnees={donnees_4} width={1250}
                        caption="Emploi selon la catégorie socioprofessionnelle en 2022"
                        etiquette_1="Catégorie"
                        etiquette_2="Pourcentage" />
                    </li>
                </ul>
            </Exemples>
        </SousPartie>
    </Partie>
</Chapitre>

<style>
    table {
        border-collapse: collapse;
        width: 100%;
        color: black;
        width: fit-content;
    }
    table, tr, td {
        border: 1px solid black;
        padding: 5px;
    }
    .liste_sans_marquage {
        list-style-type: none;
    }
    .donnees {
        border-collapse: collapse;
        border: 1px solid black;
        width: 100%;
        color: black;
    }
    .donnees th, .donnees td {
        border: 1px solid black;
        padding: 5px;
        width: fit-content;
        text-align: center;
    }
</style>