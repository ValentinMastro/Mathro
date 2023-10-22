<script lang="ts">
    import Chapitre from "$lib/chapitrage/Chapitre.svelte";
    import Partie from "$lib/chapitrage/Partie.svelte";
    import SousPartie from "$lib/chapitrage/SousPartie.svelte";
    import Definition from "$lib/chapitrage/sections/Definition.svelte";
	import Exemples from "$lib/chapitrage/sections/Exemples.svelte";
	import Notation from "$lib/chapitrage/sections/Notation.svelte";
	import Propriete from "$lib/chapitrage/sections/Propriete.svelte";
	import Katex from "svelte-katex";
</script>

<Chapitre numero={2} titre="Fractions et proportionnalité">
    <Partie numero={1} titre="Calculs fractionnaires">
        <Definition>
            Soient deux nombres <Katex>a</Katex> et <Katex>b</Katex>,
            avec <Katex>b \neq 0</Katex>. Le quotient de <Katex>a</Katex>
            par <Katex>b</Katex> est le nombre qui, lorsqu'il est 
            multiplié par <Katex>b</Katex>, donne <Katex>a</Katex>.
        </Definition>
        <Notation>
            On le note <Katex>{"\\dfrac{a}{b}"}</Katex> (écriture fractionnaire)
        </Notation>
        <Exemples>
            <ul>
                <li><Katex>{"\\dfrac{3}{4} \\times 4 = \\dfrac{3}{\\cancel{4}} \\times \\cancel{4} = 3"}</Katex></li>
                <li><Katex>{"\\dfrac{7{,}2}{5{,}8} \\times 5{,}8 = \\dfrac{7{,}2}{\\cancel{5{,}8}} \\times \\cancel{5{,}8} = 7{,}2 "}</Katex></li>
            </ul>
        </Exemples>
        <Propriete>
            Soient deux nombres <Katex>a</Katex> et <Katex>b</Katex>,
            avec <Katex>b \neq 0</Katex>. <br>
            Soit <Katex>k</Katex> avec <Katex>k \neq 0</Katex>.
            <Katex displayMode>{"\\dfrac{a}{b} = \\dfrac{ka}{kb}"}</Katex>
        </Propriete>
        <Exemples>
            <ul>
                <li><Katex>{"\\dfrac{16}{20} = \\dfrac{16 \\times 4}{20 \\times 4} = \\dfrac{64}{80}"}</Katex></li>
                <li><Katex>{"\\dfrac{35}{75} = \\dfrac{35 \\div 5}{75 \\div 5} = \\dfrac{7}{15}"}</Katex></li>
            </ul>
        </Exemples>
        <Definition>
            Simplifier une fraction, c'est trouver une autre fraction qui lui est égale 
            avec un numérateur et un dénominateur plus petits.
        </Definition>
        <SousPartie numero={1} titre="Addition et soustraction">
            <Propriete>
                Pour additionner deux fractions, il faut qu'elles aient le même dénominateur.<br>
                Soient deux nombres <Katex>a</Katex> et <Katex>b</Katex>, avec <Katex>b \neq 0</Katex>.<br>
                Soient deux nombres <Katex>c</Katex> et <Katex>d</Katex>, avec <Katex>d \neq 0</Katex>.<br>
                <Katex displayMode>{"\\dfrac{a}{b} + \\dfrac{c}{d} = \\dfrac{ad + cb}{bd}"}</Katex>
            </Propriete>
            <Exemples>
                <ul>
                    <li><Katex>{"\\dfrac{3}{7} + \\dfrac{12}{8} = \\dfrac{3 \\times 8}{7 \\times 8} + \\dfrac{12 \\times 7}{8 \\times 7}"}
                    {"=\\dfrac{24}{56} + \\dfrac{84}{56} = \\dfrac{108}{56}"}</Katex></li>
                </ul>
            </Exemples>
        </SousPartie>
        <SousPartie numero={2} titre="Multiplication et division">
            <Propriete>
                Soient deux nombres <Katex>a</Katex> et <Katex>b</Katex>, avec <Katex>b \neq 0</Katex>.<br>
                Soient deux nombres <Katex>c</Katex> et <Katex>d</Katex>, avec <Katex>d \neq 0</Katex>.<br>
                <Katex displayMode>{"\\dfrac{a}{b} \\times \\dfrac{c}{d} = \\dfrac{a \\times c}{b \\times d}"}</Katex>
            </Propriete>
            <Exemples>
                <ul>
                    <li><Katex>{"\\dfrac{7}{5} \\times \\dfrac{3}{4} = \\dfrac{7 \\times 3}{5 \\times 4} = \\dfrac{21}{20}"}</Katex></li>
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
                Calculer <Katex>p \%</Katex> d'un nombre <Katex>n</Katex>,
                c'est multiplier <Katex>{"\\dfrac{p}{100}"}</Katex> par <Katex>n</Katex>.
            </Definition>
            <Exemples>
                <ul>
                    <li>
                        <Katex>
                            {"25~\\% ~\\text{de}~ 12 =  \\dfrac{25}{100} \\times 12 = 3"}
                        </Katex>
                    </li>
                    <li>
                        <Katex>
                            {"25~\\% ~\\text{de}~ 100 = \\dfrac{25}{100} \\times 100 = 25"}
                        </Katex>
                    </li>
                    <li>
                        <Katex>
                            {"75~\\% ~\\text{de}~ 32 = \\dfrac{75}{100} \\times 32  = 24"}
                        </Katex>
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
                drapeau est de <Katex>{"\\frac{1}{3}"}</Katex>. <br>
                Pour la mettre sous forme de pourcentage, 
                je peux multiplier au numérateur et au dénominateur 
                par 100 :
                <Katex displayMode>
                    {"\\dfrac{1}{3} = \\dfrac{1 \\times 100}{3 \\times 100} = \\dfrac{1 \\times 100}{3}~\\% \\approx 33,3 ~\\% = \\dfrac{33{,}3}{100}"}
                </Katex>
            </Exemples>
        </SousPartie>
        <SousPartie numero={2} titre="Augmentation et diminution par un pourcentage">
            <Propriete>
                Pour augmenter une valeur de <Katex>x</Katex> % :
                <ul>
                    <li>je calcule <Katex>x</Katex> % et je l'ajoute à ma valeur de base</li>
                    <li><u>OU</u> je calcule <Katex>100+x</Katex> % de la valeur</li>
                    <li><u>OU</u> je multiplie par <Katex>{"\\dfrac{100+x}{100}"}</Katex></li>
                </ul>
            </Propriete>
            <Exemples>
                <Katex>50 € + 20 \%</Katex> :
                <ul>
                    <li><Katex>{"20\\% ~\\text{de}~ 50€ = \\underline{10€} \\longrightarrow 50€+\\underline{10€}=\\boxed{60€}"}</Katex></li>
                    <li><Katex>{"120\\% ~\\text{de}~ 50€ = \\boxed{60€}"}</Katex></li>
                    <li><Katex>{"50€ \\times \\dfrac{100+20}{100} = 50€ \\times 1{,}2 = \\boxed{60€}"}</Katex></li>
                </ul>
            </Exemples>
            <Propriete>
                Pour calculer le taux de variation entre une valeur de départ et une valeur d'arrivée : 
                <Katex displayMode>
                    {"\\dfrac{\\text{valeur d'arrivée} - \\text{valeur de départ}}{\\text{valeur de départ}} \\times 100"}
                </Katex>
            </Propriete>
            <Exemples>
                <ul>
                    <li>
                        Le nombre d'habitants d'une ville est passé de 4 000 à 5 000, ce qui
                        correspond à une augmentation de <Katex>{"\\dfrac{5000-4000}{4000} \\times 100 = 25 \\%"}</Katex>
                    </li>
                    <li>
                        Une voiture était vendue neuve à 25 000 €. Aujourd'hui, elle ne vaut plus que 5 000 €.<br><br>
                        Calculons son taux de variation : <Katex>{"\\dfrac{5000 - 25000}{25000} \\times 100 = -80 \\%"}</Katex>.<br>
                        Son prix a donc baissé de 80 %.
                    </li>
                </ul>
            </Exemples>
        </SousPartie>
    </Partie>
</Chapitre>

<!--
<SousPartie numero={3} titre={"Les nombres décimaux"}>
    <Definition>
        Une fraction décimale est une fraction 
        dont le dénominateur est égal à 1, 10, 100, 1000, etc.
    </Definition>
    <Definition>
        Un nombre décimal est un nombre qui peut s'écrire 
        sous forme d'une fraction décimale.
    </Definition>
</SousPartie>
-->

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