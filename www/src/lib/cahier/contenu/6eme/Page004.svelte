<script lang="ts">
    import { Contenu, Partie, SousPartie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Exemples, Item } from "$lib/cahier/composants/de_cours/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math, alignStar } from 'mathlifier';
</script>

<Contenu >
    <Partie numero={2} titre="Comparaison et encadrement" />
        <LigneVide />
        <Definition lignes={7}>
            Comparer deux nombres consiste à dire lequel est le plus grand ou le plus petit.<br>
            Pour cela, on utilise les symboles :
                <Item>&lt; (plus petit que)</Item>
                <Item>&gt; (plus grand que)</Item>
                <Item>= (égal)</Item>
                <Item>&le; (plus petit ou égal à)</Item>
                <Item>&ge; (plus grand ou égal à)</Item>
        </Definition>
        <Exemples lignes={5}>
            {@html alignStar(`
                    35 &\\lt 40 \\\\
                    54 &\\gt 52 \\\\
                    98 &= 3+95 \\\\ 
                    32 + 2 &\\leq 34 \\\\
                    65 &\\geq 54 + 11
            `)}
        </Exemples>
        <Definition lignes={2}>
            Ordre croissant : du plus petit au plus grand <br>
            Ordre décroissant : du plus grand au plus petit
        </Definition>
        <Exemples lignes={2}>
            <Item>{@html math("1 \\lt 2 \\lt 7 \\lt 12")}</Item>
            <Item>{@html math("19 \\gt 18 \\gt 15 \\gt 8")}</Item>
        </Exemples>
</Contenu>