<script lang="ts">
    import Katex from "svelte-katex";

    // mesure de l'angle aigu en degrés
    let angle_aigu: number = 30;

    // coordonnées des points du triangle
    let x_B: number = 800, y_B: number = 800;
    let x_A: number = 0, y_A: number = 800;
    let x_C: number = 800, y_C: number = 0;

    $: angle_aigu_rad = angle_aigu * Math.PI / 180;
    $: x_A = (angle_aigu >= 45) ? 800 - 800 * Math.cos(angle_aigu_rad)/Math.cos(Math.PI/4) : 0;
    $: y_C = (angle_aigu <= 45) ? 800 - 800 * Math.sin(angle_aigu_rad)/Math.sin(Math.PI/4) : 0;

    $: hypotenuse = Math.sqrt(Math.pow(x_A - x_C, 2) + Math.pow(y_A - y_C, 2))/200;
    $: adjacent = Math.sqrt(Math.pow(x_A - x_B, 2) + Math.pow(y_A - y_B, 2))/200;
    $: oppose = Math.sqrt(Math.pow(x_B - x_C, 2) + Math.pow(y_B - y_C, 2))/200;

    function update_angle_aigu() {
        angle_aigu += 1;
        if (angle_aigu > 90) {
            angle_aigu = 0;
        }
    }

    let interval: any;
    $: {
        clearInterval(interval);
        interval = setInterval(update_angle_aigu, 400);
    }
</script>

<div class="container">
    <svg viewBox="-100 -100 1000 1000">
        <!-- Triangle construit en fonction de l'angle aigu -->
        <defs>
            <style>
                #triangle {
                    fill: none;
                    stroke: black;
                    stroke-width: 2;
                }
                text.point {
                    text-anchor: middle;
                    dominant-baseline: middle;
                    font-size: 40px;
                    stroke: none;
                    fill: black;
                }
                text.cote {
                    text-anchor: middle;
                    dominant-baseline: middle;
                    font-size: 40px;
                    stroke: none;
                    fill: black;
                }
            </style>
            <polygon id="triangle" points="{x_A},{y_A} {x_B},{y_B} {x_C},{y_C}" />
            <clipPath id="triangle_clip">
                <use href="#triangle" />
            </clipPath>
        </defs>
        <circle cx="{x_A}" cy="{y_A}" r="50" fill="red" stroke="none" clip-path="url(#triangle_clip)" />
        <use href="#triangle" />
        <!-- Points -->
        <text class="point" x="{x_A - 25}" y="{y_A}">A</text>
        <text class="point" x="{x_B + 25}" y="{y_B}">B</text>
        <text class="point" x="{x_C + 25}" y="{y_C}">C</text>
        <text class="cote" x="{(x_A + x_B)/2}" y="{y_A - 25}">
            côté adjacent
        </text>
        <text class="cote" x="{(x_A + x_C)/2}" y="{(y_B + y_C)/2}" transform="rotate ({-angle_aigu*(angle_aigu < 45 ? 1.1 : 0.9)} {(x_A + x_C)/2} {(y_B + y_C)/2})">
            <tspan dx="-20" dy="-20">
                hypoténuse
            </tspan>
        </text>
    </svg>
    <div class="flex_centre">
        Hypoténuse : AC = {hypotenuse.toLocaleString("fr-FR", {maximumFractionDigits: 2})} cm <br>
        Côté adjacent : AB = {adjacent.toLocaleString("fr-FR", {maximumFractionDigits: 2})} cm <br>
        Côté opposé : BC = {oppose.toLocaleString("fr-FR", {maximumFractionDigits: 2})} cm <br>
        <Katex>{`\\widehat{\\text{CAB}} = ${angle_aigu} °`}</Katex>
    </div>
    <div class="flex_centre">
        <Katex displayMode>{`
            \\begin{align*}
                \\cos(\\widehat{\\text{CAB}}) &= \\dfrac{\\text{côté adjacent}}{\\text{hypoténuse}} \\\\
                &= \\frac{\\text{AB}}{\\text{AC}} \\\\
                &= \\dfrac{${adjacent.toLocaleString("fr-FR", {minimumFractionDigits: 2, maximumFractionDigits: 2})}}{${hypotenuse.toLocaleString("fr-FR", {minimumFractionDigits: 2, maximumFractionDigits: 2})}} \\\\
                \\cos(\\widehat{\\text{CAB}}) &\\approx ${Math.cos(angle_aigu_rad).toLocaleString("fr-FR", {minimumFractionDigits: 2, maximumFractionDigits: 2})} \\\\
                \\arccos(${Math.cos(angle_aigu_rad).toLocaleString("fr-FR", {minimumFractionDigits: 2, maximumFractionDigits: 2})}) &= ${angle_aigu} °
            \\end{align*}
        `}</Katex>
    </div>
</div>


<style>
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    .flex_centre {
        text-align: center;
        display: flex;
        align-content: center;
        flex-direction: column;
        justify-content: center;
    }
</style>