<script lang="ts">
    import Contenu from "$lib/cahier/composants/de_chapitrage/Contenu.svelte";
	import DansLaMarge from "$lib/cahier/composants/de_chapitrage/DansLaMarge.svelte";
    import Partie from "$lib/cahier/composants/de_chapitrage/Partie.svelte";

    import Definition from "$lib/cahier/composants/de_cours/Definition.svelte";
	import Schema from "$lib/cahier/composants/de_cours/Schema.svelte";
    import Propriete from "$lib/cahier/composants/de_cours/Propriete.svelte";
	
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";
	import { math } from "mathlifier";

    let rotate_1 = $state(0);
    let rotate_2 = $state(0);
</script>

<DansLaMarge>
    <LigneVide lignes={8} />
    <input type="range" min="0" max="180" step="0.01" bind:value={rotate_1} style="width: 80%;"/>
    <input type="range" min="0" max="180" step="0.01" bind:value={rotate_2} style="width: 80%;"/>
</DansLaMarge>

<Contenu>
    <Partie numero={2} titre="Symétrie centrale" />
        <LigneVide />
        <Definition lignes={2}>
            Deux figures sont symétriques par rapport à un point O si 
            en "pivotant le plan" autour de O, les deux figures se superposent.
        </Definition>
        <Schema lignes={10} aspectRatioSVG={2}>
            {#snippet svg()}
                <defs>
                    <path id="trapeze2" fill="none" stroke-width={5} d="M 100 400 L 200 200 L 500 200 L 600 400 Z" />
                </defs>
                
                <use href="#trapeze2" stroke="black" />
                <circle cx="600" cy="500" r="10" fill="red" />
                <use href="#trapeze2" stroke="red" style="transform-origin: 600px 500px; transform: rotate({rotate_1}deg);" />

                <defs>
                    <g id="centrale2">
                        <line x1={1200} x2={1300} y1={400} y2={200} stroke-width={5} />
                        <circle cx={1200} cy={400} r={100} fill="none" stroke-width={5} />
                    </g>
                </defs>

                <use href="#centrale2" stroke="black"/>
                <circle cx="1500" cy="400" r="10" fill="red" />
                <use href="#centrale2" stroke="red" style="transform-origin: 1500px 400px; transform: rotate({rotate_2}deg);" />
            {/snippet}
        </Schema>
        <Propriete lignes={2}>
            Si deux points {@html math("\\text{A}")} et {@html math("\\text{A}'")} sont symétriques par rapport à O, <br>
            alors O est le milieu du segment {@html math("\\text{AA'}")}.
        </Propriete>
</Contenu>