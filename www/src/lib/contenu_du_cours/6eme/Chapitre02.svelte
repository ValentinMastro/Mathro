<script lang="ts">
    import { Chapitre, Partie } from "$lib/chapitrage/all_chapitrages";
    import { Definition, Exemples, Notation, Schema } from "$lib/chapitrage/sections/all_sections";
    import { math, display } from 'mathlifier';
</script>

<Chapitre numero={2} titre="Repérage et comparaison">
    <Partie numero={1} titre="Repérage sur un axe">
        <Definition>
            Un axe est une (demi-)droite que l'on va graduer,
            c'est-à-dire associer chaque point à un nombre : 
            l'abscisse.
        </Definition>
        <Notation>
            Si l'abscisse du point A vaut 5, on écrira 
            {@html math("\\text{A}(5)")}.
        </Notation>
        <Exemples>
            <img alt="Axe gradué sur lequel sont placés 5 points." 
                src="/tikz/6eme/ch02/axe.svg" />
        </Exemples>
    </Partie>
    <Partie numero={2} titre="Repérage dans le plan">
        <Definition>
            Un repère orthogonal est constitué de 3 éléments :
            <ul>
                <li>Un point appelé l'origine du repère</li>
                <li>l'axe des abscisses (souvent horizontal)</li>
                <li>l'axe des ordonnées, perpendiculaire à l'axe des ordonnées (souvent vertical)</li>
            <ul>
        </Definition>
        <Schema>
            <img    alt="Plan avec l'axe des abscisses et l'axe des ordonnées" 
                    src="/tikz/6eme/ch02/plan.svg" />
        </Schema>
        <Definition>
            Dans un repère du plan, on associe à chaque point deux nombres :
            son abscisse et son ordonnée. Ensemble, ils sont les <i>coordonnées</i>
            de ce point.
        </Definition>
        <Notation>
            Si le point A a pour abscisse 7, et pour ordonnée 4, on note 
            {@html math("\\text{A}(7;4)")}.
        </Notation>
        <Schema>
            <img    alt="Plan contenant des points"
                    src="/tikz/6eme/ch02/plan_points.svg" />
        </Schema>
    </Partie>
</Chapitre>

<style>
    img {
        width: 60ex;
    }
</style>