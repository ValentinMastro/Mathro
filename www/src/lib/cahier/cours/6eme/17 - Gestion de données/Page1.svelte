<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { CelluleTableau, Exemple, Item, LigneTableau, Tableau } from '$lib/cahier/composants/de_cours/*';
</script>

<Chapitre titre="Gestion de données" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Tableau à double entrée" />

	<Exemple lignes={5}>
		Dans un collège, pour leur deuxième langue vivante (LV2), les élèves peuvent choisir entre Allemand et Espagnol.
		<Item>Parmi les 23 élèves de 6C, 19 ont choisi Espagnol.</Item>
		<Item>En 6C et 6D, 40 élèves ont choisi Espagnol.</Item>
		<Item>Les élèves de 6C et 6D sont 50 au total.</Item>
	</Exemple>

	<Tableau>
		<LigneTableau>
			<CelluleTableau />
			<CelluleTableau>6C</CelluleTableau>
			<CelluleTableau>6D</CelluleTableau>
			<CelluleTableau>Total</CelluleTableau>
		</LigneTableau>
		<LigneTableau>
			<CelluleTableau>Allemand</CelluleTableau>
			<CelluleTableau />
			<CelluleTableau />
			<CelluleTableau />
		</LigneTableau>
		<LigneTableau>
			<CelluleTableau>Espagnol</CelluleTableau>
			<CelluleTableau />
			<CelluleTableau />
			<CelluleTableau />
		</LigneTableau>
		<LigneTableau>
			<CelluleTableau>Total</CelluleTableau>
			<CelluleTableau />
			<CelluleTableau />
			<CelluleTableau />
		</LigneTableau>
	</Tableau>
</Contenu>
