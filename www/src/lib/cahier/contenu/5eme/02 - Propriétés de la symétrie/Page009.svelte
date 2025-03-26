<script lang="ts">
    import { Contenu, DansLaMarge, Partie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Schema, Propriete } from "$lib/cahier/composants/de_cours/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";
	import { math } from "mathlifier";

    let rotate_1 = $state(0);
    let rotate_2 = $state(0);
    let rotate_3 = $state(0);
</script>

<DansLaMarge>
    <LigneVide lignes={8} />
    <input type="range" min="0" max="180" step="0.01" bind:value={rotate_1} style="width: 80%;"/>
    <input type="range" min="0" max="180" step="0.01" bind:value={rotate_2} style="width: 80%;"/>
    <LigneVide lignes={12} />
    <input type="range" min="0" max="180" step="0.01" bind:value={rotate_3} style="width: 80%;"/>
</DansLaMarge>

<Contenu>
    <Partie numero={2} titre="Symétrie centrale" />
        <LigneVide />
        <Definition lignes={3}>
            Deux figures sont symétriques par rapport à un point O si 
            en "pivotant le plan" autour de O, les deux figures se superposent.<br>
            Ce point O est le <i>centre de symétrie</i>.
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
            alors O est le milieu du segment {@html math("\\text{AA}'")}.
        </Propriete>
        <Schema lignes={10}>
            {#snippet svg()}
                <defs>
                    <rect id="carre" width="300" height="300" fill="none" stroke-width={5} />
                </defs>

                <use href="#carre" x="100" y="100" stroke="black" />
                <circle cx="500" cy="500" r="10" fill="red" />
                <use href="#carre" x="100" y="100" stroke="red" style="transform-origin: 500px 500px; transform: rotate({rotate_3}deg);" />

                <line x1="400" y1="400" x2="600" y2="600" stroke="green" stroke-width={5} />
                <line x1="400" y1="100" x2="600" y2="900" stroke="green" stroke-width={5} />
                <line x1="100" y1="400" x2="900" y2="600" stroke="green" stroke-width={5} />
            {/snippet}
        </Schema>
</Contenu>