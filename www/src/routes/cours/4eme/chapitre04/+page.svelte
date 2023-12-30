<script>
    import { Chapitre, Partie, SousPartie } from "$lib/chapitrage/all_chapitrages";
    import { Definition, Exemples, Paragraphe } from "$lib/chapitrage/sections/all_sections";
	import Katex from "svelte-katex";
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
                <Katex>3 \times a + 2 \times b</Katex> est une expression littérale contenant 2 variables : <Katex>a</Katex> et <Katex>b</Katex>.
                Elle est composée de 3 opérations : 2 multiplications et 1 addition.
            </Exemples>
            <Definition>
                Évaluer une expression signifie remplacer chacune des variables par une valeur numérique donnée.
            </Definition>
            <Exemples>
                Évaluer l'expression <Katex>3 \times a + 8</Katex> en <Katex>a=2</Katex> signifie remplacer <Katex>a</Katex> par <Katex>2</Katex>, ce qui donne : 
                <Katex>3 \times 2 + 8 = 6 + 8 = 14</Katex>
            </Exemples>
            <Paragraphe couleur="red" nom="Convention d'écriture">
                Le symbole de multiplication est facultatif : 
                <ul>
                    <li>entre deux variables : <Katex>ab</Katex> signifie <Katex>a \times b</Katex></li>
                    <li>entre une variable et un nombre : <Katex>3a</Katex> signifie <Katex>3 \times a</Katex></li>
                    <li>avec une parenthèse : <Katex>3(a+2)</Katex> signifie <Katex>3 \times (a+2)</Katex></li>
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
                    <li><Katex>3 \times a + 2 \times b</Katex> est une somme.</li>
                    <li><Katex>3(a + b)</Katex> est un produit.</li>
                </ul>
            </Exemples>
        </SousPartie>
        <SousPartie numero={3} titre="Égalité d'expressions">
            <Definition>
                Deux expressions littérales sont égales lorsque, <i>quelques soient les valeurs des variables choisies</i>, elles donnent le même résultat.
            </Definition>
            <Exemples>
                <ul>
                    <li><Katex>a^2 + 3a</Katex> et <Katex>a(a+3)</Katex> sont égales.</li>
                    <li>
                        <Katex>a^2</Katex> et <Katex>2a</Katex> ne sont pas égales.
                        En effet, si on choisit <Katex>a=3</Katex> :
                        <ul>
                            <li><Katex>a^2 = 3^2 = 9</Katex></li>
                            <li><Katex>2a = 2 \times 3 = 6</Katex></li>
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
                <Katex displayMode>k (a + b) = ka + kb</Katex>
            </Paragraphe>
            <Exemples>
                <ul class="no_marker">
                    <li>
                        <Katex>
                            {`
                                \\begin{aligned}
                                    x(x+4) &= x \\times x + x \\times 4 \\\\
                                           &= x^2 + 4x
                                \\end{aligned}
                            `}
                        </Katex>    
                    </li>
                    <li>
                        <Katex>
                            {`
                                \\begin{aligned}
                                    3(2x+5) &= 3 \\times 2x + 3 \\times 5 \\\\
                                            &= 6x + 15
                                \\end{aligned}
                            `}
                        </Katex>
                    </li>
                    <li>
                        <Katex>
                            {`
                                \\begin{aligned}
                                    2x(x+3) &= 2x \\times x + 2x \\times 3 \\\\
                                            &= 2x^2 + 6x
                                \\end{aligned}
                            `}
                        </Katex>
                    </li>
                    <li>
                        <Katex>
                            {`
                                \\begin{aligned}
                                    2x + xy &= 2 {\\textcircled x} + {\\textcircled x} y \\\\
                                    &= x (2 + y)
                                \\end{aligned}
                            `}
                        </Katex>
                    </li>
                    <li>
                        <Katex>
                            {`
                                \\begin{aligned}
                                    3x + 15 &= 3x + 3 \\times 5 \\\\
                                            &= {\\textcircled 3} x + {\\textcircled 3} \\times 5 \\\\
                                            &= 3 (x + 5)
                                \\end{aligned}
                            `}
                        </Katex>
                    </li>
                </ul>
            </Exemples>
        </SousPartie>
        <SousPartie numero={2} titre="Double distributivité">
            <Paragraphe couleur="red" nom="Règle">
                Soient a, b, c, d, quatre nombres : 
                <Katex displayMode>(a + b) (c + d) = ac + ad + bc + b d</Katex>
            </Paragraphe>
            <Exemples>
                <ul class="no_marker">
                    <li>
                        <Katex>
                            {`
                                \\begin{aligned}
                                    (2x+3)(4+5x) &= 2x \\times 4 + 2x \\times 5x + 3 \\times 4 + 3 \\times 5x \\\\
                                                 &= 8x + 10x^2 + 12 + 15x \\\\
                                                 &= 10x^2 + 23x + 12
                                \\end{aligned}
                            `}
                        </Katex>
                    </li>
                    <li>
                        <Katex>
                            {`
                                \\begin{aligned}
                                3(x+12) + 2x(x+12) &= 3 \\fbox{(x+12)} + 2x \\fbox{(x+12)} \\\\
                                                   &= (x+12)(3+2x)
                                \\end{aligned}
                            `}
                        </Katex>
                    </li>
                    <li>
                        <Katex>
                            {`
                                \\begin{aligned}
                                    (-4x+7)(-2+2x)  &= (-4x) \\times (-2) + (-4x) \\times 2x + 7 \\times (-2) + 7 \\times 2x \\\\
                                                    &= 8x + (-8x^2) + (-14) + 14x \\\\
                                                    &= -8x^2 + 22x - 14
                                \\end{aligned}
                            
                            `}
                        </Katex>
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