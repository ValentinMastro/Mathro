<script lang="ts">
    import { Contenu, DansLaMarge, Chapitre, Partie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Definition, Schema, Propriete, Texte } from "$lib/cahier/composants/de_cours/*";
    import { Slider } from "$lib/cahier/composants/de_marge/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";

    import { math, display } from "mathlifier";

    let nombre_de_points: number = 1000;
    let points_aleatoires = Array(nombre_de_points).fill(0).map(() => Math.random() * 2 * Math.PI);
    
    let slider_1: number = $state(nombre_de_points);
    let slider_2: number = $state(30);

    let angle_2: number = $derived(slider_2 * Math.PI / 180);
</script>

<Chapitre titre="Figures simples" />

<DansLaMarge>
    <LigneVide lignes={13} />
    <Slider bind:valeur={slider_1} min={1} max={nombre_de_points} pas={1} />
    <LigneVide lignes={8} />
    <Slider bind:valeur={slider_2} min={0} max={180} pas={1} />
</DansLaMarge>

<Contenu apres_un_titre>
    <Partie numero={1} titre="Autour du cercle" />
        <LigneVide />
        <Definition lignes={4}>
            Soit un point {@html math("\\text{O}")}. <br>
            Soit une distance {@html math("r")}. <br>
            L'ensemble des points situés à une distance {@html math("r")} du point {@html math("\\text{O}")} est 
            appelé cercle de centre {@html math("\\text{O}")} et de rayon {@html math("r")}.
        </Definition>
        <Schema lignes={10} aspectRatioSVG={2}>
            {#snippet svg()}
                <defs>
                    <style>
                        text {
                            font-family: Katex_Main;
                        }
                        .italic {
                            font-style: italic;
                        }
                    </style>
                </defs>
                <!-- Point O -->
                <circle cx={1000} cy={500} r={10} fill="black" />
                <text x={1000} y={500} dx={40} dy={-10} text-anchor="middle" font-size={70}>O</text>
                <!-- Rayon r=400 unités -->
                <line x1={1000} y1={500} x2={1000-400} y2={500} stroke="red" stroke-width={5} />
                <text x={1000-200} y={500} dx={0} dy={40} text-anchor="middle" font-size={70} fill="red" class="italic">r</text>
                <!-- On génère le cercle de centre O et de rayon r, en utilisant des points aléatoires -->
                {#each points_aleatoires.slice(0, slider_1) as angle}
                    <!-- Point sur le cercle -->
                    <circle cx={1000 + 400 * Math.cos(angle)} cy={500 + 400 * Math.sin(angle)} r={2} fill="black" />
                {/each}
            {/snippet}
        </Schema>

        <Schema lignes={8} aspectRatioSVG={1} position_html='gauche'>
            {#snippet html()}
                <Definition lignes={3}>
                    Le diamètre d'un cercle est un segment reliant deux points du cercle et passant par le centre.
                </Definition>
                <Propriete lignes={2}>
                    Le diamètre d'un cercle mesure le double de son rayon. <br>
                </Propriete>
                <Texte lignes={2} addStyle="color: red; display: flex; justify-content: center;">
                    {@html math("d = 2 \\times r")}<br>
                    {@html math("r = \\frac{d}{2}")}
                </Texte>
            {/snippet}
            {#snippet svg()}
                <!-- Point O -->
                <circle cx={500} cy={500} r={10} fill="black" />
                <text x={500} y={500} dx={40} dy={-10} text-anchor="middle" font-size={70}>O</text>
                <!-- Cercle -->
                <circle cx={500} cy={500} r={375} fill="none" stroke="black" stroke-width={5} />
                <!-- Diamètre -->
                <line 
                    x1={500-375*Math.cos(angle_2)} y1={500-375*Math.sin(angle_2)} 
                    x2={500+375*Math.cos(angle_2)} y2={500+375*Math.sin(angle_2)}
                    stroke="red" stroke-width={5} />
                <text x={500} y={500} dx={-100} dy={60} text-anchor="middle" font-size={70} fill="red" class="italic">d</text>
            {/snippet}
        </Schema>
</Contenu>