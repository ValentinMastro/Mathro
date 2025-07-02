<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item, Remarque } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={2} titre="Pourcentages" />

	<Definition>Un pourcentage est une fraction dont le dénominateur est égale à 100.</Definition>
	<Exemples>
		<Item>{@html math('30 \% = \\frac{30}{100}')}</Item>
		<Item>{@html math('76 \% = \\frac{76}{100}')}</Item>
	</Exemples>

	<Remarque>
		<Item>
			{@html math('10 \% = ')} un dixième
		</Item>
		<Item>
			{@html math('25 \% = ')} un quart
		</Item>
		<Item>
			{@html math('50 \% = ')} la moitié
		</Item>
		<Item>
			{@html math('75 \% = ')} trois quarts
		</Item>
	</Remarque>
</Contenu>
