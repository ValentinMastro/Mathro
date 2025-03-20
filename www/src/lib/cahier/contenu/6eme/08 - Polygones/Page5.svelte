<script lang="ts">
	import { Chapitre, Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Propriete, Schema } from "$lib/cahier/composants/de_cours/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";


</script>

<Chapitre numero_chapitre={8.5} titre="Propriétés des polygones" />

<Contenu apres_un_titre>
    <Partie numero={1} titre="Losange" />
        <LigneVide />
        <Schema lignes={5} aspectRatioSVG={2}>
            {#snippet svg()}
                <defs>
                    <polygon id="losange" points="200,500 1000,100 1800,500 1000,900" />
                    <mask id="masque">
                        <use href="#losange" fill="white" />
                    </mask>
                </defs>
                <use href="#losange" fill="none" stroke="black" stroke-width={8} />
                <!-- diagonales -->
                <line x1={1000} y1={100} x2={1000} y2={900} stroke="red" stroke-width={8} />
                <line x1={200} y1={500} x2={1800} y2={500} stroke="red" stroke-width={8} />
                <!-- codage de l'angle droit entre les deux diagonales -->
                <rect x={1000} y={500} width={50} height={50} fill="red" stroke-width={8} />
                <!-- codages des angles -->
                <circle cx={200} cy={500} r={200} fill="none" stroke="green" stroke-width={10} mask="url(#masque)" />
                <circle cx={200} cy={500} r={170} fill="none" stroke="green" stroke-width={10} mask="url(#masque)" />
                <circle cx={1800} cy={500} r={200} fill="none" stroke="green" stroke-width={10} mask="url(#masque)" />
                <circle cx={1800} cy={500} r={170} fill="none" stroke="green" stroke-width={10} mask="url(#masque)" />
                <circle cx={1000} cy={100} r={100} fill="none" stroke="blue" stroke-width={10} mask="url(#masque)" />
                <circle cx={1000} cy={900} r={100} fill="none" stroke="blue" stroke-width={10} mask="url(#masque)" />
            {/snippet}
        </Schema>
        <Propriete>
            Les diagonales d'un losange sont perpencidulaires.
        </Propriete>
        <Propriete>
            Dans un losange, les angles opposés ont la même mesure.
        </Propriete>

        <LigneVide lignes={2}/>
    <Partie numero={2} titre="Rectangle" />
        <LigneVide />
        <Schema lignes={5} aspectRatioSVG={2}>
            {#snippet svg()}
                <defs>
                    <rect id="rectangle" x={200} y={100} width={1600} height={800} />
                    <mask id="masque">
                        <use href="#rectangle" fill="white" />
                    </mask>
                </defs>
                <use href="#rectangle" fill="none" stroke="black" stroke-width={8} />
                <!-- codage des angles droits -->
                <rect x={200} y={100} width={50} height={50} fill="black" stroke-width={8} />
                <rect x={1800-50} y={100} width={50} height={50} fill="black" stroke-width={8} />
                <rect x={200} y={900-50} width={50} height={50} fill="black" stroke-width={8} />
                <rect x={1800-50} y={900-50} width={50} height={50} fill="black" stroke-width={8} />
                <!-- diagonales -->
                <line x1={200} y1={100} x2={1800} y2={900} stroke="red" stroke-width={8} />
                <line x1={200} y1={900} x2={1800} y2={100} stroke="red" stroke-width={8} />
                <!-- codage des côtés opposés -->
                <line x1={200-60} x2={200+60} y1={500} y2={500} stroke="red" stroke-width={10} />
                <line x1={1800-60} x2={1800+60} y1={500} y2={500} stroke="red" stroke-width={10} />
                <line x1={1000-30} x2={1000-30} y1={100-60} y2={100+60} stroke="red" stroke-width={10} />
                <line x1={1000+30} x2={1000+30} y1={100-60} y2={100+60} stroke="red" stroke-width={10} />
                <line x1={1000-30} x2={1000-30} y1={900-60} y2={900+60} stroke="red" stroke-width={10} />
                <line x1={1000+30} x2={1000+30} y1={900-60} y2={900+60} stroke="red" stroke-width={10} />
            {/snippet}
        </Schema>
        <Propriete>
            Les côtés opposés d'un rectangle sont de la même longueur.
        </Propriete>
        <Propriete>
            Les diagonales d'un rectangle sont de la même longueur.
        </Propriete>
</Contenu>