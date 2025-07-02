<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item, Ligne, LigneTableau, Tableau } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import { math, display } from 'mathlifier';
</script>

<Chapitre titre="Échelles, agrandissements et réductions" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Échelles" />
	<Definition lignes={3.4}>
		Sur une carte, une échelle est le rapport entre une distance sur la carte et la distance réelle correspondante.
		{@html display('\\text{échelle} = \\dfrac{\\text{distance sur la carte}}{\\text{distance réelle}}')}
	</Definition>
	<Exemples lignes={7}>
		<Item>
			Sur une carte à l'échelle {@html math('\\frac{1}{10~000}')}, sachant que la distance
		</Item>
		<Ligne lignes={2} addStyle="margin-left: calc(1/21 * 100%); width: calc(20/21 * 100%); color: var(--bleu);">
			réelle entre Meaux et Paris est de 40 km, à quelle distance cela correspond-il sur la carte ?
		</Ligne>
		<LigneVide />
		<Tableau addStyle="width: calc(15/21 * 100%); margin-left: auto; margin-right: auto;">
			<LigneTableau>
				<td>Distance sur la carte (km)</td>
				<td>1</td>
				<td>?</td>
			</LigneTableau>
			<LigneTableau>
				<td>Distance réelle (km)</td>
				<td>10000</td>
				<td>40</td>
			</LigneTableau>
		</Tableau>
		La distance réelle vaut {@html math('40 \\div 10~000 = 0{,}004 \\text{ km} = 400 \\text{ cm}')}
		<Item></Item>
	</Exemples>
</Contenu>
