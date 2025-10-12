<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemple, Item, Protocole, Schema, Texte } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import { Angle, DemiDroite, Polygone } from '$lib/cahier/composants/svg/*';

	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={3} titre="Construire un triangle avec 2 longueurs et 1 angle" />
	<Protocole lignes={5}>
		<Item>Avec la règle, tracer le côté le plus long du triangle.</Item>
		<Item lignes={2}>Avec le rapporteur et la règle, tracer une demi-droite pour former l'angle donné.</Item>
		<Item lignes={2}>Placer le troisième point du triangle sur la demi-droite en utilisant la deuxième longueur donnée.</Item>
	</Protocole>
	<Exemple>
		Tracer {@html math('\\text{DEF}')} tel que
		{@html math('\\text{DE} = 4{,}8\\,\\text{cm}')},
		{@html math('\\text{EF} = 4{,}2\\,\\text{cm}')} et
		{@html math('\\widehat{\\text{DEF}} = 45^{\\circ}')}.
	</Exemple>
	<Schema lignes={5} aspectRatioSVG={4}>
		{#snippet svg()}
			{@const D = { x: 1200, y: 800 }}
			{@const E = { x: 2400, y: 800 }}
			{@const F = { x: 1800, y: 200 }}
			<DemiDroite origine={E} passantPar={F} />
			<Angle r={120} points={[D, E, F]} fill="forestgreen" />
			<Polygone points={[D, E, F]} afficher_points noms={['D', 'E', 'F']} taille_nom={100} />
		{/snippet}
	</Schema>
	<Texte couleur="bleu" lignes={3}>
		<Item>
			Tracer le segment {@html math('\\text{DE}')} de longueur 5 cm.
		</Item>
		<Item>
			Tracer un angle de 45° en partant de {@html math('\\text{E}')}.
		</Item>
		<Item>
			Placer le point {@html math('\\text{F}')} sur la demi-droite en utilisant la longueur 3 cm.
		</Item>
	</Texte>
</Contenu>
