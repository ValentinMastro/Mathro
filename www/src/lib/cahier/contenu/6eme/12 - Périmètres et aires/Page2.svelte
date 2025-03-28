<script lang="ts">
	import { Contenu, Partie, SousPartie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Schema, Definition, Formules, Item, Texte, Exemple, Convention, Illustration } from "$lib/cahier/composants/de_cours/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";
	import { math } from "mathlifier";

</script>

<Contenu>
    <Partie numero={2} titre="Aires" />
        <SousPartie numero={1} titre="Concept" />
            <Definition lignes_vides={0}>
                L'aire d'une figure est la mesure de la surface intérieure de la figure.
            </Definition>
            <Exemple />
            <Schema lignes={5}>
                {#snippet svg()}
                    <polygon points="200,200 200,800 400,800 400,400 800,400 800,200" fill="none" stroke="black" stroke-width={8} />
                {/snippet}
                {#snippet html()}
                    <LigneVide lignes={1} />
                    <Texte>
                        Cette figure a une aire de 5 carreaux.
                    </Texte>
                {/snippet}
            </Schema>

            <Convention lignes_vides={0}>
                L'unité légale de l'aire est le mètre carré (m²).
            </Convention>
            <Illustration />
            <Schema lignes={5} aspectRatioSVG={1.5}>
                {#snippet svg()}
                    <rect x={200} y={200} width={600} height={600} fill="lightblue" opacity={0.4} stroke="black" stroke-width={5} />
                    <text x={820} y={500} font-size={90}>1 m</text>
                {/snippet}
                {#snippet html()}
                    <LigneVide lignes={2} />
                    <Texte>
                        La surface intérieure de ce carré <br>mesure 1 m².
                    </Texte>
                {/snippet}
            </Schema>

        <SousPartie numero={2} titre="Formulaire" />
            <Formules lignes={4} lignes_vides={0}>
                <Item>
                    {@html math("𝒜_{\\text{carré}} = \\text{côté} \\times \\text{côté}")}
                </Item>
                <Item>
                    {@html math("𝒜_{\\text{rectangle}} = \\text{Longueur} \\times \\text{largeur}")}
                </Item>
                <Item>
                    {@html math("𝒜_{\\text{triangle}} = \\text{base} \\times \\text{hauteur} \\div 2")}
                </Item>
                <Item>
                    {@html math("𝒜_{\\text{disque}} = \\pi \\times \\text{rayon} \\times \\text{rayon}")}
                </Item>
            </Formules>
            <Schema lignes={5} aspectRatioSVG={4}>
                {#snippet svg()}
                    <!-- Carré -->
                    <rect x={200} y={200} width={600} height={600} fill="none" stroke="black" stroke-width={8} />
                    <text x={400} y={900} font-size={100}>côté</text>
                    <!-- Rectangle -->
                    <rect x={1000} y={200} width={800} height={400} fill="none" stroke="black" stroke-width={8} />
                    <text x={1150} y={750} font-size={100}>↑ Longueur</text>
                    <text x={1200} y={400} font-size={100}>largeur ⟶</text>
                    <!-- Triangle -->
                    <polygon points="2000,800 2800,800 2600,200" fill="none" stroke="black" stroke-width={8} />
                    <text x={2300} y={900} font-size={100}>base</text>
                    <line x1={2600} y1={200} x2={2600} y2={800} stroke="red" stroke-width={8} />
                    <text x={2150} y={500} font-size={100} fill="red">hauteur</text>
                    {@const taille = 50}
                    <rect x={2600-taille} y={800-taille} width={taille} height={taille} fill="red" stroke="none" />
                    <!-- Disque -->
                    <circle cx={3400} cy={500} r={300} fill="none" stroke="black" stroke-width={8} />
                    <line x1={3400} y1={500} x2={3400} y2={800} stroke="black" stroke-width={8} />
                    <circle cx={3400} cy={500} fill="black" stroke="none" r={12} />
                    <text x={3300} y={450} font-size={100}>rayon</text>
                {/snippet}
            </Schema>
</Contenu>
