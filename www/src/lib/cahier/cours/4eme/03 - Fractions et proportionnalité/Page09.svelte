<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={3} titre={'Proportionnalité'} />
	<Definition lignes={2}>Une grandeur est une caractéristique quantifiable, associée à une unité.</Definition>
	<Exemples lignes={2}>
		Distance (m), Prix (€), Durée (s), Température (°C), Masse (kg), <br />
		Énergie (J), Puissance (W), Tension électrique (V), etc.
	</Exemples>
	<Definition lignes={3}>
		Deux grandeurs sont proportionnelles s'il existe un coefficient de proportionnalité, c'est-à-dire un nombre qui, multiplié à l'une des grandeurs,
		donne l'autre.
	</Definition>
	<Exemples lignes={6}>
		<Item lignes={3}>
			Le côté d'un carré et son périmètre sont proportionnels. <br />
			En effet, {@html math('\\mathcal{P}_{\\text{carré}} = 4 \\times c')} où {@html math('c')} est la longueur du côté.<br />
			4 est ici le coefficient de proportionnalité.
		</Item>
		<Item lignes={3}>
			L'âge et la taille d'une personne ne sont pas proportionnels.<br />
			En effet, si une personne a 10 ans et qu'elle mesure 1,20 m, cela ne signifie pas qu'à 20 ans, elle mesurera 2,40 m.
		</Item>
	</Exemples>
</Contenu>
