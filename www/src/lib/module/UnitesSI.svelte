<script lang="ts">
    let couleurs: string[] = ["#c9323b", "#4a2874", "#a43f85", "#1c5d95", "#68a23c", "#f5a02b", "#ec6c3b"];
    let unites: string[] = ["kg", "cd", "mol", "K", "A", "s", "m"];
    let constantes: string[] = [
        "h", 
        "K<tspan font-size='30' dx='-5' dy='20'>cd</tspan>", 
        "N<tspan font-size='30' dx='-10' dy='20'>A</tspan>", 
        "k", 
        "e", 
        "Δν", 
        "c"
    ];
    let lien_constantes: string[] = [
        "https://fr.wikipedia.org/wiki/Constante_de_Planck",
        "https://fr.wikipedia.org/wiki/Candela",
        "https://fr.wikipedia.org/wiki/Nombre_d%27Avogadro",
        "https://fr.wikipedia.org/wiki/Constante_de_Boltzmann",
        "https://fr.wikipedia.org/wiki/Charge_%C3%A9l%C3%A9mentaire",
        "https://fr.wikipedia.org/wiki/Seconde_(temps)",
        "https://fr.wikipedia.org/wiki/Vitesse_de_la_lumi%C3%A8re"
    ];

    function surbrillance_dans_le_tableau(e: MouseEvent) {
        let svg = document.getElementById("svg_SI") as SVGSVGElement & HTMLElement;
        if (!svg) return;

        // Récupérer les coordonnées du pointeur dans le fichier svg
        var pt = svg.createSVGPoint();
        pt.x = e.clientX;
        pt.y = e.clientY;
        var point = pt.matrixTransform(svg.getScreenCTM()!.inverse());

        // Calculer l'angle entre le point et le centre
        var angle = Math.atan2(point.y, point.x)
        var degres = angle*180/Math.PI;
        if (degres < -120) degres += 360;

        // zone 0 -> 60
        // zone 1 -> 60 + (360/7)
        // etc.
        var zone = Math.floor((degres + 120) / (360/7));
        
        // Mettre en évidence la zone
        var tableau = document.getElementById("SI_unites");
        if (!tableau) return;
        var lignes = tableau.getElementsByTagName("tr");
        for (var i = 1; i < lignes.length; i++) {
            lignes[i].style.backgroundColor = "white";
            lignes[i].style.color = "black";
        }
        lignes[zone+1].style.backgroundColor = couleurs[(7-zone)%7];
        lignes[zone+1].style.color = "white";
    }
</script>

<div class="flex">
    <table id="SI_unites">
        <caption style="margin-bottom: 10px;"><u>Les sept unités de base du Système International</u></caption>
        <tbody>
            <tr>
                <th>Grandeur physique</th>
                <th>Unité</th>
                <th>Symbole de l'unité</th>
            </tr>
            <tr>
                <td>Masse</td>
                <td>Le kilogramme</td>
                <td>kg</td>
            </tr>
            <tr>
                <td>Longueur</td>
                <td>Le mètre</td>
                <td>m</td>
            </tr>
            <tr>
                <td>Temps</td>
                <td>La seconde</td>
                <td>s</td>
            </tr>
            <tr>
                <td>Courant électrique</td>
                <td>L'ampère</td>
                <td>A</td>
            </tr>
            <tr>
                <td>Température thermodynamique</td>
                <td>Le kelvin</td>
                <td>K</td>
            </tr>
            <tr>
                <td>Quantité de matière</td>
                <td>La mole</td>
                <td>mol</td>
            </tr>
            <tr>
                <td>Intensité lumineuse</td>
                <td>La candela</td>
                <td>cd</td>
            </tr>
        </tbody>
    </table>
    <svg viewBox="-500 -500 1000 1000" 
        id="svg_SI"
        role="none"
        on:mouseover={surbrillance_dans_le_tableau}
        on:focus={() => {}}
    >
        <defs>
            <style>
                #petit_secteur {
                    opacity: 50%;
                }
                .unites {
                    text-anchor: middle;
                    dominant-baseline: middle;
                    font-size: 70px;
                    font-weight: bold;
                    fill: white;
                }
                .constantes {
                    text-anchor: middle;
                    dominant-baseline: middle;
                    font-size: 60px;
                    font-style: italic;
                    fill: black;
                }
                a:hover {
                    text-decoration: none;
                }
            </style>
            <g id="secteur">
                <!-- 
                    <path id="petit_secteur" 
                    d="M {125*Math.cos((90-22.5)*Math.PI/180)} {125*Math.sin((90-22.5)*Math.PI/180)} 
                    L {200*Math.cos((90-22.5)*Math.PI/180)} {200*Math.sin((90-22.5)*Math.PI/180)} 
                    A 200 200 0 0 1 {200*Math.cos((90+22.5)*Math.PI/180)} {200*Math.sin((90+22.5)*Math.PI/180)} 
                    L {125*Math.cos((90+22.5)*Math.PI/180)} {125*Math.sin((90+22.5)*Math.PI/180)} 
                    A 125 125 0 0 0 {125*Math.cos((90-22.5)*Math.PI/180)} {125*Math.sin((90-22.5)*Math.PI/180)} 
                    Z"></path>
                    <path id="grand_secteur" 
                    d="M {200*Math.cos((90-22.5)*Math.PI/180)} {200*Math.sin((90-22.5)*Math.PI/180)} 
                    L {350*Math.cos((90-22.5)*Math.PI/180)} {350*Math.sin((90-22.5)*Math.PI/180)} 
                    A 350 350 0 0 1 {350*Math.cos((90+22.5)*Math.PI/180)} {350*Math.sin((90+22.5)*Math.PI/180)} 
                    L {200*Math.cos((90+22.5)*Math.PI/180)} {200*Math.sin((90+22.5)*Math.PI/180)} 
                    A 200 200 0 0 0 {200*Math.cos((90-22.5)*Math.PI/180)} {200*Math.sin((90-22.5)*Math.PI/180)} 
                    Z"></path>
                 -->
                <path id="petit_secteur" 
                d="M 47.83542904563623 115.48494156391084 
                L 76.53668647301797 184.77590650225736 
                A 200 200 0 0 1 -76.53668647301795 184.77590650225736 
                L -47.83542904563622 115.48494156391084 
                A 125 125 0 0 0 47.83542904563623 115.48494156391084 
                Z"></path>
                <path id="grand_secteur"
                d="M 76.53668647301797 184.77590650225736 
                L 133.93920132778143 323.35783637895037 
                A 350 350 0 0 1 -133.9392013277814 323.35783637895037 
                L -76.53668647301795 184.77590650225736 
                A 200 200 0 0 0 76.53668647301797 184.77590650225736 
                Z"></path>
            </g>
        </defs>
        <text x="0" y="10" text-anchor="middle" dominant-baseline="middle" font-size="150" fill="black">SI</text>

        {#each couleurs as couleur, i}
            <use href="#secteur" transform="rotate({180 - i*51})" fill={couleur} />
            <text x="0" y="-275" class="unites" style="rotate: {0 - i*51}deg;" >{unites[i]}</text>
            <a href={lien_constantes[i]} target="_blank">
                <text x="0" y="-157.5" class="constantes" style="rotate: {0 - i*51}deg;" >
                    {@html constantes[i]}
                </text>
            </a>
        {/each}
    </svg>
</div>

<style>
    #SI_unites {
        border-collapse: collapse;
        border: 1px solid black;
        color: black;
        height: fit-content;
    }
    #SI_unites th {
        border: 1px solid black;
        padding: 5px;
        width: fit-content;
    }
    #SI_unites td {
        border: 1px solid black;
        padding: 5px;
        width: fit-content;
    }

    #SI_unites tr td:nth-child(3) {
        text-align: center;
    }

    .flex {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    svg {
        width: 40%;
    }
</style>