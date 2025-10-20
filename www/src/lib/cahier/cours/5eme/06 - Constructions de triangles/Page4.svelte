<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemple, Item, Protocole, Schema } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={4} titre="Construire un triangle avec 1 longueur et 2 angles" />
	<LigneVide />
	<Protocole lignes={5}>
		<Item>Avec la règle, tracer la longueur donnée.</Item>
		<Item lignes={2}>Avec le rapporteur et la règle, tracer une demi-droite pour former le premier angle donné.</Item>
		<Item lignes={2}>Avec le rapporteur et la règle, tracer une demi-droite pour former le deuxième angle donné.</Item>
	</Protocole>
	<LigneVide />
	<Exemple>
		Tracer {@html math('\\text{GHI}')} tel que
		{@html math('\\text{GH} = 5\\,\\text{cm}')},
		{@html math('\\widehat{\\text{GHI}} = 60^{\\circ}')},
		{@html math('\\widehat{\\text{HGI}} = 30^{\\circ}')}.
	</Exemple>
	<Schema lignes={10} aspectRatioSVG={0.8}>
		{#snippet svg()}
			<defs>
				<style>
					.point24 {
						text-anchor: center;
						font-size: 60px;
					}
				</style>
			</defs>
			<line x1={200} x2={200 + 500} y1={800} y2={800} stroke="black" stroke-width={8} />
			<!-- côtés -->
			<line x1={200} y1={800} x2={200 + Math.cos(Math.PI / 6) * 500} y2={800 - Math.sin(Math.PI / 6) * 500} stroke="black" stroke-width={8} />
			<line
				x1={200 + 500}
				y1={800}
				x2={20 + 500 - Math.cos(Math.PI / 3) * 500}
				y2={800 - Math.sin(Math.PI / 3) * 500}
				stroke="black"
				stroke-width={8}
			/>
			<!-- points -->
			<text x={200 - 50} y={800 + 20} class="point24">G</text>
			<text x={200 + 500 + 20} y={800 + 20} class="point24">H</text>
			<text x={500} y={580} class="point24">I</text>
			<text x={200 + 500 - 160} y={800 - 20} class="point24">60°</text>
			<text x={200 + 100} y={800 - 20} class="point24">30°</text>
		{/snippet}
		{#snippet html()}
			<LigneVide />
			<Protocole lignes={4}>
				<Item lignes={2}>
					Tracer le segment {@html math('\\text{GH}')} de <br />
					longueur 5 cm.
				</Item>
				<Item>
					Tracer un angle de 60° en partant de {@html math('\\text{H}')}.
				</Item>
				<Item>
					Tracer un angle de 30° en partant de {@html math('\\text{G}')}.
				</Item>
			</Protocole>
		{/snippet}
	</Schema>
</Contenu>
