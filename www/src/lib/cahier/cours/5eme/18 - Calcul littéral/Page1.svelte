<script lang="ts">
	import { Chapitre, Contenu, DansLaMarge, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item, Methode, Remarque } from '$lib/cahier/composants/de_cours/*';
	import { Nombre } from '$lib/cahier/composants/de_marge/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import { math } from 'mathlifier';

	let x = $state(4);
	let y = $state(3);
</script>

<Chapitre titre="Calcul littéral" />

<DansLaMarge apres_un_titre lignes_vides={14}>
	<Nombre bind:valeur={x} min={1} max={99} label="x" />
	<LigneVide lignes={2} />
	<Nombre bind:valeur={y} min={1} max={99} label="y" />
</DansLaMarge>

<Contenu apres_un_titre>
	<Partie numero={1} titre="Tester une égalité" />
	<Definition lignes={2}>
		Tester une égalité consiste à vérifier si elle est vraie pour une valeur numérique particulière en remplaçant la lettre par cette valeur.
	</Definition>
	<Methode lignes={5}>
		<Item lignes={2}>Remplacer la lettre par la valeur numérique dans le membre gauche et dans le membre droit.</Item>
		<Item>Calculer chaque membre séparément.</Item>
		<Item lignes={2}>Conclure : l'égalité est vraie si les deux membres sont égaux, fausse sinon.</Item>
	</Methode>
	<Exemples lignes={6}>
		<Item lignes={3}>
			Tester {@html math('2(x + 3) = 2x + 6')} pour {@html math('x = 4')} : <br />
			Membre gauche : {@html math('2(4 + 3) = 2 \\times 7 = 14')}. <br />
			Membre droit : {@html math('2 \\times 4 + 6 = 8 + 6 = 14')}. → Égalité <b>vraie</b>.
		</Item>
		<Item lignes={3}>
			Tester {@html math('y^2 = 2y')} pour {@html math('y = 3')} : <br />
			Membre gauche : {@html math('3^2 = 9')}. <br />
			Membre droit : {@html math('2 \\times 3 = 6')}. → Égalité <b>fausse</b>.
		</Item>
	</Exemples>
	<Remarque lignes={3}>
		Une égalité vraie pour une valeur particulière n'est pas forcément toujours vraie. <br />
		Par exemple, {@html math('x^2 = 2x')} est vraie pour {@html math('x = 2')} mais fausse pour {@html math('x = 3')}.
	</Remarque>
</Contenu>
