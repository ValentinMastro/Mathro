<script lang="ts">
	import { Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Definition, Item, LigneTableau, Notation, Schema, Tableau } from "$lib/cahier/composants/de_cours/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from "mathlifier";
</script>

<Contenu>
    <Partie numero={2} titre="Les angles" />
        <LigneVide />
        <Definition lignes={5}>
            Un angle est une portion de plan délimitée par deux demi-droites ayant la même origine.<br>
            Il est composé de trois éléments : 
            <Item>
                son <i>sommet</i> : l'origine des deux demi-droites,
            </Item>
            <Item>
                ses deux <i>côtés</i> : les deux demi-droites,
            </Item>
        </Definition>
        <LigneVide />
        <Schema lignes={5}>
            {#snippet svg()}
                <circle cx={200} cy={800} r={5} fill="black" />
                <line x1={200} y1={800} x2={200 +  800 * Math.cos(0)} y2={800 + 800 * Math.sin(0)} stroke="black" stroke-width={5} />
                <line x1={200} y1={800} x2={200 +  800 * Math.cos(-Math.PI/3)} y2={800 + 800 * Math.sin(-Math.PI/3)} stroke="black" stroke-width={5} />
                <line x1={450} x2={450+100} y1={300} y2={300} stroke="black" stroke-width={5} />
                <line x1={800} x2={800} y1={750} y2={850} stroke="black" stroke-width={5} />
                <text x={200} y={800} dx={-70} dy={0} font-size={90} fill="black">A</text>
                <text x={450} y={300} dx={0} dy={-50} font-size={90} fill="black">B</text>
                <text x={800} y={750} dx={0} dy={-50} font-size={90} fill="black">C</text>
            {/snippet}
            {#snippet html()}
                <Item>
                    L'angle se nomme {@html math("\\widehat{\\text{BAC}}")} ou {@html math("\\widehat{\\text{CAB}}")}.
                </Item>
                <Item>
                    Le sommet de l'angle est {@html math("\\text{A}")}.
                </Item>
                <Item>
                    Les côtés de l'angle sont {@html math("[\\text{AB})")} et {@html math("[\\text{AC})")}.
                </Item>
            {/snippet}
        </Schema>
        
        <Notation>
            Un angle se nomme avec trois lettres, le sommet est la <i>lettre du milieu</i>.
        </Notation>
        <LigneVide />

        <Tableau>
            <LigneTableau lignes={4}>
                <td>Angle droit</td>
                <td>{@html math("\\text{mesure}~= 90^\\circ")}</td>
                <td>
                    <Schema lignes={3}>
                        {#snippet svg()}
                            <line x1={200} y1={800} x2={200 +  800 * Math.cos(0)} y2={800 + 800 * Math.sin(0)} stroke="black" stroke-width={15} />
                            <line x1={200} y1={800} x2={200 +  800 * Math.cos(-Math.PI/2)} y2={800 + 800 * Math.sin(-Math.PI/2)} stroke="black" stroke-width={15} />
                            <rect x={200} y={800-100} width={100} height={100} fill="black" />
                        {/snippet}
                    </Schema>
                </td>
            </LigneTableau>
            <LigneTableau lignes={4}>
                <td>Angle aigu</td>
                <td>{@html math("0^\\circ \\leq \\text{mesure}~\\lt 90^\\circ")}</td>
                <td>
                    <Schema lignes={3}>
                        {#snippet svg()}
                            <line x1={200} y1={800} x2={200 +  800 * Math.cos(0)} y2={800 + 800 * Math.sin(0)} stroke="black" stroke-width={15} />
                            <line x1={200} y1={800} x2={200 +  800 * Math.cos(-Math.PI/3)} y2={800 + 800 * Math.sin(-Math.PI/3)} stroke="black" stroke-width={15} />
                        {/snippet}
                    </Schema>
                </td>
            </LigneTableau>
            <LigneTableau lignes={3}>
                <td>Angle obtus</td>
                <td>{@html math("90^\\circ \\lt \\text{mesure}~\\lt 180^\\circ")}</td>
                <td>
                    <Schema lignes={3}>
                        {#snippet svg()}
                            <line x1={200} y1={800} x2={200 +  800 * Math.cos(0)} y2={800 + 800 * Math.sin(0)} stroke="black" stroke-width={15} />
                            <line x1={200} y1={800} x2={200 +  800 * Math.cos(-2*Math.PI/3)} y2={800 + 800 * Math.sin(-2*Math.PI/3)} stroke="black" stroke-width={15} />
                        {/snippet}
                    </Schema>
                </td>
            </LigneTableau>
            <LigneTableau lignes={3}>
                <td>Angle plat</td>
                <td>{@html math("\\text{mesure}~= 180^\\circ")}</td>
                <td>
                    <Schema lignes={3}>
                        {#snippet svg()}
                            <line x1={500} y1={800} x2={500 +  800 * Math.cos(0)} y2={800 + 800 * Math.sin(0)} stroke="black" stroke-width={15} />
                            <line x1={500} y1={800} x2={500 +  800 * Math.cos(-Math.PI)} y2={800 + 800 * Math.sin(-Math.PI)} stroke="black" stroke-width={15} />
                        {/snippet}
                    </Schema>
                </td>
            </LigneTableau>
        </Tableau>
</Contenu>