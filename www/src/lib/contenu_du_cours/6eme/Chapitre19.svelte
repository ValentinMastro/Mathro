<script lang='ts'>
    import { Chapitre, Partie, SousPartie } from "$lib/chapitrage/all_chapitrages";
    import { Definition, Propriete, Schema, Paragraphe } from "$lib/chapitrage/sections/all_sections";
    import { math, display } from 'mathlifier'; 

    var t = -1

    function lancer_animation() {
        t = 1
        animation();
    }

    function animation() {
        if (t > -1) {
            t = t - 0.01;
            setTimeout(() => {animation()}, 10);
        }
    }
</script>

<Chapitre numero={19} titre="Symétrie axiale">
    <Partie numero={1} titre="Définition">
        <Definition>
            (ℱ) et (ℱ') sont symétriques par rapport à une droite {@html math('(d)')} si 
            « en repliant sur la droite {@html math('(d)')} », (ℱ) et (ℱ') se superposent.
        </Definition>
        <Schema>
            <svg viewBox="0 0 300 300" style="width: 15em"
                on:click={lancer_animation}
                role="none"
            >
                <defs>
                    <g id="figure">
                        <circle cx="90" cy="220" r="50" stroke="black" fill="none" />
                        <line x1="140" y1="220" x2="140" y2="70" stroke="black" />
                        <line x1="140" y1="70" x2="90" y2="70" stroke="black" />
                        <line x1="90" y1="70" x2="140" y2="120" stroke="black" />
                    </g>
                </defs>
                <use href="#figure" x="0" y="0" />
                <use href="#figure" x="0" y="0" transform-origin="center" transform="scale({t}, 1)" >
                    <animateTransform attributeName="scaleX" attributeType="XML" type="scale" from="1" to="-1" dur="1s" fill="freeze" />
                </use>
                <line x1="150" y1="0" x2="150" y2="300" stroke="black" />
            </svg>
        </Schema>
    </Partie>
    <Partie numero={2} titre="Construction du symétrique d'un point">
        <SousPartie titre="Avec l'équerre" numero={1}>
            <Propriete>
                Si {@html math("A'")} est le symétrique de {@html math("A")} par rapport à {@html math("(d)")}, alors {@html math("(d)")} est la médiatrice de {@html math("[AA']")}
            </Propriete>
            <Paragraphe nom="Protocole de construction" couleur="black" >
                On a un point A et une droite (d). <br>
                {@html math("\\Rightarrow")} Tracer une droite perpendiculaire à (d) passant par A. <br>
                Appelons O le point d'intersection.<br>
                {@html math("\\Rightarrow")} Placer le point {@html math("A'")} sur la droite tracée tel que {@html math("AO = OA'")}.
            </Paragraphe>
            <svg viewBox="0 0 300 300" style="width: 20em">
                <line x1="30" y1="250" x2="200" y2="50" stroke="black"/>
                <text x="45" y="250" font-size="20" fill="black" font-family="Katex_Italic" >(d)</text>
                <text x="60" y="100" font-size="10" fill="black">X</text>
                <text x="64" y="90" font-size="20" fill="black" font-family="Katex_Main">A</text>
                
                <!-- Droite perpendiculaire passant par A -->
                <text x="110" y="135" font-size="20" fill="black" font-family="Katex_Main">O</text>
                <line x1="60" y1="95" x2="280" y2="270" stroke="black" />
                <text x="170" y="189" font-size="10" fill="black">X</text>
                <text x="178" y="180" font-size="20" fill="black" font-family="Katex_Main">A'</text>

                <!-- Codage -->
                <text x="82" y="130" font-size="30" fill="red">~</text>
                <text x="142" y="180" font-size="30" fill="red">~</text>
            </svg>
            <svg viewBox="0 0 300 300" style="width: 20em">
                <line x1="30" y1="250" x2="200" y2="50" stroke="black"/>
                <text x="45" y="250" font-size="20" fill="black">(d)</text>
                <text x="60" y="100" font-size="10" fill="black">X</text>
                <text x="64" y="90" font-size="20" fill="black">A</text>
                
                <!-- Droite perpendiculaire passant par A -->
                <line x1="60" y1="95" x2="280" y2="270" stroke="black" >
                    <animate attributeName="x2" from="60" to="280" dur="10s" repeatCount="indefinite" />
                    <animate attributeName="y2" from="95" to="270" dur="10s" repeatCount="indefinite" />
                </line>
                <text x="110" y="135" font-size="20" fill="black">O</text>
                <text x="170" y="189" font-size="10" fill="black">X</text>
                <text x="178" y="180" font-size="20" fill="black">A'</text>

                <!-- Codage -->
                <text x="82" y="130" font-size="30" fill="red">~</text>
                <text x="142" y="180" font-size="30" fill="red">~</text>
            </svg>
        </SousPartie>
        <SousPartie titre="Avec le compas" numero={2}>
            <Paragraphe nom="Protocole de construction" couleur="black" >
                On a un point A et une droite {@html math('(d)')} <br>
                {@html math("\\Rightarrow")} Placer 2 points sur la droite {@html math("(d)")}. <br>
                {@html math("\\Rightarrow")} Avec le compas, tracer un arc de cercle de centre le premier point, et passant par {@html math("A")}. <br>
                {@html math("\\Rightarrow")} Avec le compas, tracer un arc de cercle de centre le deuxième point, et passant par {@html math("A")}. <br>
                Les deux cercles se croiseront aux points {@html math("A")} et {@html math("A'")}, le symétrique de {@html math("A")} par rapport à {@html math("(d)")}.
            </Paragraphe>
            <Schema>
                <svg viewBox="0 0 300 300" style="width: 20em">
                    <line x1="30" y1="250" x2="200" y2="50" stroke="black"/>
                    <text x="45" y="250" font-size="20" fill="black" font-family="Katex_Italic" >(d)</text>
                    <text x="60" y="100" font-size="10" fill="black">X</text>
                    <text x="64" y="90" font-size="20" fill="black" font-family="Katex_Main">A</text>
                    <text x="173" y="196" font-size="10" fill="black">X</text>
                    <text x="181" y="185" font-size="20" fill="black" font-family="Katex_Italic">A'</text>
                    <circle cx="30" cy="250" r="157" stroke="black" fill="none"/>
                    <circle cx="200" cy="50" r="144" stroke="black" fill="none"/>

                    <text x="27" y="253" font-size="10" fill="green">X</text>
                    <text x="197" y="54" font-size="10" fill="red">X</text>
                </svg>
                <svg viewBox="0 0 300 300" style="width: 20em">
                    <line x1="30" y1="250" x2="200" y2="50" stroke="black"/>
                    <text x="45" y="250" font-size="20" fill="black">(d)</text>
                    <text x="60" y="100" font-size="10" fill="black">X</text>
                    <text x="64" y="90" font-size="20" fill="black">A</text>

                    <text x="27" y="253" font-size="10" fill="green">X</text>
                    <text x="197" y="54" font-size="10" fill="red">X</text>

                    <circle cx="30" cy="250" r="157" stroke="black" fill="none" stroke-dasharray="{Math.PI * 157} {Math.PI * 157}" stroke-dashoffset="{(0.4) * 2 * Math.PI * 157}">
                        <animate attributeName="stroke-dashoffset" from="{(0.9) * 2 * Math.PI * 157}" to="{(0.4) * 2 * Math.PI * 157}" dur="10s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="200" cy="50" r="144" stroke="black" fill="none" stroke-dasharray="{Math.PI * 144} {Math.PI * 144}">
                        <animate attributeName="stroke-dashoffset" from="{(0.4) * 2 * Math.PI * 144}" to="{(0.9) * 2 * Math.PI * 144}" dur="10s" repeatCount="indefinite" />
                    </circle>
                </svg>
            </Schema>
        </SousPartie>
    </Partie>
    <Partie numero={3} titre="Axes de symétrie">
        <Definition>
            Un axe de symétrie est une droite avec laquelle on peut plier la figure 
            afin que les deux parties obtenues soient superposables.
        </Definition>
        <SousPartie numero={1} titre="Dans un quadrilatère">
            <Schema>
                <svg viewBox="-50 -50 1000 350" style="width: 50em;">
                    <!-- Carré -->
                    <polygon points="0,0 0,200 200,200 200,0" fill="none" stroke="black" />
                    <line x1="-20" y1="100" x2="220" y2="100" stroke="black" stroke-dasharray="5 5"/>
                    <line x1="100" y1="-20" x2="100" y2="220" stroke="black" stroke-dasharray="5 5"/>
                    <line x1="-20" y1="-20" x2="220" y2="220" stroke="black" stroke-dasharray="5 5"/>
                    <line x1="220" y1="-20" x2="-20" y2="220" stroke="black" stroke-dasharray="5 5"/>
                    <!-- Losange -->
                    <polygon points="400,0 475,100 400,200 325,100" fill="none" stroke="black" />
                    <line x1="300" y1="100" x2="500" y2="100" stroke="black" stroke-dasharray="5 5"/>
                    <line x1="400" y1="-20" x2="400" y2="220" stroke="black" stroke-dasharray="5 5"/>
                    <!-- Rectangle -->
                    <polygon points="600,40 600,160 900,160 900,40" fill="none" stroke="black" />
                    <line x1="580" y1="100" x2="920" y2="100" stroke="black" stroke-dasharray="5 5"/>
                    <line x1="750" y1="-20" x2="750" y2="220" stroke="black" stroke-dasharray="5 5"/>
                </svg>
            </Schema>
            <Propriete>
                <ul>
                    <li>Dans un carré, les axes de symétrie sont les médiatrices des côtés et les diagonales.</li>
                    <li>Dans un losange, les axes de symétrie sont les diagonales.</li>
                    <li>Dans un rectangle, les axes de symétrie sont les médiatrices des côtés.</li>
                </ul>
            </Propriete>
        </SousPartie>
        <SousPartie numero={2} titre="Dans un triangle">
            <Schema>
                <svg viewBox="-50 -50 700 300" style="width: 40em;">
                    <!-- Triangle isocèle -->
                    <polygon points="50,200 100,0 150,200" fill="none" stroke="black" />
                    <line x1="100" y1="-20" x2="100" y2="220" stroke="black" stroke-dasharray="5 5"/>
                    <!-- Triangle équilatéral -->
                    <polygon points="280,200 {280+240*Math.cos(Math.PI/3)},{200-240*Math.sin(Math.PI/3)} 520,200" fill="none" stroke="black" />
                    <line x1="400" y1="-20" x2="400" y2="220" stroke="black" stroke-dasharray="5 5"/>
                    <line x1={520+20*Math.cos(Math.PI/6)} y1={200+20*Math.sin(Math.PI/6)} x2={280+120*Math.cos(Math.PI/3)} y2={200-120*Math.sin(Math.PI/3)} stroke="black" stroke-dasharray="5 5"/>
                    <line x1={280-20*Math.cos(Math.PI/6)} y1={200+20*Math.sin(Math.PI/6)} x2={520+120*Math.cos(4*Math.PI/3)} y2={200+120*Math.sin(4*Math.PI/3)} stroke="black" stroke-dasharray="5 5"/>
                </svg>
            </Schema>
            <Propriete>
                <ul>
                    <li>Dans un triangle isocèle, l'axe de symétrie est la médiatrice de la base.</li>
                    <li>Dans un triangle équilatéral, les axes de symétrie sont les médiatrices des 3 côtés du triangle.</li>
                </ul>
            </Propriete>
        </SousPartie>
    </Partie>
</Chapitre>