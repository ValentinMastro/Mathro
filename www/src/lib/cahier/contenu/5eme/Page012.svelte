<script lang="ts">
    import { Partie, Contenu } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Exemples, Notation, Paragraphe, Item, Tableau, LigneTableau, Methode } from "$lib/cahier/composants/de_cours/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";
</script>

<Contenu>
    <Partie numero={2} titre="Divisibilités" />
        <LigneVide />
        <Definition lignes={2}>
            "Être divisible par" signifie "être dans la table de multiplication de".
        </Definition>
        <Exemples lignes={2}>
            <Item>42 est divisible par <span class="rouge">6</span> car 42 = <span class="rouge">6</span> × 7</Item>
            <Item>35 est divisible par <span class="rouge">5</span> car 35 = <span class="rouge">5</span> × 7</Item>
        </Exemples>
        <Notation lignes={5}>
            On peut dire que : 
                <Item>42 est divisible par 6</Item>
                <Item>42 est un multiple de 6</Item>
                <Item>6 divise 42</Item>
                <Item>6 est un diviseur de 42</Item>
        </Notation>
        <LigneVide />
        <Methode lignes={4}>
            Pour savoir si un nombre est divisible par un autre, on peut :
                <Item lignes={2}>calculer le reste de la division euclidienne, et vérifier qu'il est égal à 0</Item>
                <Item>utiliser les critères de divisibilité</Item>
        </Methode>
</Contenu>
