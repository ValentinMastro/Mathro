<script lang="ts">
	import { Contenu, Partie, SousPartie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Definition, Schema, Propriete } from "$lib/cahier/composants/de_cours/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";
</script>

<Contenu>
    <Partie numero={3} titre="Polygones particuliers" />
        <SousPartie numero={1} titre="Les polygones réguliers" />
            <LigneVide />
            <Definition lignes={2}>
                Un polygone est régulier si tous ses côtés ont la même longueur et si tous ses angles ont la même mesure.
            </Definition>

            <LigneVide />
        <SousPartie numero={2} titre="Les différents types de triangles" />
            <LigneVide />
            <Definition>
                Un triangle rectangle possède un angle droit.
            </Definition>
            <Schema lignes={5}>
                {#snippet svg()}
                    <defs>
                        <polygon id="triangle_rectangle" points="200,200 800,200 800,800" />
                    </defs>
                    <use href="#triangle_rectangle" stroke="black" fill="none" stroke-width="8" />
                    <rect fill="black" x={800-50} y={200} width={50} height={50} />
                {/snippet}
            </Schema>
            <LigneVide />
            <Definition>
                Un triangle isocèle possède deux côtés de même longueur.
            </Definition>
            <Schema lignes={5} aspectRatioSVG={1.1}>
                {#snippet svg()}
                    <defs>
                        <polygon id="triangle_isocèle" points="200,200 1000,200 600,800" />
                    </defs>
                    <use href="#triangle_isocèle" stroke="black" fill="none" stroke-width="8" />
                    <text x={200} y={200} dx={-50} font-size={70}>A</text>
                    <text x={1000} y={200} dx={50} font-size={70}>B</text>
                    <text x={600} y={800} dy={60} font-size={70}>C</text>
                {/snippet}
            </Schema>
            <LigneVide />
            <Propriete>
                Un triangle équilatéral possède trois angles de même mesure : 60°.
            </Propriete>
            <Schema lignes={5}>
                {#snippet svg()}
                    <defs>
                        <polygon id="triangle_équilatéral" points="200,800 800,800 {200+600*Math.cos(Math.PI/3)},{800-600*Math.sin(Math.PI/3)}" />
                    </defs>
                    <use href="#triangle_équilatéral" stroke="black" fill="none" stroke-width="8" />
                {/snippet}
            </Schema>
            
</Contenu>