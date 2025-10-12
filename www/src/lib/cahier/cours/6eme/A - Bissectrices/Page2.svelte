<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Propriete, Schema } from '$lib/cahier/composants/de_cours/*';
</script>

<Contenu>
	<Partie numero={2} titre="Bissectrices dans un triangle" />

	<Propriete lignes={2}>
		Les 3 bissectrices d'un triangle concourrent en un point : <br />
		le centre du cercle inscrit.
	</Propriete>

	<Schema lignes={10}>
		{#snippet svg()}
			<polygon points="100,100 900,300 500,900" fill="none" stroke="black" stroke-width={8} />
			<!-- Bissectrices -->
			<line x1={100} y1={100} x2={1000} y2={821.95} stroke="red" stroke-width={5} />
			<line x1={900} y1={300} x2={0} y2={647.95} stroke="red" stroke-width={5} />
			<line x1={500} y1={900} x2={556.03} y2={0} stroke="red" stroke-width={5} />
			<circle cx={528.41} cy={443.66} r={229.49} stroke="green" stroke-width={8} fill="none" />
		{/snippet}
	</Schema>
</Contenu>
