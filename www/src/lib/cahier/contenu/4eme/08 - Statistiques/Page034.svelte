<script lang="ts">
    import { Contenu } from "$lib/cahier/composants/de_chapitrage/*";
    import { Paragraphe, Schema } from "$lib/cahier/composants/de_cours/*";

    import { hauteur_ligne_cahier, taille_texte } from "$lib/cahier/store";

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
</script>

<Contenu>
    <Paragraphe nom_du_paragraphe="Exemples (suite)" couleur="bleu" lignes={3} addStyle="margin-bottom: -0.2ex;">
        <table class="donnees" style="font-size: {$taille_texte * 0.9}px">
            <caption style="height: {$hauteur_ligne_cahier}px;" >Prix moyen d'un kg de baguette de pain en France</caption>
            <tbody style="height: {$hauteur_ligne_cahier}px;" >
                <tr style="height: {$hauteur_ligne_cahier}px;" >
                    <th style="height: {$hauteur_ligne_cahier}px;" >Année</th>
                    {#each Object.keys(donnees_2) as annee}
                        <th style="height: {$hauteur_ligne_cahier}px;" >{annee}</th>
                    {/each}
                </tr>
                <tr style="height: {$hauteur_ligne_cahier}px;" >
                    <th style="height: {$hauteur_ligne_cahier}px;">Prix</th>
                    {#each Object.values(donnees_2) as valeur}
                        <td style="height: {$hauteur_ligne_cahier}px;" >{valeur.toLocaleString("fr-FR", {minimumFractionDigits: 2, maximumFractionDigits: 2})} €</td>
                    {/each}
                </tr>
            </tbody>
        </table>
    </Paragraphe>
    <Schema lignes={20}>
        {#snippet svg()}
            <!-- Axes -->
            <line x1="100" y1="950" x2="900" y2="950" stroke="black" stroke-width="2" />
            <line x1="100" y1="950" x2="100" y2="50" stroke="black" stroke-width="2" />
            <!-- Graduations horizontales -->
            {#each Object.keys(donnees_2) as annees, i}
                <line x1={100 + 800*(i+0.5)/Object.keys(donnees_2).length} y1="950" x2={100 + 800*(i+0.5)/Object.keys(donnees_2).length} y2="910" stroke="black" stroke-width="2" />
                <text x={100 + 800*(i+0.5)/Object.keys(donnees_2).length} y="980" text-anchor="middle" font-size="22">{annees}</text>
            {/each}
            <!-- Graduations verticales -->
            {#each [0, 1, 2, 3, 4, 5] as valeur, i}
                <line x1="90" y1={950 - 750*valeur/5} x2="100" y2={950 - 750*valeur/5} stroke="black" stroke-width="2" />
                <text x="80" y={950 - 750*valeur/5 + 5} text-anchor="end" font-size="22">{valeur.toLocaleString("fr-FR", {maximumFractionDigits: 2})} €</text>
            {/each}
            <!-- Barres -->
            {#each Object.values(donnees_2) as valeur, i}
                <rect x={100 + 800*(i+0.5)/Object.values(donnees_2).length - 20} y={950 - 750*valeur/5} width="40" height={750*valeur/5} fill="black" />
                <text x={100 + 800*(i+0.5)/Object.values(donnees_2).length} y={950 - 750*valeur/5 - 10} text-anchor="middle" font-size="22">{valeur.toLocaleString("fr-FR", {minimumFractionDigits: 2, maximumFractionDigits: 2})} €</text>
            {/each}
            <!-- Légendes -->
            <text x="950" y="950" text-anchor="middle" font-size="22">Année</text>
            <text x="150" y="50" text-anchor="middle" font-size="22">Prix (€)</text>
        {/snippet}
    </Schema>
</Contenu>

<style>
    .donnees {
        border-collapse: collapse;
        border: 1px solid black;
        width: 100%;
        
        tr, td, th {
            padding: 0;
            text-align: center;
        }
    }
</style>