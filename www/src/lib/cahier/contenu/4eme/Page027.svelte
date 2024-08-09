<script lang="ts">
    import { SousPartie, Contenu } from "$lib/cahier/composants/de_chapitrage/*";
    import { Paragraphe, Schema } from "$lib/cahier/composants/de_cours/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { taille_texte, hauteur_ligne_cahier } from "$lib/cahier/store";
    import { math } from 'mathlifier';

    function prefixe(exposant: number): string {
        switch (exposant) {
            case 9: return "giga";
            case 6: return "méga";
            case 3: return "kilo";
            case 2: return "hecto";
            case 1: return "déca";
            case -1: return "déci";
            case -2: return "centi";
            case -3: return "milli";
            case -6: return "micro";
            case -9: return "nano";
            default: return "";
        }
    }

    function symbole(exposant: number): string {
        switch (exposant) {
            case 9: return "G";
            case 6: return "M";
            case 3: return "k";
            case 2: return "h";
            case 1: return "da";
            case -1: return "d";
            case -2: return "c";
            case -3: return "m";
            case -6: return "µ";
            case -9: return "n";
            default: return "";
        }
    }

    let unites = [
        { grandeur: "Masse", unite: "Le kilogramme", symbole: "kg", couleur: "#c9323b",
            constante: "h", lien: "https://fr.wikipedia.org/wiki/Constante_de_Planck" },
        { grandeur: "Longueur", unite: "Le mètre", symbole: "m", couleur: "#ec6c3b",
            constante: "c", lien: "https://fr.wikipedia.org/wiki/Vitesse_de_la_lumi%C3%A8re" },
        { grandeur: "Temps", unite: "La seconde", symbole: "s", couleur: "#f5a02b",
            constante: "Δν", lien: "https://fr.wikipedia.org/wiki/Seconde_(temps)" },
        { grandeur: "Courant électrique", unite: "L'ampère", symbole: "A", couleur: "#68a23c",
            constante: "e", lien: "https://fr.wikipedia.org/wiki/Charge_%C3%A9l%C3%A9mentaire" },
        { grandeur: "Température thermodynamique", unite: "Le kelvin", symbole: "K", couleur: "#1c5d95",
            constante: "k", lien: "https://fr.wikipedia.org/wiki/Constante_de_Boltzmann" },
        { grandeur: "Quantité de matière", unite: "La mole", symbole: "mol", couleur: "#a43f85",
            constante: "N<tspan font-size='40' dx='-10' dy='20'>A</tspan>", lien: "https://fr.wikipedia.org/wiki/Nombre_d%27Avogadro" },
        { grandeur: "Intensité lumineuse", unite: "La candela", symbole: "cd", couleur: "#4a2874",
            constante: "K<tspan font-size='40' dx='-5' dy='20'>cd</tspan>", lien: "https://fr.wikipedia.org/wiki/Candela" }
    ];

    function range(start: number, end: number, step: number): number[] {
                const result = [];
        for (let i = start; step > 0 ? i <= end : i >= end; i += step) {
            result.push(i);
        }
        return result;
    }

    function cos(angle: number): number {
        return Math.cos(angle * Math.PI / 180);
    }
    function sin(angle: number): number {
        return Math.sin(angle * Math.PI / 180);
    }
</script>

<table id="SI_prefixes" style="font-size: {$taille_texte*0.8}px; top: {6.2*$hauteur_ligne_cahier}px; --hauteur: {$hauteur_ligne_cahier}px;">
    <thead>
        <tr>
            {#each ["Milliards", "Millions", "Milliers", "Unités", "Millièmes", "Millionièmes", "Milliardièmes"] as classe}
                <td colspan="3">{classe}</td>
            {/each}
        </tr>
    </thead>
    <tbody>
        <tr>
            {#each range(11, -9, -1) as exposant}
                <td>{@html math(`10^{${exposant}}`)}</td>
            {/each}
        </tr>
        <tr>
            {#each range(11, -9, -1) as exposant}
                <td class="{prefixe(exposant) != "" ? "avec_prefixe" : ""}">
                    {prefixe(exposant)}
                </td>
            {/each}
        </tr>
        <tr>
            {#each range(11, -9, -1) as exposant}
                <td>{symbole(exposant)}</td>
            {/each}
        </tr>
    </tbody>
</table>

<Contenu>
    <SousPartie titre="Système International (SI)" numero={3} />
        <LigneVide />
        <Paragraphe couleur="black" nom_du_paragraphe="Tableau des préfixes du SI" lignes={5} />

        <table id="SI_unites" style="--hauteur={$hauteur_ligne_cahier}px; --taille_texte={$taille_texte}px;">
            <caption style="font-size: {$taille_texte}px;"><u>Les sept unités de base du Système International</u></caption>
            <tbody style="font-size: {$taille_texte}px;">
                <tr style="height: {$hauteur_ligne_cahier}px;">
                    <th>Grandeur physique</th>
                    <th>Unité</th>
                    <th>Symbole de l'unité</th>
                </tr>
                {#each unites as { grandeur, unite, symbole }}
                    <tr style="height: {$hauteur_ligne_cahier}px;">
                        <td>{grandeur}</td>
                        <td>{unite}</td>
                        <td>{symbole}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
        <LigneVide lignes={2} />
        <Schema lignes={10} aspectRatioSVG={2}>
            {#snippet svg()}
                {#snippet secteur(cx: number, cy: number, r1: number, r2: number, r3: number, couleur: string, angle: number)}
                    <path class="petit_secteur"
                        d="M {r1*cos(angle-22.5)} {r1*sin(angle-22.5)}
                        L {r2*cos(angle-22.5)} {r2*sin(angle-22.5)}
                        A {r2} {r2} 0 0 1 {r2*cos(angle+22.5)} {r2*sin(angle+22.5)}
                        L {r1*cos(angle+22.5)} {r1*sin(angle+22.5)}
                        A {r1} {r1} 0 0 0 {r1*cos(angle-22.5)} {r1*sin(angle-22.5)}
                        Z"
                        transform={`translate(${cx}, ${cy})`}
                        opacity="50%"
                        fill={couleur}
                    ></path>
                    <path class="grand_secteur"
                        d="M {r2*cos(angle-22.5)} {r2*sin(angle-22.5)}
                        L {r3*cos(angle-22.5)} {r3*sin(angle-22.5)}
                        A {r3} {r3} 0 0 1 {r3*cos(angle+22.5)} {r3*sin(angle+22.5)}
                        L {r2*cos(angle+22.5)} {r2*sin(angle+22.5)}
                        A {r2} {r2} 0 0 0 {r2*cos(angle-22.5)} {r2*sin(angle-22.5)}
                        Z"
                        transform={`translate(${cx}, ${cy})`}
                        fill={couleur}
                    ></path>
                {/snippet}
                {#each unites as { couleur, constante, lien, symbole }, i}
                    {@render secteur(1000, 500, 160, 256, 448, couleur, - 90 + 51*i)}
                    <text x={1000} y={500-(160+256)/2}
                        font-size="75"
                        font-style="italic"
                        text-anchor="middle" dominant-baseline="middle"
                        transform={`rotate(${51*i}, 1000, 500)`}
                    >
                        {@html constante}
                    </text>
                    <text x={1000} y={500-(256+448)/2}
                        font-size="100"
                        font-weight="bold"
                        fill="white"
                        text-anchor="middle" dominant-baseline="middle"
                        transform={`rotate(${51*i}, 1000, 500)`}
                    >
                        {symbole}
                    </text>
                {/each}
                <text x="1000" y="510" font-size="180" text-anchor="middle" dominant-baseline="middle">SI</text>
            {/snippet}
        </Schema>
</Contenu>

<style>
    #SI_prefixes {
        border-collapse: collapse;
        width: 100%;
        position: absolute;
        background-color: white;
        
        tr {
            border: 1px solid black;
            height: var(--hauteur);
        }
        td {
            width: var(--hauteur);
            border-right: 1px solid black;
            text-align: center;
        }
        td.avec_prefixe {
            width: calc(2*var(--hauteur));
        }
    }

    #SI_unites {
        border-collapse: collapse;
        width: 100%;

        caption {
            margin-bottom: 0.3em;
        }
        th {
            border: 1px solid black;
            background-color: lightgray;
        }
        td {
            border: 1px solid black;
            text-align: center;
        }
    }
</style>