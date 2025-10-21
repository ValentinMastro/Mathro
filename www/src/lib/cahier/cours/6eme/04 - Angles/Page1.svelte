<script lang="ts">
	import { Chapitre, Contenu } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Item, Notation, Schema, Texte } from '$lib/cahier/composants/de_cours/*';
	import { Angle, DemiDroite, Point } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';

	const A = { x: 200, y: 800 };
	const B = { x: 490, y: 300 };
	const C = { x: 800, y: 800 };
</script>

<Chapitre titre="Angles" />

<Contenu apres_un_titre>
	<Definition lignes={5}>
		Un angle est une portion de plan délimitée par deux demi-droites ayant la même origine.<br />
		Il est composé de trois éléments :
		<Item>
			son <i>sommet</i> : l'origine des deux demi-droites,
		</Item>
		<Item>
			ses deux <i>côtés</i> : les deux demi-droites,
		</Item>
	</Definition>
	<Schema lignes={10} aspectRatioSVG={2}>
		{#snippet svg()}
			<Angle r={100} points={[C, A, B]} fill="red" />
			<Point point={A} nom="A" type={{ forme: 'disque', taille: 10 }} dx={-50} dy={0} />
			<Point point={B} nom="B" type={{ forme: 'croix', taille: 15 }} dx={-50} dy={0} />
			<Point point={C} nom="C" type={{ forme: 'croix', taille: 15 }} dy={-50} />
			<DemiDroite origine={A} passantPar={B} stroke-width={5} />
			<DemiDroite origine={A} passantPar={C} stroke-width={5} />
		{/snippet}
	</Schema>
	<Texte couleur="noir" lignes={3}>
		<Item>
			L'angle se nomme {@html math('\\widehat{\\text{BAC}}')} ou {@html math('\\widehat{\\text{CAB}}')}.
		</Item>
		<Item>
			Le sommet de l'angle est {@html math('\\text{A}')}.
		</Item>
		<Item>
			Les côtés de l'angle sont {@html math('[\\text{AB})')} et {@html math('[\\text{AC})')}.
		</Item>
	</Texte>
	<Notation>
		Un angle se nomme avec trois lettres, le sommet est la <i>lettre du milieu</i>.
	</Notation>
</Contenu>
