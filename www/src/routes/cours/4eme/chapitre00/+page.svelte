<script lang="ts">
    import Katex from "svelte-katex";

    import Chapitre from "$lib/chapitrage/Chapitre.svelte";
    import Partie from "$lib/chapitrage/Partie.svelte";
    import SousPartie from "$lib/chapitrage/SousPartie.svelte";
    import Definition from "$lib/chapitrage/sections/Definition.svelte";
    import Exemple from "$lib/chapitrage/sections/Exemple.svelte";
    import Remarque from "$lib/chapitrage/sections/Remarque.svelte";
    import Animation from "$lib/chapitrage/sections/Animation.svelte";
    import Propriete from "$lib/chapitrage/sections/Propriete.svelte";
    import Exemples from "$lib/chapitrage/sections/Exemples.svelte"

    import {
        EstEntierNaturel, 
        EstEntierRelatif,
        EstNombreRationnel
    } from "$lib/exercices/4eme/ch00";
</script>

<Chapitre numero={0} titre={"Opérations"}>
    <Partie numero={1} titre={"Natures des nombres"}>
        <SousPartie numero={1} titre="Nombres entiers"> 
            <Definition>
                Un nombre <i>entier naturel</i> permet de compter des éléments. 
                Il est positif et n'a pas de partie décimale.
            </Definition>
            <Exemples>
                <ul>
                    <li>5 est un nombre entier naturel </li>
                    <li>-5 n'est pas un nombre entier naturel </li>
                    <li>5,5 n'est pas un nombre entier naturel </li>
                </ul>
            </Exemples>
            <Definition>
                Un nombre <i>entier relatif</i> n'a pas de partie décimale et 
                peut être positif comme négatif.
            </Definition>
            <Remarque>
                0 est considéré comme un nombre négatif <u>et</u> positif.
            </Remarque>
        </SousPartie>
        <SousPartie numero={2} titre="Fractions et nombres rationnels">
            <Definition>
                Une fraction est un moyen d'écrire le résultat d'une division entre 
                deux nombres entiers : le numérateur et le dénominateur.
            </Definition>
            <Animation fonctionAnimation={(context) => {
                context.scale(2, 2)
                context.font = "16px sans-serif"
                context.textBaseline = "middle"
                context.textAlign = "center"

                var [x, y] = [3, 4]
                var [t, total, envers] = [0, 60, true] // 5 secondes

                async function update() {
                    if (t >= total || t <= 0) {
                        envers = !envers
                        await new Promise(r => setTimeout(r, 2000));
                    }
                    t = t + (envers ? -1 : 1)
                    context.clearRect(0,0,300,300)
                    
                    context.fillText(x.toString(), 200 + (180 - 200)*(t/total), 25 + (35 - 25)*(t/total))
                    context.fillText(y.toString(), 200 + (220 - 200)*(t/total), 45 + (35 - 45)*(t/total))
                    context.fill()

                    context.beginPath()
                    context.moveTo(190,35)
                    context.lineTo(210,35)
                    context.stroke()

                    if (t > 0.15*total) {
                        context.beginPath()
                        context.arc(200, 25, 1.7, 0, 2*Math.PI)
                        context.fill()

                        context.beginPath()
                        context.arc(200, 45, 1.7, 0, 2*Math.PI)
                        context.fill()
                    }

                    requestAnimationFrame(update)
                }

                update()
            }} />
            <Definition>
                S'il existe une division entre deux nombres entiers 
                égale à un nombre, alors ce nombre est <i>rationnel</i>.
            </Definition>
            <Exemples>
                <ul>
                    <li><Katex>{"0{,}75"}</Katex> est rationnel car <Katex>{"0{,}75 = \\frac{3}{4}"}</Katex></li>
                    <li><Katex>{"0{,}17"}</Katex> est rationnel car <Katex>{"0{,}17 = \\frac{17}{100}"}</Katex></li>
                    <li><Katex>\pi</Katex> n'est pas un nombre rationnel</li>
                </ul>
            </Exemples>
        </SousPartie>
    </Partie>
    <Partie numero={2} titre={"Les 5 opérations de base"}>
        <SousPartie numero={1} titre={"Addition"}>
            <Definition>
                L'addition décrit la réunion de deux quantités. 
                Elle est notée avec le symbole +, 
                les deux nombres additionnés sont les <i>termes</i> et 
                le résultat est appelé la <i>somme</i>.
            </Definition>
            <Propriete>
                La somme ne dépend pas de l'ordre des termes.<br />
                (On dit que l'addition est <i>commutative</i>.)
            </Propriete>
            <Propriete>
                Pour additionner deux nombres relatifs :
                <ul>
                    <li>s'ils sont de même signe, 
                        la somme a le même signe et 
                        on additionne les distances à zéro ;</li>
                    <li>s'ils sont de signes différents, 
                        le signe de la somme est celui du terme de la 
                        plus grande distance à zéro, 
                        et on soustrait les distances à zéro.</li>
                </ul>
            </Propriete>
            <Exemples>
                <ul>
                    <li><Katex>{"17+5="}</Katex></li>
                    <li><Katex>{"12+(-4)="}</Katex></li>
                    <li><Katex>{"(-3)+(-6)="}</Katex></li>
                    <li><Katex>{"(-5)+(+14)="}</Katex></li>
                </ul>
            </Exemples>
        </SousPartie>
        <SousPartie numero={2} titre="Soustraction">
            <Definition>
                La soustraction décrit le retranchement d'une quantité 
                à une autre. Elle est notée avec le symbole -, 
                les deux nombres sont les <i>termes</i> et le résultat est 
                appelé la <i>différence</i>.
            </Definition>
            <Propriete>
                Soustraire un nombre revient à ajouter son opposé.
            </Propriete>
            <Exemples>
                <ul>
                    <li><Katex>{"124-95="}</Katex></li>
                    <li><Katex>{"12-(-4)="}</Katex></li>
                    <li><Katex>{"(-12)-(+6)="}</Katex></li>
                    <li><Katex>{"(-89)-(-51)="}</Katex></li>
                </ul>
            </Exemples>
        </SousPartie>
        <SousPartie numero={3} titre="Multiplication">
            <Definition>
                La multiplication est la répétition successive d'une addition. 
                Les nombres multipliés sont les <i>facteurs</i> 
                et le résultat est appelé le <i>produit</i>.
            </Definition>
            <Propriete>
                Le produit ne dépend pas de l'ordre des facteurs.<br />
                (On dit que la multiplication est <i>commutative</i>)
            </Propriete>
            <Propriete>
                Pour multiplier des nombres relatifs :
                <ul>
                    <li>si le nombre de <i>facteurs négatifs</i> est impair,
                    le produit est négatif ;</li>
                    <li>si le nombre de <i>facteurs négatifs</i> est pair,
                    le produit est positif.</li>
                </ul>
            </Propriete>
        </SousPartie>
        <SousPartie numero={4} titre="Division">
            <Definition>
                La division permet de séparer en plusieurs parts égales une quantité. 
                On divise le <i>dividende</i> par le <i>diviseur</i> 
                afin d'obtenir le <i>quotient</i>.
                <br>
                Les symboles utilisés pour la division sont :
                <ul>
                    <li>les deux-points « : » ;</li>
                    <li>le <i>slash</i> « / » </li>
                    <li>l'obélus « ÷ »</li>
                </ul>
            </Definition>
        </SousPartie>
        <SousPartie numero={5} titre="Modulo">
            <Definition>
                À deux entiers naturels <Katex>a</Katex> et <Katex>b</Katex>, <Katex>b</Katex> non nul, on associe deux entiers 
                naturels : le quotient <Katex>q</Katex> et le reste <Katex>r</Katex> tels que :
                <Katex displayMode>a = b \times q + r</Katex>
            </Definition>
            <Definition>
                « <Katex>a</Katex> modulo <Katex>b</Katex> », noté <Katex>a~\%~b</Katex>, est le reste 
                de la division euclidienne de <Katex>a</Katex> par <Katex>b</Katex>.
            </Definition>
        </SousPartie>
    </Partie>
    <Partie numero={3} titre="La priorité des opérations">
        <Propriete>
            Dans un calcul contenant plusieurs opérations :
            <ul>
                <li>la priorité est donnée aux calculs entres parenthèses</li>
                <li>puis, aux multiplications et aux divisions (de gauche à droite)</li>
                <li>enfin, aux additions et aux soustractions (de gauche à droite)</li>
            </ul>
        </Propriete>
        <Remarque>
            Dans un calcul contenant un trait de fraction, on calcule d'abord le 
            numérateur et le dénominateur, puis on effectue la division.
        </Remarque>
    </Partie>
</Chapitre>