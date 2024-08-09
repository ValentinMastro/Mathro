<script lang="ts">
	import { Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Exemples } from "$lib/cahier/composants/de_cours/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { hauteur_ligne_cahier, taille_texte } from "$lib/cahier/store";
    import { math } from "mathlifier";

    // Nombre d'élèves dans une classe par sexe
    let donnees_5 = {
        "Filles": 15,
        "Garçons": 12,
        "TOTAL": 27
    }
</script>

<Contenu>
    <Partie numero={3} titre="Fréquences" />
        <LigneVide />
        <Definition lignes={2}>
            La <i>fréquence</i> d'une valeur d'une série est son effectif divisé par l'effectif total.
        </Definition>
        <Exemples lignes={8}>
            <table class="donnees" style="--hauteur: {$hauteur_ligne_cahier}px; --taille-texte: {$taille_texte}px;">
                <caption>Nombre d'élèves dans une classe par sexe</caption>
                <thead>
                    <tr>
                        <th>Sexe</th>
                        {#each Object.keys(donnees_5) as sexe}
                            <th>{sexe}</th>
                        {/each}
                    </tr>
                </thead>
                <tbody>
                    <tr class="double_ligne">
                        <th>Nombre d'élèves <br>(Effectif)</th>
                        {#each Object.values(donnees_5) as valeur}
                            <td>{valeur.toLocaleString("fr-FR")}</td>
                        {/each}
                    </tr>
                    <tr class="double_ligne">
                        <th>Fréquence</th>
                        {#each Object.values(donnees_5) as valeur}
                            <td>{@html math(`\\dfrac{${valeur}}{${donnees_5["TOTAL"]}}`)}</td>
                        {/each}
                    </tr>
                    <tr class="double_ligne">
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
                </tbody>
            </table>
        </Exemples>
</Contenu>

<style>
    table.donnees {
        width: calc(100/99 * 100%);
        border-collapse: collapse;
        border: 1px solid black;
        font-size: calc(var(--taille-texte) * 0.9);

        tr, th, td {
            padding: 0;
            height: var(--hauteur);
            text-align: center;
            font-size: calc(var(--taille-texte) * 0.85);
            width: calc(5/21 * 100%);
            border-left: 1px solid black;
            border-top: 1px solid black;
        }

        td:first-child, th:first-child {
            border-right: 3px double black;
            width: calc(6/21 * 100%);
        }

        td:last-child, th:last-child {
            border-left: 3px double black;
        }

        tr.double_ligne th, tr.double_ligne td {
            height: calc(2 * var(--hauteur));
        }
    }
</style>