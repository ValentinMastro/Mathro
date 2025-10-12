<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Propriete } from '$lib/cahier/composants/de_cours/*';
</script>

<Contenu>
	<Partie numero={2} titre="Lien avec le parallélisme" />

	<Propriete lignes={4}>
		Si, deux angles alternes-internes ou correspondants sont égaux, alors les deux droites sont parallèles.<br />
		Réciproquement, si deux droites sont parallèles, alors les angles alternes-internes et les angles correspondants sont égaux.
	</Propriete>
</Contenu>
