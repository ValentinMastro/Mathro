<script lang="ts">
	import { Chapitre, Partie, SousPartie } from "$lib/chapitrage/all_chapitrages";
    import { Definition, Propriete, Exemples, Remarque, Schema } from "$lib/chapitrage/sections/all_sections";
</script>

<Chapitre numero={16} titre="Aires">
    <Partie numero={1} titre="Unités d'aires et conversion">
        <SousPartie numero={1} titre="Concept">
            <Definition>
                L'aire d'une figure est la mesure de sa surface.
            </Definition>
            <Schema>
                <div style="display: flex; justify-content: center; align-items: center;">
                    <svg viewBox="-3 -3 610 610" width="15vw">
                        <defs>
                            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="black" stroke-width="5" stroke-dasharray="15 15"/>
                            </pattern>
                        </defs>
                        <path d="M 200 0 l 0 600 l 400 0 l 0 -300 l -200 0 l 0 -300 z" fill="gray" stroke="black" stroke-width="5"/>
                        <rect x="0" y="0" width="605" height="605" fill="url(#grid)"/>
                    </svg>
                    <p>
                        L'aire de cette figure est de 18 carreaux, <br>
                        car il y a 18 carreaux à l'intérieur de la figure.
                    </p>
                </div>
            </Schema>
        </SousPartie>
        <SousPartie numero={2} titre="Le mètre carré">
            <Definition>
                L'unité légale de l'aire est le mètre carré, noté m².<br>
                Cela correspond à l'aire d'un carré de 1 mètre de côté.
            </Definition>
            <p class="noir">
                Pour convertir les unités d'aires entre elles, on utilise la tableau ci-dessous, 
                en utilisant les règles suivantes : 
            </p>
            <ul class="noir">
                <li>Le chiffre des unités est placé dans la colonne de droite de l'unité d'origine.</li>
                <li>
                    On complète par des 0 jusqu'à arriver à la colonne de droite de la nouvelle unité, 
                    et on place la virgule à cet endroit lorsqu'elle est nécessaire.
                </li>
            </ul>
            <table class="noir">
                <tr>
                    <th colspan="2">km²</th>
                    <th colspan="2">hm²</th>
                    <th colspan="2">dam²</th>
                    <th colspan="2">m²</th>
                    <th colspan="2">dm²</th>
                    <th colspan="2">cm²</th>
                    <th colspan="2">mm²</th>
                </tr>
                <tr style="height: 100px;">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <Exemples>
                <ul>
                    <li>
                        13 hm² = 130 000 m²
                    </li>
                    <li>
                        2,5 km² = 250 000 000 dm²
                    </li>
                    <li>
                        0,02 dm² = 0,000 002 dam²
                    </li>
                </ul>
            </Exemples>
            <Remarque>
                Un hectare (ha) est égal à 1 hm².<br>
                Un are (a) est égal à 1 dam².
            </Remarque>
        </SousPartie>
    </Partie>
</Chapitre>

<style>
    .noir {
        color: black;
    }
    table {
        width: 80%;
        margin: auto;
        border-collapse: collapse;
    }
    th, td {
        border: 1px solid black;
        padding: 5px;
    }
</style>