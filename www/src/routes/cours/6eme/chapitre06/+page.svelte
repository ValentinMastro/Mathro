<script>
	import Chapitre from "$lib/chapitrage/Chapitre.svelte";
	import Partie from "$lib/chapitrage/Partie.svelte";
	import Definition from "$lib/chapitrage/sections/Definition.svelte";
	import Notation from "$lib/chapitrage/sections/Notation.svelte";
	import Schema from "$lib/chapitrage/sections/Schema.svelte";
    import Formule from "$lib/chapitrage/sections/Formule.svelte";

    import Katex from "svelte-katex";
	import Exemples from "$lib/chapitrage/sections/Exemples.svelte";
</script>
<Chapitre numero={6} titre="Cercle, centre, milieu, médiatrice" >
    <Partie numero={1} titre="Cercle" >
        <Definition>
            Soit un point O.<br>
            Le centre de centre O et de rayon r est l'ensemble des points situés à une distance r de O.
        </Definition>
        <Schema>
            <img 
            alt="Cercle de centre O et de rayon r"
            style="width: 12em;"
            src="/tikz/6eme/ch06/cercle.svg" />
        </Schema>
        <Definition>
            Le diamètre d'un cercle est un segment qui relie 2 points du cercle
            et qui passe par le centre du cercle.
        </Definition>
        <Schema>
            <img 
            alt="Diamètre d'un cercle"
            style="width: 12em;"
            src="/tikz/6eme/ch06/diametre.svg" />
        </Schema>
        <Notation>
            "Le diamètre du cercle mesure 5 cm" peut se noter Ø = 5 cm.
        </Notation>
        <Formule>
            <Katex displayMode>
                {`
                \\begin{align*}
                    \\text{diamètre} &= 2 \\times \\text{rayon} \\\\
                    \\text{rayon} &= \\text{diamètre} \\div 2
                \\end{align*}
                `}
            </Katex>
        </Formule>
        <Definition>
            Une corde est un segment qui relie 2 points du cercle.
        </Definition>
        <Schema>
            <img 
            alt="Corde d'un cercle"
            style="width: 31em;"
            src="/tikz/6eme/ch06/corde.svg" />
        </Schema>
        <Definition>
            Un arc de cercle est une portion du cercle qui relie 2 points du cercle.
        </Definition>
        <Schema>
            <img 
            alt="Arcs de cercle"
            style="width: 35em;"
            src="/tikz/6eme/ch06/arcs.svg" />
        </Schema>
        <Formule>
            Le périmètre d'un cercle d'un cercle de rayon r :<br>
            <Katex displayMode>
                {`𝒫_{cercle} = 2 \\times \\pi \\times r`}
            </Katex>
        </Formule>
        <Exemples>
            <div style="display: flex; ">
                <svg 
                viewBox="0 0 100 100"
                style="width: 14em;">
                    <circle cx="50" cy="50" r="45" stroke="black" fill="none" />
                    <line x1="50" y1="50" x2="95" y2="50" stroke="black" />
                    <text x="65" y="48" 
                    font-size="0.5em" 
                    font-family="Katex_Main"
                    text-anchor="center">
                        5 cm
                    </text>
                </svg>
                <p>
                    Quelle est la circonférence de ce cercle ? <br>
                    <Katex displayMode>
                        {`
                        \\begin{align*}
                        𝒫_{cercle} = 2 \\times \\pi \\times 5~\\text{cm} &= \\boxed{10 \\pi~\\text{cm}} &~~~~\\textcolor{red}{\\longleftarrow \\text{valeur exacte}}  \\\\
                        &\\boxed{\\approx 31{,}41~\\text{cm}} &~~~~\\textcolor{red}{\\longleftarrow \\text{valeur approchée}}
                        \\end{align*}
                        `}
                    </Katex>
                </p>
            </div>
        </Exemples>
    </Partie>
</Chapitre>