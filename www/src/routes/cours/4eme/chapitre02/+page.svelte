<script lang="ts">
    import Chapitre from "$lib/chapitrage/Chapitre.svelte";
    import Partie from "$lib/chapitrage/Partie.svelte";
    import SousPartie from "$lib/chapitrage/SousPartie.svelte";
    import Definition from "$lib/chapitrage/sections/Definition.svelte";
	import Exemple from "$lib/chapitrage/sections/Exemple.svelte";
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
                <img src="/tikz/4ch2_division_fraction.svg"/>
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