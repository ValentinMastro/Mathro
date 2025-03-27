<script lang="ts">
	import { Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Exemples, Paragraphe, Propriete, Item } from "$lib/cahier/composants/de_cours/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math, display } from 'mathlifier';
</script>

<Contenu>
    <Partie numero={2} titre="Approche quantitative" />
    <LigneVide />
    <Definition lignes={5}>
        La probabilité d'un évènement est un nombre entre 0 et 1 :
        <Item>quand ce nombre est égal à 0, l'évènement est impossible</Item>
        <Item>quand ce nombre est proche de 0, l'évènement est peu probable</Item>
        <Item>quand ce nombre est proche de 1, l'évènement est très probable</Item>
        <Item>quand ce nombre est égal à 1, l'évènement est certain</Item>
    </Definition>
    <Paragraphe couleur="noir" nom_du_paragraphe="Conséquence">
        {@html math(`P(\\emptyset) = 0`)} et {@html math(`P(\\Omega) = 1`)}
    </Paragraphe>
    <Definition lignes={2}>
        Soit A un évènement.<br>
        {@html math(`\\overline{A}`)} est l'évènement contraire de A.
    </Definition>
    <Exemples lignes={6}>
        <Item lignes={3}>
            Je lance un dé : <br>
            A = « Avoir un 6 » <br>
            {@html math(`\\overline{A}`)} = « Ne pas avoir un 6 » = « Avoir un 1, 2, 3, 4 ou 5 »
        </Item>
        <Item lignes={3}>
            Je tire au sort une lettre dans l'alphabet : <br>
            B = « Avoir une consonne » <br>
            {@html math(`\\overline{B}`)} = « Ne pas avoir une consonne » = « Avoir une voyelle »
        </Item>
    </Exemples>
    <Propriete lignes={3}>
        Soit A un évènement.<br>
        {@html math(`p(A)+p(\\overline{A}) = 1`)}<br>
        {@html math(`p(\\overline{A}) = 1 - p(A)`)}
    </Propriete>
    <Exemples lignes={4.8}>
        <u>Expérience aléatoire : </u> Tirer une carte dans un jeu de 32 cartes <br>
        <u>Question : </u> {@html math(`p(\\text{ne pas avoir un valet ou une dame}) = ?`)}<br>
        <u>Solution : </u>
        <Item>
            {@html math(`p(\\text{avoir un valet ou une dame}) = \\dfrac{8}{32}`)}
        </Item>
        <Item>
            {@html math(`p(\\text{ne pas avoir un valet ou une dame}) = 1 - \\dfrac{8}{32} = \\dfrac{32}{32} - \\dfrac{8}{32} = \\dfrac{24}{32}`)}
        </Item>
    </Exemples>
</Contenu>