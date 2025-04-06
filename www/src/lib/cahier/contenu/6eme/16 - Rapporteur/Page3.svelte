<script lang="ts">
	import { Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Exemple, Propriete, Schema } from "$lib/cahier/composants/de_cours/*";
	import { math } from "mathlifier";
</script>

<Contenu>
    <Partie numero={3} titre="Dans un triangle" />
        <Propriete lignes={2}>
            Dans un triangle, la somme des mesures des angles internes est égale à 180°.
        </Propriete>
        <Exemple>
            Tracer un triangle {@html math("\\text{IJK}")} tel que {@html math("\\text{IJ} = 5~\\text{cm}, \\widehat{\\text{IJK}}=45°, \\widehat{\\text{IKJ}} = 70°")}.
        </Exemple>
        <Schema lignes={10} aspectRatioSVG={2}>
            {#snippet svg()}
                <line x1={500} x2={1500} y1={900} y2={900} stroke="black" stroke-width={8} />
                {@const rayon = 1000}
                <line x1={500} y1={900} x2={500 + rayon * Math.cos(Math.PI / 4)} y2={900 - rayon * Math.sin(Math.PI / 4)} stroke="black" stroke-width={8} />
                <line x1={1500} y1={900} x2={1500 - rayon * Math.cos(Math.PI * 65 / 180)} y2={900 - rayon * Math.sin(Math.PI * 65 / 180)} stroke="black" stroke-width={8} />
                <text x={500} y={900} text-anchor="middle" alignment-baseline="middle" font-size={70} dy={70}>J</text>
                <text x={1500} y={900} text-anchor="middle" alignment-baseline="middle" font-size={70} dy={70}>I</text>
                <text x={1170} y={330} text-anchor="middle" alignment-baseline="middle" font-size={70}>K</text>
            {/snippet}
        </Schema>
</Contenu>
