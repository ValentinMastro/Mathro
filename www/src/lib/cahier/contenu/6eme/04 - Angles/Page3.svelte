<script lang="ts">
	import { Contenu, DansLaMarge, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Paragraphe, Protocole, Item, Schema } from '$lib/cahier/composants/de_cours/*';
	import { Slider } from '$lib/cahier/composants/de_marge/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import { DemiDroite, Point, SecteurAngulaire } from '$lib/cahier/composants/svg/*';

	import { math } from 'mathlifier';

	let étape = $state(3);
</script>

<DansLaMarge>
	<LigneVide lignes={20} />
	<Slider bind:valeur={étape} min={0} max={3} label="étape" />
</DansLaMarge>

<Contenu>
	<Partie numero={2} titre="Utiliser le rapporteur" />

	<SousPartie numero={1} titre="Tracer un angle de mesure donnée" />
	<Paragraphe couleur="bleu" nom_du_paragraphe="Partons d'un exemple">
		Tracer {@html math('\\widehat{\\text{ABC}} = 30^\\circ')}
	</Paragraphe>
	<Protocole lignes={8}>
		<Item>
			Tracer un côté de l'angle {@html math('\\color{blue} [\\text{BC})')}
		</Item>
		<Item lignes={3}>
			Placer le rapporteur tel que :
			<Item>
				le repère du rapporteur est placé sur le sommet de l'angle : {@html math('\\color{blue} \\text{B}')}
			</Item>
			<Item lignes={2}>
				le 0 du rapporteur est aligné avec le côté de l'angle {@html math('\\color{blue} [\\text{BC})')}
			</Item>
		</Item>
		<Item lignes={2}>
			Sur le rapporteur, en partant du 0 aligné, repérer la mesure de l'angle {@html math('\\color{blue} 30^\\circ')}
		</Item>
		<Item lignes={2}>
			Tracer le deuxième côté de l'angle {@html math('\\color{blue} [\\text{BA})')}
		</Item>
	</Protocole>
	<Schema lignes={5} aspectRatioSVG={3}>
		{#snippet svg()}
			{@const A = { x: 1200, y: 220 }}
			{@const B = { x: 200, y: 800 }}
			{@const C = { x: 2200, y: 800 }}
			{@const { dx, dy } = { dx: 0, dy: 120 }}
			{@const type = { forme: 'croix', taille: 30 }}
			{#if étape >= 1}
				<DemiDroite origine={B} passantPar={C} />
				<Point nom="B" point={B} {type} font-size={120} {dx} {dy} />
				<Point nom="C" point={C} {type} font-size={120} {dx} {dy} />
			{/if}
			{#if étape >= 2}
				<SecteurAngulaire cx={B.x} cy={B.y} r={300} angle1={0} angle2={Math.PI / 6} fill="darkgreen" />
				<text x={650} y={750} text-anchor="middle" alignment-baseline="middle" font-size={120} fill="darkgreen">30°</text>
			{/if}
			{#if étape >= 3}
				<DemiDroite origine={B} passantPar={A} />
				<Point nom="A" point={A} {type} font-size={120} {dx} {dy} />
			{/if}
		{/snippet}
	</Schema>
</Contenu>
