<script lang="ts">
	import { Chapitre, Contenu, Partie, SousPartie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Definition, Exemple, Formules, Schema, Texte } from "$lib/cahier/composants/de_cours/*";
	import Item from "$lib/cahier/composants/de_cours/Item.svelte";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from "mathlifier";
</script>

<Chapitre titre="Aires et périmètres" />

<Contenu apres_un_titre>
    <Partie numero={1} titre="Périmètres" />
        <SousPartie numero={1} titre="Concept" />
            <LigneVide />
            <Definition>
                Le périmètre d'une figure est la longueur de son contour.
            </Definition>
            <LigneVide />
            <Exemple />
            <Schema lignes={5}>
                {#snippet svg()}
                    <path d="M 200 200 L 800 200 L 800 800 L 600 800 L 600 400 L 200 400 Z" fill="none" stroke="black" stroke-width={8} />
                {/snippet}
                {#snippet html()}
                    <LigneVide lignes={2} />
                    <Texte>
                        Cette figure a un périmètre de 12 carreaux.
                    </Texte>
                {/snippet}
            </Schema>

        <SousPartie numero={2} titre="Formulaire" />
            <LigneVide />
            <Formules lignes={4}>
                <Item>
                    {@html math("𝒫_{\\text{carré}} = 4 \\times \\text{côté}")}
                </Item>
                <Item>
                    {@html math("𝒫_{\\text{rectangle}} = 2 \\times \\text{Longueur} + 2 \\times \\text{largeur}")}
                </Item>
                <Item>
                    {@html math("𝒫_{\\text{triangle}} = a + b + c")}
                </Item>
                <Item>
                    {@html math("𝒫_{\\text{cercle}} = 2 \\times \\pi \\times \\text{rayon}")}
                </Item>
            </Formules>
            <LigneVide />
            <Schema lignes={5} aspectRatioSVG={4}>
                {#snippet svg()}
                    <rect x={200} y={200} width={600} height={600} fill="none" stroke="black" stroke-width={8} />
                    <rect x={1000} y={200} width={800} height={400} fill="none" stroke="black" stroke-width={8} />
                    <polygon points="2000,800 2800,800 2600,200" fill="none" stroke="black" stroke-width={8} />
                    <circle cx={3400} cy={500} r={300} fill="none" stroke="black" stroke-width={8} />
                    <line x1={3400} y1={200} x2={3400} y2={800} stroke="black" stroke-width={8} />
                    <text x={400} y={900} font-size={100}>côté</text>
                    <text x={1150} y={750} font-size={100}>
                        ↑ Longueur
                    </text>
                    <text x={1200} y={400} font-size={100}>largeur ⟶</text>
                    <text x={2200} y={400} font-size={100}>a</text>
                    <text x={2700} y={400} font-size={100}>b</text>
                    <text x={2400} y={900} font-size={100}>c</text>
                    <text x={3410} y={500} font-size={100}>rayon</text>
                {/snippet}
            </Schema>        
</Contenu>