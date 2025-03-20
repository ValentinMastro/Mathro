<script lang="ts">
	import { Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Vocabulaire, Item, Exemples } from "$lib/cahier/composants/de_cours/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from "mathlifier";
</script>

<Contenu>
    <Partie numero={2} titre="Vocabulaire des opérations" />
        <LigneVide />
        <Vocabulaire lignes={3}>
            <Item>
                On additionne des <i>termes</i> pour obtenir une <i>somme</i>.
            </Item>
            <Item>
                On soustrait des <i>termes</i> pour obtenir une <i>différence</i>.
            </Item>
            <Item>
                On multiplie des <i>facteurs</i> pour obtenir un <i>produit</i>.
            </Item>
        </Vocabulaire>
        <Exemples lignes={9}>
            <Item lignes={3}>
                Dans le calcul {@html math("3 + 8 = 11")}
                <Item> 3 et 8 sont des <i>termes</i></Item>
                <Item> 11 est la <i>somme</i></Item>
            </Item>
            <Item lignes={3}>
                Dans le calcul {@html math("7 - 2 = 5")}
                <Item> 7 et 2 sont des <i>termes</i></Item>
                <Item> 5 est la <i>différence</i></Item>
            </Item>
            <Item lignes={3}>
                Dans le calcul {@html math("4 \\times 6 = 24")}
                <Item> 4 et 6 sont des <i>facteurs</i></Item>
                <Item> 24 est le <i>produit</i></Item>
            </Item>
        </Exemples>
</Contenu>
