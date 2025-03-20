<script lang="ts">
    import { Contenu, Partie, SousPartie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Exemples, Item, Propriete } from "$lib/cahier/composants/de_cours/*";

    import { math } from 'mathlifier';
</script>

<Contenu>
        <Exemples lignes={5}>
            <Item lignes={2}>
                {@html math("325 = 300 + 20 + 5 = 3 \\times 100 + 2 \\times 10 + 5 \\times 1")} <br />
                {@html math("~~~~~~~~~ = \\text{ 3 centaines, 2 dizaines et 5 unités }")}
            </Item>
            <Item lignes={3}>
                {@html math("105~037 = 100~000 + 5~000 + 30 + 7")} <br />
                {@html math("~~~~~~~~~~~~~~~~ = 1 \\times 100~000 + 5 \\times 1~000 + 3 \\times 10 + 7 \\times 1")} <br />
                {@html math("~~~~~~~~~~~~~~~~ = \\text{ 1 centaine de milliers, 5 milliers, 3 dizaines et 7 unités }")}
            </Item>
        </Exemples>
    <Partie numero={2} titre="Comparaison et encadrement" />
        <Definition lignes={8}>
            Comparer deux nombres consiste à dire lequel est le plus grand ou le plus petit.<br>
            Pour cela, on utilise les symboles :
                <Item>{@html math("\\lt")} (plus petit que)</Item>
                <Item>{@html math("\\gt")} (plus grand que)</Item>
                <Item>{@html math("=")} (égal)</Item>
                <Item>{@html math("\\leqslant")} (plus petit ou égal à)</Item>
                <Item>{@html math("\\geqslant")} (plus grand ou égal à)</Item>
        </Definition>
        <Exemples lignes={5}>
            <Item>{@html math("35 \\lt 40")}</Item>
            <Item>{@html math("54 \\gt 52")}</Item>
            <Item>{@html math("98 = 3 + 95")}</Item>
            <Item>{@html math("32 + 2 \\leqslant 34")}</Item>
            <Item>{@html math("65 \\geqslant 54 + 11")}</Item>
        </Exemples>
</Contenu>