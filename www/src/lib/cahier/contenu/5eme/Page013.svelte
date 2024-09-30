<script lang="ts">
	import { Contenu } from "$lib/cahier/composants/de_chapitrage/*";
    import { Paragraphe, Tableau, LigneTableau } from "$lib/cahier/composants/de_cours/*";
    import { taille_texte } from "$lib/cahier/store";
</script>

<Contenu>
    <Paragraphe nom_du_paragraphe="Critères de divisibilité" couleur="black"></Paragraphe>
        <Tableau lignes={6} addStyle="font-size: {$taille_texte*0.6}px;">
            <LigneTableau lignes={1}>
                <th></th>
                <th>règle</th>
                <th>exemples</th>
            </LigneTableau>
            <LigneTableau>
                <td>divisible par 2</td>
                <td>le nombre est pair <br> le chiffre des unités est 0, 2, 4, 6 ou 8</td>
                <td>
                    <span class="green">
                        102 est pair 
                    </span>
                    <br>
                    <span class="rouge">
                        113 est impair
                    </span> 
                </td>
            </LigneTableau>
            <LigneTableau>
                <td>divisible par 3</td>
                <td>la somme de ses chiffres est divisible par 3</td>
                <td>
                    <span class="green">
                        102 est divisible par 3 car 1 + 0 + 2 = 3
                    </span>
                    <br>
                    <span class="rouge">
                        113 n'est pas divisible par 3 car 1 + 1 + 3 = 5
                    </span>
                </td>
            </LigneTableau>
            <LigneTableau>
                <td>divisible par 5</td>
                <td>le chiffre des unités est 0 ou 5</td>
                <td>
                    <span class="green">
                        105 est divisible par 5
                    </span>
                    <br>
                    <span class="rouge">
                        113 n'est pas divisible par 5
                    </span> 
                </td>
            </LigneTableau>
            <LigneTableau>
                <td>divisible par 9</td>
                <td>la somme de ses chiffres est divisible par 9</td>
                <td>
                    <span class="green">
                        108 est divisible par 9 car 1 + 0 + 8 = 9
                    </span>
                    <br>
                    <span class="rouge">
                        113 n'est pas divisible par 9 car 1 + 1 + 3 = 5
                    </span> 
                </td>
            </LigneTableau>
            <LigneTableau>
                <td>divisible par 10</td>
                <td>le chiffre des unités est 0</td>
                <td>
                    <span class="green">
                        100 est divisible par 10
                    </span>
                    <br>
                    <span class="rouge">
                        113 n'est pas divisible par 10
                    </span> 
                </td>
            </LigneTableau>
        </Tableau>
</Contenu>

<style>
    .green {
        color: green;
    }
    .rouge {
        color: red;
    }
</style>