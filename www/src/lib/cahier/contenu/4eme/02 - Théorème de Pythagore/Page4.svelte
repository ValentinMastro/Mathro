<script lang="ts">
	import { Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Schema, Theoreme } from "$lib/cahier/composants/de_cours/*";
    import { math } from "mathlifier";
</script>

<Contenu>
    <Partie numero={3} titre="Énoncé du théorème de Pythagore" />
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