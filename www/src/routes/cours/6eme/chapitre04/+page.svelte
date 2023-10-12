<script>
	import Chapitre from "$lib/chapitrage/Chapitre.svelte";
	import Partie from "$lib/chapitrage/Partie.svelte";
	import SousPartie from "$lib/chapitrage/SousPartie.svelte";
	import Definition from "$lib/chapitrage/sections/Definition.svelte";
	import Exemples from "$lib/chapitrage/sections/Exemples.svelte";
	import Notation from "$lib/chapitrage/sections/Notation.svelte";
	import Propriete from "$lib/chapitrage/sections/Propriete.svelte";
	import Schema from "$lib/chapitrage/sections/Schema.svelte";
    import Katex from "svelte-katex";

</script>
<Chapitre titre="Angles" numero={4}>
    <Partie titre="Concept" numero={1}>
        <Definition>
            Un angle représente l'écartement entre deux demi-droites partageant la même origine.
        </Definition>
        <Schema>
            <img    style="width: 18em;"
                    alt="Schéma angle"
                    src="/tikz/6eme/ch04/angle.svg">
        </Schema>
        <Definition>
            <ul>
                <li>Le <i>sommet</i> de l'angle est l'origine commune.</li>
                <li>Les <i>côtés</i> de l'angle sont les demi-droites.</li>
            </ul>
        </Definition>
        <Notation>
            Trois points avec un "chapeau".<br>
            Le point du milieu est le sommet.
        </Notation>
    </Partie>
    <Partie numero={2} titre="Les différents types d'angles">
        <SousPartie numero={1} titre="Les angles saillants et rentrants">
            <Definition>
                <ul>
                    <li>Un angle saillant est un angle dont la mesure est comprise entre 0° et 180°.</li>
                    <li>Un angle rentrant mesure entre 180° et 360°.</li>
                </ul>
            </Definition>
            <Schema>
                <img    style="width: 30em;"
                        alt="Angle saillant et angle rentrant"
                        src="/tikz/6eme/ch04/saillant_rentrant.svg">
            </Schema>
            <Propriete>
                La somme des mesures d'un angle saillant et de l'angle rentrant associé vaut 360°.
            </Propriete>
            <Exemples>
                <Katex>{"\\widehat{DEF} + \\widecheck{DEF} = 360°"}</Katex>
            </Exemples>
        </SousPartie>
        <SousPartie numero={2} titre="Nomenclature des angles saillants">
            <table>
                <tr>
                    <td>Angle aigu</td>
                    <td>Entre 0° et 90°</td>
                    <td>
                        <img    alt="Angle 30°"
                                src="/tikz/6eme/ch04/angle_30.svg"
                                style="height: 9em;" >
                    </td>
                </tr>
                <tr>
                    <td>Angle droit</td>
                    <td>= 90°</td>
                    <td>
                        <img    alt="Angle 90°"
                                src="/tikz/6eme/ch04/angle_90.svg"
                                style="height: 14em;" >
                    </td>
                </tr>
                <tr>
                    <td>Angle obtus</td>
                    <td>Entre 90° et 180°</td>
                    <td>
                        <img    alt="Angle 130°"
                                src="/tikz/6eme/ch04/angle_130.svg"
                                style="height: 11em;" >
                    </td>
                </tr>
                <tr>
                    <td>Angle plat</td>
                    <td>= 180°</td>
                    <td>
                        <img    alt="Angle 180°"
                                src="/tikz/6eme/ch04/angle_180.svg"
                                style="height: 6em;" >
                    </td>
                </tr>
            </table>
        </SousPartie>
    </Partie>
</Chapitre>

<style>
    table {
        color: black;
    }
    table, tr, td {
        border-color: black;
        border-style: solid;
        border-width: 1px;
        border-collapse: collapse;
    }
</style>