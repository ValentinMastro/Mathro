<script>
    import { Chapitre, Partie, SousPartie } from "$lib/chapitrage/all_chapitrages";
    import { Definition, Exemples, Paragraphe } from "$lib/chapitrage/sections/all_sections";
    import { math, display } from 'mathlifier';
</script>


<Chapitre numero={4} titre="Calcul littéral">
    <Partie numero={1} titre="Expression littérale" >
        <SousPartie numero={1} titre="Écriture">
            <Definition>
                Une expression littérale est un ensemble d'opérations contenant des nombres et des lettres.
            </Definition>
            <Definition>
                Dans une expression littérale, une lettre représente un nombre, cette lettre est appelée <i>une variable</i>.
            </Definition>
            <Exemples>
                {@html math("3 \\times a + 2 \\times b")} est une expression littérale contenant 2 variables : {@html math("a")} et {@html math("b")}.
                Elle est composée de 3 opérations : 2 multiplications et 1 addition.
            </Exemples>
            <Definition>
                Évaluer une expression signifie remplacer chacune des variables par une valeur numérique donnée.
            </Definition>
            <Exemples>
                Évaluer l'expression {@html math("3 \times a + 8")} en {@html math("a=2")} signifie remplacer {@html math("a")} par 2, ce qui donne : 
                {@html math("3 \times 2 + 8 = 6 + 8 = 14")}
            </Exemples>
            <Paragraphe couleur="red" nom="Convention d'écriture">
                Le symbole de multiplication est facultatif : 
                <ul>
                    <li>entre deux variables : {@html math("ab")} signifie {@html math("a \\times b")}</li>
                    <li>entre une variable et un nombre : {@html math('3a')} signifie {@html math("3 \\times a")}</li>
                    <li>avec une parenthèse : {@html math("3(a+2)")} signifie {@html math("3 \\times (a+2)")}</li>
                </ul>
            </Paragraphe>
        </SousPartie>
        <SousPartie numero={2} titre="Somme et produit">
            <Definition>
                Quand la dernière opération d'une expression littérale est :
                <ul>
                    <li>une addition ou une soustraction, on dit que l'expression est une <i>somme</i>.</li>
                    <li>une multiplication ou une division, on dit que l'expression est un <i>produit</i>.</li>
                </ul>
            </Definition>
            <Exemples>
                <ul>
                    <li>{@html math("3 \\times a + 2 \\times b")} est une somme.</li>
                    <li>{@html math("3(a + b)")} est un produit.</li>
                </ul>
            </Exemples>
        </SousPartie>
        <SousPartie numero={3} titre="Égalité d'expressions">
            <Definition>
                Deux expressions littérales sont égales lorsque, <i>quelques soient les valeurs des variables choisies</i>, elles donnent le même résultat.
            </Definition>
            <Exemples>
                <ul>
                    <li>
                        {@html math("a^2 + 3a")} et {@html math("a(a+3)")} sont égales.
                    </li>
                    <li>
                        {@html math("a^2")} et {@html math("2a")} ne sont pas égales.
                        En effet, si on choisit {@html math("a=3")} :
                        <ul>
                            <li>{@html math("a^2 = 3^2 = 9")}</li>
                            <li>{@html math("2a = 2 \times 3 = 6")}</li>
                        </ul>
                    </li>
                </ul>
            </Exemples>
        </SousPartie>
    </Partie>
    <Partie numero={2} titre="Développer, factoriser, réduire">
        <Definition>
            Développer une expression littérale, c'est transformer un produit en une somme.
        </Definition>
        <Definition>
            Factoriser une expression littérale, c'est transformer une somme en un produit.
        </Definition>
        <SousPartie numero={1} titre="Distributivité">
            <Paragraphe couleur="red" nom="Règle">
                Soient a, b, k, trois nombres : 
                {@html display("k (a + b) = ka + kb")}
            </Paragraphe>
            <Exemples>
                <ul class="no_marker">
                    <li>
                        {@html math(`
                            \\begin{aligned}
                                x(x+4) &= x \\times x + x \\times 4 \\\\
                                        &= x^2 + 4x
                            \\end{aligned}
                        `)}
                    </li>
                    <li>
                        {@html math(`
                            \\begin{aligned}
                                3(2x+5) &= 3 \\times 2x + 3 \\times 5 \\\\
                                        &= 6x + 15
                            \\end{aligned}
                        `)}
                    </li>
                    <li>
                        {@html math(`
                            \\begin{aligned}
                                2x(x+3) &= 2x \\times x + 2x \\times 3 \\\\
                                        &= 2x^2 + 6x
                            \\end{aligned}
                        `)}
                    </li>
                    <li>
                        {@html math(`
                            \\begin{aligned}
                                2x + xy &= 2 {\\textcircled x} + {\\textcircled x} y \\\\
                                &= x (2 + y)
                            \\end{aligned}
                        `)}
                    </li>
                    <li>
                        {@html math(`
                            \\begin{aligned}
                                3x + 15 &= 3x + 3 \\times 5 \\\\
                                        &= {\\textcircled 3} x + {\\textcircled 3} \\times 5 \\\\
                                        &= 3 (x + 5)
                            \\end{aligned}
                        `)}
                    </li>
                </ul>
            </Exemples>
        </SousPartie>
        <SousPartie numero={2} titre="Double distributivité">
            <Paragraphe couleur="red" nom="Règle">
                Soient a, b, c, d, quatre nombres : 
                {@html display("(a + b) (c + d) = ac + ad + bc + b d")}
            </Paragraphe>
            <Exemples>
                <ul class="no_marker">
                    <li>
                        {@html math(`
                            \\begin{aligned}
                                (2x+3)(4+5x) &= 2x \\times 4 + 2x \\times 5x + 3 \\times 4 + 3 \\times 5x \\\\
                                                &= 8x + 10x^2 + 12 + 15x \\\\
                                                &= 10x^2 + 23x + 12
                            \\end{aligned}
                        `)}
                    </li>
                    <li>
                        {@html math(`
                            \\begin{aligned}
                            3(x+12) + 2x(x+12) &= 3 \\fbox{(x+12)} + 2x \\fbox{(x+12)} \\\\
                                                &= (x+12)(3+2x)
                            \\end{aligned}
                        `)}
                    </li>
                    <li>
                        {@html math(`
                            \\begin{aligned}
                                (-4x+7)(-2+2x)  &= (-4x) \\times (-2) + (-4x) \\times 2x + 7 \\times (-2) + 7 \\times 2x \\\\
                                                &= 8x + (-8x^2) + (-14) + 14x \\\\
                                                &= -8x^2 + 22x - 14
                            \\end{aligned}
                        `)}
                    </li>
                </ul>
            </Exemples>
        </SousPartie>
    </Partie>
</Chapitre>

<style>
    .no_marker {
        list-style-type: none;
    }
</style>