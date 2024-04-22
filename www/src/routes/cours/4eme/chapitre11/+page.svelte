<script lang="ts">
    import { Chapitre, Partie } from "$lib/chapitrage/all_chapitrages";
    import { Definition, Exemples, Paragraphe, Remarque } from "$lib/chapitrage/sections/all_sections";
    import Katex from "svelte-katex";
</script>

<Chapitre numero={11} titre="Décomposition en facteurs premiers">
    <Partie numero={1} titre="Nombres premiers">
        <Definition>
            On dit que <Katex>a</Katex> est un <i>diviseur</i> de <Katex>b</Katex> si <Katex>b</Katex> est un multiple de <Katex>a</Katex>.<br>
            Autrement dit, le reste de la division euclidienne de <Katex>b</Katex> par <Katex>a</Katex> est nul.
        </Definition>
        <Exemples>
            <ul>
                <li>3 est un diviseur de 15 car 15 = 3 × 5.</li>
                <li>7 est un diviseur de 21 car 21 = 7 × 3.</li>
                <li>5 est un diviseur de 25 car 25 = 5 × 5.</li>
                <li>1 est un diviseur de 43 car 43 = 1 × 43.</li>
                <li>78 est un diviseur de 78 car 78 = 78 × 1.</li>
            </ul>
        </Exemples>
        <Definition>
            Un nombre est <i>premier</i> s'il n'a que deux diviseurs : 1 et lui-même.<br>
            S'il n'est pas premier, on dit qu'il est <i>composé</i>.
        </Definition>
        <Remarque>
            1 n'est pas considéré comme un nombre premier.
        </Remarque>
        <Exemples>
            <ul>
                <li>17 est premier, il ne peut s'écrire que 1 × 17.</li>
                <li>15 est composé, il peut s'écrire 1 × 15 ou 3 × 5.</li>
                <li>24 est composé, il peut s'écrire 1 × 24, 2 × 12, 3 × 8 ou 4 × 6.</li>
            </ul>
        </Exemples>
        <Paragraphe couleur="red" nom="À connaître par cœur">
            Les nombres premiers inférieurs à 30 sont :
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29
        </Paragraphe>
    </Partie>
    <Partie numero={2} titre="Décomposition en facteurs premiers">
        <Paragraphe couleur="red" nom="Théorème fondamental de l'arithmétique">
            Pour n'importe quel entier naturel &#x2a7e; 2, il existe une <u>unique</u> façon de le décomposer en produit de nombres premiers.
        </Paragraphe>
        <Exemples>
            <ul>
                <li>219 = 3 × 73</li>
                <li>110 = 2 × 5 × 11</li>
                <li>625 = 5 × 5 × 5 × 5 = 5<sup>4</sup></li>
                <li>360 = 2 × 2 × 2 × 3 × 3 × 5 = 2<sup>3</sup> × 3<sup>2</sup> × 5</li>
            </ul>
        </Exemples>
    </Partie>
</Chapitre>
