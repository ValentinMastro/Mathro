<script lang="ts">
	import { Contenu, Partie, SousPartie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Exemples, Ligne, LigneTableau, Tableau } from "$lib/cahier/composants/de_cours/*";
	import Item from "$lib/cahier/composants/de_cours/Item.svelte";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

</script>

<Contenu>
    <Partie numero={2} titre="Conversion d'unités de longueurs et d'aires" />
        <SousPartie numero={1} titre="Longueur" />
        <LigneVide />

        <Tableau lignes={4}>
            <LigneTableau>
                <td>km</td>
                <td>hm</td>
                <td>dam</td>
                <td>m</td>
                <td>dm</td>
                <td>cm</td>
                <td>mm</td>
            </LigneTableau>
            <LigneTableau>
                <td></td>
                <td>1</td>
                <td>7</td>
                <td>5</td>
                <td>0</td>
                <td>0,</td>
            </LigneTableau>
            <LigneTableau>
                <td>0,</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>5</td>
            </LigneTableau>
            <LigneTableau>
                <td>12</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0,</td>
            </LigneTableau>
        </Tableau>

        <LigneVide />

        <Exemples lignes={11}>
            <Item>
                17,5 dam = ? cm
            </Item>
            <Item bullet="→">
                Placer le chiffre des unités dans la colonne de l'unité d'origine.
            </Item>
            <Ligne>
                On place le 7 dans la colonne &lt; &lt; dam &gt; &gt;.
            </Ligne>
            <Item bullet="→">
                Placer les autres chiffres.
            </Item>
            <Ligne>
                On place le 1 et le 5.
            </Ligne>
            <Item bullet="→" lignes={2}>
                Compléter avec des zéros jusqu'à la colonne de la nouvelle unité.
            </Item>
            <Item bullet="→">
                Placer la virgule dans la colonne de la nouvelle unité.
            </Item>
            <Ligne>
                17,5 dam = 17 500 cm
            </Ligne>
            <Item>
                0,5 m = 0,000 5 km
            </Item>
            <Item>
                12 km = 12 000 000 mm
            </Item>
        </Exemples>
</Contenu>