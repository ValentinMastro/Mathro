<script lang="ts">
	import { Contenu, DansLaMarge, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemple, Item, Propriete, Texte } from '$lib/cahier/composants/de_cours/*';
	import { Exercice, Slider } from '$lib/cahier/composants/de_marge/*';

	let pourcentage_augmentation: number = $state(20);
	let augmentation: number = $derived((50 * pourcentage_augmentation) / 100);
	let resultat_augmentation: number = $derived((50 * (100 + pourcentage_augmentation)) / 100);
</script>

<DansLaMarge lignes_vides={9}>
	<Texte lignes_vides={0}><center>+ {pourcentage_augmentation}%</center></Texte>
	<Slider min={0} max={100} pas={10} bind:valeur={pourcentage_augmentation} />
	<Exercice niveau={4} id_exercice={2008} position={12} />
	<Exercice niveau={4} id_exercice={2009} position={15} />
</DansLaMarge>

<Contenu>
	<SousPartie numero={3} titre="Augmentation par un pourcentage" />
	<Propriete lignes={3}>
		Pour augmenter une valeur de <math><mi>p</mi><mo>%</mo></math> :
		<Item>
			je calcule <math><mi>p</mi><mo>%</mo></math> puis je l'ajoute à la valeur initiale
		</Item>
		<Item>
			<u>OU</u> je calcule <math><mo>(</mo><mn>100</mn><mo>+</mo><mi>p</mi><mo>)</mo><mo>%</mo></math> de la valeur initiale
		</Item>
	</Propriete>

	<Exemple lignes={3}>
		<math><mn>50</mn><mi class="euro" mathvariant="normal">€</mi></math> augmenté de {pourcentage_augmentation} % :
		<Item>
			<math>
				<mn>{pourcentage_augmentation}</mn><mo>%</mo>
				<mo> de </mo>
				<mn>50</mn><mi class="euro" mathvariant="normal">€</mi>
				<mo>=</mo>
				<munder><mrow><mn>{augmentation}</mn><mi class="euro" mathvariant="normal">€</mi></mrow><mo stretchy="true">_</mo></munder>
				<mo>⟶</mo>
				<mn>50</mn><mi class="euro" mathvariant="normal">€</mi><mo>+</mo>
				<munder><mrow><mn>{augmentation}</mn><mi class="euro" mathvariant="normal">€</mi></mrow><mo stretchy="true">_</mo></munder>
				<mo>=</mo>
				<menclose notation="box"><mn>{resultat_augmentation}</mn><mi class="euro" mathvariant="normal">€</mi></menclose>
			</math>
		</Item>
		<Item>
			<math>
				<mn>{100 + pourcentage_augmentation}</mn><mo>%</mo>
				<mo> de </mo>
				<mn>50</mn><mi class="euro" mathvariant="normal">€</mi>
				<mo>=</mo>
				<menclose notation="box"><mn>{resultat_augmentation}</mn><mi class="euro" mathvariant="normal">€</mi></menclose>
			</math>
		</Item>
	</Exemple>
</Contenu>

<style>
	.euro {
		font-family: Arial, sans-serif;
	}
</style>
