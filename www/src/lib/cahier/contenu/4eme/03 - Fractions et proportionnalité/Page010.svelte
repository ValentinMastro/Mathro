<script lang="ts">
    import { Chapitre, Contenu, Partie, DansLaMarge } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Propriete, Exemples, Notation, Item, Schema, Ligne } from "$lib/cahier/composants/de_cours/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from 'mathlifier';

    function en_radians(deg: number): number {
        return deg * Math.PI / 180;
    }

    let facteur_1: number = $state(2);
    let facteur_2: number = $state(5);
</script>

{#snippet cercle(cx: number, cy: number, r: number, numerateur: number, denominateur: number, facteur: number)}
    {#each Array(denominateur*facteur) as _, i}
        <path 
            d="M {cx} {cy} L {cx+r} {cy} A {r} {r} 0 0 0 {cx + r * Math.cos(en_radians((360/denominateur)/facteur))} {cy - r * Math.sin(en_radians((360/denominateur)/facteur))} Z"
            transform-origin="{cx} {cy}"
            transform={`rotate(-${i * (360/denominateur)/facteur})`}
            stroke="black"
            stroke-width={3}
            fill={i + 1 <= numerateur*facteur ? 'green' : 'red'}
        />
        <text 
            x={cx + (r+50+(i%2)*70) * Math.cos(en_radians((i+0.5)*(360/denominateur)/facteur))}
            y={cy - (r+50+(i%2)*70) * Math.sin(en_radians((i+0.5)*(360/denominateur)/facteur))}
            font-size={i % 2 == 1 ? 70 : 40} 
            fill="{i + 1 <= numerateur*facteur ? 'green' : 'red'}"
            text-anchor="middle" 
            dominant-baseline="middle"
        >
            {i + 1}
        </text>
    {/each}
{/snippet}

<Chapitre titre="Fractions et proportionnalité" />

<DansLaMarge apres_un_titre>
    <LigneVide lignes={23} />
    <input type="range" min="1" max="10" bind:value={facteur_1} style="width: 80%" />
    <input type="range" min="1" max="5" bind:value={facteur_2} style="width: 80%" />
</DansLaMarge>

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

    <Propriete lignes={3.4}>
        Soient deux nombres {@html math("a")} et {@html math("b")} avec {@html math("b \\neq 0")}.<br>
        Soit {@html math("k \\neq 0")}.<br>
        Alors {@html math("\\dfrac{a}{b} = \\dfrac{k \\times a}{k \\times b}")}.
    </Propriete>

    <LigneVide lignes={0.6} />

    <Exemples />

    <Schema lignes={8} aspectRatioSVG={2.4}>
        {#snippet svg()}
            {@render cercle(500, 500, 300, 3, 4, facteur_1)}
            {@render cercle(1750, 500, 300, 7, 15, facteur_2)}
        {/snippet}
    </Schema>

    <LigneVide />
    <Ligne>
        {@html math(`\\hspace{1cm} \\dfrac{3}{4} = \\dfrac{${facteur_1} \\times 3}{${facteur_1} \\times 4} = \\dfrac{${facteur_1 * 3}}{${facteur_1 * 4}} \\hspace{3cm} \\dfrac{7}{15} = \\dfrac{7 \\times ${facteur_2}}{15 \\times ${facteur_2}} = \\dfrac{${facteur_2 * 7}}{${facteur_2 * 15}}`)}
    </Ligne>
</Contenu>