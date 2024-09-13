<script lang="ts">
    import { Contenu, Partie } from "$lib/cahier/composants/de_chapitrage/*";
    import { Definition, Notation, Exemples, Schema, Item, Exemple } from "$lib/cahier/composants/de_cours/*";
	import LigneVide from "$lib/cahier/composants/LigneVide.svelte";
</script>

{#snippet segment()}
	<line x1="200" y1="200" x2="5800" y2="800" stroke="black" stroke-width="15"></line>
	<line x1="200" x2="200" y1="100" y2="300" stroke="black" stroke-width="15"></line>
	<line x1="5800" x2="5800" y1="700" y2="900" stroke="black" stroke-width="15"></line>
	<text x="200" y="500" font-size="200" fill="black">U</text>
	<text x="5800" y="700" font-size="200" fill="black">V</text>
{/snippet}

<Contenu>
		<Definition lignes={2}>
			Un segment est une portion de droite délimitée par deux points : ses extrémités.
		</Definition>
		<Notation>
			On note les deux extrémités du segment entre crochets.
		</Notation>
		<Exemples></Exemples>
		<Schema lignes={3} aspectRatioSVG={6}>
			{#snippet svg()}
				{@render segment()}
			{/snippet}
		</Schema>
		<LigneVide />
		<Definition lignes={2}>
			Le milieu d'un segment est le point qui partage le segment en deux parties égales.
		</Definition>
		<Exemple>
			M est le milieu du segment [UV].
		</Exemple>
		<LigneVide />
		<Schema lignes={3} aspectRatioSVG={6}>
			{#snippet svg()}
				{@render segment()}
				<line x1="3000" x2="3000" y1="400" y2="600" stroke="black" stroke-width="15"></line>
				<text x="2900" y="300" font-size="200" fill="black">M</text>
			{/snippet}
		</Schema>
</Contenu>