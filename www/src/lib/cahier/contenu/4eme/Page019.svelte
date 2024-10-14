<script lang="ts">
    import { Chapitre, Partie, SousPartie, Contenu, DansLaMarge } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Exemple, Paragraphe, Item } from "$lib/cahier/composants/de_cours/*";
    import { Nombre } from "$lib/cahier/composants/de_marge/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from "mathlifier";

    let a = $state(2);
</script>

<Chapitre titre="Calcul littéral" />

<DansLaMarge apres_un_titre>
    <LigneVide lignes={18} />
    <Nombre label="a" bind:valeur={a} min={-20} max={20} />
</DansLaMarge>

<Contenu apres_un_titre>
    <Partie numero={1} titre="Les expressions littérales" />
        <SousPartie numero={1} titre="Écriture" />
            <LigneVide />
            <Definition lignes={2}>
                Une expression littérale est un ensemble d'opérations contenant des nombres et des lettres.
            </Definition>
            <Definition lignes={2}>
                Dans une expression littérale, une lettre représente un nombre, cette lettre est appelée <i>une variable</i>.
            </Definition>
            <Exemple lignes={2}>
                {@html math("3 \\times a + 2 \\times b")} est une expression littérale contenant 2 variables : {@html math("a")} et {@html math("b")}.
                Elle est composée de 3 opérations : 2 multiplications et 1 addition.
            </Exemple>
            <LigneVide />
            <Definition lignes={2}>
                Évaluer une expression signifie remplacer chacune des variables par une valeur numérique donnée.
            </Definition>
            <Exemple lignes={3}>
                Évaluer l'expression {@html math("3 \\times \\textcolor{red}{a} + 8")} en {@html math(`a=${a}`)} <br>
                signifie remplacer {@html math("a")} par {a}, <br>
                ce qui donne : {@html math(`3 \\times \\textcolor{red}{${a}} + 8 = ${3*a} + 8 = ${3*a+8}`)}
            </Exemple>
            <LigneVide />
            <Paragraphe couleur="red" nom_du_paragraphe="Convention d'écriture" lignes={4}>
                Le symbole de multiplication est facultatif : 
                <Item>entre deux variables : {@html math("ab")} signifie {@html math("a \\times b")}</Item>
                <Item>entre une variable et un nombre : {@html math('3a')} signifie {@html math("3 \\times a")}</Item>
                <Item>avec une parenthèse : {@html math("3(a+2)")} signifie {@html math("3 \\times (a+2)")}</Item>
            </Paragraphe>
</Contenu>