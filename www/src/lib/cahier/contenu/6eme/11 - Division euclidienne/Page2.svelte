<script lang="ts">
	import { Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Definition, Exemples, Item, LigneTableau, Paragraphe, Tableau } from "$lib/cahier/composants/de_cours/*";

    import { math } from "mathlifier";
</script>


<Contenu>
    <Paragraphe nom_du_paragraphe="Critères de divisibilité" />
        <Tableau lignes={15}>
            <LigneTableau lignes={2}>
                <td>Divisible par 2</td>
                <td>Le nombre est pair</td>
                <td class="liste">
                    <span class=vert>50</span>
                    <span class=vert>48</span>
                    <span class=rouge>217</span>
                </td>
            </LigneTableau>
            <LigneTableau lignes={2}>
                <td>Divisible par 3</td>
                <td>La somme des chiffres<br> est dans la table de 3</td>
                <td class="liste">
                    <span class=vert>{@html math("51 \\longrightarrow 5 + 1 = 6")}</span>
                    <span class=vert>{@html math("48 \\longrightarrow 4 + 8 = 12")}</span>
                    <span class=rouge>{@html math("217 \\longrightarrow 2 + 1 + 7 = 10")}</span>
                </td>
            </LigneTableau>
            <LigneTableau lignes={2}>
                <td>Divisible par 5</td>
                <td>Le chiffre des unités<br> est un 0 ou un 5</td>
                <td class="liste">
                    <span class=vert>50</span>
                    <span class=vert>15</span>
                    <span class=rouge>217</span>
                </td>
            </LigneTableau>
            <LigneTableau lignes={2}>
                <td>Divisible par 9</td>
                <td>La somme des chiffres<br> est dans la table de 9</td>
                <td class="liste">
                    <span class=vert>{@html math("54 \\longrightarrow 5 + 4 = 9")}</span>
                    <span class=vert>{@html math("81 \\longrightarrow 8 + 1 = 9")}</span>
                    <span class=rouge>{@html math("217 \\longrightarrow 2 + 1 + 7 = 10")}</span>
                </td>
            </LigneTableau>
            <LigneTableau lignes={2}>
                <td>Divisible par 10</td>
                <td>Le chiffre des unités<br> est un 0</td>
                <td class="liste">
                    <span class=vert>50</span>
                    <span class=vert>100</span>
                    <span class=rouge>217</span>
                </td>
            </LigneTableau>
        </Tableau>
</Contenu>

<style>
    .vert {
        color: green;
    }
    .rouge {
        color: red;
    }
    .liste{
        display: flex;
        flex-direction: column;
    }
</style>
