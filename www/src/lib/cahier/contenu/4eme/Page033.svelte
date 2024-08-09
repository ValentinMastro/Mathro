<script lang="ts">
    import { Contenu, Partie, SousPartie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Remarque, Exemples, Schema } from "$lib/cahier/composants/de_cours/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { hauteur_ligne_cahier, taille_texte } from "$lib/cahier/store";

    // Nombre d'habitant à Meaux par année
    let donnees_1 = {
        1982: 45005,
        1990: 48305,
        1999: 49421,
        2007: 48653,
        2013: 53766,
        2019: 55750
    }
</script>

<Contenu>
    <Partie numero={2} titre="Diagrammes et graphiques" />
        <SousPartie numero={1} titre="Diagrammes en barres/en bâtons" />
            <LigneVide />
            <Definition lignes={2}>
                Un <i>diagramme en barres</i> permet de représenter des données par des barres de hauteurs proportionnelles.
            </Definition>
            <Remarque>
                On l'utilise le plus souvent pour comparer des valeurs entre elles.
            </Remarque>
            <Exemples lignes={3} addStyle="margin-bottom: -0.2ex;">
                <table class="donnees" style="font-size: {$taille_texte * 0.9}px">
                    <caption style="height: {$hauteur_ligne_cahier}px;">Nombre d'habitants à Meaux par année</caption>
                    <thead style="height: {$hauteur_ligne_cahier}px; max-height: {$hauteur_ligne_cahier}px;">
                        <tr style="height: {$hauteur_ligne_cahier}px;">
                            <th style="height: {$hauteur_ligne_cahier}px;">Année</th>
                            {#each Object.keys(donnees_1) as annee}
                                <th style="height: {$hauteur_ligne_cahier}px;">{annee}</th>
                            {/each}
                        </tr>
                    </thead>
                    <tbody style="height: {$hauteur_ligne_cahier}px;">
                        <tr style="height: {$hauteur_ligne_cahier}px;">
                            <th style="height: {$hauteur_ligne_cahier}px;">Nombre d'habitants</th>
                            {#each Object.values(donnees_1) as valeur}
                                <td style="height: {$hauteur_ligne_cahier}px;">{valeur.toLocaleString("fr-FR")}</td>
                            {/each}
                        </tr>
                    </tbody>
                </table>
            </Exemples>
            <Schema lignes={20}>
                {#snippet svg()}
                    <!-- Axes -->
                    <line x1="100" y1="950" x2="900" y2="950" stroke="black" stroke-width="2" />
                    <line x1="100" y1="950" x2="100" y2="50" stroke="black" stroke-width="2" />
                    <!-- Graduations horizontales -->
                    {#each Object.keys(donnees_1) as annees, i}
                        <line x1={100 + 800*(i+0.5)/Object.keys(donnees_1).length} y1="950" x2={100 + 800*(i+0.5)/Object.keys(donnees_1).length} y2="960" stroke="black" stroke-width="2" />
                        <text x={100 + 800*(i+0.5)/Object.keys(donnees_1).length} y="980" text-anchor="middle" font-size="22">{annees}</text>
                    {/each}
                    <!-- Graduations verticales -->
                    {#each [0, 10000, 20000, 30000, 40000, 50000, 60000] as valeur, i}
                        <line x1="90" y1={950 - 900*valeur/60000} x2="100" y2={950 - 900*valeur/60000} stroke="black" stroke-width="2" />
                        <text x="80" y={950 - 900*valeur/60000 + 5} text-anchor="end" font-size="22" enable-background="">{valeur.toLocaleString("fr-FR")}</text>
                    {/each}
                    <!-- Barres -->
                    {#each Object.values(donnees_1) as valeur, i}
                        <rect x={100 + 800*(i+0.5)/Object.values(donnees_1).length - 20} y={950 - 900*valeur/60000} width="40" height={900*valeur/60000} fill="black" />
                        <text x={100 + 800*(i+0.5)/Object.values(donnees_1).length} y={950 - 900*valeur/60000 - 10} text-anchor="middle" font-size="22">{valeur.toLocaleString("fr-FR")}</text>
                    {/each}
                    <!-- Légendes -->
                    <text x="950" y="950" text-anchor="middle" font-size="22">Année</text>
                    <text x="220" y="50" text-anchor="middle" font-size="22">Nombre d'habitants</text>
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
