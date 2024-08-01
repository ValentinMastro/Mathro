<script lang="ts">
    export let donnees: {[key: string]: number};
    export let caption: string;
    export let etiquette_1: string;
    export let etiquette_2: string;
    export let width: number = 1000;

    let daltonien: boolean = false;
    $: couleurs_secteurs = daltonien ? [
        "rgb(255, 0, 0)",
        "rgb(255, 127, 0)",
        "rgb(255, 255, 0)",
        "rgb(0, 255, 0)",
        "rgb(0, 0, 255)",
        "rgb(75, 0, 130)",
        "rgb(148, 0, 211)"
    ] : [
        "rgb(255, 0, 0)",
        "rgb(255, 127, 0)",
        "rgb(255, 255, 0)",
        "rgb(0, 255, 0)",
        "rgb(0, 0, 255)",
        "rgb(75, 0, 130)",
        "rgb(148, 0, 211)"
    ];

    function generer_secteurs(donnees: {[key: string]: number}) {
        let secteurs = [];
        let total = donnees["TOTAL"];
        let angles_cumules = 0;
        var n = Object.values(donnees).length;
        for (let valeur in donnees) {
            if (valeur == "TOTAL") continue;
            let angle = 360 * donnees[valeur] / total;
            secteurs.push(`
                <path d="
                    M 500 500
                    L ${500 + 400*Math.cos(angles_cumules*Math.PI/180)} ${500 - 400*Math.sin(angles_cumules*Math.PI/180)}
                    A 400 400 0 ${angle > 180 ? 1 : 0} 0 ${500 + 400*Math.cos((angles_cumules+angle)*Math.PI/180)} ${500 - 400*Math.sin((angles_cumules+angle)*Math.PI/180)}
                    Z"
                fill="${couleurs_secteurs[secteurs.length]}" />
            `);
            angles_cumules += angle;
        }
        
        return secteurs.join("\n");
    }
</script>

<table class="donnees">
    <caption style="letter-spacing: 0px;">{caption}</caption>
    <tbody>
        <tr>
            <th>{etiquette_1}</th>
            {#each Object.keys(donnees) as tranche}
                <th>{tranche}</th>
            {/each}
        </tr>
        <tr>
            <th>{etiquette_2}</th>
            {#each Object.values(donnees) as valeur}
                <td>{valeur.toLocaleString("fr-FR")}</td>
            {/each}
        </tr>
        <tr>
            <th>Angle</th>
            {#each Object.values(donnees) as valeur}
                <td>{(360 * valeur / donnees["TOTAL"]).toFixed(0)}°</td>
            {/each}
        </tr>
    </tbody>
</table>
<svg viewBox="90 0 {width} 1000">
    <!-- Cercle -->
    <circle cx="500" cy="500" r="400" stroke="black" stroke-width="2" fill="none" />
    <!-- Secteurs -->
    {@html generer_secteurs(donnees)}
    <!-- Légende -->
    <g transform="translate(920, 300)">
        {#each Object.keys(donnees) as tranche, i}
            {#if tranche != "TOTAL"}
                <g transform="translate(0, {i*50})">
                    <rect width="40" height="40" fill={couleurs_secteurs[i]} stroke="black" />
                    <text x="50" y="30" font-size="30">{tranche}</text>
                </g>
            {/if}
        {/each}
    </g>
</svg>

<style>
    .donnees {
        border-collapse: collapse;
        border: 1px solid black;
        width: 100%;
        color: black;
    }
    .donnees th, .donnees td {
        border: 1px solid black;
        padding: 5px;
        width: fit-content;
        text-align: center;
    }
</style>