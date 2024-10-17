<script lang="ts">
	import { Contenu, Partie, SousPartie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Definition, Exemples, Item } from "$lib/cahier/composants/de_cours/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from "mathlifier";
</script>

<Contenu>
    <Partie numero={2} titre="Plusieures écritures" />
        <SousPartie numero={1} titre="Fractions décimales" />
            <LigneVide />
            <Definition lignes={2}>
                Une fraction décimale est une fraction dont le dénominateur est 1, 10, 100, 1000, etc.
            </Definition>
            <Exemples lignes={3}>
                <Item>
                    {@html math("0{,}5 = \\frac{5}{10}")}
                </Item>
                <Item>
                    {@html math("3{,}87 = \\frac{387}{100}")}
                </Item>
                <Item>
                    {@html math("0{,}007 = \\frac{7}{1000}")}
                </Item>
            </Exemples>
        <LigneVide />
        <SousPartie numero={2} titre="Décomposition" />
            <LigneVide />
            <Exemples lignes={6}>
                <Item lignes={3}>
                    {@html math("3{,}87 = 3 + 0{,}8 + 0{,}07")} <br>
                    {@html math("= 3 + 8 \\times 0{,}1 + 7 \\times 0{,}01")} <br>
                    {@html math("= 3 + \\frac{8}{10} + \\frac{7}{100}")}
                </Item>
                <Item lignes={3}>
                    {@html math("54{,}123~4 = 54 + 0{,}1 + 0{,}02 + 0{,}003 + 0{,}000~4")} <br>
                    {@html math("= 54 + 1 \\times 0{,}1 + 2 \\times 0{,}01 + 3 \\times 0{,}001 + 4 \\times 0{,}000~1")} <br>
                    {@html math("= 54 + \\frac{1}{10} + \\frac{2}{100} + \\frac{3}{1~000} + \\frac{4}{10~000}")}
                </Item>
            </Exemples>
</Contenu>