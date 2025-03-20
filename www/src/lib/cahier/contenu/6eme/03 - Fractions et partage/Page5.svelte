<script lang="ts">
    import { Contenu, SousPartie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Exemples, Item, Propriete } from "$lib/cahier/composants/de_cours/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";
	import { math } from "mathlifier";
</script>

<Contenu>
    <SousPartie numero={2} titre="Comparer des fractions entre elles" />
        <LigneVide />
        <Propriete lignes={4}>
            <Item lignes={2}>
                Si deux fractions ont le même dénominateur, alors la fraction avec le plus grand numérateur est la plus grande.
            </Item>
            <Item lignes={2}>
                Si deux fractions ont le même numérateur, alors la fraction avec le plus petit dénominateur est la plus grande.
            </Item>
        </Propriete>
        <Exemples lignes={4}>
            <Item lignes={2}>
                {@html math("\\dfrac{4}{3} > \\dfrac{2}{3}")} car ils ont le même dénominateur et {@html math("4 > 2")}
            </Item>
            <Item lignes={2}>
                {@html math("\\dfrac{1}{2} > \\dfrac{1}{3}")} car ils ont le même numérateur et {@html math("2 < 3")}
            </Item>
        </Exemples>
</Contenu>