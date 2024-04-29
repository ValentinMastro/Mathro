<script lang="ts">
    import { Chapitre, Partie, SousPartie } from "$lib/chapitrage/all_chapitrages";
    import { Definition, Exemples, Remarque, Propriete, Paragraphe } from "$lib/chapitrage/sections/all_sections";
	import UnitesSi from "$lib/module/UnitesSI.svelte";
	import { math, display } from "mathlifier";
</script>

<Chapitre numero={6} titre="Puissances" >
    <Partie numero={1} titre="Les puissances de 10">
        <SousPartie numero={1} titre="De la multiplication aux puissances">
            <Definition>
                Soit {@html math("n")} un nombre entier positif non nul.<br>
                {@html math("10^n")} (se lit « 10 puissance {@html math("n")} ») est le produit de {@html math("n")} facteurs égaux à 10.
            </Definition>
            <Exemples>
                <ul>
                    <li>{@html math("10^9 = 10 \\times 10 \\times 10 \\times 10 \\times 10 \\times 10 \\times 10 \\times 10 \\times 10 = 1~000~000~000")}</li>
                    <li>{@html math("10^4 = 10 \\times 10 \\times 10 \\times 10 = 10~000")}</li>
                    <li>{@html math("10^5 = 10 \\times 10 \\times 10 \\times 10 \\times 10 = 100~000")}</li>
                    <li>{@html math("10^2 = 10 \\times 10 = 100")}</li>
                    <li>{@html math("10^0 = 1")}</li>
                </ul>
            </Exemples>
            <Paragraphe couleur="red" nom="Formules">
                <ul style="list-style: none; columns: 4;">
                    <li>{@html math(`10^{-n} = \\dfrac{1}{10^n}`)}</li>
                    <li>{@html math(`10^n \\times 10^p = 10^{n+p}`)}</li>
                    <li>{@html math(`\\dfrac{10^n}{10^p} = 10^{n-p}`)}</li>
                    <li>{@html math(`(10^n)^p = 10^{n \\times p}`)}</li>
                </ul>
            </Paragraphe>
            <Exemples>
                <ul class="margin_between_items" style="columns: 3;">
                    <li>{@html math(`10^{-2} = \\dfrac{1}{10^2} = \\dfrac{1}{100} = 0{,}01`)}</li>
                    <li>{@html math(`10^2 \\times 10^3 = 10^{2+3} = 10^5 = 100~000`)}</li>
                    <li>{@html math(`10^{3} \\times 10^{4} = 10^{3+4} = 10^7`)}</li>
                    <li>{@html math(`\\dfrac{10^4}{10^1} = 10^{4-1} = 10^3 = 1~000`)}</li>
                    <li>{@html math(`(10^2)^3 = 10^{2 \\times 3} = 10^6`)}</li>
                    <li>{@html math(`(10^{-4})^{-2} = 10^{-4 \\times -2} = 10^8`)}</li>
                </ul>
            </Exemples>
        </SousPartie>
        <SousPartie numero={2} titre="Écriture scientifique d'un nombre décimal">
            <Paragraphe couleur="red" nom="Méthode">
                Soit {@html math("n")} un nombre entier positif.<br>
                <ul>
                    <li>Multiplier un nombre par {@html math("10^n")}, c'est déplacer la virgule de {@html math("n")} chiffres vers la droite.</li>
                    <li>Multiplier un nombre par {@html math("10^{-n}")}, c'est déplacer la virgule de {@html math("n")} chiffres vers la gauche.</li>
                </ul>
            </Paragraphe>
            <Remarque>
                Multiplier par {@html math("10^{-n}")} revient à diviser par {@html math("10^n")}.
            </Remarque>
            <Exemples>
                <ul class="margin_between_items" style="list-style: square; columns: 3;">
                    <li>
                        {@html math(`
                            1{,}234 \\times 10^2 = 123{,}4 
                        `)}
                    </li>
                    <li>
                        {@html math(`
                            96{,}76 \\times 10^{-3} = 0{,}096~76
                        `)}
                    </li>
                    <li>
                        {@html math(`
                            39{,}426~49 \\times 10^4 = 394~264{,}9    
                        `)}
                    </li>
                    <li>
                        {@html math(`
                            0{,}003~825 \\times 10^{-1} = 0{,}000~382~5
                        `)}
                    </li>
                    <li>
                        {@html math(`
                            1{,}927~4 \\times 10^5 = 192~740
                        `)}
                    </li>
                    <li>
                        {@html math(`
                            96{,}76 \\times 10^{-3} = 0{,}096~76
                        `)}
                    </li>
                </ul>
            </Exemples>
            <Definition>
                L'écriture scientifique d'un nombre décimal est <i>l'unique</i> écriture de la forme {@html math(`a \\times 10^n`)} où :
                <ul>
                    <li>{@html math("a")} est un nombre décimal tel que {@html math('1 \\leq a \\lt 10')}</li>
                    <li>{@html math("n")} est un entier relatif</li>
                </ul>
            </Definition>
            <Exemples>
                <ul style="columns: 3;">
                    <li>
                        {@html math(`
                            120~546 = 1{,}205~46 \\times 10^5
                        `)}
                    </li>
                    <li>
                        {@html math(`
                            0{,}436 = 4{,}36 \\times 10^{-1}
                        `)}
                    </li>
                    <li>
                        {@html math(`
                            540~000 = 5{,}4 \\times 10^5
                        `)}
                    </li>
                    <li>
                        {@html math(`
                            0{,}008~76 = 8{,}76 \\times 10^{-3}
                        `)}
                    </li>
                    <li>
                        {@html math(`
                            0{,}071~5 = 7{,}15 \\times 10^{-2}
                        `)}
                    </li>
                    <li>
                        {@html math(`
                            12{,}34 = 1{,}234 \\times 10^1
                        `)}
                    </li>
                    <li>
                        {@html math(`
                            0{,}000~16 = 1{,}6 \\times 10^{-4}
                        `)}
                    </li>
                    <li>
                        {@html math(`
                            6{,}725 = 6{,}725 \\times 10^0
                        `)}
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
                        <td>10<sup>11</sup></td>
                        <td>10<sup>10</sup></td>
                        <td>10<sup>9</sup></td>
                        <td>10<sup>8</sup></td>
                        <td>10<sup>7</sup></td>
                        <td>10<sup>6</sup></td>
                        <td>10<sup>5</sup></td>
                        <td>10<sup>4</sup></td>
                        <td>10<sup>3</sup></td>
                        <td>10<sup>2</sup></td>
                        <td>10<sup>1</sup></td>
                        <td>10<sup>0</sup></td>
                        <td>10<sup>-1</sup></td>
                        <td>10<sup>-2</sup></td>
                        <td>10<sup>-3</sup></td>
                        <td>10<sup>-4</sup></td>
                        <td>10<sup>-5</sup></td>
                        <td>10<sup>-6</sup></td>
                        <td>10<sup>-7</sup></td>
                        <td>10<sup>-8</sup></td>
                        <td>10<sup>-9</sup></td>
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
                        <td></td>
                        <td>G</td>
                        <td></td>
                        <td></td>
                        <td>M</td>
                        <td></td>
                        <td></td>
                        <td>k</td>
                        <td>h</td>
                        <td>da</td>
                        <td></td>
                        <td>d</td>
                        <td>c</td>
                        <td>m</td>
                        <td></td>
                        <td></td>
                        <td>µ</td>
                        <td></td>
                        <td></td>
                        <td>n</td>
                    </tr>
                </table>
            </Paragraphe>
            <UnitesSi />
            <Paragraphe couleur="red" nom="Méthode">
                Comment convertir une unité en une autre en utilisant les préfixes du SI ?
            </Paragraphe>
            <Exemples>
                <ul id="exemples_convertion">
                    <li>
                        <u title="Distance entre Meaux et Sucy-en-Brie à vol d'oiseau">Convertir 33,51 km en m :</u>
                        {@html display(`
                            \\begin{align*}
                                33,51 \\color{red} \\text{ km} \\color{blue} &= 33,51 \\color{red}\\times 10^3 \\text{ m} \\color{blue} \\\\
                                &= \\color{green} 33,51 \\color{blue} \\times 10^3 \\text{ m} \\\\
                                &= \\color{green} 3,351 \\times 10^1 \\color{blue} \\times 10^3 \\text{ m} \\\\
                                &= 3,351 \\times 10^{1+3} \\text{ m} \\\\
                                &= 3,351 \\times 10^4 \\text{ m} \\\\
                            \\end{align*}
                        `)}
                    </li>
                    <li>
                        <u title="Température très basse, proche du zéro absolu">Convertir 50 mK en K :</u>
                        {@html display(`
                            \\begin{align*}
                                50 \\color{red} \\text{ mK} \\color{blue} &= 50 \\color{red}\\times 10^{-3} \\text{ K} \\color{blue} \\\\
                                &= \\color{green} 50 \\color{blue} \\times 10^{-3} \\text{ K} \\\\
                                &= \\color{green} 5 \\times 10^1 \\color{blue} \\times 10^{-3} \\text{ K} \\\\
                                &= 5 \\times 10^{1+(-3)} \\text{ K} \\\\
                                &= 5 \\times 10^{-2} \\text{ K} \\\\
                            \\end{align*}
                        `)}
                    </li>
                    <li>
                    <u title="hauteur de la Tour Eiffel">Convertir 330 m en hm</u>
                        {@html display(`
                            \\begin{align*}
                                330 \\color{red} \\text{ m} \\color{blue} &= 330 \\color{red}\\times 10^{-2} \\text{ hm} \\color{blue} \\\\
                                &= \\color{green} 330 \\color{blue} \\times 10^{-2} \\text{ hm} \\\\
                                &= \\color{green} 3{,}3 \\times 10^2 \\color{blue} \\times 10^{-2} \\text{ hm} \\\\
                                &= 3{,}3 \\times 10^{2+(-2)} \\text{ hm} \\\\
                                &= 3{,}3 \\times 10^0 \\text{ hm} \\\\
                            \\end{align*}
                        `)}
                    </li>
                    <li>
                        <u title="Pression atmosphérique">Convertir 101 300 Pa en hPa</u>
                        {@html display(`
                            \\begin{align*}
                                101~300 \\color{red} \\text{ Pa} \\color{blue} &= 101~300 \\color{red}\\times 10^{-2} \\text{ hPa} \\color{blue} \\\\
                                &= \\color{green} 101~300 \\color{blue} \\times 10^{-2} \\text{ hPa} \\\\
                                &= \\color{green} 1~013 \\color{blue} \\times 10^2 \\color{blue} \\times 10^{-2} \\text{ hPa} \\\\
                                &= 1~013 \\color{blue} \\times 10^{2+(-2)} \\text{ hPa} \\\\
                                &= 1~013 \\color{blue} \\times 10^0 \\text{ hPa} \\\\
                                &= 1~013 \\text{ hPa} \\\\
                            \\end{align*}
                        `)}
                    </li>
                    <li>
                        <u title="Puissance électrique d'un réacteur nucléaire">Convertir 9 &times; 10<sup>11</sup> mW en GW</u>
                        {@html display(`
                            \\begin{align*}
                                9 \\times 10^{11} \\color{red} \\text{ mW} \\color{blue} &= 9 \\times 10^{11} \\color{red}\\times 10^{-3} \\text{ W} \\color{blue} \\\\
                                &= 9 \\times 10^{11} \\color{blue} \\times 10^{-3} \\color{green} \\text{ W} \\color{blue} \\\\
                                &= 9 \\times 10^{11} \\color{blue} \\times 10^{-3} \\color{green} \\times 10^{-9} \\text{ GW} \\color{blue} \\\\
                                &= 9 \\times 10^{11+(-3)+(-9)} \\text{ GW} \\\\
                                &= 9 \\times 10^{-1} \\text{ GW} \\\\
                            \\end{align*}
                        `)}
                    </li>
                    <li>
                        <u title="rayon d'un proton">Convertir 0,000 000 84 nm en km</u>
                        {@html display(`
                            \\begin{align*}
                                0{,}000~000~84 \\color{red} \\text{ nm} \\color{blue} &= 0{,}000~000~84 \\color{red}\\times 10^{-9} \\text{ m} \\color{blue} \\\\
                                &= \\color{green} 0{,}000~000~84 \\color{blue} \\times 10^{-9} \\text{ m} \\\\
                                &= \\color{green} 8{,}4 \\times 10^{-7} \\color{blue} \\times 10^{-9} \\color{red} \\text{ m} \\color{blue} \\\\
                                &= 8{,}4 \\times 10^{-7} \\color{blue} \\times 10^{-9} \\color{red} \\times 10^{-3} \\text{ km} \\color{blue} \\\\
                                &= 8{,}4 \\times 10^{-7+(-9)+(-3)} \\text{ km} \\\\
                                &= 8{,}4 \\times 10^{-19} \\text{ km} \\\\
                            \\end{align*}
                        `)}
                    </li>
                </ul>
            </Exemples>
        </SousPartie>
    </Partie>
    <Partie numero={2} titre="Puissances à base quelconque">
        <Definition>
            Soit {@html math("a")} un nombre réel non nul et {@html math("n")} un nombre entier relatif.<br>
            {@html display(`
                a^n = \\underbrace{a \\times a \\times \\cdots \\times a}_{n \\text{ facteurs}}
            `)}
            <l>a</l> est la <i>base</i> de la puissance et {@html math("n")}est son <i>exposant</i>.
        </Definition>
        <Remarque>
            Pour n'importe quelle base {@html math("a")}, on a {@html math("a^0=1")}.
        </Remarque>
        <Propriete>
            Pour tout nombre {@html math("x")}, {@html math("x^2")} est positif.
        </Propriete>
        <Propriete>
            Si {@html math("x")} est un nombre négatif, {@html math("x^n")} est 
            <ul>
                <li>positif si {@html math("n")} est un entier pair</li>
                <li>négatif si {@html math("n")} est un entier impair</li>
            </ul>
        </Propriete>
        <Exemples>
            <ul>
                <li>
                    {@html math(`(-2)^5 = -32`)} est négatif car 5 est impair.
                </li>
                <li>
                    {@html math(`(-6)^6 = 46656`)} est positif car 6 est pair.
                </li>
                <li>
                    {@html math(`(-3)^{10} = 59049`)} est positif car 10 est pair.
                </li>
            </ul>
        </Exemples>
    </Partie>
</Chapitre>

<style>
    #SI_prefixes {
        border-collapse: collapse;
        width: 100%;
        text-align: center;
    }

    #SI_prefixes td {
        border: 1px solid #999999;
        padding: 8px;
    }

    #SI_prefixes tr:nth-child(even){
        background-color: #dddddd;
    }

    #exemples_convertion {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    #exemples_convertion li::marker {
        content: "➜ ";
    }

    .margin_between_items li + li {
        margin-top: 1em;
    }
</style>