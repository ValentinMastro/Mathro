<script lang="ts">
    import Katex from 'svelte-katex'

    let couleurs: string[] = ["#c9323b", "#4a2874", "#a43f85", "#1c5d95", "#68a23c", "#f5a02b", "#ec6c3b"];
    let unites: string[] = ["kg", "cd", "mol", "K", "A", "s", "m"];
    let constantes: string[] = ["h", "", "", "k", "e", "Δν", "c"];
</script>

<div class="flex">
    <table id="SI_unites">
        <caption style="margin-bottom: 10px;"><u>Les sept unités de base du Système International</u></caption>
        <tr>
            <th>Grandeur physique</th>
            <th>Unité</th>
            <th>Symbole de l'unité</th>
        </tr>
        <tr>
            <td>Longueur</td>
            <td>Le mètre</td>
            <td>m</td>
        </tr>
        <tr>
            <td>Masse</td>
            <td>Le kilogramme</td>
            <td>kg</td>
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
    </table>
    <svg viewBox="-500 -500 1000 1000">
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
        <text x="0" y="0" text-anchor="middle" dominant-baseline="middle" font-size="150" fill="black">SI</text>

        {#each couleurs as couleur, i}
            <use href="#secteur" transform="rotate({180 - i*51})" fill={couleur} />
            <text x="0" y="-275" class="unites" style="rotate: {0 - i*51}deg;" >{unites[i]}</text>
            <text x="0" y="-157.5" class="constantes" style="rotate: {0 - i*51}deg;" >{constantes[i]}</text>
        {/each}

        <text x="0" y="-157.5" class="constantes" style="rotate: {0 - 1*51}deg;" >
            K
            <tspan font-size="30" dx="-20" dy="20">cd</tspan>
        </text>
        <text x="0" y="-157.5" class="constantes" style="rotate: {0 - 2*51}deg;" >
            N
            <tspan font-size="30" dx="-20" dy="20">A</tspan>
        </text>
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
    .flex {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    svg {
        width: 40%;
    }
</style>