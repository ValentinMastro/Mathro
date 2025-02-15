<script lang="ts">
	import { Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Exemple, Item, Protocole, Schema } from "$lib/cahier/composants/de_cours/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";
</script>

<Contenu>
    <Partie numero={2} titre="Symétrique d'un point par rapport à une droite" />
    <LigneVide />
        <Protocole lignes={5}>
            On souhaite construire le symétrique d'un point A par rapport à une droite (d).
            <Item>
                Construire la demi-droite d'origine A et perpendiculaire à (d).
            </Item>
            <Item>
                Placer I le point d'intersection de cette demi-droite et de (d).
            </Item>
            <Item>
                Placer A' tel que I soit le milieu de [AA'].
            </Item>
        </Protocole>
        <LigneVide />
        <Exemple />
        <Schema lignes={10}>
            {#snippet svg()}
                <circle cx={200} cy={200} r={20} fill="black" />
                <text x={200} y={200} font-size={100} text-anchor="middle" dy="-1em">A</text>
                <line x1={0} y1={1000} x2={1000} y2={0} stroke="red" stroke-width={8} />
                <text x={1000} y={0} font-size={100} fill="red" text-anchor="middle" dx="-2ex" dy="2.5em">(d)</text>
                <line x1={200} y1={200} x2={1000} y2={1000} stroke="black" stroke-width={8} />
                <circle cx={500} cy={500} r={20} fill="black" />
                <text x={500} y={500} font-size={100} text-anchor="middle" dy="-1em">I</text>
                <circle cx={800} cy={800} r={20} fill="black" />
                <text x={800} y={800} font-size={100} text-anchor="middle" dy="-1em">A'</text>
                <!-- Codage -->
                {@const size=30}
                {#each [340, 360, 640, 660] as z}
                    <line x1={z-size} y1={z+size} x2={z+size} y2={z-size} stroke-width={5} stroke="red" />
                {/each}
            {/snippet}
        </Schema>
</Contenu>
