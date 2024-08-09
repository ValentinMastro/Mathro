<script lang="ts">
    import { Chapitre, Contenu, Partie, SousPartie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Exemples, Notation, Item } from "$lib/cahier/composants/de_cours/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math, display } from 'mathlifier';

    let serie_1 = [2, 6, 4, 6, 3, 1, 5, 3];
    let serie_2 = [45, 38, 46, 39, 40];
    let serie_3 = [141, 139, 151, 157, 153, 165, 165, 169, 160, 149];

    let moyenne_1 = $derived(serie_1.reduce((a, b) => a + b, 0) / serie_1.length);
</script>

<Chapitre titre="Statistiques" />

<Contenu apres_un_titre>
    <Definition>
        Une série statistique est un ensemble de valeurs non ordonnées.
    </Definition>
    <Exemples lignes={5}>
        <Item lignes={2}>
            J'ai lancé {serie_1.length} dés à six faces et j'ai obtenu les valeurs suivantes :<br>
            <center>{@html math(`\\left\\{ ${serie_1.join("~;~")}  \\right\\}`)}</center>
        </Item>
        <Item lignes={3}>
            J'ai mesuré la taille de {serie_3.length} élèves de ma classe et j'ai obtenu les valeurs suivantes (en cm) :
            <center>{@html math(`\\left\\{ ${serie_3.join("~;~")} \\right\\}`)}</center>
        </Item>
    </Exemples>

    <LigneVide />
    <Partie numero={1} titre="Indicateurs de position" />
        <SousPartie numero={1} titre="Moyenne" />
            <LigneVide />
            <Definition lignes={2}>
                <i>L'effectif total</i> d'une série statistique est le nombre de valeurs qu'elle contient.<br>
            </Definition>
            <Exemples lignes={2}>
                <Item lignes={1}>
                    {@html math(`\\left\\{ ${serie_1.join("~;~")}  \\right\\} \\Rightarrow `)}
                    L'effectif total est {serie_1.length}.
                </Item>
                <Item lignes={1}>
                    {@html math(`\\left\\{ ${serie_2.join("~;~")}  \\right\\} \\Rightarrow `)}
                    L'effectif total est {serie_2.length}.
                </Item>
            </Exemples>
            <Definition lignes={2}>
                <i>La moyenne</i> d'une série statistique est la somme de toutes les valeurs divisée par l'effectif total.
            </Definition>
            <Notation>
                On note N l'effectif total d'une série statistique et {@html math("\\bar{x}")} sa moyenne.
            </Notation>
            <Exemples lignes={2.7}>
                <Item>
                    {@html math(`\\left\\{ ${serie_1.join("~;~")}  \\right\\}`)}
                </Item>
                {@html display(`
                    \\bar{x}
                    = \\frac{${serie_1.join("+")}}{${serie_1.length}} 
                    = ${moyenne_1.toLocaleString("fr-FR", {maximumFractionDigits: 3})}
                `)}
            </Exemples>
</Contenu>