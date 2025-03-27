<script lang="ts">
	import { Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Exemples, Methode, Item } from "$lib/cahier/composants/de_cours/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";
	import { math } from "mathlifier";
</script>

<Contenu>
    <Partie numero={4} titre="Application du théorème : simplifier des fractions" />
        <LigneVide />
        <Methode lignes={3}>
            Pour simplifier une fraction, on peut écrire la décomposition 
            en produit de facteurs premiers du numérateur et du dénominateur,
            puis simplifier en divisant par les facteurs communs.
        </Methode>
        <LigneVide />
        <Exemples lignes={9}>
            <Item lignes={4}>
                Simplifier la fraction {@html math("\\dfrac{12}{18}")}.<br>
                {@html math("12 = 2 \\times 2 \\times 3")} et {@html math("18 = 2 \\times 3 \\times 3")}.<br>
                On a donc {@html math("\\frac{12}{18} = \\frac{2 \\times 2 \\times 3}{2 \\times 3 \\times 3}")}.<br>
                En simplifiant par les facteurs communs, on obtient {@html math("\\frac{12}{18} = \\frac{2}{3}")}.
            </Item>
            <LigneVide />
            <Item lignes={4}>
                Simplifier la fraction {@html math("\\dfrac{540}{720}")}.<br>
                {@html math("540 = 2 \\times 2 \\times 3 \\times 3 \\times 3 \\times 5")} et {@html math("720 = 2 \\times 2 \\times 2 \\times 3 \\times 3 \\times 5")}.<br>
                On a donc {@html math("\\frac{540}{720} = \\frac{2 \\times 2 \\times 3 \\times 3 \\times 3 \\times 5}{2 \\times 2 \\times 2 \\times 3 \\times 3 \\times 5}")}.<br>
                En simplifiant par les facteurs communs, on obtient {@html math("\\frac{540}{720} = \\frac{3}{4}")}.
            </Item>
        </Exemples>
</Contenu>