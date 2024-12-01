<script lang="ts">
	import { Contenu, DansLaMarge, Partie, SousPartie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Definition, Schema, Propriete, Texte } from "$lib/cahier/composants/de_cours/*";
	import { Slider } from "$lib/cahier/composants/de_marge/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    let nombre_de_sommets = $state(3);
    let points_polygone_regulier = $derived(
        Array(nombre_de_sommets).fill(0).map(
            (_, i) => {
                const angle = 2 * Math.PI * (i+0.5) / nombre_de_sommets;
                return {
                    x: 500 + 300 * Math.cos(angle),
                    y: 500 - 300 * Math.sin(angle)
                };
            }
        )
    )

    $inspect(points_polygone_regulier);
</script>

<DansLaMarge>
    <LigneVide lignes={8} />
    <Slider min={3} max={20} bind:valeur={nombre_de_sommets} />
</DansLaMarge>

<Contenu>
    <Partie numero={3} titre="Polygones particuliers" />
        <SousPartie numero={1} titre="Les polygones réguliers" />
            <LigneVide />
            <Definition lignes={2}>
                Un polygone est régulier si tous ses côtés ont la même longueur et si tous ses angles ont la même mesure.
            </Definition>
            <Schema lignes={5}>
                {#snippet svg()}
                    {#each points_polygone_regulier as { x, y }}
                        <circle cx={x} cy={y} r={10} fill="black" />
                    {/each}
                    {#each Array(nombre_de_sommets).fill(0).map((_, i) => i) as i}
                        <line x1={points_polygone_regulier[i].x} y1={points_polygone_regulier[i].y} x2={points_polygone_regulier[(i + 1) % nombre_de_sommets].x} y2={points_polygone_regulier[(i + 1) % nombre_de_sommets].y} stroke="black" stroke-width="8" />
                    {/each}
                {/snippet}
                {#snippet html()}
                    <LigneVide />
                    <Texte>
                        Polygone régulier à <strong>{nombre_de_sommets}</strong> côtés.
                    </Texte>
                {/snippet}
            </Schema>

            <LigneVide />
        <SousPartie numero={2} titre="Les différents types de triangles" />
            <LigneVide />
            <Definition>
                Un triangle rectangle possède un angle droit.
            </Definition>
            <Schema lignes={5}>
                {#snippet svg()}
                    <defs>
                        <polygon id="triangle_rectangle" points="200,200 800,200 800,800" />
                    </defs>
                    <use href="#triangle_rectangle" stroke="black" fill="none" stroke-width="8" />
                    <rect fill="black" x={800-50} y={200} width={50} height={50} />
                    <text x={200} y={200} dx={-50} font-size={70}>A</text>
                    <text x={800} y={200} dx={50} font-size={70}>B</text>
                    <text x={800} y={800} dy={60} font-size={70}>C</text>
                {/snippet}
                {#snippet html()}
                    <LigneVide lignes={2} />
                    <Texte>
                        Le triangle est rectangle en B, car l'angle droit est à côté du point B.
                    </Texte>
                {/snippet}
            </Schema>
            <LigneVide />
            <Definition>
                Un triangle isocèle possède deux côtés de même longueur.
            </Definition>
            <Schema lignes={5} aspectRatioSVG={1.1}>
                {#snippet svg()}
                    <defs>
                        <polygon id="triangle_isocèle" points="200,200 1000,200 600,800" />
                    </defs>
                    <use href="#triangle_isocèle" stroke="black" fill="none" stroke-width="8" />
                    <text x={200} y={200} dx={-50} font-size={70}>A</text>
                    <text x={1000} y={200} dx={50} font-size={70}>B</text>
                    <text x={600} y={800} dy={60} font-size={70}>C</text>
                {/snippet}
                {#snippet html()}
                    <LigneVide lignes={2} />
                    <Texte>
                        Le triangle est isocèle en C, car les côtés [CA] et [CB] ont la même longueur.
                    </Texte>
                {/snippet}
            </Schema>            
</Contenu>