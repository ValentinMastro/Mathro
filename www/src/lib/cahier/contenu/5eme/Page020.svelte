<script lang="ts">
	import { Contenu } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Notation, Schema, Texte } from "$lib/cahier/composants/de_cours/*";
	import Ligne from "$lib/cahier/composants/de_cours/Ligne.svelte";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from "mathlifier";

    let points = {
        A: { x: 2, y: -3 },
        B: { x: -3, y: 0.5 },
        C: { x: 0.5, y: -2.5 },
        D: { x: -2.5, y: 2 }
    }
</script>

<Contenu>
    <Definition lignes={2}>
        À chaque point du repère, on associe deux nombres : son <i>abscisse</i> et son <i>ordonnée</i>.
    </Definition>
    <Notation>
        Si le point A a pour abscisse {@html math('2')} et pour ordonnée {@html math('-3')}, on note {@html math('\\text{A}(2;-3)')}.
    </Notation>
    <LigneVide lignes={2} />
    <Schema lignes={8} aspectRatioSVG={2}>
        {#snippet svg()}
            <line x1={50} y1={500} x2={1950} y2={500} stroke="black" stroke-width={10} />
            <line x1={1000} y1={50} x2={1000} y2={950} stroke="black" stroke-width={10} />
            <!-- flèches -->
            <polygon points="1950,500 1900,525 1900,475" fill="black" stroke="black" stroke-width={10} />
            <polygon points="1000,50 975,100 1025,100" fill="black" stroke="black" stroke-width={10} />
            <!-- origine -->
            <line x1={1000 - 20} y1={500 - 20} x2={1000 + 20} y2={500 + 20} stroke="red" stroke-width={10} />
            <line x1={1000 + 20} y1={500 - 20} x2={1000 - 20} y2={500 + 20} stroke="red" stroke-width={10} />
            <text x={1070} y={580} font-size={70} text-anchor="middle" fill="red">O</text>
            <!-- graduations -->
            {#each [-3, -2, -1, 1, 2, 3] as x}
                <line x1={1000 + 250 * x} y1={500 - 30} x2={1000 + 250 * x} y2={500 + 30} stroke="black" stroke-width={5} />
                <text x={1000 + 250 * x} y={600} font-size={60} text-anchor="middle">{x}</text>
            {/each}
            {#each [-3, -2, -1, 1, 2, 3] as y}
                <line x1={1000 - 30} y1={500 - 125 * y} x2={1000 + 30} y2={500 - 125 * y} stroke="black" stroke-width={5} />
                <text x={950} y={525 - 125 * y} font-size={60} text-anchor="end" alignment-baseline="middle" >{y}</text>
            {/each}
            <!-- points -->
            {#each Object.entries(points) as [point, { x, y }]}
                <line x1={1000 + 250 * x - 20} y1={500 - 125 * y - 20} x2={1000 + 250 * x + 20} y2={500 - 125 * y + 20} stroke="green" stroke-width={10} />
                <line x1={1000 + 250 * x + 20} y1={500 - 125 * y - 20} x2={1000 + 250 * x - 20} y2={500 - 125 * y + 20} stroke="green" stroke-width={10} />
                <text x={1000 + 250 * x} y={500 - 125 * y - 50} font-size={70} text-anchor="middle" fill="green">{point}</text>
            {/each}
        {/snippet}
        {#snippet html()}
            <LigneVide lignes={2} />
            {#each Object.entries(points) as [point, { x, y }]}
                <Texte>{@html math(`\\text{${point}}(${x.toLocaleString("fr")};${y.toLocaleString("fr")})`)}</Texte>
            {/each}
        {/snippet}
    </Schema>
</Contenu>