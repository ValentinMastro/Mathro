<script lang="ts">
    import { Chapitre, Partie, SousPartie } from "$lib/chapitrage/all_chapitrages";
    import { Definition, Propriete, Schema, Paragraphe, Formule, Exemples, Remarque } from "$lib/chapitrage/sections/all_sections";
    import { math, display } from 'mathlifier'; 
</script>

<Chapitre numero={20} titre="Échelles">
    <Definition>
        L'échelle d'une carte est le <i>coefficient de proportionnalité</i> entre les distances sur 
        la carte et les distances réelles.
    </Definition>
    <Formule>
        {@html display(`
            \\text{Échelle} = \\frac{\\text{distance sur la carte}}{\\text{distance réelle}}
        `)}
    </Formule>
    <Exemples singulier>
        Si une carte est à l'échelle {@html math("\\frac{1}{2000}")}; cela signifie que 1 cm sur la carte 
        correspond à 2000 cm dans la réalité, soit 20 mètres.<br>
        Pour l'illustrer, construisons le tableau suivant : 
        
        <div style="display: flex; justify-content: center;">
            <table>
                <tr>
                    <td>Distance sur la carte (en cm)</td>
                    <td>1</td>
                    <td class="case_vide"></td>
                </tr>
                <tr>
                    <td>Distance réelle (en cm)</td>
                    <td>2000</td>
                    <td class="case_vide"></td>
                </tr>
            </table>
        </div>

        Sur cette même carte, si on mesure une distance de 5,2 cm, à quelle distance réelle cela correspond-il ?<br>
        Si une distance réelle de 3,5 km est représentée sur la carte, quelle distance mesurera-t-on ?
    </Exemples>
    <Remarque>
        Lorsqu'on utilise l'échelle, il faut que la distance sur la carte et la distance réelle soient 
        dans la même unité.
    </Remarque>
</Chapitre>

<style>
    table, tr, td {
        border: 2px solid black;
        border-collapse: collapse;
    }
    .case_vide {
        width: 10em;
    }
</style>