<script lang="ts">
    import { Chapitre, Partie, SousPartie } from "$lib/chapitrage/all_chapitrages";
    import { Definition, Exemples, Paragraphe } from "$lib/chapitrage/sections/all_sections";
    import { math, display } from 'mathlifier';
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

                <svg viewBox="0 0 500 200">
                    <line x1="50" y1="180" x2="450" y2="180" stroke="black" />
                    <line x1="50" y1="180" x2="50" y2="20" stroke="black" />
                </svg>
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
</style>