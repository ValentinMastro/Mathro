<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item, Methode } from '$lib/cahier/composants/de_cours/*';

	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={2} titre="Arrondir un nombre décimal" />

	<Definition lignes={2}>
		<i>Arrondir</i> un nombre décimal, c’est le remplacer par un nombre proche plus simple, en conservant un certain <i>nombre de chiffres</i>.
	</Definition>

	<Methode lignes={6}>
		Pour arrondir à une position donnée :
		<Item>Repèrer le <i>chiffre à garder</i> (unité, dixième, centième…).</Item>
		<Item lignes={3}>
			Regarder le <i>chiffre suivant</i> :
			<Item>s’il est <i>0,1,2,3,4</i> → rien ne change</Item>
			<Item>s’il est <i>5,6,7,8,9</i> → on ajoute 1 au chiffre à garder.</Item>
		</Item>
		<Item>Effacer les chiffres après la position donnée.</Item>
	</Methode>

	<Exemples lignes={5}>
		<Item>Arrondir à l'unité {@html math('34,27 \\, \\longrightarrow \\, 34,27 \\approx 34')}</Item>
		<Item>Arrondir à l'unité {@html math('34,57 \\, \\longrightarrow \\, 34,57 \\approx 35')}</Item>
		<Item>Arrondir au dixième {@html math('12,34 \\, \\longrightarrow \\, 12,34 \\approx 12,3')}</Item>
		<Item>Arrondir au dixième {@html math('12,36 \\, \\longrightarrow \\, 12,36 \\approx 12,4')}</Item>
		<Item>Arrondir au centième {@html math('7,842 \\, \\longrightarrow \\, 7,842 \\approx 7,84')}</Item>
	</Exemples>
</Contenu>
