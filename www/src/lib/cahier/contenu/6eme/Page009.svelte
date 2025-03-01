<script lang='ts'>
    import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Schema, Texte } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import { math } from 'mathlifier';

</script>

<Chapitre titre="Fraction/Partage" />

<Contenu apres_un_titre>
    <Schema lignes={3} aspectRatioSVG={3}>
        {#snippet svg()}
            <rect x={0} y={1000/12 * 2} width={3 * 1000/12 * 8} height={1000/12 * 8} fill="none" stroke-width={12} stroke="black" />
            <line x1={1000 * 2/3} y1={1000/12 * 2} x2={1000 * 2/3} y2={1000/12 * 10} stroke="black" stroke-width={12} />
            <line x1={1000 * 4/3} y1={1000/12 * 2} x2={1000 * 4/3} y2={1000/12 * 10} stroke="black" stroke-width={12} />
            <rect x={1000 * 4/3} y={1000/12 * 2} width={1000/12 * 8} height={1000/12 * 8} fill="lightgreen" fill-opacity={0.8} stroke-width={12} stroke="black" />
        {/snippet}
        {#snippet html()}
            <Texte lignes={2}>
                J'ai colorié 1 case sur les 3.<br>
                Cela correspond à la fraction {@html math('\\frac{1}{3}')}.
            </Texte>
        {/snippet}
    </Schema>
    <Schema lignes={4} aspectRatioSVG={2.25}>
        {#snippet svg()}
            <rect x={250} y={250} width={250} height={500} fill="red" fill-opacity={0.8} stroke="none" />
            <rect x={500} y={250} width={250} height={250} fill="red" fill-opacity={0.8} stroke="none" />
            <rect x={250} y={250} width={500} height={500} fill="none" stroke-width={12} stroke="black" />
            <line x1={500} y1={250} x2={500} y2={750} stroke="black" stroke-width={12} />
            <line x1={250} y1={500} x2={750} y2={500} stroke="black" stroke-width={12} />

            <rect x={1250} y={250} width={250} height={500} fill="red" fill-opacity={0.8} stroke="none" />
            <rect x={1500} y={250} width={250} height={250} fill="red" fill-opacity={0.8} stroke="none" />
            <rect x={1250} y={250} width={500} height={500} fill="none" stroke-width={12} stroke="black" />
            <line x1={1500} y1={250} x2={1500} y2={750} stroke="black" stroke-width={12} />
            <line x1={1250} y1={500} x2={1750} y2={500} stroke="black" stroke-width={12} />
            <line x1={1250} y1={250} x2={1750} y2={750} stroke="black" stroke-width={12} />
            <line x1={1250} y1={750} x2={1750} y2={250} stroke="black" stroke-width={12} />
        {/snippet}
        {#snippet html()}
            <LigneVide lignes={1.5}/>
            <Texte>
                {@html math("\\dfrac{3}{4} = \\dfrac{6}{8}")}
            </Texte>
        {/snippet}
    </Schema>
    <Schema lignes={5} aspectRatioSVG={3}>
        {#snippet svg()}
            <line x1={200} x2={3000} y1={400} y2={400} stroke="black" stroke-width={12} />
            <!-- Graduations -->
            {#each Array(7) as _, i}
                <line x1={(i+0.5)*400} x2={(i+0.5)*400} y1={400-40} y2={400+40} stroke="black" stroke-width={12} />
            {/each}
            <!-- Flèche -->
            <polygon points="3000,400 2900,350 2900,450" fill="black" />
            <!-- Abscisses -->
            <text x={200} y={550} fill="black" font-size={100} text-anchor="middle">0</text>
            <text x={2200} y={550} fill="black" font-size={100} text-anchor="middle">1</text>
            {#each [1,2,3,4,5,6] as numerateur}
                <text x={(numerateur+0.5)*400} y={220} fill="black" font-size={100} text-anchor="middle">{numerateur}</text>
                <text x={(numerateur+0.5)*400} y={340} fill="black" font-size={100} text-anchor="middle">5</text>
                <line x1={(numerateur+0.5)*400 - 40} x2={(numerateur+0.5)*400 + 40} y1={247} y2={247} stroke="black" stroke-width={12} />
            {/each}
            <!-- Explication -->
            <line x1={200} x2={2200} y1={650} y2={650} stroke="black" stroke-width={12} />
            <polygon points="2200,650 2150,625 2150,675" fill="black" />
            <polygon points="200,650 250,625 250,675" fill="black" />
            <text x={1200} y={800} fill="black" font-size={100} text-anchor="middle">Entre le 0 et le 1, l'axe est coupé en 5 morceaux,</text>
            <text x={1200} y={950} fill="black" font-size={100} text-anchor="middle">donc chaque morceau vaut un cinquième.</text>
        {/snippet}
    </Schema>
    <LigneVide lignes={5} />
    <Partie numero={1} titre="Partager l'unité" />
        <LigneVide />
        <Definition lignes={2}>
            Si l'unité est partagée en {@html math("k")}  morceaux, en sélectionnant 1 morceau parmi les {@html math("k")}, 
            on représente la fraction {@html math("\\frac{1}{k}")}.
        </Definition>
        <LigneVide />
        <Schema lignes={5} aspectRatioSVG={3}>
            {#snippet svg()}
                <line x1={300} x2={3000} y1={400} y2={400} stroke="black" stroke-width={12} />
                <!-- Graduations -->
                {#each Array(7) as _, i}
                    <line x1={(i+0.5)*600} x2={(i+0.5)*600} y1={400-40} y2={400+40} stroke="black" stroke-width={12} />
                {/each}
                <!-- Flèche -->
                <polygon points="3000,400 2900,350 2900,450" fill="black" />
                <!-- Abscisses -->
                <text x={300} y={550} fill="black" font-size={100} text-anchor="middle">0</text>
                <text x={2100} y={550} fill="black" font-size={100} text-anchor="middle">1</text>
                {#each [1,2,3,4,5] as numerateur}
                    <text x={(numerateur+0.5)*600} y={220} fill="black" font-size={100} text-anchor="middle">{numerateur}</text>
                    <text x={(numerateur+0.5)*600} y={340} fill="black" font-size={100} text-anchor="middle">3</text>
                    <line x1={(numerateur+0.5)*600 - 40} x2={(numerateur+0.5)*600 + 40} y1={247} y2={247} stroke="black" stroke-width={12} />
                {/each}
            {/snippet}
        </Schema>
</Contenu>