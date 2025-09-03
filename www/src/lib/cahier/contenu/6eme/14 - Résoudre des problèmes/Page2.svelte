<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemple, Exemples, Item, Methode, MultiItem, Remarque } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={2} titre="Pourcentages" />

	<Definition>Un pourcentage est une fraction dont le dénominateur est égale à 100.</Definition>
	<Exemples>
		<MultiItem colonnes={2}>
			<Item>{@html math('30~\\% = \\frac{30}{100}')}</Item>
			<Item>{@html math('76~\\% = \\frac{76}{100}')}</Item>
		</MultiItem>
	</Exemples>

	<Remarque lignes={3}>
		Quelques valeurs courantes :
		<MultiItem colonnes={2}>
			<Item>
				{@html math('10~\\% = ')} un dixième
			</Item>
			<Item>
				{@html math('25~\\% = ')} un quart
			</Item>
		</MultiItem>
		<MultiItem colonnes={2}>
			<Item>
				{@html math('50~\\% = ')} la moitié
			</Item>
			<Item>
				{@html math('75~\\% = ')} trois quarts
			</Item>
		</MultiItem>
	</Remarque>

	<Methode lignes={2}>Pour calculer le pourcentage d'un nombre, on peut utiliser sa forme fractionnaire.</Methode>
	<Exemple lignes={2}>
		Calculons {@html math('30\\%~\\text{de}~50')}.<br />
		{@html math('30\\%~\\text{de}~50 = \\frac{30}{100} \\times 50 = 30 \\times 50 \\div 100 = 15')}
	</Exemple>
</Contenu>
