<script lang="ts">
	import Chapitre from "$lib/chapitrage/Chapitre.svelte";
	import Partie from "$lib/chapitrage/Partie.svelte";
	import Definition from "$lib/chapitrage/sections/Definition.svelte";
	import Exemples from "$lib/chapitrage/sections/Exemples.svelte";
	import Remarque from "$lib/chapitrage/sections/Remarque.svelte";
	import Katex from "svelte-katex";


</script>


<Chapitre numero={5} titre="Fractions">
    <Partie numero={1} titre="Lien entre quotient et fraction">
        <Definition>
            Le quotient de <Katex>a</Katex> par <Katex>b</Katex> (<Katex>a \div b</Katex>)
            peut s'écrire sous forme fractionnaire.
            <Katex displayMode>{"a \\div b = \\dfrac{a}{b} \\color{red} {\\longleftarrow \\text{numérateur} \\atop \\longleftarrow \\text{dénominateur}}"}</Katex>
        </Definition>
        <Exemples>
            <ul>
                <li>
                    <Katex>
                        {"\\dfrac{3}{5} = 3 \\div 5"}
                    </Katex>
                </li>
                <li>
                    <Katex>
                        {"\\dfrac{7{,}1}{9{,}2} = 7{,}1 \\div 9{,}2"}
                    </Katex>
                </li>
            </ul>
        </Exemples>
        <Definition>
            Si <Katex>a</Katex> et <Katex>b</Katex> sont des nombres entiers, <Katex>{"\\dfrac{a}{b}"}</Katex> est une fraction.
        </Definition>
        <Remarque>
            Le dénominateur <Katex>b \neq 0</Katex>. <br> (on ne peut pas diviser par 0)
        </Remarque>
        <div style='height:20vw'>

        </div>
    </Partie>
</Chapitre>

<style>
    li {
        padding-top: 5px;
        padding-bottom: 5px;
    }
</style>