<script lang="ts">
	import Contenu from "$lib/cahier/composants/de_chapitrage/Contenu.svelte";
	import Partie from "$lib/cahier/composants/de_chapitrage/Partie.svelte";
	import SousPartie from "$lib/cahier/composants/de_chapitrage/SousPartie.svelte";

	import Definition from "$lib/cahier/composants/de_cours/Definition.svelte";
    import Exemples from "$lib/cahier/composants/de_cours/Exemples.svelte";
    import Item from "$lib/cahier/composants/de_cours/Item.svelte";
	import Propriete from "$lib/cahier/composants/de_cours/Propriete.svelte";

    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from "mathlifier";
</script>

<Contenu>
    <Partie numero={2} titre="Pourcentages" />
        <SousPartie numero={1} titre="Le pourcentage d'un nombre" />
            <LigneVide />
            <Definition>
                Calculer {@html math("p\\% \\text{ de } x")} revient à calculer {@html math("\\dfrac{p}{100} \\times x")}.
            </Definition>

            <Exemples lignes={4.5}>
                <Item lignes={1.5}>
                    {@html math("25 \\% \\text{ de } 12 = \\dfrac{25}{100} \\times 12 = 3")}
                </Item>
                <Item lignes={1.5}>
                    {@html math("60 \\% \\text{ de } 50 = \\dfrac{60}{100} \\times 50 = 30")}
                </Item>
                <Item lignes={1.5}>
                    {@html math("75 \\% \\text{ de } 32 = \\dfrac{75}{100} \\times 32 = 24")}
                </Item>
            </Exemples>
            <LigneVide lignes={0.5} />

        <SousPartie numero={2} titre="Augmentation par un pourcentage" />
            <Propriete lignes={4}>
                Pour augmenter une valeur de {@html math("p \\%")} :
                <Item>
                    je calcule {@html math("p \\%")} puis je l'ajoute à la valeur initiale
                </Item>
                <Item>
                    <u>OU</u> je calcule {@html math("(100+p) \\%")} de la valeur initiale
                </Item>
                <Item>
                    <u>OU</u> je calcule {@html math("\\dfrac{100+p}{100} \\times")} la valeur initiale
                </Item>
            </Propriete>
</Contenu>