<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item, Methode } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={2} titre="Addition" />
	<Methode lignes={5}>
		Pour additionner deux nombres relatifs :
		<Item lignes={2}>s'ils sont de même signe, alors la somme est du même signe, et on additionne les valeurs absolues</Item>
		<Item lignes={2}>
			s'ils sont de signes différents, la somme est du signe du terme ayant la plus grande valeur absolue, et on soustrait les valeurs absolues
		</Item>
	</Methode>
	<Exemples lignes={2}>
		<Item>{@html math('(-7) + (-9) = (-16)')}</Item>
		<Item>{@html math('(-8) + (+5) = -3')}</Item>
	</Exemples>
</Contenu>
