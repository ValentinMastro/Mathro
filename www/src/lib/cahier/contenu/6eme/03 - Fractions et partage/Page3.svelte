<script lang="ts">
    import { Contenu, Partie, SousPartie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Exemple, Methode, Item, Definition } from "$lib/cahier/composants/de_cours/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";
    import { math } from "mathlifier";
</script>

<Contenu>
    <Partie numero={3} titre="La fraction d'un nombre" />
        <SousPartie numero={1} titre="Multiplier un nombre et une fraction" />
            <Methode lignes={2}>
                Multiplier un nombre par une fraction, c'est multiplier le nombre par le numérateur, et diviser par le dénominateur.
            </Methode>
            <Exemple lignes={5}>
                <LigneVide />
                Calculons {@html math("3 \\times \\dfrac{2}{5}")}
                <Item>
                    {@html math("3 \\times 2 \\div 5 = 6 \\div 5 = 1,2")}
                </Item>
                <Item>
                    {@html math("3 \\div 5 \\times 2 = 0,6 \\times 2 = 1,2")}
                </Item>
                <Item>
                    {@html math("2 \\div 5 \\times 3 = 0,4 \\times 3 = 1,2")}
                </Item>
            </Exemple>

        <SousPartie numero={2} titre="Les pourcentages" />
            <Definition>
                Un pourcentage est une fraction dont le dénominateur est 100.
            </Definition>
            <Methode lignes={2}>
                Pour calculer le pourcentage d'un nombre, on peut utiliser sa forme fractionnaire.
            </Methode>
            <Exemple lignes={2}>
                Calculons {@html math("30\\%~\\text{de}~50")}.<br>
                {@html math("30\\%~\\text{de}~50 = \\frac{30}{100} \\times 50 = 30 \\times 50 \\div 100 = 15")}
            </Exemple>
</Contenu>