<script lang="ts">
    import { Contenu, Partie, SousPartie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Propriete, Methode, Exemples, Item } from "$lib/cahier/composants/de_cours/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";
    import { math } from "mathlifier";
</script>

<Contenu>
    <Partie numero={4} titre="Additionner des fractions" />
        <LigneVide />
        <Propriete lignes={2}>
            Pour additionner des fractions, il faut qu'elles aient le même dénominateur.
        </Propriete>
        <Methode lignes={2}>
            Pour additionner des fractions, on additionne les numérateurs, et on garde le même dénominateur.
        </Methode>
        <Exemples lignes={3}>
            <Item>
                {@html math("\\frac{1}{3} + \\frac{4}{3} = \\frac{1+4}{3} = \\frac{5}{3}")}
            </Item>
            <Item>
                {@html math("\\frac{2}{5} + \\frac{7}{5} = \\frac{2+7}{5} = \\frac{9}{5}")}
            </Item>
            <Item>
                {@html math("\\frac{8}{9} + \\frac{5}{9} = \\frac{8+5}{9} = \\frac{13}{9}")}
            </Item>
        </Exemples>

        <LigneVide />
    <Partie numero={5} titre="Comparer des fractions" />
        <LigneVide />
        <SousPartie numero={1} titre="Comparer des fractions à 1" />
            <Propriete lignes={4}>
                <Item lignes={2}>
                    Une fraction est {@html math("\\geq 1")} si le numérateur est supérieur ou égal au dénominateur.
                </Item>
                <Item lignes={2}>
                    Une fraction est {@html math("\\leq 1")} si le numérateur est inférieur ou égal au dénominateur.
                </Item>
            </Propriete>
            <Exemples lignes={3}>
                <Item>
                    {@html math("\\frac{3}{2} \\geq 1")} car {@html math("3 \\geq 2")}
                </Item>
                <Item>
                    {@html math("\\frac{5}{7} \\leq 1")} car {@html math("5 \\leq 7")}
                </Item>
                <Item>
                    {@html math("\\frac{4}{4} = 1")}
                </Item>
            </Exemples>
</Contenu>