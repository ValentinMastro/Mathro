<script lang="ts">
    import Contenu from "$lib/cahier/composants/de_chapitrage/Contenu.svelte";
    import DansLaMarge from "$lib/cahier/composants/de_chapitrage/DansLaMarge.svelte";
    import Partie from "$lib/cahier/composants/de_chapitrage/Partie.svelte";

    import Definition from "$lib/cahier/composants/de_cours/Definition.svelte";
    import Propriete from "$lib/cahier/composants/de_cours/Propriete.svelte";
    import Schema from "$lib/cahier/composants/de_cours/Schema.svelte";
    import Notation from "$lib/cahier/composants/de_cours/Notation.svelte";
    import Item from "$lib/cahier/composants/de_cours/Item.svelte";

    import { math } from "mathlifier";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    let translation = $state(0);
</script>

<DansLaMarge>
    <LigneVide lignes={8} />
    <input type="range" bind:value={translation} min={0} max={200} step={0.1} style="width: 80%;" />
</DansLaMarge>

<Contenu>
    <Partie numero={3} titre="Translation" />
        <LigneVide />
        <Definition>
            Une translation est un déplacement rectiligne dans le plan.
        </Definition>
        <Propriete>
            Une translation est une <i>isométrie du plan</i>.
        </Propriete>
        <Schema lignes={10}>
            {#snippet svg()}
                <defs>
                    <path id="triangle" fill="none" stroke-width={10} d="M 100 700 L 200 200 L 800 200 Z" />
                    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" />
                    </marker>
                </defs>

                <use href="#triangle" stroke="black" />
                <use href="#triangle" stroke="red" style="transform: translate({translation}px, {translation}px);" />
                <line x1="200" y1="200" x2="400" y2="400" stroke="green" stroke-width={5} marker-end="url(#arrow)" />
                <text x="170" y="190" font-size="70" text-anchor="middle">A</text>
                <text x="830" y="190" font-size="70" text-anchor="middle">B</text>
                <text x="100" y="780" font-size="70" text-anchor="middle">C</text>
                <text x="430" y="390" font-size="70" text-anchor="middle" fill="red">A'</text>
                {#if translation == 200}
                    <text x="970" y="390" font-size="70" text-anchor="middle" fill="red">B'</text>
                    <text x="300" y="980" font-size="70" text-anchor="middle" fill="red">C'</text>
                {/if}
            {/snippet}
        </Schema>
        <Notation lignes={3}>
            <Item>La translation qui transforme A en A'</Item>
            <Item>La translation de vecteur {@html math("\\overrightarrow{\\text{AA}'}")}</Item>
            <Item>A' est l'image de A par cette translation</Item>
        </Notation>
</Contenu>