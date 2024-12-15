<script lang="ts">
	import { Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Propriete, Schema } from "$lib/cahier/composants/de_cours/*";
</script>

<Contenu>
    <Partie numero={3} titre="Carré" />
        <Schema lignes={10} aspectRatioSVG={2}>
            {#snippet svg()}
                <defs>
                    <rect id="carre" x={600} y={100} width={800} height={800} />
                    <mask id="masque">
                        <use href="#carre" fill="white" />
                    </mask>
                </defs>
                <use href="#carre" fill="none" stroke="black" stroke-width={5} />
                <!-- codage des angles droits -->
                <rect x={600} y={100} width={50} height={50} fill="black" stroke-width={5} />
                <rect x={1400-50} y={100} width={50} height={50} fill="black" stroke-width={5} />
                <rect x={600} y={900-50} width={50} height={50} fill="black" stroke-width={5} />
                <rect x={1400-50} y={900-50} width={50} height={50} fill="black" stroke-width={5} />
                <!-- diagonales -->
                <line x1={600} y1={100} x2={1400} y2={900} stroke="red" stroke-width={5} />
                <line x1={600} y1={900} x2={1400} y2={100} stroke="red" stroke-width={5} />
                <!-- codage de l'angle droit entre les deux diagonales -->
                <rect x={1000} y={500} width={50} height={50} fill="red" stroke-width={5} transform-origin="1000 500" transform="rotate(-135)" />
            {/snippet}
        </Schema>
        <Propriete>
            Le carré hérite des propriétés du rectangle et du losange.
        </Propriete>
</Contenu>