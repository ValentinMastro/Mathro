<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item, Methode, Remarque } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={2} titre="Tester une égalité" />
	<Definition lignes={2}>
		Tester une égalité consiste à vérifier si elle est vraie pour une valeur numérique <br />
		particulière en remplaçant la lettre par cette valeur.
	</Definition>
	<Methode lignes={4}>
		<Item>Remplacer la lettre par la valeur numérique dans le membre gauche et dans le membre droit.</Item>
		<Item>Calculer chaque membre séparément.</Item>
		<Item>Conclure : l'égalité est vraie si les deux membres sont égaux, fausse sinon.</Item>
	</Methode>
	<Exemples lignes={8}>
		<Item lignes={3}>
			Tester {@html math('2(x + 3) = 2x + 6')} pour {@html math('x = 4')} : <br />
			Membre gauche : {@html math('2(4 + 3) = 2 \\times 7 = 14')}. <br />
			Membre droit : {@html math('2 \\times 4 + 6 = 8 + 6 = 14')}. → Égalité <b>vraie</b>.
		</Item>
		<Item lignes={3}>
			Tester {@html math('x^2 = 2x')} pour {@html math('x = 3')} : <br />
			Membre gauche : {@html math('3^2 = 9')}. <br />
			Membre droit : {@html math('2 \\times 3 = 6')}. → Égalité <b>fausse</b>.
		</Item>
	</Exemples>
	<Remarque lignes={2}>
		Une égalité vraie pour une valeur particulière n'est pas forcément toujours vraie. <br />
		Exemple : {@html math('x^2 = 2x')} est vraie pour {@html math('x = 2')} mais fausse pour {@html math('x = 3')}.
	</Remarque>
</Contenu>
