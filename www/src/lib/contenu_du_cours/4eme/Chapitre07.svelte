<script lang="ts">
    import Chapitre from "$lib/chapitrage/Chapitre.svelte";
    import Partie from "$lib/chapitrage/Partie.svelte";
	import SousPartie from "$lib/chapitrage/SousPartie.svelte";
	import Definition from "$lib/chapitrage/sections/Definition.svelte";
    import Exemples from "$lib/chapitrage/sections/Exemples.svelte";
	import Notation from "$lib/chapitrage/sections/Notation.svelte";
	import Paragraphe from "$lib/chapitrage/sections/Paragraphe.svelte";
    import Remarque from "$lib/chapitrage/sections/Remarque.svelte";

    import { math, display } from 'mathlifier';
	import DiagrammeCirculaire from "$lib/module/DiagrammeCirculaire.svelte";

    let serie_1 = Array(8).fill(0).map(() => Math.floor(Math.random()*6)+1); // 1 à 6
    let serie_2 = Array(5).fill(0).map(() => Math.floor(Math.random()*13)+37); // 37 à 50
    let serie_3 = Array(10).fill(0).map(() => Math.floor(Math.random()*45)+135); // 135 à 180

    function calculer_mediane(serie: number[]) {
        serie = serie.slice(0).sort((a, b) => a - b);
        if (serie.length % 2 == 0) {
            return (serie[serie.length/2] + serie[serie.length/2-1]) / 2;
        } else {
            return serie[Math.floor(serie.length/2)];
        }
    }

    $: moyenne_1 = serie_1.reduce((a, b) => a + b, 0) / serie_1.length;
    $: moyenne_2 = serie_2.reduce((a, b) => a + b, 0) / serie_2.length;
    $: mediane_1 = calculer_mediane(serie_1);
    $: mediane_2 = calculer_mediane(serie_2);

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
    // Nombre d'élèves dans une classe par sexe
    let donnees_5 = {
        "Filles": 15,
        "Garçons": 12,
        "TOTAL": 27
    }
</script>

<Chapitre numero={7} titre="Statistiques">
    <Partie numero={1} titre="Indicateurs de position">
        <Definition>
            Une série statistique est un ensemble de valeurs non ordonnées.
        </Definition>
        <Exemples>
            <ul>
                <li>
                    J'ai lancé {serie_1.length} dés à six faces et j'ai obtenu les valeurs suivantes :<br>
                    <div style="text-align: center; color: black;">
                        &#123;
                        {serie_1.join(" ; ")}
                        &#125;
                    </div>
                </li>
                <li>
                    J'ai mesuré la taille de {serie_3.length} élèves de ma classe et j'ai obtenu les valeurs suivantes :
                    <div style="text-align: center; color: black;">
                        &#123;
                        {serie_3.map((e) => e + " cm").join(" ; ")}
                        &#125;
                    </div>
                </li>
            </ul>
        </Exemples>
        <SousPartie numero={1} titre="Moyenne">
            <Definition>
                <i>L'effectif total</i> d'une série statistique est le nombre de valeurs qu'elle contient.<br>
            </Definition>
            <Exemples>
                <ul>
                    <li>
                        <span style="color: black;">
                            &#123;
                            {serie_1.join(" ; ")}
                            &#125;
                        </span>
                        &xrarr; L'effectif total est {serie_1.length}.
                    </li>
                    <li>
                        <span style="color: black;">
                            &#123;
                            {serie_2.join(" ; ")}
                            &#125;
                        </span>
                        &xrarr; L'effectif total est {serie_2.length}.
                    </li>
                </ul>
            </Exemples>
            <Notation>
                On note N l'effectif total d'une série statistique.
            </Notation>
            <Definition>
                <i>La moyenne</i> d'une série statistique est la somme de toutes les valeurs divisée par l'effectif total.<br>
                On la note {@html math("\\bar{x}")} ({@html math("x")} barre).
            </Definition>
            <Exemples>
                <ul style="columns: 2;">
                    <li>
                        <span style="color: black;">
                            &#123;
                            {#each serie_1 as valeur, i}
                                {valeur} {i < serie_1.length-1 ? "; " : ""}
                            {/each}
                            &#125;
                        </span><br>
                        {@html display(`
                            \\bar{x}
                            = \\frac{${serie_1.join("+")}}{${serie_1.length}} 
                            = ${moyenne_1.toLocaleString("fr-FR", {maximumFractionDigits: 3})}
                        `)}
                    </li>
                    <li>
                        <span style="color: black;">
                            &#123;
                            {#each serie_2 as valeur, i}
                                {valeur} {i < serie_2.length-1 ? "; " : ""}
                            {/each}
                            &#125;
                        </span><br>
                        {@html display(`
                            \\bar{x} 
                            = \\frac{${serie_2.join("+")}}{${serie_2.length}} 
                            = ${moyenne_2.toLocaleString("fr-FR", {maximumFractionDigits: 1})}
                        `)}
                    </li>
                </ul>
            </Exemples>
        </SousPartie>
        <SousPartie numero={2} titre="Étendue">
            <Definition>
                <i>L'étendue</i> d'une série statistique est la différence entre la plus grande valeur (le maximum) et la plus petite valeur (le minimum).
            </Definition>
            <Exemples>
                <ul>
                    <li>
                        <span style="color: black;">
                            &#123;
                            {serie_1.join(" ; ")}
                            &#125;
                        </span>
                        &xrarr; L'étendue est {@html math(`
                            ${Math.max(...serie_1)} - ${Math.min(...serie_1)} = 
                            ${Math.max(...serie_1) - Math.min(...serie_1)}
                            `)}.
                    </li>
                    <li>
                        <span style="color: black;">
                            &#123;
                            {serie_2.join(" ; ")}
                            &#125;
                        </span>
                        &xrarr; L'étendue est {@html math(`
                            ${Math.max(...serie_2)} - ${Math.min(...serie_2)} = 
                            ${Math.max(...serie_2) - Math.min(...serie_2)}
                            `)}.
                    </li>
                </ul>
            </Exemples>
        </SousPartie>
        <SousPartie numero={3} titre="Médiane">
            <Definition>
                La <i>médiane</i> d'une série statistique est la valeur partageant la série en deux parties de même effectif.<br>
                La première partie contient les valeurs inférieures à la médiane, la seconde partie contient les valeurs supérieures à la médiane.
            </Definition>
            <Exemples>
                <ul>
                    <li>
                        <span style="color: black;">
                            &#123;
                            {serie_2.join(" ; ")}
                            &#125;
                        </span>
                        &xrarr; La médiane est {@html math(`${mediane_2}`)} <br>
                        En effet, on peut scinder cette série en deux : 
                        <span style="color: black;">
                            &#123;
                            {serie_2.slice(0).filter((e) => e < mediane_2).join(" ; ")}
                            &#125;
                        </span> et <span style="color: black;">
                            &#123;
                            {serie_2.slice(0).filter((e) => e > mediane_2).join(" ; ")}
                            &#125;
                        </span>
                    </li>
                </ul>
            </Exemples>
            <Paragraphe couleur="red" nom="Méthode">
                Pour trouver la médiane d'une série statistique, on procède ainsi :
                <ol>
                    <li>On ordonne les valeurs de la série par ordre croissant.</li>
                    <li>Si l'effectif total est impair, la médiane est la valeur du milieu (la {@html math(`\\frac{\\text{N}+1}{2}`)}ème valeur).</li>
                    <li>Si l'effectif total est pair, la médiane est la moyenne des deux valeurs du milieu (la {@html math(`\\frac{\\text{N}}{2}`)}ème et la {@html math(`(\\frac{\\text{N}}{2}+1)`)}ème valeurs).</li>
                </ol>
            </Paragraphe>
            <Exemples>
                <ul>
                    <li>
                        <span style="color: black;">
                            &#123;
                            {serie_1.join(" ; ")}
                            &#125;
                        </span><br>
                        <ul class="liste_flechee">
                            <li>
                                On trie les valeurs dans l'ordre croissant : 
                                <span style="color: black;">
                                    &#123;
                                    {serie_1.slice(0).sort((a, b) => a - b).join(" ; ")}
                                    &#125;
                                </span>
                            </li>
                            <li>
                                {@html math(`\\text{N}=${serie_1.length}`)} est pair, donc la médiane est entre la {@html math(`\\frac{\\text{N}}{2}`)}ème et la {@html math(`(\\frac{\\text{N}}{2}+1)`)}ème valeurs :<br>
                                Autrement dit, entre la {serie_1.length/2}ème valeur et la {serie_1.length/2+1}ème valeur.<br>
                                La médiane est donc {mediane_1.toLocaleString("fr-FR", {maximumFractionDigits: 3})}.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span style="color: black;">
                            &#123;
                            {serie_2.join(" ; ")}
                            &#125;
                        </span><br>
                        <ul class="liste_flechee">
                            <li>
                                On trie les valeurs dans l'ordre croissant : 
                                <span style="color: black;">
                                    &#123;
                                    {serie_2.slice(0).sort((a, b) => a - b).join(" ; ")}
                                    &#125;
                                </span>
                            </li>
                            <li>
                                {@html math(`\\text{N}=${serie_2.length}`)} est impair, donc la médiane est la {@html math(`\\frac{\\text{N}+1}{2}`)}ème valeur :<br>
                                Autrement dit, la {Math.floor(serie_2.length/2)+1}ème valeur.<br>
                                La médiane est donc {mediane_2.toLocaleString("fr-FR", {maximumFractionDigits: 1})}.
                            </li>
                        </ul>
                    </li>
                </ul>
            </Exemples>
        </SousPartie>
    </Partie>
    <Partie numero={2} titre="Diagrammes et graphiques">
        <SousPartie numero={1} titre="Diagrammes en barres/en bâtons">
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
        <SousPartie numero={2} titre="Diagramme circulaire">
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
        <SousPartie numero={3} titre="Histogramme">
            <Definition>
                Pour représenter des classes de données, on utilise un histogramme dans lequel 
                les classes sont représentées par des rectangles de largeur proportionnelle à l'étendue de la classe 
                et de hauteur proportionnelle à l'effectif de la classe.
            </Definition>
            <Exemples>
                <table class="donnees">
                    <caption>Population de Meaux (77284) en 2019 par grandes tranches d'âge</caption>
                    <tr>
                        <th>Tranche d'âge</th>
                        {#each Object.keys(donnees_3) as tranche}
                            <th>{tranche}</th>
                        {/each}
                    </tr>
                    <tr>
                        <th>Nombre d'habitants</th>
                        {#each Object.values(donnees_3) as valeur}
                            <td>{valeur.toLocaleString("fr-FR")}</td>
                        {/each}
                    </tr>
                </table>
                <svg viewBox="0 0 1000 400" style="width: 80%;">
                    <!-- Axes -->
                    <line x1="100" y1="350" x2="100" y2="50" stroke="black" stroke-width="2" />
                    <line x1="100" y1="350" x2="900" y2="350" stroke="black" stroke-width="2" />
                    <!-- Graduations horizontales -->
                    {#each [0, 15, 30, 45, 60, 75] as annee, i}
                        <line x1={annee * 720 / 75 + 100} y1="350" x2={annee * 720 / 75 + 100} y2="360" stroke="black" stroke-width="2" />
                        <text x={annee * 720 / 75 + 100} y="380" text-anchor="middle" font-size="22">{annee}</text>
                    {/each}
                    <!-- Barres -->
                    {#each Object.values(donnees_3) as valeur, i}
                        {#if i < Object.values(donnees_3).length - 2}
                            <rect x={100 + i*15*720/75} y={350 - 300*valeur/14000} width="{15*720/75}" height={300*valeur/14000} fill="lightgray" stroke="black" />
                            <text x={100 + (i+0.5)*15*720/75} y={350 - 300*valeur/14000 - 10} text-anchor="middle" font-size="22">{valeur.toLocaleString("fr-FR")}</text>
                        {/if}
                    {/each}
                    <!-- Graduations verticales -->
                    {#each Array(14).fill(0).map((valeur, i) => i*1000) as valeur, i}
                        <line x1="90" y1={350 - 300*valeur/14000} x2="100" y2={350 - 300*valeur/14000} stroke="black" stroke-width="2" />
                        <line x1="100" y1={350 - 300*valeur/14000} x2="900" y2={350 - 300*valeur/14000} stroke="black" stroke-width="1" stroke-dasharray="1,4" />
                        <text x="80" y={350 - 300*valeur/14000 + 5} text-anchor="end" font-size="22">{valeur.toLocaleString("fr-FR")}</text>
                    {/each}
                    <!-- Légendes -->
                    <text x="930" y="360" text-anchor="middle" font-size="22">Âge</text>
                    <text x="100" y="40" text-anchor="middle" font-size="22">Nombre d'habitants</text>
                </svg>
            </Exemples>
        </SousPartie>
    </Partie>
    <Partie numero={3} titre="Fréquences">
        <Definition>
            La <i>fréquence</i> d'une valeur d'une série est son effectif divisé par l'effectif total.
        </Definition>
        <Exemples>
            <table class="donnees">
                <caption>Nombre d'élèves dans une classe par sexe</caption>
                <tr>
                    <th>Sexe</th>
                    {#each Object.keys(donnees_5) as sexe}
                        <th>{sexe}</th>
                    {/each}
                </tr>
                <tr>
                    <th>Nombre d'élèves <br>(Effectif)</th>
                    {#each Object.values(donnees_5) as valeur}
                        <td>{valeur.toLocaleString("fr-FR")}</td>
                    {/each}
                </tr>
                <tr>
                    <th>Fréquence</th>
                    {#each Object.values(donnees_5) as valeur}
                        <td>{@html math(`\\dfrac{${valeur}}{${donnees_5["TOTAL"]}}`)}</td>
                    {/each}
                </tr>
                <tr>
                    <th>Pourcentage</th>
                    {#each Object.values(donnees_5) as valeur}
                        <td>
                            {@html math(`
                                \\dfrac{${valeur}}{${donnees_5["TOTAL"]}} \\times 100
                                = ${(100 * valeur / donnees_5["TOTAL"]).toLocaleString("fr-FR", {maximumFractionDigits: 1})} \\%
                            `)}
                        </td>
                    {/each}
                </tr>
            </table>
        </Exemples>
    </Partie>
</Chapitre>

<style>
    .liste_flechee {
        list-style-type: none;
    }
    .liste_flechee li::marker {
        content: "➜ ";
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