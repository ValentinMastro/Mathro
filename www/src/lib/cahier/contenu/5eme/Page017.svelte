<script lang="ts">
	import { Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Propriete, Schema } from "$lib/cahier/composants/de_cours/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";
</script>

<Contenu>
    <Partie numero={2} titre="Les différents types de triangles et leurs angles" />
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
        <Propriete lignes={2}>
            Un triangle isocèle possède deux angles de même mesure :<br>
            il s'agit des angles adjacents à la base du triangle.
        </Propriete>
        <Schema lignes={5}>
            {#snippet svg()}
                <defs>
                    <polygon id="triangle_isocèle" points="200,200 1000,200 600,800" />
                </defs>
                <use href="#triangle_isocèle" stroke="black" fill="none" stroke-width="8" />
                <text fill="red" font-size={85} x={600} y={200} dx={0} dy={-20} text-anchor="middle">base</text>
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