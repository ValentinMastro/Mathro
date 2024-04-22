<script lang="ts">
    import { Chapitre, Partie, SousPartie } from "$lib/chapitrage/all_chapitrages";
    import { Definition, Exemples, Notation, Propriete, Demonstration } from "$lib/chapitrage/sections/all_sections";
	import { math, display } from 'mathlifier';
</script>

<Chapitre numero={2} titre="Fractions et proportionnalité">
    <Partie numero={1} titre="Calculs fractionnaires">
        <Definition>
            Soient deux nombres {@html math("a")} et {@html math("b")},
            avec {@html math("b \\neq 0")}. Le quotient de {@html math("a")}
            par {@html math("b")} est le nombre qui, lorsqu'il est
            multiplié par {@html math("b")}, donne {@html math("a")}.
        </Definition>
        <Notation>
            On le note {@html math('\\dfrac{a}{b}')} (écriture fractionnaire)
        </Notation>
        <Exemples>
            <ul>
                <li>
                    {@html math('\\dfrac{3}{4} \\ times 4 = \\dfrac{3}{\\cancel{4}} \\times \\cancel{4} = 3')}
                </li>
                <li>
                    {@html math('\\dfrac{7{,}2}{5{,}8} \\times 5{,}8 = \\dfrac{7{,}2}{\\cancel{5{,}8}} \\times \\cancel{5{,}8} = 7{,}2')}
                </li>
            </ul>
        </Exemples>
        <Propriete>
            Soient deux nombres {@html math("a")} et {@html math("b")},
            avec {@html math("b \\neq 0")}. <br>
            Soit {@html math("k")} avec {@html math("k \\neq 0")}.
            {@html math('\\dfrac{a}{b} = \\dfrac{ka}{kb}')}
        </Propriete>
        <Exemples>
            <ul>
                <li>{@html math("\\dfrac{16}{20} = \\dfrac{16 \\times 4}{20 \\times 4} = \\dfrac{64}{80}")}</li>
                <li>{@html math("\\dfrac{35}{75} = \\dfrac{35 \\div 5}{75 \\div 5} = \\dfrac{7}{15}")}</li>
            </ul>
        </Exemples>
        <Definition>
            Simplifier une fraction, c'est trouver une autre fraction qui lui est égale 
            avec un numérateur et un dénominateur plus petits.
        </Definition>
        <SousPartie numero={1} titre="Addition et soustraction">
            <Propriete>
                Pour additionner deux fractions, il faut qu'elles aient le même dénominateur.<br>
                Soient deux nombres {@html math("a")} et {@html math("b")}, avec {@html math("b \\neq 0")}.<br>
                Soient deux nombres {@html math("c")} et {@html math("d")}, avec {@html math("d \\neq 0")}.<br>
                {@html math('\\dfrac{a}{b} + \\dfrac{c}{d} = \\dfrac{ad + cb}{bd}')}
            </Propriete>
            <Exemples>
                <ul>
                    <li>
                        {@html math("\\dfrac{3}{7} + \\dfrac{12}{8} = \\dfrac{3 \\times 8}{7 \\times 8} + \\dfrac{12 \\times 7}{8 \\times 7} = \\dfrac{24}{56} + \\dfrac{84}{56} = \\dfrac{108}{56}")}
                    </li>
                </ul>
            </Exemples>
        </SousPartie>
        <SousPartie numero={2} titre="Multiplication et division">
            <Propriete>
                Soient deux nombres {@html math("a")} et {@html math("b")}, avec {@html math("b \\neq 0")}.<br>
                Soient deux nombres {@html math("c")} et {@html math("d")}, avec {@html math("d \\neq 0")}.<br>
                {@html math('\\dfrac{a}{b} \\times \\dfrac{c}{d} = \\dfrac{a \\times c}{b \\times d}')}
            </Propriete>
            <Exemples>
                <ul>
                    <li>
                        {@html math("\\dfrac{7}{5} \\times \\dfrac{3}{4} = \\dfrac{7 \\times 3}{5 \\times 4} = \\dfrac{21}{20}")}
                    </li>
                </ul>
            </Exemples>
            <Propriete>
                Diviser par un nombre revient à multiplier par son inverse.
            </Propriete>
            <Exemples>
                <img    alt="Schéma expliquant les divisions de fractions"
                        src="/tikz/4eme/ch02/divisions_de_fractions.svg"/>
            </Exemples>
        </SousPartie>
    </Partie>
    <Partie numero={2} titre="Pourcentages">
        <SousPartie numero={1} titre="Le pourcentage d'un nombre">
            <Definition>
                Calculer {@html math("p \\%")} d'un nombre {@html math("n")},
                c'est multiplier {@html math("\\dfrac{p}{100}")} par {@html math("n")}.
            </Definition>
            <Exemples>
                <ul>
                    <li>
                        {@html math("25~\\% ~\\text{de}~ 12 =  \\dfrac{25}{100} \\times 12 = 3")}
                    </li>
                    <li>
                        {@html math("25~\\% ~\\text{de}~ 100 = \\dfrac{25}{100} \\times 100 = 25")}
                    </li>
                    <li>
                        {@html math("75~\\% ~\\text{de}~ 32 = \\dfrac{75}{100} \\times 32  = 24")}
                    </li>
                </ul>
            </Exemples>
            <Propriete>
                Pour calculer une proportion sous forme de pourcentage,
                il faut que le dénominateur soit égal à 100.
            </Propriete>
            <Exemples>
                <div style="display:flex; justify-content: center;">
                <svg viewBox="0 0 300 200"
                     style="width: 30ex;"   >
                    <rect x={0} y={0} width={100} height={200} 
                        style="fill: rgb(05,20,64); border: 0px;" />
                    <rect x={100} y={0} width={100} height={200} 
                        style="fill: rgb(255,255,255); border: 0px;" />
                    <rect x={200} y={0} width={100} height={200} 
                        style="fill: rgb(236,25,32); border: 0px;" />
                </svg>
                </div>
                Dans le drapeau français, il y a 1 morceau sur 3 
                qui est bleu. <br>Donc, la proportion de bleu dans le 
                drapeau est de {@html math("\\frac{1}{3}")}. <br>
                Pour la mettre sous forme de pourcentage, 
                je peux multiplier au numérateur et au dénominateur 
                par 100 :
                {@html display("\\dfrac{1}{3} = \\dfrac{1 \\times 100}{3 \\times 100} = \\dfrac{1 \\times 100}{3}~\\% \\approx 33,3 ~\\% = \\dfrac{33{,}3}{100}")}
            </Exemples>
        </SousPartie>
        <SousPartie numero={2} titre="Augmentation et diminution par un pourcentage">
            <Propriete>
                Pour augmenter une valeur de {@html math("x \\%")} :
                <ul>
                    <li>je calcule {@html math("x \\%")} et je l'ajoute à ma valeur de base</li>
                    <li><u>OU</u> je calcule {@html math("100+x \\%")} de la valeur</li>
                    <li><u>OU</u> je multiplie par {@html math("\\dfrac{100+x}{100}")}</li>
                </ul>
            </Propriete>
            <Exemples>
                {@html math('50 € + 20 \\%')} :
                <ul>
                    <li>{@html math("20\\% ~\\text{de}~ 50€ = \\underline{10€} \\longrightarrow 50€+\\underline{10€}=\\boxed{60€}")}</li>
                    <li>{@html math("120\\% ~\\text{de}~ 50€ = \\boxed{60€}")}</li>
                    <li>{@html math("50€ \\times \\dfrac{100+20}{100} = 50€ \\times 1{,}2 = \\boxed{60€}")}</li>
                </ul>
            </Exemples>
            <Propriete>
                Pour calculer le taux de variation entre une valeur de départ et une valeur d'arrivée : 
                {@html display("\\dfrac{\\text{valeur d'arrivée} - \\text{valeur de départ}}{\\text{valeur de départ}} \\times 100")}
            </Propriete>
            <Exemples>
                <ul>
                    <li>
                        Le nombre d'habitants d'une ville est passé de 4 000 à 5 000, ce qui
                        correspond à une augmentation de {@html math("\\dfrac{5000-4000}{4000} \\times 100 = 25 \\%")}
                    </li>
                    <li>
                        Une voiture était vendue neuve à 25 000 €. Aujourd'hui, elle ne vaut plus que 5 000 €.<br><br>
                        Calculons son taux de variation : {@html math("\\dfrac{5000 - 25000}{25000} \\times 100 = -80 \\%")}.<br>
                        Son prix a donc baissé de 80 %.
                    </li>
                </ul>
            </Exemples>
            <Propriete>
                {@html math("x \\% \\text{ de } y = y \\% \\text{ de } x")}
            </Propriete>
            <Exemples>
                <ul>
                    <li>
                        {@html math("12 \\% \\text{ de } 50 = 50 \\% \\text{ de } 12 = 6")}
                    </li>
                    <li>
                        {@html math("20 \\% \\text{ de } 25 = 25 \\% \\text{ de } 20 = 5")}
                    </li>
                </ul>
            </Exemples>
            <Demonstration>
                {@html display("x \\% \\text{ de } y = \\dfrac{x}{100} \\times y = \\dfrac{y}{100} \\times x = y \\% \\text{ de } x")}
            </Demonstration>
        </SousPartie>
    </Partie>
    <Partie numero={3} titre={"Proportionnalité"}>
        <SousPartie numero={1} titre="Grandeurs">
            <Definition>
                Une grandeur est une caractéristique quantifiable, associée à une unité.
            </Definition>
            <Exemples>
                Distance(m), Prix(€), Durée(s), Température(°C), Masse(kg), Énergie(J),
                Puissance(W), Tension électrique(V), etc.
            </Exemples>
            <Definition>
                Deux grandeurs sont proportionnelles s'il existe un coefficient de proportionnalité,
                c'est-à-dire un nombre qui, multiplié à l'une des grandeurs, donne l'autre.
            </Definition>
            <Exemples>
                <ul>
                    <li>
                        Le côté d'un carré et son périmètre sont proportionnels. (le coefficient vaut 4)
                    </li>
                    <li>
                        L'âge et la taille d'une personne ne sont pas proportionnels.<br>
                        En effet, si une personne a 10 ans et qu'elle mesure 1,20 m, cela ne signifie 
                        pas qu'à 20 ans, elle mesurera 2,40 m.
                    </li>
                </ul>
            </Exemples>
        </SousPartie>
    </Partie>
    <Partie numero={4} titre="Échelles">
        <Propriete>
            Si les longueurs (en mètres) sont multipliées par un facteur {@html math("k")}, <br>
            alors les aires (en mètres carrés) sont multipliées par {@html math("k^2")}, <br>
            et les volumes (en mètres cubes) sont multipliés par {@html math("k^3")}.
        </Propriete>
        <Exemples>
            <svg viewBox="-50 0 2300 1100" style="width: 50em;">
                <defs>
                    <rect id="rectangle" x="100" y="300" width={500} height={200} fill="none" stroke="black" stroke-width={5} />
                    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" />
                    </marker>
                </defs>
                
                <use href="#rectangle" />
                <text x="350" y="280" font-size="50px" font-family="Katex_Main" text-anchor="middle">5 cm</text>
                <text x="90" y="410" font-size="50px" font-family="Katex_Main" text-anchor="end">2 cm</text>
                <text x="350" y="410" font-size="50px" font-family="Katex_Main" text-anchor="middle">Aire : 10 cm²</text>

                <line x1="650" y1="400" x2="1000" y2="400" stroke="black" stroke-width={5} marker-end="url(#arrow)" stroke-dasharray="5,5" />
                <text x="825" y="450" font-size="40px" font-family="Katex_Main" text-anchor="middle">×2</text>
                <text x="825" y="380" font-size="40px" font-family="Katex_Main" text-anchor="middle">agrandissement</text>

                <use href="#rectangle" style="transform: scale(2) translate(500px,-200px);" />
                <text x="1700" y="180" font-size="50px" font-family="Katex_Main" text-anchor="middle">10 cm</text>
                <text x="1190" y="410" font-size="50px" font-family="Katex_Main" text-anchor="end">4 cm</text>
                <text x="1700" y="410" font-size="50px" font-family="Katex_Main" text-anchor="middle">Aire : 40 cm²</text>

                <text x="100" y="700" font-size="50px" text-anchor="start">Les longueurs ont été multipliées par 2,</text>
                <text x="100" y="770" font-size="50px" text-anchor="start">donc les aires ont été multipliées par 2² = 4.</text>
            </svg>
            <svg viewBox="0 0 2000 1200" style="width: 50em;">
                <defs>
                    <!-- cube vu de face -->
                    <g id="cube">
                        <rect x="100" y="200" width={500} height={500} fill="none" stroke="black" stroke-width={5} />
                        <line x1="100" y1="200" x2="180" y2="120" stroke="black" stroke-width={5} />
                        <line x1="600" y1="200" x2="680" y2="120" stroke="black" stroke-width={5} />
                        <line x1="600" y1="700" x2="680" y2="620" stroke="black" stroke-width={5} />
                        <line x1="100" y1="700" x2="180" y2="620" stroke="black" stroke-width={5} stroke-dasharray="5,5" />
                        <line x1="180" y1="120" x2="680" y2="120" stroke="black" stroke-width={5} />
                        <line x1="180" y1="620" x2="680" y2="620" stroke="black" stroke-width={5} stroke-dasharray="5,5" />
                        <line x1="180" y1="120" x2="180" y2="620" stroke="black" stroke-width={5} stroke-dasharray="5,5" />
                        <line x1="680" y1="120" x2="680" y2="620" stroke="black" stroke-width={5} />
                    </g>
                    <!-- Flèche -->
                    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" />
                    </marker>
                </defs>

                <use href="#cube" style="transform: translate(1300px, 100px);"/>
                <text x="600" y="45" font-size="50px" text-anchor="middle">|</text>
                <text x="600" y="100" font-size="50px" font-family="Katex_Main" text-anchor="middle">3 m</text>
                <text x="600" y="450" font-size="50px" font-family="Katex_Main" text-anchor="middle">Volume : 27 m³</text>

                <line x1="1050" y1="500" x2="1350" y2="500" stroke="black" stroke-width={5} marker-end="url(#arrow)" stroke-dasharray="5,5" />
                <text x="1200" y="550" font-size="40px" font-family="Katex_Main" text-anchor="middle">÷100</text>
                <text x="1200" y="480" font-size="40px" text-anchor="middle">réduction</text>

                <use href="#cube" style="transform: scale(1.5) translate(0px,-100px);" />
                <text x="1700" y="240" font-size="50px" text-anchor="middle">|</text>
                <text x="1700" y="190" font-size="50px" font-family="Katex_Main" text-anchor="middle">0,3 m</text>
                <text x="1700" y="500" font-size="40px" font-family="Katex_Main" text-anchor="middle">Volume : 0,027 m³</text>

                <text x="100" y="1100" font-size="50px" text-anchor="start">Les longueurs ont été divisées par 10,</text>
                <text x="100" y="1170" font-size="50px" text-anchor="start">donc les volumes ont été divisés par 10³ = 1 000.</text>
            </svg>
        </Exemples>
    </Partie>
</Chapitre>

<style>
    li {
        padding-top: 5px;
        padding-bottom: 5px;
    }
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        height: 18ex;
    }
</style>