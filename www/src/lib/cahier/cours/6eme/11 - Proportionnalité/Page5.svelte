<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { CelluleTableau, Definition, Exemple, Item, LigneTableau, Tableau, Texte } from '$lib/cahier/composants/de_cours/*';

	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={3} titre="Échelles" />
	<Definition lignes={4}>
		Sur une carte, une échelle est le rapport entre une distance sur la <br />
		carte et la distance réelle correspondante. <br /><br />
		<div class="center">{@html math('\\text{échelle} = \\dfrac{\\text{distance sur la carte}}{\\text{distance réelle}}')}</div>
	</Definition>

	<Exemple lignes_vides={0} />
	<Texte couleur="bleu" lignes={3}>
		Sur une carte à l'échelle {@html math('\\frac{1}{10~000}')}, sachant que la distance réelle entre Meaux et Paris est de 40 km, à quelle distance
		cela correspond-il sur la carte ?
	</Texte>
	<Tableau>
		<LigneTableau>
			<CelluleTableau colonnes={10}>Distance sur la carte (km)</CelluleTableau>
			<CelluleTableau colonnes={5}>1</CelluleTableau>
			<CelluleTableau colonnes={5}>?</CelluleTableau>
		</LigneTableau>
		<LigneTableau>
			<CelluleTableau colonnes={10}>Distance réelle (km)</CelluleTableau>
			<CelluleTableau colonnes={5}>10000</CelluleTableau>
			<CelluleTableau colonnes={5}>40</CelluleTableau>
		</LigneTableau>
	</Tableau>
	<Texte couleur="bleu">
		La distance réelle vaut {@html math('40 \\div 10~000 = 0{,}004 \\text{ km} = 400 \\text{ cm}')}
	</Texte>
</Contenu>

<style>
	.center {
		text-align: center;
	}
</style>
