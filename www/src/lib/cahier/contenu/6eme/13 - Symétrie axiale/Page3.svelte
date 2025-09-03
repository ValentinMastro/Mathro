<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Propriete, Item } from '$lib/cahier/composants/de_cours/*';
</script>

<Contenu>
	<Partie numero={3} titre="Propriété de conservation" />
	<Propriete lignes={8}>
		La symétrie axiale est une <i>isométrie du plan</i>, cela signifie que :
		<Item lignes={2}>
			la nature des objets est conservée <br />
			<span style="color: blue;">(le symétrique d'un carré est un carré)</span>
		</Item>
		<Item lignes={3}>
			les longueurs sont conservées <br />
			<span style="color: blue;">(le symétrique d'un segment de longueur 5 cm est un segment de longueur 5 cm)</span>
		</Item>
		<Item lignes={2}>
			les mesures des angles sont conservées <br />
			<span style="color: blue;">(le symétrique d'un angle de 90° est un angle de 90°)</span>
		</Item>
	</Propriete>
</Contenu>
