<script lang="ts">
	import { Contenu, DansLaMarge, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Item, Paragraphe, Theoreme, Exemples } from '$lib/cahier/composants/de_cours/*';
	import { Exercice } from '$lib/cahier/composants/de_marge/*';
	import { math } from 'mathlifier';
</script>

<DansLaMarge>
	<Exercice niveau={5} id_exercice={255001} position={13} />
</DansLaMarge>

<Contenu>
	<Partie numero={3} titre="Les nombres premiers" />
	<Definition lignes={2}>Un nombre premier est un nombre qui a exactement deux diviseurs : 1 et lui-même.</Definition>
	<Paragraphe nom_du_paragraphe="Convention">1 n'est pas un nombre premier.</Paragraphe>
	<Paragraphe nom_du_paragraphe="Liste de nombres premiers à connaître">2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37</Paragraphe>
	<Theoreme nom_du_theoreme="Théorème fondamental de l'arithmétique" lignes={2}>
		Tout entier supérieur ou égal à 2 peut s'écrire comme un <i>unique</i> produit croissant de nombres premiers.
	</Theoreme>
	<Exemples lignes={4}>
		<Item>
			{@html math('12 = 2 \\times 2 \\times 3')}
		</Item>
		<Item>
			{@html math('540 = 2 \\times 2 \\times 3 \\times 3 \\times 3 \\times 5')}
		</Item>
		<Item>
			{@html math('1001 = 7 \\times 11 \\times 13')}
		</Item>
		<Item>
			{@html math('2310 = 2 \\times 3 \\times 5 \\times 7 \\times 11')}
		</Item>
	</Exemples>
</Contenu>
