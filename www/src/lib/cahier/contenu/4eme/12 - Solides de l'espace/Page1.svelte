<script lang="ts">
	import { Chapitre, Contenu } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Schema } from '$lib/cahier/composants/de_cours/*';
</script>

<Chapitre titre="Solides de l'espace" />

<Contenu apres_un_titre>
	<Definition lignes={6}>
		Un solide est un objet de l'espace, possédant trois dimensions : longueur, largeur, hauteur.<br />
		La face d'un solide est une figure plane, en deux dimensions, qui le délimite.<br />
		Une arête est un segment commun à deux faces.<br />
		Un sommet est le point commun à plusieurs arêtes.
	</Definition>
	<Schema lignes={10} aspectRatioSVG={2}>
		{#snippet svg()}
			<defs>
				<marker id="fleche" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
					<path d="M 0 0 L 10 5 L 0 10 z" fill="black" />
				</marker>
			</defs>
			<!-- Face de droite -->
			<path d="M 1100 300 l 200 -200 l 0 500 l -200 200 Z" fill="gray" stroke="none" />

			<!-- Cube en perspective cavalière -->
			<rect x="600" y="300" width="500" height="500" fill="none" stroke="black" stroke-width="4" />
			<path d="M 600 300 l 200 -200 l 500 0 l -200 200 Z" fill="none" stroke="black" stroke-width="4" />
			<path d="M 600 800 l 200 -200 l 0 -500" fill="none" stroke="black" stroke-width="4" stroke-dasharray="20 20" />
			<line x1="800" y1="600" x2="1300" y2="600" stroke="black" stroke-width="4" stroke-dasharray="20 20" />

			<!-- Légendes -->
			<text x="1410" y="450" text-anchor="start" dominant-baseline="middle" font-size="60px" stroke="none" fill="black"> Face </text>
			<line x1="1400" y1="450" x2="1200" y2="450" stroke="black" stroke-width="4" marker-end="url(#fleche)" />
			<text x="380" y="550" text-anchor="end" dominant-baseline="middle" font-size="60px" stroke="none" fill="black"> Arête </text>
			<line x1="400" y1="550" x2="580" y2="550" stroke="black" stroke-width="4" marker-end="url(#fleche)" />
			<text x="1460" y="100" text-anchor="start" dominant-baseline="middle" font-size="60px" stroke="none" fill="black"> Sommet </text>
			<line x1="1450" y1="100" x2="1310" y2="100" stroke="black" stroke-width="4" marker-end="url(#fleche)" />
		{/snippet}
	</Schema>
</Contenu>
