<script lang="ts">
	import { Chapitre, Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Exemples, Item, Paragraphe, Remarque } from "$lib/cahier/composants/de_cours/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math, display } from 'mathlifier';
</script>

<Chapitre titre="Décomposition en facteurs premiers" />

<Contenu apres_un_titre>
    <Partie numero={1} titre="Nombres premiers" />
        <LigneVide />
        <Definition lignes={3}>
            Soient {@html math("a")} et {@html math("b")} deux entiers naturels.<br>
            On dit que {@html math("a")} est un <i>diviseur</i> de {@html math("b")} si {@html math("b")} est un multiple de {@html math("a")}.<br>
            Autrement dit, le reste de la division euclidienne de {@html math("b")} par {@html math("a")} est nul.
        </Definition>
        <Exemples lignes={5}>
            <Item>3 est un diviseur de 15 car {@html math("15 = 3 \\times 5")}.</Item>
            <Item>7 est un diviseur de 21 car {@html math("21 = 7 \\times 3")}.</Item>
            <Item>5 est un diviseur de 25 car {@html math("25 = 5 \\times 5")}.</Item>
            <Item>1 est un diviseur de 43 car {@html math("43 = 1 \\times 43")}.</Item>
            <Item>78 est un diviseur de 78 car {@html math("78 = 78 \\times 1")}.</Item>
        </Exemples>
        <Definition lignes={2}>
            Un entier naturel est <i>premier</i> s'il n'a que deux diviseurs : 1 et lui-même.
            S'il n'est pas premier, on dit qu'il est <i>composé</i>.
        </Definition>
        <Remarque>
            1 n'est pas considéré comme un nombre premier.
        </Remarque>
        <Exemples lignes={3}>
            <Item>17 est premier, il ne peut s'écrire que {@html math("1 \\times 17")}.</Item>
            <Item>15 est composé, il peut s'écrire {@html math("1 \\times 15")} ou {@html math("3 \\times 5")}.</Item>
            <Item>24 est composé, il peut s'écrire {@html math("1 \\times 24")}, {@html math("2 \\times 12")}, {@html math("3 \\times 8")} ou {@html math("4 \\times 6")}.</Item>
        </Exemples>
        <Paragraphe couleur="rouge" nom_du_paragraphe="À connaître par cœur" lignes={2}>
            Les nombres premiers inférieurs à 30 sont :<br>
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29
        </Paragraphe>
</Contenu>