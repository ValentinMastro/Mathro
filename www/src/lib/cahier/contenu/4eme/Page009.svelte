<script lang="ts">
    import { Contenu } from "$lib/cahier/composants/de_chapitrage/*";
    import { Schema, Texte } from "$lib/cahier/composants/de_cours/*";
    
    import { math } from "mathlifier";
</script>

<Contenu>
    <Texte>
        Dans le cas où on souhaite calculer un côté de l'angle droit :
    </Texte>
    <Schema lignes={5} aspectRatioSVG={1.2}>
        {#snippet svg()}
            <polygon points="200,200 800,200 800,800" fill="none" stroke="black" stroke-width="10" />
            <rect x="750" y="200" width="50" height="50" fill="black" stroke="black" stroke-width="10" />
            <text x="850" y="200" font-size="90" fill="black" text-anchor="middle">A</text>
            <text x="850" y="850" font-size="90" fill="black" text-anchor="middle">B</text>
            <text x="150" y="200" font-size="90" fill="black" text-anchor="middle">C</text>
            <text x="350" y="550" font-size="90" fill="black" text-anchor="middle">29 cm</text>
            <text x="820" y="500" font-size="90" fill="black" text-anchor="left">20 cm</text>
            <text x="500" y="170" font-size="90" fill="red" text-anchor="middle">?</text>
        {/snippet}
    </Schema>
    <Texte lignes={9}>
        <u>On sait que : </u> le triangle ABC est rectangle en A, l'hypoténuse est {@html math("[\\text{BC}]")}.<br>
        <u>D'après</u> le théorème de Pythagore <br>
    
        {@html math("~~~~~~\\text{BC}^2 = \\text{AC}^2 + \\text{AB}^2")}<br>
        {@html math("~~~~~~\\text{AC}^2 = \\text{BC}^2 - \\text{AB}^2")}<br>
        {@html math("~~~~~~\\text{AC}^2 = 29^2 - 20^2")}<br>
        {@html math("~~~~~~\\text{AC}^2 = 841 - 400")}<br>
        {@html math("~~~~~~\\text{AC}^2 = 441")}<br>
        {@html math("~~~~~~\\text{AC} = \\sqrt{441}")}<br>
        {@html math("~~~~~~\\text{AC} = 21~\\text{cm}")}
    </Texte>
</Contenu>
