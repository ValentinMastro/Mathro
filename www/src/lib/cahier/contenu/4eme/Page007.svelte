<script lang="ts">
    import Contenu from "$lib/cahier/composants/de_chapitrage/Contenu.svelte";
    import Partie from "$lib/cahier/composants/de_chapitrage/Partie.svelte";

    import Definition from "$lib/cahier/composants/de_cours/Definition.svelte";
    import Propriete from "$lib/cahier/composants/de_cours/Propriete.svelte";
    import Schema from "$lib/cahier/composants/de_cours/Schema.svelte";
    import Theoreme from "$lib/cahier/composants/de_cours/Theoreme.svelte";

    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from 'mathlifier';
</script>

<Contenu>
    <Partie numero={2} titre="Triangle rectangle et hypoténuse" />
        <LigneVide />
        <Definition lignes={2}>
            Un triangle rectangle est une figure à 3 côtés qui a un angle droit.<br>
            L'hypoténuse d'un triangle rectangle est le côté opposé à l'angle droit.
        </Definition>
        <Propriete>
            L'hypoténuse est le côté le plus long d'un triangle rectangle.
        </Propriete>

        <LigneVide lignes={2} />
        <Schema lignes={5} aspectRatioSVG={4}>
            {#snippet svg()}
                <!-- Premier triangle -->
                <line x1="200" y1="0" x2="200" y2="800" stroke="black" stroke-width="10" />
                <line x1="200" y1="800" x2="800" y2="800" stroke="black" stroke-width="10" />
                <line x1="200" y1="0" x2="800" y2="800" stroke="red" stroke-width="10" />
                <text x="580" y="470" font-size="90" text-anchor="middle" fill="red" transform-origin="580 470" transform="rotate(53.13)">Hypoténuse</text>
                <rect x="200" y="750" width="50" height="50" fill="black" />

                <!-- Deuxième triangle -->
                <line x1="1200" y1="0" x2="1200" y2="600" stroke="black" stroke-width="10" />
                <line x1="1200" y1="0" x2="2000" y2="0" stroke="black" stroke-width="10" />
                <line x1="1200" y1="600" x2="2000" y2="0" stroke="red" stroke-width="10" />
                <text x="1650" y="370" font-size="90" text-anchor="middle" fill="red" transform-origin="1650 370" transform="rotate(-36.87)">Hypoténuse</text>
                <rect x="1200" y="0" width="50" height="50" fill="black" />

                <!-- Troisième triangle -->
                <line x1="2200" y1="200" x2="2800" y2="800" stroke="black" stroke-width="10" />
                <line x1="2800" y1="800" x2="3600" y2="0" stroke="black" stroke-width="10" />
                <line x1="2200" y1="200" x2="3600" y2="0" stroke="red" stroke-width="10" />
                <text x="2880" y="90" font-size="90" text-anchor="middle" fill="red" transform-origin="2880 90" transform="rotate(-8.13)">Hypoténuse</text>
                <rect x="2800" y="800" width="50" height="50" fill="black" transform-origin="2800 800" transform="rotate(-135)" />
            {/snippet}
        </Schema>

    <Partie numero={3} titre="Énoncé du théorème de Pythagore" />
        <LigneVide />
        <Theoreme nom_du_theoreme="Théorème de Pythagore" lignes={4}>
            Si un triangle est rectangle, alors le carré de la longueur de l'hypoténuse est égale à la somme des carrés des longueurs des autres côtés.
            <br>
            Si {@html math("\\text{ABC}")} est rectangle en {@html math("\\text{B}")}, alors {@html math("\\text{AC}^2 = \\text{AB}^2 + \\text{BC}^2")}.
        </Theoreme>
        <Schema lignes={10} aspectRatioSVG={2}>
            {#snippet svg()}
                <pattern id="pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="100" height="100" fill="none" stroke="black" stroke-width={5} stroke-dasharray="5 10" />
                </pattern>

                <!-- AB^2 -->
                <rect x="100" y="300" width="400" height="400" fill="lightblue" stroke="lightblue" stroke-width={5} />
                <rect x="100" y="300" width="400" height="400" fill="url(#pattern)" />
                <text x="300" y="500" font-size="90" text-anchor="middle" fill="black">AB²</text>

                <!-- BC^2 -->
                <rect x="500" y="700" width="300" height="300" fill="lightgreen" stroke="lightgreen" stroke-width={5} />
                <rect x="500" y="700" width="300" height="300" fill="url(#pattern)" />
                <text x="650" y="875" font-size="90" text-anchor="middle" fill="black">BC²</text>

                <!-- AC^2 -->
                <rect 
                    x="800" y="700" 
                    width="500" height="500" 
                    fill="lightcoral" stroke="lightcoral" stroke-width={5}
                    transform-origin="800 700" transform="rotate({-90-36.87})"
                />
                <rect 
                    x="800" y="700" 
                    width="500" height="500" 
                    fill="url(#pattern)"
                    transform-origin="800 700" transform="rotate({-90-36.87})"
                />
                <text x="850" y="400" font-size="90" text-anchor="middle" fill="black">AC²</text>

                <!-- Triangle rectangle -->
                <polygon points="500,300 500,700 800,700" fill="none" stroke="black" stroke-width="10" />
                <rect x="500" y="650" width="50" height="50" fill="black" />
                <text x="830" y="800" font-size="90" text-anchor="middle" fill="black">C</text>
                <text x="460" y="800" font-size="90" text-anchor="middle" fill="black">B</text>
                <text x="460" y="250" font-size="90" text-anchor="middle" fill="black">A</text>

                <!-- Visualisation de l'égalité des carrés -->
                <rect x="1400" y="300" width="500" height="500" fill="lightcoral" />
                <rect x="1400" y="300" width="300" height="300" fill="lightgreen" />
                <polygon points="1400,600 1700,600 1700,300 1900,300 1900,800 1400,800" fill="lightblue" />
                <rect x="1400" y="300" width="500" height="500" fill="url(#pattern)" />
            {/snippet}
        </Schema>
</Contenu>