<script>
    import { Chapitre, Partie, SousPartie } from "$lib/chapitrage/all_chapitrages";
    import { Definition, Exemples, Paragraphe } from "$lib/chapitrage/sections/all_sections";
</script>
<Chapitre numero={7} titre="Multiplication">
    <Partie numero={1} titre="Multiplier et diviser par 1, 10, 100, 1 000, etc.">
        <Paragraphe couleur="red" nom="Règle de calcul" > 
            Pour multiplier un nombre par 10, 100, 1 000, etc., on décale la virgule 
            <b>vers la droite</b> en fonction du nombre de zéros.
        </Paragraphe>
        <Exemples>
            <ul style="font-family: Katex_Main;">
                <li>
                    3,14 × 10 = 31,4
                </li>
                <li>
                    7,2 × 100 = 720
                </li>
                <li>
                    32,456 78 × 10 000 = 324 567,8
                </li>
            </ul>
        </Exemples>
        <Paragraphe couleur="red" nom="Règle de calcul" > 
            Pour diviser un nombre par 10, 100, 1 000, etc., on décale la virgule 
            <b>vers la gauche</b> en fonction du nombre de zéros.
        </Paragraphe>
        <Exemples>
            <ul style="font-family: Katex_Main;">
                <li>
                    31,4 ÷ 10 = 3,14
                </li>
                <li>
                    720 ÷ 100 = 7,2
                </li>
                <li>
                    324 567,8 ÷ 10 000 = 32,456 78
                </li>
            </ul>
        </Exemples>
    </Partie>
    <Partie numero={2} titre="Conversion d'unités">
        <Paragraphe couleur="black" nom="Les préfixes du Système International (SI)">
            <ul id="prefixes_SI">
                <li>kilo (k) : un millier ⇒ × 1 000 </li>
                <li>hecto (h) : une centaine ⇒ × 100 </li>
                <li>déca (da) : une dizaine ⇒ × 10 </li>
                <li>déci (d) : un dixième ⇒ ÷ 10 </li>
                <li>centi (c) : un centième ⇒ ÷ 100 </li>
                <li>milli (m) : un millième ⇒ ÷ 1 000 </li>
            </ul>
        </Paragraphe>

        <table id="tableau_SI" style="color: black;">
            <tr>
                <th>Préfixe</th>
                <th>kilo</th>
                <th>hecto</th>
                <th>déca</th>
                <th>unité</th>
                <th>déci</th>
                <th>centi</th>
                <th>milli</th>
            </tr>
            <tr>
                <td>distance (en mètre)</td>
                <td>km</td>
                <td>hm</td>
                <td>dam</td>
                <td>m</td>
                <td>dm</td>
                <td>cm</td>
                <td>mm</td>
            </tr>
            <tr>
                <td>masse (en kilogramme)</td>
                <td>kg</td>
                <td>hg</td>
                <td>dag</td>
                <td>g</td>
                <td>dg</td>
                <td>cg</td>
                <td>mg</td>
            </tr>
            <tr>
                <td>temps (en seconde)</td>
                <td>ks</td> 
                <td>hs</td>
                <td>das</td>
                <td>s</td>
                <td>ds</td>
                <td>cs</td>
                <td>ms</td>
            </tr>
            <tr>
                <td>température (en kelvin)</td>
                <td>kK</td>
                <td>hK</td>
                <td>daK</td>
                <td>K</td>
                <td>dK</td>
                <td>cK</td>
                <td>mK</td>
            </tr>
            <tr>
                <td>intensité électrique (en ampère)</td>
                <td>kA</td>
                <td>hA</td>
                <td>daA</td>
                <td>A</td>
                <td>dA</td>
                <td>cA</td>
                <td>mA</td>
            </tr>
            <tr>
                <td>intensité lumineuse (en candela)</td>
                <td>kcd</td>
                <td>hcd</td>
                <td>dacd</td>
                <td>cd</td>
                <td>dcd</td>
                <td>ccd</td>
                <td>mcd</td>
            </tr>
            <tr>
                <td>quantité de matière (en mole)</td>
                <td>kmol</td>
                <td>hmol</td>
                <td>damol</td>
                <td>mol</td>
                <td>dmol</td>
                <td>cmol</td>
                <td>mmol</td>
            </tr>
        </table>
        <SousPartie numero={1} titre="Convertir en remplaçant les préfixes">
            <Exemples>
                <ul style="font-family: Katex_Main;">
                    <li>
                        3,14 km = 3,14 ×<span style="color: red;">1 km</span> = 3,14 × <span style="color: red;" >1 000 m</span> = 3 140 m
                    </li>
                    <li>
                        7,2 hm = 7,2 × <span style="color: red;">1 hm</span> = 7,2 × <span style="color: red;">100 m</span> = 720 m
                    </li>
                    <li>
                        32,456 78 dam = 32,456 78 × <span style="color: red;">1 dam</span> = 32,456 78 × <span style="color: red;">10 m</span> = 324,567 8 m
                    </li>
                </ul>
            </Exemples>
        </SousPartie>
        <SousPartie numero={2} titre="Convertir en utilisant le tableau">
            <table class="tableau_conversion" style="color: black;">
                <tr>
                    <th>km</th>
                    <th>hm</th>
                    <th>dam</th>
                    <th>m</th>
                    <th>dm</th>
                    <th>cm</th>
                    <th>mm</th>
                </tr>
                <tr>
                    <td></td>
                    <td>0,</td>
                    <td>0</td>
                    <td>3</td>
                    <td>2</td>
                    <td>7</td>
                    <td></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>5</td>
                    <td>0</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <Exemples>
                <ul style="font-family: Katex_Main;">
                    <li>
                        327 cm = 0,032 7 hm
                    </li>
                    <li>
                        4,5 km = 450 dam
                    </li>
                </ul>
            </Exemples>
        </SousPartie>
    </Partie>
    <Partie numero={3} titre="Multiplication décimale">
        <Definition>
            La multiplication est une opération ayant pour opérateur ×.<br>
            Les opérandes (les nombres que l'on multiplie) sont les <i>facteurs</i>,
            et le résultat est le <i>produit</i>.
        </Definition>
        <Exemples>
            <svg viewBox="900 0 1250 450" class="schema">
                <text 
                    x={1500} y={150}
                    font-family="Katex_Main"
                    font-size="130px"
                    fill="black"
                    text-anchor="middle"
                    alignment-baseline="middle"
                    >
                    3 × 7 = 21
                </text>
                <circle cx={1235} cy={110} r={65} stroke="green" fill="none" stroke-width={4} />
                <circle cx={1470} cy={110} r={65} stroke="green" fill="none" stroke-width={4} />
                <rect x={1650} y={50} width={160} height={130} stroke="red" fill="none" stroke-width={4} />
                <text 
                    x={1350} y={250}
                    font-family="Katex_Main"
                    font-size="70px"
                    fill="green"
                    text-anchor="middle"
                    alignment-baseline="middle"
                    >
                    facteurs
                </text>
                <text 
                    x={1730} y={250}
                    font-family="Katex_Main"
                    font-size="70px"
                    fill="red"
                    text-anchor="middle"
                    alignment-baseline="middle"
                    >
                    produit
                </text>
                <text 
                    x={1500} y={400}
                    font-family="Katex_Main"
                    font-size="70px"
                    fill="black"
                    text-anchor="middle"
                    alignment-baseline="middle"
                    >
                    Le produit de 3 par 7 vaut 21.
                </text>
            </svg>
        </Exemples>
        <Paragraphe couleur="red" nom="Règle de calcul" > 
            Le produit de deux nombres décimaux a autant de chiffres après la virgule 
            que les deux facteurs.
        </Paragraphe>
        <Exemples>
            <svg viewBox="900 0 1250 450" class="schema">
                <text 
                    x={1500} y={150}
                    font-family="Katex_Main"
                    font-size="130px"
                    fill="black"
                    text-anchor="middle"
                    alignment-baseline="middle"
                    >
                    3,14 × 7,2 = 22,608
                </text>
                <!-- On souligne les chiffres après la virgule -->
                <line x1="1060" y1="180" x2="1200" y2="180" stroke="red" stroke-width="4" />
                <line x1="1450" y1="180" x2="1520" y2="180" stroke="red" stroke-width="4" />
                <line x1="1860" y1="180" x2="2040" y2="180" stroke="red" stroke-width="4" />
                <text 
                    x={770} y={250}
                    font-family="Katex_Main"
                    font-size="45px"
                    fill="red"
                    >
                    <tspan dx="11ex">2 chiffres </tspan>
                    <tspan dx="-12ex" dy="1em">après la virgule</tspan>
                    <tspan dx="6ex" dy="-1em">1 chiffre</tspan>
                    <tspan dx="-12ex" dy="1em">après la virgule</tspan>
                    <tspan dx="9ex" dy="-1em">2+1=3 chiffres</tspan>
                    <tspan dx="-15ex" dy="1em">après la virgule</tspan>
                </text>
            </svg>
        </Exemples>
    </Partie>
</Chapitre>

<style>
    table {
        border-collapse: collapse;
        border: 1px solid black;
        margin: auto auto;
        width: 90%;
    }
    table > tr {
        border: 1px solid black;
        margin-top: 10px;
    }
    table > tr > th {
        border: 1px solid black;
        padding: 5px;
    }
    table > tr > td {
        border: 1px solid black;
        padding: 5px;
        text-align: center;
    }
    .tableau_conversion {
        --taille-conversion: 40%;
        width: var(--taille-conversion);
    }
    .tableau_conversion > tr {
        border: 0;
    }
    .tableau_conversion > tr > th {
        width: calc(var(--taille-conversion)/ 7);
    }
    .tableau_conversion > tr > td {
        text-align: center;
        border-top: 0;
        border-bottom: 0;
    }
    #prefixes_SI {
        font-family: Katex_Main; 
        columns: 2;
    }

    @media (max-aspect-ratio: 1) {
        #prefixes_SI {
            columns: 1;
        }
        #tableau_SI {
            font-size: 12px;
        }
    }

    @media (min-aspect-ratio: 1) {
        .schema {
            width: 35%;
            padding-left: 32.5%;
        }
    }
</style>