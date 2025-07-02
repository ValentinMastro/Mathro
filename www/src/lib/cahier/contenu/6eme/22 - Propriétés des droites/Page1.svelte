<script lang="ts">
	import { Chapitre, Contenu } from '$lib/cahier/composants/de_chapitrage/*';
	import { Propriete, Schema } from '$lib/cahier/composants/de_cours/*';
</script>

<Chapitre titre="Propriétés des droites" />

<Contenu apres_un_titre>
	<Propriete>Si deux droites sont parallèles à la même droite, alors elles sont parallèles entre elles.</Propriete>
	<Schema lignes={5} aspectRatioSVG={4}>
		{#snippet svg()}
			<line x1={500} y1={200} x2={3500} y2={300} />
			<line x1={500} y1={500} x2={3500} y2={600} />
			<line x1={500} y1={800} x2={3500} y2={900} />
		{/snippet}
	</Schema>
	<Propriete>Si deux droites sont perpendiculaires à la même droite, alors elles sont parallèles.</Propriete>
	<Propriete>Si deux droites sont parallèles, alors toute perpendiculaire à l'une est perpendiculaire à l'autre.</Propriete>
</Contenu>
