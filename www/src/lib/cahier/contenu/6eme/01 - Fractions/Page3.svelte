<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={2} titre="Comparaison et encadrement" />
	<Definition lignes={8}>
		Comparer deux nombres consiste à dire lequel est le plus grand ou le plus petit.<br />
		Pour cela, on utilise les symboles :
		<Item>{@html math('\\lt')} (plus petit que)</Item>
		<Item>{@html math('\\gt')} (plus grand que)</Item>
		<Item>{@html math('=')} (égal)</Item>
		<Item>{@html math('\\leqslant')} (plus petit ou égal à)</Item>
		<Item>{@html math('\\geqslant')} (plus grand ou égal à)</Item>
	</Definition>
	<Exemples lignes={5}>
		<Item>{@html math('35 \\lt 40')}</Item>
		<Item>{@html math('54 \\gt 52')}</Item>
		<Item>{@html math('98 = 3 + 95')}</Item>
		<Item>{@html math('32 + 2 \\leqslant 34')}</Item>
		<Item>{@html math('65 \\geqslant 54 + 11')}</Item>
	</Exemples>
	<Definition lignes={2}>
		Ordre croissant : du plus petit au plus grand <br />
		Ordre décroissant : du plus grand au plus petit
	</Definition>
	<Exemples lignes={2}>
		<Item>{@html math('1 \\lt 2 \\lt 7 \\lt 12')} (ordre croissant)</Item>
		<Item>{@html math('19 \\gt 18 \\gt 15 \\gt 8')} (ordre décroissant)</Item>
	</Exemples>
</Contenu>
