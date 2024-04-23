<script>
    import { Chapitre, Partie, SousPartie } from "$lib/chapitrage/all_chapitrages";
    import { Definition, Exemples, Paragraphe, Propriete, Remarque, Schema, Notation } from "$lib/chapitrage/sections/all_sections";
    import { math } from 'mathlifier';
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
            <div class="flex_container">
                <div class="gauche">
                    <Paragraphe couleur="blue" nom="Protocole de construction">
                        <ol>
                            <li>Tracer le côté le plus long</li>
                            <li>Avec le compas, tracer les deux arcs de cercle correspondant aux deux côtés restants</li>
                            <li>L'intersection des deux arcs de cercle sera le troisième sommet du triangle</li>
                        </ol>
                    </Paragraphe>
                    <Exemples>
                        On donne les longueurs suivantes : {@html math("AB = 4 cm")}, {@html math("BC = 5 cm")} et {@html math("AC = 6 cm")}
                    </Exemples>
                </div>
                <div class="droite">
                    <svg viewBox="100 400 730 500">
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
                </div>
            </div>
        </SousPartie>
        <SousPartie titre="Avec 2 longueurs et 1 angle" numero={2} >
            <div class="flex_container">
                <div class="gauche">
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
                        On donne {@html math("AB = 2 cm")}, {@html math("BC = 3 cm")} et {@html math("\\widehat{ABC} = 60°")}
                    </Exemples>
                </div>
                <div class="droite">
                    <svg viewBox="80 150 350 300">
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
                </div>
            </div>
        </SousPartie>
        <SousPartie titre="Avec 1 longueur et 2 angles" numero={3}>
            <div class="flex_container">
                <div class="gauche">
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
                        On donne {@html math("DF = 4 cm")}, {@html math("\\widehat{EDF} = 45°")} et {@html math("\\widehat{DFE} = 90°")}
                    </Exemples>
                </div>
                <div class="droite">
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
                </div>
            </div>
        </SousPartie>
    </Partie>
    <Partie numero={2} titre="Les différents types de triangle">
        <SousPartie titre="Triangle rectangle" numero={1}>
            <Definition>
                Triangle ayant un angle droit (90°).
            </Definition>
            <Schema>
                <svg viewBox="0 0 500 500" style="width: 30em;">
                    <rect x="425" y="425" width="25" height="25" stroke="none" stroke-width="3" fill="red" />
                    <path d="M 50 450 l 25 0 a 25 25 0 0 0 -7 -20" fill="blue" />
                    <path d="M 450 50 l 0 25 a 25 25 0 0 1 -20 -7" fill="blue" />
                    <polygon points="50,450 450,450 450,50" stroke="black" stroke-width="3" fill="none" />
                    <text x="40" y="470" font-family="Katex_Main" font-size="20px" fill="blue">
                        angle aigu
                    </text>
                    <text x="455" y="50" font-family="Katex_Main" font-size="20px" fill="blue">
                        <tspan>
                            angle
                        </tspan>
                        <tspan x="455" dy="20">
                            aigu
                        </tspan>
                    </text>
                    <text x="455" y="455" font-family="Katex_Main" font-size="20px" fill="red">
                        <tspan>
                            angle
                        </tspan>
                        <tspan x="455" dy="20">
                            droit
                        </tspan>
                    </text>
                    <line x1="50" y1="450" x2="450" y2="50" stroke="green" stroke-width="3" />
                    <text x="130" y="250" font-family="Katex_Main" font-size="20px" fill="green">
                        hypoténuse
                    </text>
                </svg>
            </Schema>
        </SousPartie>
        <SousPartie numero={2} titre="Triangle isocèle">
            <Definition>
                Triangle ayant deux côtés de même longueur.
            </Definition>
            <Propriete>
                Un triangle isocèle a deux angles de même mesure.
            </Propriete>
            <Schema>
                <svg viewBox="0 150 500 300" style="width: 30em;">
                    <defs>
                        <g id="codage" >
                            <line x1="-2.5" y1="0" x2="-2.5" y2="15" stroke-width="2" />
                            <line x1="2.5" y1="0" x2="2.5" y2="15" stroke-width="2" />
                        </g>
                        <style>
                            .blink {
                                animation: blinker 8s linear infinite;
                            }
                            @keyframes blinker {
                                50% {
                                    opacity: 0;
                                }
                            }
                        </style>
                    </defs>
                    <path d="M 50 350 l 25 0 a 25 25 0 0 0 -4 -18" fill="red" class="blink" />
                    <path d="M 450 350 l -25 0 a 25 25 0 0 1 4 -18" fill="red" class="blink" />
                    <polygon points="50,350 450,350 250,200" stroke="black" stroke-width="3" fill="none" />
                    <line x1="50" y1="350" x2="450" y2="350" stroke="green" stroke-width="3" />
                    <text x="250" y="375" font-family="Katex_Main" font-size="20px" fill="green" text-anchor="middle">
                        base
                    </text>
                    <use href="#codage" x="150" y="270" stroke="red"/>
                    <use href="#codage" x="350" y="270" stroke="red"/>
                    <text x="250" y="330" font-family="Katex_Main" font-size="20px" fill="red" text-anchor="middle" class="blink">
                        angles adjacents à la base
                    </text>
                </svg>
            </Schema>
        </SousPartie>
        <SousPartie numero={3} titre="Triangle isocèle rectangle">
            <Schema>
                <svg viewBox="0 0 500 500" style="width: 30em;">
                    <rect x="425" y="425" width="25" height="25" stroke="none" stroke-width="3" fill="red" />
                    <path d="M 50 450 l 25 0 a 25 25 0 0 0 -7 -20" fill="blue" />
                    <path d="M 450 50 l 0 25 a 25 25 0 0 1 -20 -7" fill="blue" />
                    <polygon points="50,450 450,450 450,50" stroke="black" stroke-width="3" fill="none" />
                    <text x="80" y="440" font-family="Katex_Main" font-size="20px" fill="blue">45°</text>
                    <text x="420" y="100" font-family="Katex_Main" font-size="20px" fill="blue">45°</text>
                    <text x="455" y="455" font-family="Katex_Main" font-size="20px" fill="red">
                        <tspan>
                            angle
                        </tspan>
                        <tspan x="455" dy="20">
                            droit
                        </tspan>
                    </text>
                    <use href="#codage" x="250" y="442.5" stroke="red"/>
                    <use href="#codage" x="250" y="42.5" stroke="red" style="transform-origin: center; transform: rotate(90deg)" />
                </svg>
            </Schema>
        </SousPartie>
        <SousPartie numero={4} titre="Triangle équilatéral">
            <Definition>
                Triangle ayant trois côtés de même longueur.
            </Definition>
            <Propriete>
                Un triangle équilatéral a trois angles de même mesure : {@html math("180° \\div 3 = 60°")}.
            </Propriete>
            <Schema>
                <svg viewBox="0 0 500 500" style="width: 30em;">
                    <defs>
                        <g id="codage">
                            <line x1="-2.5" y1="0" x2="-2.5" y2="15" stroke-width="2" stroke="red" />
                            <line x1="2.5" y1="0" x2="2.5" y2="15" stroke-width="2" stroke="red" />
                        </g>
                        <g id="mesure">
                            <text x="-2.5" y="0" font-family="Katex_Main" font-size="20px" text-anchor="middle" dy="20" fill="red">
                                60°
                            </text>
                        </g>
                    </defs>
                    <path d="M 50 450 l 25 0 a 25 25 0 0 0 -12 -21" fill="red" />
                    <path d="M 450 450 l -25 0 a 25 25 0 0 1 12 -21" fill="red" />
                    <path d="M 250 104 l -12.5 22 a 25 25 0 0 0 25 0" fill="red" />
                    <polygon points="50,450 450,450 250,104" stroke="black" stroke-width="3" fill="none" />

                    <use href="#codage" x="150" y="270" transform="rotate(120, 150, 270) translate(10,-10)" />
                    <use href="#codage" x="350" y="270" transform="rotate(30, 350, 270) translate(10,3)" />
                    <use href="#codage" x="250" y="442.5" />

                    <use href="#mesure" x="100" y="420" />
                    <use href="#mesure" x="410" y="420" />
                    <use href="#mesure" x="255" y="130" />
                </svg>
            </Schema>
        </SousPartie>
        <SousPartie numero={5} titre="Triangle plat">
            <Definition>
                Quand la longueur d'un côté est égale à la somme des longueurs des deux autres côtés, alors le triangle est plat.<br>
                Autrement dit, les trois sommets du triangle sont alignés.
            </Definition>
            <Schema>
                <svg viewBox="0 0 500 100" style="width: 30em;">
                    <defs>
                        <g id="point">
                            <circle cx="0" cy="0" r="5" stroke="none" fill="black" />
                        </g>
                    </defs>
                    <line x1="50" y1="50" x2="450" y2="50" stroke="black" stroke-width="2" />
                    <use href="#point" x="50" y="50" />
                    <use href="#point" x="450" y="50" />
                    <use href="#point" x="150" y="50" />
                    <text x="50" y="75" font-family="Katex_Main" font-size="20px" text-anchor="middle">A</text>
                    <text x="450" y="75" font-family="Katex_Main" font-size="20px" text-anchor="middle">B</text>
                    <text x="150" y="75" font-family="Katex_Main" font-size="20px" text-anchor="middle">C</text>
                    <text x="300" y="30" font-family="Katex_Main" font-size="20px" text-anchor="middle" fill="red">AB = AC + BC</text>
                    <rect x="225" y="10" width="150" height="25" stroke="red" stroke-width="1" fill="none" />
                </svg>
            </Schema>
        </SousPartie>
        <SousPartie titre="Triangle quelconque" numero={6}>
            <Definition>
                Triangle qui n'a pas de propriété particulière.
            </Definition>
        </SousPartie>
    </Partie>
    <Partie numero={3} titre="Les droites remarquables dans un triangle">
        <SousPartie numero={1} titre="Médiatrices">
            <Propriete>
                Les médiatrices des 3 côtés d'un triangle sont concourantes en un point : le <i>centre du cercle circonscrit</i>.
            </Propriete>
            <Schema>
                <svg viewBox="-30 0 530 530" style="width: 30em;">
                    <polygon points="50,450 480,310 350,50" stroke="black" stroke-width="3" fill="none" />
                    <line x1="50" y1="450" x2="480" y2="310" stroke="red" stroke-width="3" transform='rotate(90, 265, 380)' />
                    <line x1="610" y1="570" x2="220" y2="-210" stroke="red" stroke-width="3" transform='rotate(90, 415, 180)' />
                    <line x1="350" y1="50" x2="50" y2="450" stroke="red" stroke-width="3" transform='rotate(90, 200, 250)' />
                    <circle cx="229" cy="272" r="254" stroke="green" stroke-width="3" fill="none" />
                </svg>
            </Schema>
        </SousPartie>
        <SousPartie numero={2} titre="Hauteurs">
            <Definition>
                La hauteur d'un côté d'un triangle est la droite perpendiculaire à ce côté passant par le sommet opposé.
            </Definition>
            <Schema>
                <svg viewBox="0 100 500 400" style="width: 30em;">
                    <rect x="350" y="430" width="20" height="20" stroke="green" stroke-width='3' fill="none" />
                    <polygon points="50,450 450,450 350,150" stroke="black" stroke-width="3" fill="none" />
                    <line x1="350" y1="0" x2="350" y2="500" stroke="green" stroke-width="3" />
                    <line x1="50" y1="450" x2="450" y2="450" stroke="red" stroke-width="3" />
                    <text x="250" y="470" font-size="20px" text-anchor="middle" fill="red">
                        côté
                    </text>
                    <circle cx="350" cy="150" r="5" stroke="none" fill="blue" />
                    <text x="340" y="150" font-size="20px" text-anchor="end" fill="blue">
                        sommet opposé
                    </text>
                    <text x="35" y="450" font-size="25px" font-family="Katex_Main" text-anchor="middle">A</text>
                    <text x="465" y="450" font-size="25px" font-family="Katex_Main" text-anchor="middle">B</text>
                    <text x="365" y="150" font-size="25px" font-family="Katex_Main" text-anchor="middle">C</text>
                </svg>
            </Schema>
            <Notation>
                <ul>
                    <li>La hauteur du côté [AB]</li>
                    <li>La hauteur issue de C</li>
                </ul>
            </Notation>
            <Propriete>
                Les 3 hauteurs d'un triangle sont concourantes en un point : l'<i>orthocentre</i>.
            </Propriete>
            <Schema>
                <svg viewBox="0 0 500 500" style="width: 30em;">
                    <polygon points="50,450 450,450 350,150" stroke="black" stroke-width="3" fill="none" />
                    <line x1="350" y1="0" x2="350" y2="500" stroke="green" stroke-width="3" />
                    <line x1="0" y1="0" x2="500" y2="500" stroke="green" stroke-width="3" />
                    <line x1="0" y1="467" x2="500" y2="300" stroke="green" stroke-width="3" />

                    <text x="35" y="450" font-size="25px" font-family="Katex_Main" text-anchor="middle">A</text>
                    <text x="465" y="450" font-size="25px" font-family="Katex_Main" text-anchor="middle">B</text>
                    <text x="365" y="150" font-size="25px" font-family="Katex_Main" text-anchor="middle">C</text>

                    <circle cx="350" cy="350" r="5" stroke="none" fill="blue" />
                    <text x="325" y="350" font-size="20px" text-anchor="end" fill="blue">
                        orthocentre
                    </text>
                </svg>
            </Schema>
            <Remarque>
                Si le triangle a un angle obtus, l'orthocentre est à l'extérieur du triangle.
            </Remarque>
        </SousPartie>
    </Partie>
</Chapitre>

<style>
    svg {
        width: 100%;
        height: auto;
    }

    .flex_container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        column-gap: 40px;
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