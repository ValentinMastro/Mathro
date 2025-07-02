<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item, Notation } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Chapitre titre="Dépendance de grandeurs" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Grandeur dépendante" />
	<Definition lignes={3}>
		Deux grandeurs quantitatives sont dépendantes s'il existe une expression mathématique qui permet de calculer la valeur de l'une à partir de la
		valeur de l'autre.
	</Definition>
	<Exemples lignes={8}>
		<Item lignes={4}>
			L'<b>aire d'un disque</b> dépend de son <b>rayon.</b> <br />
			En effet, il est possible d'écrire la formule de l'aire d'un disque en <br />
			fonction de son rayon.<br />
			{@html math('\\mathcal{A}_{\\text{disque}} = \\pi \\times \\text{rayon}^2')}
		</Item>
		<Item lignes={4}>
			Lorsqu'il fait froid et qu'il y a du vent, la température ressentie <br />
			est plus basse. La <b>température ressentie</b> est dépendante de la <br />
			<b>température ambiante</b> et de la <b>vitesse du vent</b>. <br />
			{@html math(
				'T_{\\text{ressentie}} = T_{\\text{ambiante}} + 0{,}2 \\times (0{,}1235 \\times T_{\\text{ambiante}} - 1{,}59) \\times V_{\\text{vent}}'
			)}
		</Item>
	</Exemples>
	<Notation lignes={4}>
		On dit que :
		<Item>
			L'aire d'un disque s'exprime <b>en fonction de</b> son rayon.
		</Item>
		<Item lignes={2}>
			La température ressentie s'exprime <b>en fonction de</b> la température ambiante et de la vitesse du vent.
		</Item>
	</Notation>
</Contenu>
