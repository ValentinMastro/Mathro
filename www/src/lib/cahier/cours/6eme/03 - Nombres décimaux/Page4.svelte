<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item, Methode, Remarque } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={5} titre="Encadrement et arrondi" />
	<Definition lignes={2}>Encadrer un nombre, c'est trouver deux autres nombres : un plus petit, et un plus grand.</Definition>
	<Remarque lignes={2}>Dans certains cas, on veut que les deux nombres trouvés soient consécutifs.</Remarque>
	<Exemples lignes={4}>
		<Item>Encadrer {@html math('3,2')} à l'unité {@html math('\\longrightarrow 3 < 3,2 < 4')}</Item>
		<Item>Encadrer {@html math('5,126')} au dixième {@html math('\\longrightarrow 5,1 < 5,126 < 5,2')}</Item>
		<Item lignes={2}>Encadrer {@html math('100,876~54')} au dix-millième : <br /> {@html math('100,876~5 < 100,876~54 < 100,876~6')}</Item>
	</Exemples>
	<Definition lignes={2}>
		Arrondir un nombre décimal, c’est le simplifier en gardant seulement <br />
		un certain nombre de chiffres après la virgule.
	</Definition>
	<Methode lignes={6}>
		<Item lignes={2}>Repérer le chiffre à la position où on veut arrondir (unité, dixième, centième, etc.).</Item>
		<Item>Regarder le chiffre juste à droite de cette position :</Item>
		<Item bullet="&rarr;">S’il est 0, 1, 2, 3 ou 4, on garde le chiffre de la position choisie.</Item>
		<Item bullet="&rarr;" lignes={2}>S’il est 5, 6, 7, 8 ou 9, on augmente de 1 le chiffre de la position choisie.</Item>
	</Methode>
	<Exemples lignes={2}>
		<Item>Arrondir {@html math('3,2')} à l'unité {@html math('\\longrightarrow 3,2 \\approx 3')}</Item>
		<Item>Arrondir {@html math('5,126')} au centième {@html math('\\longrightarrow 5,126 \\approx 5,13')}</Item>
	</Exemples>
</Contenu>
