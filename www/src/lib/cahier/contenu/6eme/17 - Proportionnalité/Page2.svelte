<script lang="ts">
	import { Contenu, SousPartie } from "$lib/cahier/composants/de_chapitrage/*";
	import { Exemples, Propriete, Schema} from "$lib/cahier/composants/de_cours/*";

	let donnees_tableau_1 = [
        {abscisse: 1000, x: 1, y: 0.30},
        {abscisse: 1200, x: 2, y: 0.60},
        {abscisse: 1400, x: 5, y: 1.50}
	];

	let donnees_tableau_2 = [
		{abscisse: 1000, x: 1, y: 50},
		{abscisse: 1200, x: 5, y: 250},
		{abscisse: 1400, x: 10, y: 500}
	]
</script>

{#snippet tableau(donnees: {abscisse: number, x: number, y: number}[], x_label: string, y_label: string, hauteur: number)}
    <rect x={300} y={hauteur} width={1300} height={200} stroke="blue" stroke-width={5} fill="none" />
    <line x1={300} y1={hauteur+100} x2={1600} y2={hauteur+100} stroke="blue" stroke-width={5} />
    <text x={320} y={hauteur+70} font-size={60} fill="black">{x_label}</text>
    <text x={320} y={hauteur+170} font-size={60} fill="black">{y_label}</text>
    {#each donnees as {abscisse: abs, x: x, y: y}}
        <line x1={abs} y1={hauteur} x2={abs} y2={hauteur + 200} stroke="blue" stroke-width={5} />
        <text x={abs + 100} y={hauteur+70} font-size={60} fill="black" text-anchor="middle">{x.toLocaleString()}</text>
        <text x={abs + 100} y={hauteur+170} font-size={60} fill="black" text-anchor="middle">{y.toLocaleString()}</text>
    {/each}
{/snippet}

<Contenu>
    <SousPartie numero={2} titre="Tableau de proportionnalité" />
        <Propriete lignes={2}>
            Lorsque deux grandeurs sont proportionnelles, on peut <br />
            construire un tableau de proportionnalité.
        </Propriete>
        <Exemples />
        <Schema lignes={10} aspectRatioSVG={2}>
            {#snippet svg()}
                {@render tableau(donnees_tableau_1, "Nombre de pommes", "Prix (€)", 200)}
                {@render tableau(donnees_tableau_2, "Durée (h)", "Distance (km)", 700)}
            {/snippet}
        </Schema>
</Contenu>
