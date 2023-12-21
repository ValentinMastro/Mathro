<script lang="ts">
	import Chapitre from "$lib/chapitrage/Chapitre.svelte";
	import Partie from "$lib/chapitrage/Partie.svelte";
	import SousPartie from "$lib/chapitrage/SousPartie.svelte";
	import Definition from "$lib/chapitrage/sections/Definition.svelte";
	import Exemples from "$lib/chapitrage/sections/Exemples.svelte";
    import Remarque from "$lib/chapitrage/sections/Remarque.svelte";

    import L from "$lib/chapitrage/sections/L.svelte";
	import Paragraphe from "$lib/chapitrage/sections/Paragraphe.svelte";
    import Katex from "svelte-katex";
</script>

<Chapitre numero={6} titre="Puissances" >
    <Partie numero={1} titre="Les puissances de 10">
        <SousPartie numero={1} titre="De la multiplication aux puissances">
            <Definition>
                Soit <L>n</L> un nombre entier positif non nul.<br>
                <Katex>10^n</Katex> (se lit « 10 puissance <L>n</L> ») est le produit de <L>n</L> facteurs égaux à 10.
            </Definition>
            <Exemples>
                <ul  style="list-style: none; columns: 2;">
                    <li><Katex>10^9 = 10 \times 10 \times 10 \times 10 \times 10 \times 10 \times 10 \times 10 \times 10 = 1~000~000~000</Katex></li>
                    <li><Katex>10^4 = 10 \times 10 \times 10 \times 10 = 10~000</Katex></li>
                    <li><Katex>10^5 = 10 \times 10 \times 10 \times 10 \times 10 = 100~000</Katex></li>
                    <li><Katex>10^2 = 10 \times 10 = 100</Katex></li>
                    <li><Katex>10^0 = 1</Katex></li>
                </ul>
            </Exemples>
            <Paragraphe couleur="red" nom="Formules">
                <ul style="list-style: none; columns: 4;">
                    <li><Katex>{`10^{-n} = \\dfrac{1}{10^n}`}</Katex></li>
                    <li><Katex>{`10^n \\times 10^p = 10^{n+p}`}</Katex></li>
                    <li><Katex>{`\\dfrac{10^n}{10^p} = 10^{n-p}`}</Katex></li>
                    <li><Katex>{`(10^n)^p = 10^{n \\times p}`}</Katex></li>
                </ul>
            </Paragraphe>
            <Exemples>
                <ul style="list-style: none; columns: 3;">
                    <li><Katex>{`10^{-2} = \\dfrac{1}{10^2} = \\dfrac{1}{100} = 0{,}01`}</Katex></li>
                    <li><Katex>{`10^2 \\times 10^3 = 10^{2+3} = 10^5 = 100~000`}</Katex></li>
                    <li><Katex>{`10^{3} \\times 10^{4} = 10^{3+4} = 10^7`}</Katex></li>
                    <li><Katex>{`\\dfrac{10^4}{10^1} = 10^{4-1} = 10^3 = 1~000`}</Katex></li>
                    <li><Katex>{`(10^2)^3 = 10^{2 \\times 3} = 10^6`}</Katex></li>
                    <li><Katex>{`(10^{-4})^{-2} = 10^{-4 \\times -2} = 10^8`}</Katex></li>
                </ul>
            </Exemples>
        </SousPartie>
        <SousPartie numero={2} titre="Écriture scientifique d'un nombre décimal">
            <Paragraphe couleur="red" nom="Méthode">
                Soit <L>n</L> un nombre entier positif.<br>
                <ul>
                    <li>Multiplier un nombre par <Katex>10^n</Katex>, c'est déplacer la virgule de <L>n</L> chiffres vers la droite.</li>
                    <li>Multiplier un nombre par <Katex>{"10^{-n}"}</Katex>, c'est déplacer la virgule de <L>n</L> chiffres vers la gauche.</li>
                </ul>
            </Paragraphe>
            <Remarque>
                Multiplier par <Katex>{"10^{-n}"}</Katex> revient à diviser par <Katex>10^n</Katex>.
            </Remarque>
            <Exemples>
                <ul style="list-style: square; columns: 4;">
                    <li>
                        <Katex>{`
                            1{,}234 \\times 10^2 = 123{,}4 
                        `}</Katex>
                    </li>
                    <li>
                        <Katex>{`
                            96{,}76 \\times 10^{-3} = 0{,}096~76
                        `}</Katex>
                    </li>
                    <li>
                        <Katex>{`
                            39{,}426~49 \\times 10^4 = 394~264{,}9    
                        `}</Katex>
                    </li>
                    <li>
                        <Katex>{`
                            0{,}003~825 \\times 10^{-1} = 0{,}000~382~5
                        `}</Katex>
                    </li>
                    <li>
                        <Katex>{`
                            1{,}927~4 \\times 10^5 = 192~740
                        `}</Katex>
                    </li>
                    <li>
                        <Katex>{`
                            96{,}76 \\times 10^{-3} = 0{,}096~76
                        `}</Katex>
                    </li>
                </ul>
            </Exemples>
            <Definition>
                L'écriture scientifique d'un nombre décimal est <i>l'unique</i> écriture de la forme <Katex>{`a \\times 10^n`}</Katex> où :
                <ul>
                    <li><L>a</L> est un nombre décimal tel que <Katex>1 \leq a \lt 10</Katex></li>
                    <li><L>n</L> est un entier relatif</li>
                </ul>
            </Definition>
            <Exemples>
                <ul style="columns: 3;">
                    <li>
                        <Katex>{`
                            120~546 = 1{,}205~46 \\times 10^5
                        `}</Katex>
                    </li>
                    <li>
                        <Katex>{`
                            0{,}436 = 4{,}36 \\times 10^{-1}
                        `}</Katex>
                    </li>
                    <li>
                        <Katex>{`
                            540~000 = 5{,}4 \\times 10^5
                        `}</Katex>
                    </li>
                    <li>
                        <Katex>{`
                            0{,}008~76 = 8{,}76 \\times 10^{-3}
                        `}</Katex>
                    </li>
                    <li>
                        <Katex>{`
                            0{,}071~5 = 7{,}15 \\times 10^{-2}
                        `}</Katex>
                    </li>
                    <li>
                        <Katex>{`
                            12{,}34 = 1{,}234 \\times 10^1
                        `}</Katex>
                    </li>
                    <li>
                        <Katex>{`
                            0{,}000~16 = 1{,}6 \\times 10^{-4}
                        `}</Katex>
                    </li>
                    <li>
                        <Katex>{`
                            6{,}725 = 6{,}725 \\times 10^0
                        `}</Katex>
                    </li>
                </ul>
            </Exemples>
        </SousPartie>
        <SousPartie titre="Système International (SI)" numero={3}>
            <Paragraphe couleur="black" nom="Tableau des préfixes du SI">
                <table id="SI_prefixes">
                    <tr>
                        <td colspan="3">Milliards</td>
                        <td colspan="3">Millions</td>
                        <td colspan="3">Milliers</td>
                        <td colspan="3">Unités</td>
                        <td colspan="3">Millièmes</td>
                        <td colspan="3">Millionièmes</td>
                        <td colspan="3">Milliardièmes</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>giga</td>
                        <td></td>
                        <td></td>
                        <td>méga</td>
                        <td></td>
                        <td></td>
                        <td>kilo</td>
                        <td>hecto</td>
                        <td>déca</td>
                        <td></td>
                        <td>déci</td>
                        <td>centi</td>
                        <td>milli</td>
                        <td></td>
                        <td></td>
                        <td>micro</td>
                        <td></td>
                        <td></td>
                        <td>nano</td>
                    </tr>
                    <tr>
                        <td></td>
                    </tr>
                </table>
            </Paragraphe>
        </SousPartie>
    </Partie>
</Chapitre>