<script lang="ts">
    import { Contenu, DansLaMarge, Partie, SousPartie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Exemple, Exemples, Item, Propriete, Texte } from "$lib/cahier/composants/de_cours/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";
    import { math } from "mathlifier";

    let pourcentage_augmentation: number = $state(20);
    let augmentation: number = $derived(50 * pourcentage_augmentation / 100);
    let resultat_augmentation: number = $derived(50 * (100 + pourcentage_augmentation) / 100);
</script>

<DansLaMarge>
    <LigneVide lignes={23} />
    <Texte>+ {pourcentage_augmentation} %</Texte>
    <input type="range" bind:value={pourcentage_augmentation} min="0" max="100" step="10" style="width: 80%;"/>
</DansLaMarge>

<Contenu>
    <Partie numero={2} titre="Pourcentages" />
        <SousPartie numero={1} titre="Le pourcentage d'un nombre" />
            <Definition lignes={1.4}>
                Calculer {@html math("p\\% \\text{ de } x")} revient à calculer {@html math("\\dfrac{p}{100} \\times x")}.
            </Definition>
            <Exemples lignes={5}>
                <Item lignes={1}>
                    {@html math("25 \\% \\text{ de } 12 = \\dfrac{25}{100} \\times 12 = 3")}
                </Item>
                <LigneVide />
                <Item lignes={1}>
                    {@html math("60 \\% \\text{ de } 50 = \\dfrac{60}{100} \\times 50 = 30")}
                </Item>
                <LigneVide />
                <Item lignes={1}>
                    {@html math("75 \\% \\text{ de } 32 = \\dfrac{75}{100} \\times 32 = 24")}
                </Item>
            </Exemples>
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

            <Exemple lignes={4}>
                50 € + {pourcentage_augmentation} % :
                <Item>
                    {@html math(`${pourcentage_augmentation}\\% ~\\text{de}~ 50€ = \\underline{${augmentation}€} \\longrightarrow 50€+\\underline{${augmentation}€}=\\boxed{${resultat_augmentation}€}`)}
                </Item>
                <Item>
                    {@html math(`${100+pourcentage_augmentation}\\% ~\\text{de}~ 50€ = \\boxed{${resultat_augmentation}€}`)}
                </Item>
                <Item>
                    {@html math(`50€ \\times \\dfrac{100+${pourcentage_augmentation}}{100} = 50€ \\times ${(100+pourcentage_augmentation)/100} = \\boxed{${resultat_augmentation}€}`)}
                </Item>
            </Exemple>
</Contenu>
