<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Item, Paragraphe, Protocole, Schema } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

	import { math } from 'mathlifier';
</script>

<Contenu>
	<SousPartie numero={3} titre="Construire une médiatrice" />
	<Definition lignes={2}>
		La <i>médiatrice</i> d'un segment est la droite perpendiculaire à ce segment qui passe par son milieu.
	</Definition>
	<Paragraphe nom_du_paragraphe="Consigne">
		Tracer {@html math('\\color{red} (m)')} la médiatrice du segment {@html math('[\\text{AB}]')}.
	</Paragraphe>
	<Schema lignes={10}>
		{#snippet svg()}
			<defs>
				<style>
					.point26 {
						font-size: 70px;
						text-anchor: middle;
						vertical-align: center;
					}
					.droite26 {
						font-size: 60px;
						text-anchor: middle;
						vertical-align: center;
						font-style: italic;
					}
				</style>
			</defs>
			<line x1={200} y1={200} x2={800} y2={800} stroke="black" stroke-width={5} />
			<text x={200 - 30} y={200 - 30} class="point26">A</text>
			<text x={800 + 40} y={800 + 40} class="point26">B</text>
			<circle cx={200} cy={200} r={10} fill="black" />
			<circle cx={800} cy={800} r={10} fill="black" />
			<!-- Milieu -->
			<text x={500} y={500 - 30} class="point26" fill="green">I</text>
			<!-- Codage -->
			<line x1={320} y1={380} x2={380} y2={320} stroke="red" stroke-width={5} />
			<line x1={620} y1={680} x2={680} y2={620} stroke="red" stroke-width={5} />
			<!-- Médiatrice -->
			<line x1={100} y1={900} x2={900} y2={100} stroke="red" stroke-width={5} />
			<text x={100 - 30} y={900 - 30} class="droite26" fill="red">(m)</text>
			<!-- Angle droit -->
			<rect x={500} y={500} width={25} height={25} fill="black" transform="rotate(-45,500,500)" />
		{/snippet}
	</Schema>
	<Protocole lignes={3}>
		<Item>
			Avec la règle, déterminer {@html math('\\textcolor{darkgreen}{\\text{I}}')} le milieu du segment {@html math('[\\text{AB}]')}.
		</Item>
		<Item lignes={2}>
			Avec l'équerre, tracer la droite {@html math('\\color{red} (m)')} perpendiculaire à {@html math('[\\text{AB}]')} <br />
			passant par {@html math('\\textcolor{darkgreen}{\\text{I}}')}.
		</Item>
	</Protocole>
</Contenu>
