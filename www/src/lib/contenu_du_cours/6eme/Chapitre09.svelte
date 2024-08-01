<script lang="ts">
    import { Chapitre, Partie } from "$lib/chapitrage/all_chapitrages";
    import { Definition, Exemples, Paragraphe, Notation, Remarque } from "$lib/chapitrage/sections/all_sections";
    import TheoremeDefinition from "$lib/chapitrage/sections/TheoremeDefinition.svelte";
</script>

<Chapitre numero={9} titre="Divisions">
    <Partie numero={1} titre="Division euclidienne">
        <TheoremeDefinition>
            À deux nombres entiers, le <i>dividende</i> et le <i>diviseur</i>, on associe deux autres nombres entiers, 
            le <i>quotient</i> et le <i>reste</i>, <u>de manière unique</u>, tels que :
            <ul style="font-family: Katex_Main;">
                <li>dividende = diviseur × quotient + reste</li>
                <li>0 ≤ reste &lt; diviseur</li>
            </ul>
        </TheoremeDefinition>
        <Exemples>
            <div class="ligne_flex">
                <img
                    style="width: 20ex;" 
                    src="/tikz/6eme/ch09/division_euclidienne.svg" 
                    alt="Division euclidienne de 1997 par 26" />
                <span class="egalite_division_euclidienne">
                    1997 = 26 × 76 + 21
                </span>
                <ul style="font-family: Katex_Main;">
                    <li>le dividende est 1997</li>
                    <li>le diviseur est 26</li>
                    <li>le quotient est 76</li>
                    <li>le reste est 21</li>
                </ul>
            </div>
        </Exemples>
    </Partie>
    <Partie numero={2} titre="Divisibilités">
        <Definition>
            "Être divisible par" signifie "être dans la table de multiplication de".
        </Definition>
        <Exemples>
            <ul>
                <li>42 est divisible par <span class="rouge">6</span> car 42 = <span class="rouge">6</span> × 7</li>
                <li>35 est divisible par <span class="rouge">5</span> car 35 = <span class="rouge">5</span> × 7</li>
            </ul>
        </Exemples>
        <Notation>
            On peut dire que : 
            <ul>
                <li>42 est divisible par 6</li>
                <li>42 est un multiple de 6</li>
                <li>6 divise 42</li>
                <li>6 est un diviseur de 42</li>
            </ul>
        </Notation>
        <Paragraphe nom="Méthode" couleur="red">
            Pour savoir si un nombre est divisible par un autre, on peut :
            <ul>
                <li>calculer le reste de la division euclidienne, et vérifier qu'il est égal à 0<br>
                    <img
                        style="width: 20ex;" 
                        src="/tikz/6eme/ch09/divisions_reste_egal_0.svg" 
                        alt="Divisions ayant un reste égal à 0" />
                </li>
                <li>ou utiliser les critères de divisibilité</li>
            </ul>
        </Paragraphe>
        <Paragraphe nom="Critères de divisibilité" couleur="black">
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        <th>règle</th>
                        <th>exemples</th>
                    </tr>
                    <tr>
                        <td>divisible par 2</td>
                        <td>le nombre est pair <br> le chiffre des unités est 0, 2, 4, 6 ou 8</td>
                        <td>
                            <span class="green">
                                102 est pair 
                            </span>
                            <br>
                            <span class="rouge">
                                113 est impair
                            </span> 
                        </td>
                    </tr>
                    <tr>
                        <td>divisible par 3</td>
                        <td>la somme de ses chiffres est divisible par 3</td>
                        <td>
                            <span class="green">
                                102 est divisible par 3 car 1 + 0 + 2 = 3
                            </span>
                            <br>
                            <span class="rouge">
                                113 n'est pas divisible par 3 car 1 + 1 + 3 = 5
                            </span> 
                        </td>
                    </tr>
                    <tr>
                        <td>divisible par 5</td>
                        <td>le chiffre des unités est 0 ou 5</td>
                        <td>
                            <span class="green">
                                105 est divisible par 5
                            </span>
                            <br>
                            <span class="rouge">
                                113 n'est pas divisible par 5
                            </span> 
                        </td>
                    </tr>
                    <tr>
                        <td>divisible par 9</td>
                        <td>la somme de ses chiffres est divisible par 9</td>
                        <td>
                            <span class="green">
                                108 est divisible par 9 car 1 + 0 + 8 = 9
                            </span>
                            <br>
                            <span class="rouge">
                                113 n'est pas divisible par 9 car 1 + 1 + 3 = 5
                            </span> 
                        </td>
                    </tr>
                    <tr>
                        <td>divisible par 10</td>
                        <td>le chiffre des unités est 0</td>
                        <td>
                            <span class="green">
                                100 est divisible par 10
                            </span>
                            <br>
                            <span class="rouge">
                                113 n'est pas divisible par 10
                            </span> 
                        </td>
                    </tr>
                </tbody>
            </table>
        </Paragraphe>
    </Partie>
    <Partie numero={3} titre="Division décimale">
        <Paragraphe nom="Méthode" couleur="red">
            La division décimale a pour quotient un nombre décimal.
            Pour cela, lorsque l'on pose la division, on introduit la virgule.
        </Paragraphe>
        <Remarque>
            315 = 315,0 = 315,00 = 315,000 = ...
        </Remarque>
        <Exemples>
            
        </Exemples>
    </Partie>
</Chapitre>


<style>
    i {
        border: 2px solid green;
        padding: 0em 0.3em;
    }
    .ligne_flex {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .egalite_division_euclidienne {
        font-family: Katex_Main;
        width: fit-content;
        height: fit-content;
        border: 2px solid red;
        margin: 10px;
    }
    .rouge {
        color: red;
    }
    .green {
        color: green;
    }
    table {
        text-align: center;
        border-collapse: collapse;
        width: 90%;
    }
    table, th, td {
        border: 1px solid black;
    }

    @media (max-aspect-ratio: 1/1) {
        .ligne_flex {
            flex-direction: column;
        }
    }
</style>