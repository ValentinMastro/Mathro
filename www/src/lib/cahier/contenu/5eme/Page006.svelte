<script lang="ts">
    import { Contenu, Partie, SousPartie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Exemples, Item, Methode, Paragraphe, Propriete } from "$lib/cahier/composants/de_cours/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from "mathlifier";
</script>

<Contenu>
    <SousPartie numero={3} titre="Calculer la fraction d'un nombre" />
        <LigneVide />
        <Exemples lignes={4}>
            <Item lignes={2}>
                {@html math(`\\dfrac{3}{4} \\times 5 = \\dfrac{3 \\times 5}{4} = \\dfrac{15}{4}`)}.
            </Item>
            <Item lignes={2}>
                {@html math(`\\dfrac{2}{3} \\times 6 = \\dfrac{2 \\times 6}{3} = \\dfrac{12}{3} = 4`)}.
            </Item>
        </Exemples>
        <LigneVide />
        <Propriete>
            Un pourcentage est une fraction dont le dénominateur est 100.
        </Propriete>
        <Exemples lignes={4}>
            <Item lignes={2}>
                {@html math(`50\\% = \\dfrac{50}{100} = \\dfrac{1}{2}`)}
            </Item>
            <Item lignes={2}>
                {@html math(`25\\% = \\dfrac{25}{100} = \\dfrac{1}{4}`)}
            </Item>
        </Exemples>

        <Methode>
            Pour calculer le pourcentage d'un nombre, on peut se ramener à l'écriture fractionnaire.
        </Methode>

        <Exemples lignes={4}>
            <Item lignes={2}>
                {@html math(`35 \\% de 120 = \\dfrac{35}{100} \\times 120 = \\dfrac{35 \\times 120}{100} = \\dfrac{4200}{100} = 42`)}.
            </Item>
            <Item lignes={2}>
                {@html math(`15 \\% de 200 = \\dfrac{15}{100} \\times 200 = 15 \\times \\dfrac{200}{100} = 15 \\times 2 = 30`)}.
            </Item>
        </Exemples>
</Contenu>