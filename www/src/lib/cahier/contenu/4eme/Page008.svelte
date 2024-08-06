<script lang="ts">
    import { Contenu } from "$lib/cahier/composants/de_chapitrage/*";
    import { Schema, Exemples, Texte } from "$lib/cahier/composants/de_cours/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from 'mathlifier';
</script>

<Contenu>
    <Exemples lignes={2}>
        Le théorème de Pythagore permet de calculer <b>une longueur dans un triangle rectangle</b>,
        si on connaît les <b>deux autres</b>.
    </Exemples>
    <LigneVide />
    <Texte>
        Dans le cas où on souhaite calculer la longueur de l'hypoténuse :
    </Texte>
    <Schema lignes={5} aspectRatioSVG={1.2}>
        {#snippet svg()}
            <polygon points="200,200 800,200 800,800" fill="none" stroke="black" stroke-width="10" />
            <rect x="750" y="200" width="50" height="50" fill="black" stroke="black" stroke-width="10" />
            <text x="850" y="200" font-size="90" fill="black" text-anchor="middle">A</text>
            <text x="850" y="850" font-size="90" fill="black" text-anchor="middle">B</text>
            <text x="150" y="200" font-size="90" fill="black" text-anchor="middle">C</text>
            <text x="400" y="550" font-size="90" fill="red" text-anchor="middle">?</text>
            <text x="820" y="500" font-size="90" fill="black" text-anchor="left">3 cm</text>
            <text x="500" y="170" font-size="90" fill="black" text-anchor="middle">4 cm</text>
        {/snippet}
    </Schema>
    <Texte lignes={8}>
        <u>On sait que : </u> le triangle ABC est rectangle en A, l'hypoténuse est {@html math("[\\text{BC}]")}.<br>
        <u>D'après</u> le théorème de Pythagore <br>

        {@html math("~~~~~~\\text{BC}^2 = \\text{AC}^2 + \\text{AB}^2")}<br>
        {@html math("~~~~~~\\text{BC}^2 = 4^2 + 3^2")}<br>
        {@html math("~~~~~~\\text{BC}^2 = 16 + 9")}<br>
        {@html math("~~~~~~\\text{BC}^2 = 25")}<br>
        {@html math("~~~~~~\\text{BC} = \\sqrt{25}")}<br>
        {@html math("~~~~~~\\text{BC} = 5~\\text{cm}")}
    </Texte>
</Contenu>