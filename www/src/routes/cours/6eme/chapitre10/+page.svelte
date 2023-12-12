<script>
	import Chapitre from "$lib/chapitrage/Chapitre.svelte";
	import Partie from "$lib/chapitrage/Partie.svelte";
	import SousPartie from "$lib/chapitrage/SousPartie.svelte";
	import Definition from "$lib/chapitrage/sections/Definition.svelte";
	import Exemples from "$lib/chapitrage/sections/Exemples.svelte";
	import Paragraphe from "$lib/chapitrage/sections/Paragraphe.svelte";
	import Propriete from "$lib/chapitrage/sections/Propriete.svelte";
    import L from "$lib/chapitrage/sections/L.svelte";

    import Katex from "svelte-katex";
	import Remarque from "$lib/chapitrage/sections/Remarque.svelte";

</script>


<Chapitre titre="Triangles" numero={10}>
    <Partie numero={1} titre="Constructions">
        <Definition>
            Un triangle est une figure plane formée par 3 points et les segments qui les relient.
        </Definition>
        <Propriete>
            La somme des mesures des angles intérieurs d'un triangle est égale à 180°.
        </Propriete>
        <SousPartie titre="Avec 3 longueurs" numero={1}>
            <Paragraphe couleur="blue" nom="Protocole de construction">
                <ol>
                    <li>Tracer le côté le plus long</li>
                    <li>Avec le compas, tracer les deux arcs de cercle correspondant aux deux côtés restants</li>
                    <li>L'intersection des deux arcs de cercle sera le troisième sommet du triangle</li>
                </ol>
            </Paragraphe>
            <Exemples>
                On donne les longueurs suivantes : <L>AB = 4 cm</L>, <L>BC = 5 cm</L> et <L>AC = 6 cm</L>.

                <svg viewBox="0 250 1000 1000">
                    <line x1="200" y1="800" x2="800" y2="800" stroke="black" stroke-width="4" />
                    <text x="180" y="840" font-family="Katex_Main" font-size="40px">
                        A
                    </text>
                    <text x="800" y="840" font-family="Katex_Main" font-size="40px">
                        C
                    </text>
                    <text x="410" y="445" font-family="Katex_Main" font-size="40px">
                        B
                    </text>
                    <circle cx="200" cy="800" r="400" stroke="red" stroke-width="2" fill="none" />
                    <circle cx="800" cy="800" r="500" stroke="red" stroke-width="2" fill="none" />
                    <circle cx="425" cy="470" r="5" fill="red" stroke="none" />
                    <line x1="200" y1="800" x2="425" y2="470" stroke="red" stroke-width="4" />
                    <line x1="425" y1="470" x2="800" y2="800" stroke="red" stroke-width="4" />

                    <text x="500" y="835" font-family="Katex_Main" font-size="40px" text-anchor="middle">
                        6 cm
                    </text>
                    <text x="600" y="580" font-family="Katex_Main" font-size="40px" text-anchor="middle">
                        5 cm
                    </text>
                    <text x="280" y="600" font-family="Katex_Main" font-size="40px" text-anchor="middle">
                        4 cm
                    </text>
                </svg>
            </Exemples>
        </SousPartie>
        <SousPartie titre="Avec 2 longueurs et 1 angle" numero={2} >
            <Paragraphe couleur="black" nom="Condition">
                Il faut que l'angle donné soit formé par les côtés des deux longueurs données.
            </Paragraphe>
            <Paragraphe couleur="blue" nom="Protocole de construction">
                <ol>
                    <li>Tracer le plus grand côté</li>
                    <li>Avec le rapporteur, tracer la demi-droite pour former l'angle donné</li>
                    <li>Placer le troisième point, en rapportant la deuxième longueur donnée sur la demi-droite</li>
                    <li>Tracer le troisième côté </li>
                </ol>
            </Paragraphe>
            <Exemples>
                On donne <L>AB = 2 cm</L>, <L>BC = 3 cm</L> et <Katex>{"\\widehat{ABC} = 60°"}</Katex>
                <svg viewBox="0 0 500 500">
                    <circle stroke="red" stroke-width="60" fill="none" cx="100" cy="400" r="30" stroke-dasharray="60 160" stroke-dashoffset="63" />
                    <line x1="100" y1="400" x2="400" y2="400" stroke="black" stroke-width="3" />
                    <text x="90" y="420" font-family="Katex_Main" font-size="20px">
                        B
                    </text>
                    <text x="400" y="420" font-family="Katex_Main" font-size="20px">
                        C
                    </text>
                    <line x1="100" y1="400" x2={100+500} y2={400 - 866} stroke="black" stroke-width="3" />
                    <text x={80+200*0.5} y={400-200*0.866} font-family="Katex_Main" font-size="20px">
                        A
                    </text>
                    <text x="160" y="370" font-family="Katex_Main" font-size="20px" stroke="red" fill="red">
                        60°
                    </text>
                    <line x1="400" y1="400" x2={100+200*0.5} y2={400-200*0.866} stroke="black" stroke-width="3" stroke-dasharray="5 1" />
                    <line x1={100+200*0.5} y1={400-200*0.866} x2={100} y2={400} stroke="green" stroke-width="3" />
                    <circle cx={100+200*0.5} cy={400-200*0.866} r="3" stroke="none" fill="red" />
                    <text x={250} y={420} font-family="Katex_Main" font-size="20px" text-anchor="middle" >
                        3 cm
                    </text>
                    <text x={80+100*0.5} y={400-100*0.866-20} font-family="Katex_Main" font-size="20px" text-anchor="middle" stroke="green" fill="green" >
                        2 cm
                    </text>
                </svg>
            </Exemples>
        </SousPartie>
        <SousPartie titre="Avec 1 longueur et 2 angles" numero={3}>
            <Paragraphe couleur="black" nom="Condition">
                Il faut que les deux angles donnés soient <i>adjacents</i> au côté dont la longueur est donnée.<br>
                Dans le cas contraire, on calcule le troisième angle.
            </Paragraphe>
            <Paragraphe couleur="blue" nom="Protocole de construction">
                <ol>
                    <li>Tracer le côté donné</li>
                    <li>Tracer les deux demi-droites formant les deux angles donnés</li>
                    <li>Le troisième sommet du triangle est le point d'intersection des deux demi-droites</li>
                </ol>
            </Paragraphe>
            <Exemples>
                On donne <L>DF = 4 cm</L>, <Katex>{"\\widehat{EDF} = 45°"}</Katex> et <Katex>{"\\widehat{DFE} = 90°"}</Katex>
                <svg viewBox="0 0 500 500">
                    <rect x="425" y="425" width="25" height="25" stroke="none" stroke-width="3" fill="red" />
                    <circle cx="50" cy="450" r="20" stroke="red" fill="none" stroke-width="40" stroke-dasharray="80 140" stroke-dashoffset="110" />
                    <line x1="50" y1="450" x2="450" y2="450" stroke="black" stroke-width="3" />
                    <text x="40" y="470" font-family="Katex_Main" font-size="20px">
                        D
                    </text>
                    <text x="450" y="470" font-family="Katex_Main" font-size="20px">
                        F
                    </text>
                    <line x1="50" y1="450" x2={500} y2={0} stroke="black" stroke-width="2" stroke-dasharray="10 5" />
                    <line x1="450" y1="450" x2={450} y2={0} stroke="black" stroke-width="2" stroke-dasharray="10 5" />
                    <circle cx="450" cy="50" r="3" stroke="none" fill="red" />
                    <text x={430} y={50} font-family="Katex_Main" font-size="20px" stroke="red" fill="red">
                        E
                    </text>
                    <text x={250} y={470} font-family="Katex_Main" font-size="20px" text-anchor="middle" >
                        4 cm
                    </text>
                    <text x={110} y={435} font-family="Katex_Main" font-size="20px" text-anchor="middle" >
                        45°
                    </text>
                    <text x={410} y={435} font-family="Katex_Main" font-size="20px" text-anchor="middle" >
                        90°
                    </text>
                </svg>
            </Exemples>
        </SousPartie>
    </Partie>
</Chapitre>

<style>
    svg {
        width: 100%;
        height: auto;
    }

    @media (max-aspect-ratio: 1/1) {
        svg {
            width: auto;
            height: 50vw;
            margin-left: 25vw;
            margin-right: 25vw;
        }
    }
</style>