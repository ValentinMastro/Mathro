<script lang="ts">
	import Chapitre from "$lib/chapitrage/Chapitre.svelte";
    import Partie from "$lib/chapitrage/Partie.svelte";

	import Definition from "$lib/chapitrage/sections/Definition.svelte";
    import Schema from "$lib/chapitrage/sections/Schema.svelte";
    import Remarque from "$lib/chapitrage/sections/Remarque.svelte";
	import AnimationCosinus from "./AnimationCosinus.svelte";
</script>

<Chapitre numero={8} titre="Cosinus">
    <Partie numero={1} titre="Les côtés dans un triangle rectangle">
        <Definition>
            Le côté opposé à l'angle droit est appelé l'hypoténuse.
        </Definition>
        <Definition>
            Choisissons un des angles aigus du triangle.<br>
            Le côté du triangle qui forme l'angle choisi et qui n'est pas l'hypoténuse est appelé le <i>côté adjacent</i><br>
        </Definition>
        <Schema>
            <svg viewBox="0 0 1500 250" width="100%;">
                <defs>
                    <style>
                        text {
                            text-anchor: middle;
                            dominant-baseline: middle;
                            font-size: 20px;
                            stroke: none;
                        }
                    </style>
                    <g id="triangle_rectangle">
                        <rect class="angle_droit" x="180" y="0" width="20" height="20" fill="red" stroke="none" />
                        <path class="angle aigu" d="M 0 0 L 40 0 A 40 40 0 0 1 30 15 Z" fill="#8888ff" stroke="none" />
                        <line class="adjacent" x1="0" y1="0" x2="200" y2="0" stroke="green" stroke-width="2"/>
                        <line class="oppose" x1="200" y1="0" x2="200" y2="100" />
                        <line class="hypotenuse" x1="0" y1="0" x2="200" y2="100" stroke="red" stroke-width="2" />
                        <text x="100" y="65" fill="red" transform="rotate(25 100 50)">
                            Hypoténuse
                        </text>
                        <text x="100" y="-10" fill="green" >
                            Adjacent
                        </text>
                    </g>
                </defs>
                <use href="#triangle_rectangle" x="500" y="100" stroke="black"/>
                <use href="#triangle_rectangle" x="300" y="50" stroke="black" transform="rotate(90 300 50)"/>
                <use href="#triangle_rectangle" x="950" y="230" stroke="black" transform="rotate(275 950 230)"/>
            </svg>
        </Schema>
        <Remarque>
            Le côté qui "ne touche pas" l'angle droit est appelé <i>côté opposé</i>.
        </Remarque>
    </Partie>
    <Partie numero={2} titre="Cosinus d'un angle aigu">
        <Definition>
            Le cosinus d'un angle aigu d'un triangle rectangle est le quotient du côté adjacent par l'hypoténuse.<br>
            C'est une valeur comprise entre 0 et 1, qui permet de calculer la mesure d'un angle à partir de la longueur des côtés d'un triangle rectangle.
        </Definition>
        <Schema>
            <AnimationCosinus />
        </Schema>
    </Partie>
</Chapitre>