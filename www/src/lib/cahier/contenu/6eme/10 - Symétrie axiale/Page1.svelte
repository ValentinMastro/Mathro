<script lang="ts">
	import { Chapitre, Contenu, DansLaMarge, Partie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Definition, Exemples, Schema } from "$lib/cahier/composants/de_cours/*";
	import { Slider } from "$lib/cahier/composants/de_marge/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

	import { math } from "mathlifier";

	let transition = $state(1);
</script>

<Chapitre titre="Symétrie axiale" />

<DansLaMarge apres_un_titre>
    <LigneVide lignes={10} />
    <Slider bind:valeur={transition} min={-1} max={1} pas={0.01} />
</DansLaMarge>

<Contenu apres_un_titre>
    <Partie numero={1} titre="Concept" />
    <LigneVide />
    <Definition lignes={3}>
        Deux figures (ℱ) et (ℱ') sont symétriques par rapport à une droite {@html math("(d)")} si,
        en repliant le plan le long de {@html math("(d)")}, (ℱ) et (ℱ') se superposent. <br>
        {@html math("(d)")} est appelée <i>axe</i> de symétrie.
    </Definition>
    <LigneVide />
    <Exemples lignes={20}>
        <Schema lignes={20}>
            {#snippet svg()}
                <defs>
                    <polygon id="figure1" points="50,50 200,50 200,200 150,200 150,100 50,100" />
                    <g id="figure2">
                        <circle cx={700} cy={150} r={100} />
                        <line x1={650} y1={150} x2={550} y2={50} />
                    </g>
                    <g id="figure3">
                        <circle cx={150} cy={500} r={100} />
                        <circle cx={100} cy={450} r={50} />
                    </g>
                </defs>
                <!-- Figure 1 -->
                <use href="#figure1" fill="none" stroke="black" stroke-width={3} />
                <use href="#figure1" fill="none" stroke="black" stroke-width={3} style="transform-origin: 250px 125px; transform: scaleX({transition});" />
                <line x1={250} y1={0} x2={250} y2={250} stroke="red" stroke-width={3} />
                <text x={250} y={300} fill="red" font-size={30} text-anchor="middle">(d)</text>
                <!-- Figure 2 -->
                <use href="#figure2" fill="none" stroke="black" stroke-width={3} />
                <use href="#figure2" fill="none" stroke="black" stroke-width={3} style="transform-origin: 600px 300px; transform: scaleY({transition});" />
                <line x1={500} x2={900} y1={300} y2={300} stroke="red" stroke-width={3} />
                <text x={950} y={310} fill="red" font-size={30} text-anchor="middle">(d)</text>
                <!-- Figure 3 -->
                <use href="#figure3" fill="none" stroke="black" stroke-width={3} />
                <!-- TODO: mieux refaire la symétrie en diagonale -->
                <use href="#figure3" fill="none" stroke="black" stroke-width={3} style="transform-origin: 250px 650px; transform: scale({transition},{transition})" />
                <line x1={400} y1={500} x2={400-300} y2={500+300} stroke="red" stroke-width={3} />
            {/snippet}
        </Schema>
    </Exemples>
</Contenu>
