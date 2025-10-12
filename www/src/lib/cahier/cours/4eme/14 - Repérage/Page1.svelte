<script lang="ts">
    import { Chapitre, Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Exemple, Notation, Item, Schema } from "$lib/cahier/composants/de_cours/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from 'mathlifier';
</script>

<Chapitre titre="Repérage" />

<Contenu apres_un_titre>
    <Partie numero={1} titre="Sur une droite (1 dimension)" />
        <Definition lignes={4}>
            Une droite graduée est une droite munie de 3 éléments :
            <Item>un point, appelé l'origine</Item>
            <Item>une unité de longueur</Item>
            <Item>un sens</Item>
        </Definition>
        <Exemple></Exemple>
        <Schema lignes={2} aspectRatioSVG={6}>
            {#snippet svg()}
                <line x1="{6*1000/12}" x2="{(10+1)*6*1000/12}" y1="500" y2="500" stroke="black" stroke-width="15" />
                <path d="M {(10+1)*6*1000/12} 500 l -100 -100 l 0 200 z" fill="black" />
                {#each Array(9) as _, i}
                    <line x1={(i+2) * 6*1000/12} y1="450" x2={(i+2) * 6*1000/12} y2="550" stroke="black" stroke-width="20" />
                {/each}
                <text x={6*1000/12} y={330} font-size="250" text-anchor="middle">0</text>
            {/snippet}
        </Schema>
        <Definition lignes={2}>
            L'abscisse d'un point est le nombre permettant de le repérer sur la droite graduée
        </Definition>
        <Exemple></Exemple>
        <Schema lignes={2} aspectRatioSVG={6}>
            {#snippet svg()}
                <line x1="{6*1000/12}" x2="{(10+1)*6*1000/12}" y1="500" y2="500" stroke="black" stroke-width="15" />
                <path d="M {(10+1)*6*1000/12} 500 l -100 -100 l 0 200 z" fill="black" />
                {#each Array(9) as _, i}
                    <line x1={(i+2) * 6*1000/12} y1="450" x2={(i+2) * 6*1000/12} y2="550" stroke="black" stroke-width="20" />
                {/each}
                <text x="{(5)*6*1000/12}" y="800" font-size="250" text-anchor="middle">0</text>
                <text x="{(6)*6*1000/12}" y="800" font-size="250" text-anchor="middle">1</text>
                {#each [{point: "A", abscisse: -3}, {point: "B", abscisse: -1}, {point: "C", abscisse: 2}, {point: "D", abscisse: 4}] as {point, abscisse}}
                    <text x={(abscisse+5)*6*1000/12} y={330} font-size={300} text-anchor="middle">{point}</text>
                {/each}
            {/snippet}
        </Schema>
        <Notation>
            {@html math("\\text{A}(-3) \\quad \\text{B}(-1) \\quad \\text{C}(2) \\quad \\text{D}(4)") }
        </Notation>
</Contenu>
