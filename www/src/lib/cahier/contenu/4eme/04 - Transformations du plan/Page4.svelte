<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Propriete, Item, Texte } from '$lib/cahier/composants/de_cours/*';
</script>

<Contenu>
	<Partie numero={4} titre="Propriété de conservation" />
	<Propriete lignes={2}>
		La symétrie axiale, la symétrie centrale et la translation sont des <i>isométries du plan</i>, ce qui signifie que :
	</Propriete>
	<Item>la nature des objets est conservée</Item>
	<Texte couleur="bleu">(Le symétrique d'un carré est un carré.)</Texte>
	<Item>les longueurs sont conservées</Item>
	<Texte couleur="bleu" lignes={2}>(le symétrique d'un segment de longueur 5 cm est un segment de longueur 5 cm)</Texte>
	<Item>les mesures des angles sont conservées</Item>
	<Texte couleur="bleu">(le symétrique d'un angle de 90° est un angle de 90°)</Texte>
	<Item>les aires sont conservées</Item>
	<Texte couleur="bleu" lignes={2}>(le symétrique d'une figure d'aire de 10 cm² est aussi une figure d'aire de 10 cm²)</Texte>
</Contenu>
