<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Item, Methode, Remarque } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Chapitre titre="Résoudre des problèmes" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Multiplications particulières" />
	<Methode>
		<Item>
			Multiplier par {@html math('0,5')} revient à prendre la moitié d'un nombre : diviser par 2.
		</Item>
		<Item>
			Multiplier par {@html math('0,1')} revient à diviser par 10.
		</Item>
	</Methode>
	<Remarque>
		{@html math('0,5 = \\frac{1}{2}')} et {@html math('0,1 = \\frac{1}{10}')}
	</Remarque>
</Contenu>
