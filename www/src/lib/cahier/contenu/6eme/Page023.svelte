<script lang="ts">
	import { Contenu, DansLaMarge } from "$lib/cahier/composants/de_chapitrage/*";
	import { Definition, Notation, Schema, Texte } from "$lib/cahier/composants/de_cours/*";
    import { Slider } from "$lib/cahier/composants/de_marge/*"
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math } from 'mathlifier';

    let slider_1: number = $state(100);
    let slider_2: number = $state(0);
    let slider_3: number = $state(-100);
</script>

<DansLaMarge>
    <LigneVide lignes={10} />
    <Slider min={-300} max={300} bind:valeur={slider_1} />
    <Slider min={-300} max={300} bind:valeur={slider_2} />
    <Slider min={-300} max={300} bind:valeur={slider_3} />
</DansLaMarge>

<Contenu>
    <Definition lignes={2}>
        Si deux droites sont sécantes, et qu'elles forment un angle droit, 
        alors elles sont perpendiculaires.
    </Definition>
    <LigneVide />
    <Notation lignes={2}>
        Si {@html math('(d)')} et {@html math("(d')")} sont perpendiculaires,
        on note {@html math("(d) \\perp (d')")}.<br>
        Sur un schéma, le symbole {@html math("\\blacksquare")} ou {@html math("\\square")} indique un angle droit.
    </Notation>
    <LigneVide />
    <Schema lignes={10} aspectRatioSVG={1.1}>
        {#snippet svg()}
            <defs>
                <style>
                    text {
                        font-size: 60px;
                        text-anchor: middle;
                        vertical-align: center;
                    }
                    .droite {
                        font-style: italic;
                    }
                </style>
            </defs>
            <line x1={0} y1={500 + slider_1} x2={1000} y2={500 + slider_1} stroke="red" stroke-width={5} />
            <line x1={500 + slider_2} y1={0} x2={500 + slider_2} y2={1000} stroke="blue" stroke-width={5} />
            <line x1={0} y1={500 + slider_3} x2={1000} y2={500 + slider_3} stroke="green" stroke-width={5} />
            <text x={900} y={470 + slider_1} class="droite" fill="red">(d)</text>
            <text x={430 + slider_2} y={900} class="droite" fill="blue">(d')</text>
            <text x={100} y={470 + slider_3} class="droite" fill="green">(d'')</text>
            <!-- Angles droits -->
            <rect x={500 + slider_2} y={500 + slider_1} width={30} height={30} fill="black" />
            <rect x={500 + slider_2} y={500 + slider_3} width={30} height={30} fill="black" />
        {/snippet}
        {#snippet html()}
            <LigneVide lignes={2} />
            <Texte>
                {@html math("{\\color{red} (d)} \\perp {\\color{blue} (d')}")}
            </Texte>
            <Texte>
                {@html math("{\\color{blue} (d')} \\perp {\\color{green} (d'')}")}
            </Texte>
            <Texte>
                De plus, {@html math("{\\color{red} (d)} \\backslash \\backslash {\\color{green} (d'')}")}
            </Texte>
        {/snippet}
    </Schema>
</Contenu>