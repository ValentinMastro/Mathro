<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Paragraphe, Schema, Protocole, Item } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<SousPartie numero={2} titre="Construire une droite parallèle à une autre" />
	<Paragraphe nom_du_paragraphe="Consigne">
		Tracer une droite {@html math("(d')")} parallèle à {@html math('(d)')} passant par {@html math('\\text{A}')}.
	</Paragraphe>
	<Schema lignes={8} aspectRatioSVG={1.25}>
		{#snippet svg()}
			<defs>
				<style>
					.point25 {
						font-size: 60px;
						text-anchor: middle;
						vertical-align: center;
					}
					.droite25 {
						font-size: 60px;
						text-anchor: middle;
						vertical-align: center;
						font-style: italic;
					}
				</style>
			</defs>
			<line x1={0} y1={125} x2={1000} y2={125} stroke="red" stroke-width={5} />
			<line x1={0} y1={750} x2={1000} y2={750} stroke="blue" stroke-width={5} />
			<line x1={625} y1={0} x2={625} y2={1000} stroke="green" stroke-width={5} />
			<text x={900} y={200} class="droite25" fill="red">(d)</text>
			<text x={900} y={820} class="droite25" fill="blue">(d')</text>
			<text x={550} y={900} class="droite25" fill="green">(d*)</text>
			<text x={625 + 30} y={750 - 30} class="point25" fill="black">A</text>
			<rect x={625} y={125} width={30} height={30} fill="black" />
			<rect x={625} y={750} width={30} height={30} fill="black" />
			<circle cx={625} cy={750} r={10} fill="black" />
		{/snippet}
	</Schema>
	<Protocole lignes={4}>
		<Item>
			Faire glisser l'équerre le long de {@html math('\\color{red} (d)')}, jusqu'à alignement avec {@html math('\\text{A}')}.
		</Item>
		<Item>
			Tracer la droite {@html math('\\color{forestgreen} (d*)')}, le long de l'équerre.
		</Item>
		<Item>
			Faire glisser l'équerre le long de {@html math('\\color{forestgreen} (d*)')}, jusqu'à alignement avec {@html math('\\text{A}')}.
		</Item>
		<Item>
			Tracer la droite {@html math("\\color{blue} (d~\\text{'})")}, le long de l'équerre.
		</Item>
	</Protocole>
</Contenu>
