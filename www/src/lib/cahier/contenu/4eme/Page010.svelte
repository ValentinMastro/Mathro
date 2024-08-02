<script lang="ts">
    import Chapitre from "$lib/cahier/composants/de_chapitrage/Chapitre.svelte";
    import Contenu from "$lib/cahier/composants/de_chapitrage/Contenu.svelte";
    import Partie from "$lib/cahier/composants/de_chapitrage/Partie.svelte";

    import Definition from "$lib/cahier/composants/de_cours/Definition.svelte";
    import Propriete from "$lib/cahier/composants/de_cours/Propriete.svelte";
    import Exemples from "$lib/cahier/composants/de_cours/Exemples.svelte";
    import Notation from "$lib/cahier/composants/de_cours/Notation.svelte";
    import Item from "$lib/cahier/composants/de_cours/Item.svelte";
    import Schema from "$lib/cahier/composants/de_cours/Schema.svelte";
    import Ligne from "$lib/cahier/composants/de_cours/Ligne.svelte";

    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math, display } from 'mathlifier';

    function en_radians(deg: number): number {
        return deg * Math.PI / 180;
    }

    let facteur_1: number = $state(1);
    let facteur_2: number = $state(1);
</script>

<Chapitre titre="Fractions et proportionnalité" />

<Contenu apres_un_titre>
    <Partie numero={1} titre="Calculs fractionnaires" />
    <LigneVide />
    <Definition lignes={3}>
        Soient deux nombres {@html math("a")} et {@html math("b")} avec {@html math("b \\neq 0")}.<br>
        Le quotient de {@html math("a")} par {@html math("b")} est le nombre qui, lorsqu'il est multiplié par {@html math("b")}, donne {@html math("a")}.
    </Definition>
    <Notation>
        On le note {@html math("\\frac{a}{b}")} et on le lit "a sur b".
    </Notation>

    <Exemples lignes={2}>
        <Item>
            {@html math("\\frac{3}{4} \\times 4 = \\frac{3}{\\cancel{4}} \\times \\cancel{4} = 3")}
        </Item>
        <Item>
            {@html math("\\frac{7{,}2}{5{,}8} \\times 5{,}8 = \\frac{7{,}2}{\\cancel{5{,}8}} \\times \\cancel{5{,}8} = 7{,}2")}
        </Item>
    </Exemples>
    
    <LigneVide />

    <Propriete lignes={3}>
        Soient deux nombres {@html math("a")} et {@html math("b")} avec {@html math("b \\neq 0")}.<br>
        Soit {@html math("k \\neq 0")}.<br>
        Alors {@html math("\\dfrac{a}{b} = \\dfrac{k \\times a}{k \\times b}")}.
    </Propriete>

    <LigneVide />

    <Exemples lignes={3}>
        <Item>
            {@html math("\\dfrac{3}{4} = \\frac{2 \\times 3}{2 \\times 4} = \\frac{6}{8}")}
        </Item>
        <LigneVide />
        <Item>
            {@html math("\\dfrac{35}{75} = \\frac{35 \\div 5}{75 \\div 5} = \\frac{7}{15}")}
        </Item>
    </Exemples>

    <Schema lignes={10}>
        {#snippet svg()}
            {#each Array(4*facteur_1) as _, i}
                <path 
                    d="M 500 500 L 900 500 A 400 400 0 0 0 {500 + 400 * Math.cos(en_radians(90/facteur_1))} {500 - 400 * Math.sin(en_radians(90/facteur_1))} Z"
                    transform-origin="500 500"
                    transform={`rotate(-${i * 90/facteur_1})`}
                    stroke="black"
                    stroke-width={3}
                    fill={i + 1 <= 3*facteur_1 ? 'green' : 'red'}
                />
                <text 
                    x={500 + 350 * Math.cos(en_radians((i+0.5)*90/facteur_1))}
                    y={500 - 350 * Math.sin(en_radians((i+0.5)*90/facteur_1))}
                    font-size="50" 
                    fill="{i + 1 <= 3*facteur_1 ? 'white' : 'black'}"
                    text-anchor="middle" 
                    dominant-baseline="middle"
                >
                    {i + 1}
                </text>
            {/each}
        {/snippet}
        {#snippet html()}
            <input type="range" min="1" max="10" bind:value={facteur_1} style="width: 100%;"/>
            <input type="range" min="1" max="10" bind:value={facteur_2} style="width: 100%;"/>

            <LigneVide />
            <Item>
                {@html math(`\\dfrac{3}{4} = \\dfrac{${facteur_1} \\times 3}{${facteur_1} \\times 4} = \\dfrac{${facteur_1 * 3}}{${facteur_1 * 4}}`)}
            </Item>
            <LigneVide />
            <Item>
                {@html math(`\\dfrac{35}{75} = \\dfrac{35 \\div 5}{75 \\div 5} = \\dfrac{7}{15}`)}
            </Item>
        {/snippet}
    </Schema>
</Contenu>