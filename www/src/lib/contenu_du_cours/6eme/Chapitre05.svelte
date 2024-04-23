<script lang="ts">
    import { Chapitre, Partie, SousPartie } from "$lib/chapitrage/all_chapitrages";
    import { Definition, Exemples, Paragraphe, Propriete, Remarque } from "$lib/chapitrage/sections/all_sections";
    import { math, display } from 'mathlifier';
</script>


<Chapitre numero={5} titre="Fractions">
    <Partie numero={1} titre="Lien entre quotient et fraction">
        <Definition>
            Le quotient de {@html math("a")} par {@html math("b")} ({@html math("a \\div b")})
            peut s'écrire sous forme fractionnaire.
            {@html math("a \\div b = \\dfrac{a}{b} \\color{red} {\\longleftarrow \\text{numérateur} \\atop \\longleftarrow \\text{dénominateur}}")}
        </Definition>
        <Exemples>
            <ul>
                <li>
                    {@html math("\\dfrac{3}{5} = 3 \\div 5")}
                </li>
                <li>
                    {@html math("\\dfrac{7{,}1}{9{,}2} = 7{,}1 \\div 9{,}2")}
                </li>
            </ul>
        </Exemples>
        <Definition>
            Si {@html math("a")} et {@html math("b")} sont des nombres entiers, {@html math("\\dfrac{a}{b}")} est une fraction.
        </Definition>
        <Remarque>
            Le dénominateur {@html math("b \\neq 0")}. <br> (on ne peut pas diviser par 0)
        </Remarque>
    </Partie>
    <Partie numero={2} titre="Calculer la fraction d'un nombre">
        <Paragraphe couleur="red" nom="Règle">
            Pour multipler une fraction avec un nombre, on multiplie le nombre avec le numérateur et on divise par le dénominateur.
        </Paragraphe>
        <Exemples>
            <ul>
                <li>
                    {@html math("\\dfrac{3}{4} \\text{ de } 36 = \\dfrac{3}{4} \\times 36 = 3 \\times 36 \\div 4")}
                </li>
                <li>
                    {@html math("\\dfrac{7}{9} \\text{ de } 81 = \\dfrac{7}{9} \\times 81 = 7 \\times 81 \\div 9")}
                </li>
            </ul>
        </Exemples>
    </Partie>
    <Partie numero={3} titre="Calculs">
        <SousPartie numero={1} titre="Additionner des fractions">
            <Paragraphe couleur="red" nom="Règle">
                Pour additionner deux fractions :
                <ul>
                    <li>il faut que les dénominateurs soient égaux</li>
                    <li>on additionne les numérateurs</li>
                </ul>
            </Paragraphe>
            <Exemples>
                <ul>
                    <li>
                        {@html math("\\dfrac{8}{9} + \\dfrac{4}{9} = \\dfrac{12}{9}")}
                    </li>
                    <li>
                        {@html math("\\dfrac{3}{7} + \\dfrac{5}{7} = \\dfrac{8}{7}")}
                    </li>
                </ul>
            </Exemples>
        </SousPartie>
        <SousPartie numero={2} titre="Fractions égales">
            <Propriete>
                Deux fractions sont égales si leur quotient sont égaux.
            </Propriete>
            <Exemples>
                <ul>
                    <li>
                        {@html math("\\dfrac{3}{4} = \\dfrac{6}{8} ~~~~\\text{ car } 3 \\div 4 = \\boxed{0{,}75} ~~~~\\text{ et } 6 \\div 8 = \\boxed{0{,}75}")}
                    </li>
                    <li>
                        {@html math("\\dfrac{85}{99} = \\dfrac{850}{990} ~~~~\\text{ car } 85 \\div 99 = \\boxed{0{,}858585...} ~~~~\\text{ et } 850 \\div 990 = \\boxed{0{,}858585...}")}
                    </li>
                </ul>
            </Exemples>
            <Propriete>
                Si deux fractions sont égales, il existe un nombre avec lequel on peut multiplier 
                le numérateur et le dénominateur de la première fraction pour obtenir la seconde.
            </Propriete>
            <Exemples>
                <img    alt="Schéma expliquant les fractions égales"
                        src="/tikz/6eme/ch05/fractions_egales.svg"
                        style="height: 17ex" />
            </Exemples>
            <Definition>
                Simplifier une fraction, c'est diviser le numérateur et le dénominateur par un même nombre.
            </Definition>
            <Exemples>
                <ul>
                    <li>
                        {@html math("\\dfrac{10}{35} = \\dfrac{2 \\times \\cancel{5}}{7 \\times \\cancel{5}} = \\dfrac{2}{7}")}
                    </li>
                </ul>
            </Exemples>
        </SousPartie>
    </Partie>
</Chapitre>

<style>
    li {
        padding-top: 5px;
        padding-bottom: 5px;
    }
</style>