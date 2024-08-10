<script lang="ts">
	import { Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Exemple, Paragraphe, Schema, Texte, Ligne } from "$lib/cahier/composants/de_cours/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";
	import { math, alignStar } from "mathlifier";

</script>

<Contenu>
    <Partie numero={2} titre="Cosinus d'un angle aigu" />
        <LigneVide />
        <Definition lignes={5}>
            Le cosinus d'un angle aigu d'un triangle rectangle est le quotient du côté adjacent par l'hypoténuse.<br>
            C'est une valeur comprise entre 0 et 1, qui permet de calculer la mesure d'un angle à partir de la longueur des côtés d'un triangle rectangle.
        </Definition>

        <Exemple lignes={2}>
            Dans le triangle ABC rectangle en A tel que {@html math("\\text{AB} = 3~\\text{cm}")} et {@html math("\\text{BC} = 5~\\text{cm}")},
            calculer l'angle {@html math("\\widehat{\\text{ABC}}")}.
        </Exemple>
        <LigneVide />
        <Schema lignes={10}>
            {#snippet svg()}
                <defs>
                    <polygon id="triangle" points="100,100 100,900, 700,900" />
                    <clipPath id="clip_triangle">
                        <use href="#triangle" fill="white" />
                    </clipPath>
                </defs>

                <circle cx="100" cy="100" r="100" fill="red" clip-path="url(#clip_triangle)" />
                <use href="#triangle" fill="none" stroke="black" stroke-width="5" />
                <rect x="100" y="850" width="50" height="50" fill="black" />
                <line x1="100" y1="100" x2="100" y2="900" stroke="red" stroke-width="8" />
                
                <text x="60" y="100" font-size="65" text-anchor="middle" fill="red">B</text>
                <text x="60" y="950" font-size="65" text-anchor="middle" fill="black">A</text>
                <text x="720" y="950" font-size="65" text-anchor="middle" fill="black">C</text>

                <text x="50" y="500" font-size="55" text-anchor="middle" fill="red">adj</text>
                <text x="460" y="500" font-size="55" text-anchor="middle" fill="black">hyp</text>
            {/snippet}
            {#snippet html()}
                <LigneVide />
                <Texte>
                    Le triangle ABC est rectangle en A, l'hypoténuse est [BC].
                </Texte>
                <LigneVide />
                <Ligne>
                    {@html math(`
                        \\cos(\\widehat{\\text{ABC}}) = \\dfrac{\\text{adj}}{\\text{hyp}}
                        = \\dfrac{\\text{AB}}{\\text{AC}}
                        = \\dfrac{3}{5}
                    `)}
                </Ligne>
                <LigneVide />
                <Ligne>
                    donc {@html math("\\widehat{\\text{ABC}} = \\arccos\\left(\\dfrac{3}{5}\\right) \\approx 53{,}13°")}
                </Ligne>
            {/snippet}
        </Schema>
</Contenu>