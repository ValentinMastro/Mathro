<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Item, Paragraphe, Protocole, Schema } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<SousPartie numero={2} titre="Mesurer un angle" />
	<Paragraphe couleur="bleu" nom_du_paragraphe="Partons de l'exemple" />
	<Schema lignes={5} aspectRatioSVG={3}>
		{#snippet svg()}
			<line x1={200} y1={800} x2={2800} y2={800} stroke="black" stroke-width={8} />
			{@const rayon = 1000}
			<line x1={200} y1={800} x2={200 + rayon * Math.cos(Math.PI / 4)} y2={800 - rayon * Math.sin(Math.PI / 4)} stroke="black" stroke-width={8} />
		{/snippet}
	</Schema>
	<Protocole lignes={6}>
		<Item lignes={3}>
			Placer le rapporteur tel que :
			<Item>
				le repère du rapporteur est placé sur le sommet de l'angle {@html math('\\color{blue} \\text{E}')}
			</Item>
			<Item>
				le 0 du rapporteur est aligné avec un des côtés de l'angle {@html math('\\color{blue} [\\text{EF})')}
			</Item>
		</Item>
		<Item lignes={2}>
			Lire la mesure de l'angle, en partant du 0 aligné, qui est alignée avec le deuxième côté de l'angle {@html math('\\color{blue} [\\text{ED})')}
		</Item>
		<Item>
			Ici, l'angle mesure {@html math('\\color{blue} 45^\\circ')}
		</Item>
	</Protocole>
</Contenu>
