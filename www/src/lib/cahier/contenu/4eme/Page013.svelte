<script lang="ts">
    import { Contenu } from "$lib/cahier/composants/de_chapitrage/*";
    import { Exemples, Propriete, Item, Demonstration } from "$lib/cahier/composants/de_cours/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";
    
    import { display, math } from "mathlifier";
</script>

<Contenu>
    <Propriete lignes={3.5}>
        Pour calculer le taux de variation entre une valeur de départ et une valeur d'arrivée :
        {@html math("\\text{taux de variation} = \\dfrac{\\text{valeur d'arrivée} - \\text{valeur de départ}}{\\text{valeur de départ}} \\times 100")}
    </Propriete>
    <LigneVide lignes={0.5} />

    <Exemples lignes={9}>
        <Item lignes={4}>
            Le nombre d'habitants d'une ville est passé de 4 000 à 5 000,<br> 
            ce qui correspond à une augmentation de <br>
            {@html display("\\dfrac{5000-4000}{4000} \\times 100 = 25 \\%")}
        </Item>
        <Item lignes={5}>
            Une voiture était vendue neuve à 25 000 €. <br>
            Aujourd'hui, elle ne vaut plus que 5 000 €.<br>
            Calculons son taux de variation : <br>
            {@html display("\\dfrac{5000 - 25000}{25000} \\times 100 = -80 \\%")}<br>
            Son prix a donc baissé de 80 %.
        </Item>
    </Exemples>

    <LigneVide lignes={2} />

    <Propriete>
        {@html math("x \\% \\text{ de } y = y \\% \\text{ de } x")}
    </Propriete>
    <Demonstration lignes={1.3}>
        {@html math("x \\% \\text{ de } y = \\dfrac{x}{100} \\times y = \\dfrac{y}{100} \\times x = y \\% \\text{ de } x")}
    </Demonstration>
    <LigneVide lignes={0.7} />
    <Exemples lignes={2}>
        <Item>
            {@html math("12 \\% \\text{ de } 50 = 50 \\% \\text{ de } 12 = 6")}
        </Item>
        <Item>
            {@html math("20 \\% \\text{ de } 25 = 25 \\% \\text{ de } 20 = 5")}
        </Item>
    </Exemples>
</Contenu>