<script lang="ts">
    import { Contenu, Partie, SousPartie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Exemples, Item, Propriete } from "$lib/cahier/composants/de_cours/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from 'mathlifier';
</script>

<Contenu>
    <SousPartie numero={2} titre="Addition de fractions" />
        <LigneVide />
        <Propriete lignes={2}>
            Pour additionner deux fractions, il faut qu'elles aient le même dénominateur.
        </Propriete>
        <Exemples lignes={4}>
            <Item lignes={2}>
                {@html math(`\\dfrac{1}{3} + \\dfrac{4}{3} = \\dfrac{1 + 4}{3} = \\dfrac{5}{3}`)}.
            </Item>
            <Item lignes={2}>
                {@html math(`\\dfrac{2}{5} + \\dfrac{4}{5} = \\dfrac{2 + 4}{5} = \\dfrac{6}{5}`)}.
            </Item>
        </Exemples>
</Contenu>