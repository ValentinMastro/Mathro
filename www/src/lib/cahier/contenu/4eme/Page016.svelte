<script lang="ts">
    import { Chapitre, Contenu, DansLaMarge, Partie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Schema, Propriete, Item } from "$lib/cahier/composants/de_cours/*";
    import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from "mathlifier";

    let scale_1 = $state(-1);
    let scale_2 = $state(-1);
</script>

<Chapitre titre="Transformations du plan" />

<DansLaMarge apres_un_titre>
    <LigneVide lignes={5} />
    <input type="range" min="-1" max="1" step="0.01" bind:value={scale_1} style="width: 80%;"/>
    <input type="range" min="-1" max="1" step="0.01" bind:value={scale_2} style="width: 80%;"/>
</DansLaMarge>

<Contenu apres_un_titre>
    <Partie numero={1} titre="Symétrie axiale" />
        <LigneVide />
        <Definition lignes={2}>
            Deux figures sont symétriques par rapport à une droite si, en repliant le plan le long de cette droite, les deux figures se superposent.
        </Definition>
        <Schema lignes={10} aspectRatioSVG={2.05}>
            {#snippet svg()}
                <defs>
                    <path id="trapeze" fill="none" stroke="black" stroke-width={8} d="M 0 400 L 200 200 L 600 200 L 800 400 Z" />
                </defs>
                
                <use href="#trapeze" />
                <line x1={0} y1={500} x2={800} y2={500} stroke="black" stroke-width={8} stroke-dasharray="30 30"  />
                <use href="#trapeze" style="transform-origin: 400px 500px; transform: scaleY({-scale_1});" />

                <defs>
                    <g id="figure2">
                        <line x1={1200} x2={1200} y1={500} y2={300}  stroke="black" stroke-width={8} />
                        <circle cx={1200} cy={500} r={200} fill="none" stroke="black" stroke-width={8} />
                        <circle cx={1200} cy={300} r={200} fill="none" stroke="black" stroke-width={8} />
                    </g>
                </defs>

                <use href="#figure2" />
                <line x1={1500} x2={1500} y1={50} y2={800} stroke="black" stroke-width={8} stroke-dasharray="30 30" />
                <use href="#figure2" style="transform-origin: 1500px 400px; transform: scaleX({-scale_2});" />
            {/snippet}
        </Schema>
        <Propriete lignes={2}>
            Si deux points {@html math("\\text{A}")} et {@html math("\\text{A}'")} sont symétriques par rapport à {@html math("(d)")}, <br>
            alors {@html math("(d)")} est la médiatrice du segment {@html math("[\\text{AA}']")}.
        </Propriete>
        <LigneVide />
        <Propriete lignes={8}>
            La symétrie axiale est une <i>isométrie du plan</i>, cela signifie que :
                <Item lignes={2}>
                    la nature des objets est conservée <br>
                    <span style="color: blue;">(le symétrique d'un carré est un carré)</span>
                </Item>
                <Item lignes={3}>
                    les longueurs sont conservées <br>
                    <span style="color: blue;">(le symétrique d'un segment de longueur 5 cm est un segment de longueur 5 cm)</span>
                </Item>
                <Item lignes={2}>
                    les mesures des angles sont conservées <br>
                    <span style="color: blue;">(le symétrique d'un angle de 90° est un angle de 90°)</span>
                </Item>
        </Propriete>
</Contenu>