<script lang="ts">
    import { Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Remarque, Propriete, Exemples, Item } from "$lib/cahier/composants/de_cours/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from "mathlifier";
</script>

<Contenu>
    <Partie numero={2} titre="Puissances à base quelconque" />
        <LigneVide />
        <Definition lignes={4}>
            Soit {@html math("a")} un nombre réel non nul et {@html math("n")} un nombre entier relatif.<br>
            {@html math(`a^n = \\underbrace{a \\times a \\times \\cdots \\times a}_{n \\text{ facteurs}}`)}<br>
            <LigneVide lignes={0.5} />
            {@html math("a")} est la <i>base</i> de la puissance et {@html math("n")}est son <i>exposant</i>.
        </Definition>
        <Remarque>
            Pour n'importe quelle base {@html math("a")}, on a {@html math("a^0=1")}.
        </Remarque>
        <Propriete>
            Pour tout nombre {@html math("x")}, {@html math("x^2")} est positif.
        </Propriete>
        <Propriete lignes={3}>
            Si {@html math("x")} est un nombre négatif, {@html math("x^n")} est 
            <Item>positif si {@html math("n")} est un entier pair</Item>
            <Item>négatif si {@html math("n")} est un entier impair</Item>
        </Propriete>
        <Exemples lignes={3}>
            <Item>
                {@html math(`(-2)^5 = -32`)} est négatif car 5 est impair.
            </Item>
            <Item>
                {@html math(`(-6)^6 = 46656`)} est positif car 6 est pair.
            </Item>
            <Item>
                {@html math(`(-3)^{10} = 59049`)} est positif car 10 est pair.
            </Item>
        </Exemples>
</Contenu>