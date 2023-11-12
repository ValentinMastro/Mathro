<script lang="ts">
	import Katex from "svelte-katex";
    
    import Chapitre from "$lib/chapitrage/Chapitre.svelte";
	import Partie from "$lib/chapitrage/Partie.svelte";
	import Definition from "$lib/chapitrage/sections/Definition.svelte";
	import Notation from "$lib/chapitrage/sections/Notation.svelte";
	import Schema from "$lib/chapitrage/sections/Schema.svelte";
    import Formule from "$lib/chapitrage/sections/Formule.svelte";
    import Paragraphe from "$lib/chapitrage/sections/Paragraphe.svelte";
	import Exemples from "$lib/chapitrage/sections/Exemples.svelte";
	import Remarque from "$lib/chapitrage/sections/Remarque.svelte";
	import Propriete from "$lib/chapitrage/sections/Propriete.svelte";

    var t: number = 200; //entre -500 et 500
    var distance: number;
    var angle: number;
    var doUpdate: boolean = false;

    function update() {
        t = t + 1;
        if (t > 500) {
            t = -500;
        }
        if (doUpdate) {
            setTimeout(update, 10);
        }
    }

    $: distance = Math.sqrt(Math.pow(500,2) + Math.pow(t,2));
    $: angle = Math.atan2(t, 500) * 180 / Math.PI;

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
        <Remarque>
            Le nombre <Katex>\pi</Katex> vaut environ 3,14.
        </Remarque>
    </Partie>
    <Partie numero={2} titre="Médiatrice">
        <Definition>
            La médiatrice d'un segment est la droite constituée des points situés à égale distance des extrémités du segment.
        </Definition>
        <Schema>
            <svg 
            viewBox="0 0 1000 1000"
            style="width: 30em;"
            on:click={() => {
                doUpdate = !doUpdate;
                update();
            }}
            role="none"
            >
                <defs>
                    <marker
                    id="arrow"
                    viewBox="0 0 10 10"
                    refX="5"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" />
                  </marker>
                </defs>
                <line x1="100" y1="500" x2="900" y2="500" stroke="black" stroke-width={2} />
                <line x1="100" y1="520" x2="900" y2="520" stroke="black" stroke-width={2} marker-start="url(#arrow)" marker-end="url(#arrow)" stroke-dasharray="5,5" />
                <text x="450" y="550"  text-anchor="middle" font-size="1.5em" >4 cm</text>
                <circle cx="100" cy="500" r="7" stroke="black" fill="black" />
                <circle cx="900" cy="500" r="7" stroke="black" fill="black" />
                <text x="50" y="520"  text-anchor="east" font-size="3em" >A</text>
                <text x="920" y="520"  text-anchor="west" font-size="3em" >B</text>
                <line x1="500" x2="500" y1="0" y2="1000" stroke="red" stroke-width={2} />
                
                <circle cx="500" cy={500 - t} r="7" stroke="red" fill="red" />
                <text x="510" y={490 - t}  text-anchor="start" font-size="3em" fill="red" >M</text>

                <line x1="100" x2="500" y1="500" y2={500-t} stroke="red" stroke-width={3} stroke-dasharray="5,5" /> 
                <line x1="900" x2="500" y1="500" y2={500-t} stroke="red" stroke-width={3} stroke-dasharray="5,5" /> 
                <text x="250" y={500-t/2} 
                font-size="1.5em" 
                text-anchor="center">
                    {(distance/250).toLocaleString()} cm
                </text>
                <text x="700" y={500-t/2}
                font-size="1.5em"
                text-anchor="center">
                    {(distance/250).toLocaleString()} cm
                </text>
            </svg>
        </Schema>
        <Paragraphe couleur="black" nom="Construction">
            <svg
            viewBox="0 0 1000 1000"
            style="width: 30em;">
                <!-- segment [AB] -->
                <line x1="100" x2="900" y1="500" y2="500" stroke="black" stroke-width={2} />
                <circle cx="100" cy="500" r="7" stroke="black" fill="black" />
                <circle cx="900" cy="500" r="7" stroke="black" fill="black" />
                <text x="50" y="520"  text-anchor="east" font-size="3em" >A</text>
                <text x="920" y="520"  text-anchor="west" font-size="3em" >B</text>
                
                <!-- arcs de cercles de centres A et B -->
                <path fill="none" stroke="black" stroke-width={2} d="M 400 200 A 300 300 0 0 1 400 700" />
                <path fill="none" stroke="black" stroke-width={2} d="M 600 200 A 300 300 0 0 0 600 700" />

                <!-- médiatrice du segment [AB] -->
                <line x1="500" x2="500" y1="0" y2="1000" stroke="green" stroke-width={2} />
            </svg>
            <ul>
                <li>Tracer le segment [AB]</li>
                <li>Prendre le compas, et choisir un écartement</li>
                <li>Placer la pointe du compas sur A et tracer un arc de cercle</li>
                <li>Placer la pointe du compas sur B et tracer un arc de cercle</li>
                <li>Relier les points d'intersections des arcs de cercle</li>
            </ul>
        </Paragraphe>
        <Propriete>
            La médiatrice d'un segment coupe ce segment en son milieu et perpendiculairement.
        </Propriete>
        <Schema>
            <svg
            viewBox="0 0 1000 1000"
            style="width: 30em;">
                <!-- segment [AB] -->
                <line x1="100" x2="900" y1="500" y2="500" stroke="black" stroke-width={2} />
                <circle cx="100" cy="500" r="7" stroke="black" fill="black" />
                <circle cx="900" cy="500" r="7" stroke="black" fill="black" />
                <text x="50" y="520"  text-anchor="east" font-size="3em" >A</text>
                <text x="920" y="520"  text-anchor="west" font-size="3em" >B</text>

                <!-- médiatrice du segment [AB] -->
                <line x1="500" x2="500" y1="0" y2="1000" stroke="green" stroke-width={2} />

                <!-- Codage -->
                <rect x="500" y="480" width="20" height="20" fill="red" stroke="none"  />
                <text x="300" y="510" text-anchor="middle" font-size="2.5em" fill="red" >||</text>
                <text x="700" y="510" text-anchor="middle" font-size="2.5em" fill="red" >||</text>
            </svg>
        </Schema>
    </Partie>
</Chapitre>