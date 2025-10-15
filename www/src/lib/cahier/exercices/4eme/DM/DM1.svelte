<script lang="ts">
	import { Exercice, Question } from '$lib/cahier/composants/d_exercices/*';
	import { Contenu, DansLaMarge } from '$lib/cahier/composants/de_chapitrage/*';
	import { Item, Texte, Theoreme } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import { math } from 'mathlifier';
</script>

<DansLaMarge>
	<center>
		<Texte>
			<b> DM n°1 </b>
		</Texte>
		<Texte>Nom</Texte>
		<Texte>Prénom</Texte>
		<Texte>Classe</Texte>
	</center>
</DansLaMarge>

<Contenu>
	<Exercice nom_du_paragraphe="Exercice 1 : le théorème de Miquel" lignes={2.78} lignes_vides={0.22 + 1}>
		<Question numéro={1}>
			Tracer un triangle quelconque {@html math('\\text{MQE}')}.
		</Question>
		<Question numéro={2}>
			Placer {@html math('\\text{I} \\in \\left[\\text{MQ}\\right]')},
			{@html math('\\text{U} \\in \\left[\\text{QE}\\right]')}
			et {@html math('\\text{L} \\in \\left[\\text{ME}\\right]')}
		</Question>
		<Question numéro={3}>
			Construire les cercles circonscrits aux triangles {@html math('\\text{MIL}, \\text{IQU} \\text{~et~} \\text{LUE}')}.
		</Question>
	</Exercice>
	<Exercice nom_du_paragraphe="Exercice 2 : étoile à 12 branches" lignes={9.78} lignes_vides={1.5}>
		<Question numéro={1}>Tracer un cercle {@html math('(\\mathcal{C})')} de centre {@html math('\\text{O}')} et de rayon 6 cm.</Question>
		<Question numéro={2} lignes={3}>
			Tracer un diamètre de {@html math('(\\mathcal{C})')} horizontal {@html math('[\\text{AG}]')}. <br />
			Tracer un diamètre de {@html math('(\\mathcal{C})')} vertical {@html math('[\\text{DJ}]')}. <br />
			Tracer les médiatrices de
			{@html math('[\\text{OA}]')},
			{@html math('[\\text{OD}]')},
			{@html math('[\\text{OG}]')},
			{@html math('[\\text{OJ}]')}.
		</Question>
		<Question numéro={3}>
			Placer les points
			{@html math(
				'\\text{A}, \\text{B}, \\text{C}, \\text{D}, \\text{E}, \\text{F}, \
				\\text{G}, \\text{H}, \\text{I}, \\text{J}, \\text{K}, \\text{L}'
			)}, comme sur la figure 1.
		</Question>
		<Question numéro={4} lignes={5}>
			Sur le cercle {@html math('(\\mathcal{C})')}, {@html math('\\text{A}')} est face à {@html math('\\text{G}')}. Tracer {@html math(
				'[\\text{AF}]'
			)} et {@html math('[\\text{AH}]')}. <br />
			Sur le cercle {@html math('(\\mathcal{C})')}, {@html math('\\text{B}')} est face à {@html math('\\text{H}')}. Tracer {@html math(
				'[\\text{BG}]'
			)} et {@html math('[\\text{BI}]')}. <br />
			Continuer ainsi pour les autres points, jusqu'à ce qu'une étoile à 12 branches soit formée. <br />
			La colorier comme sur la figure 2.
		</Question>
	</Exercice>
	<center>
		<img src="/img1.png" alt="Étape 1" width="30%" />
		<img src="/img2.png" alt="Ce qu'il faut obtenir" width="30%" />
	</center>
	<LigneVide lignes={1.4} />
	<Exercice lignes={5} nom_du_paragraphe="Exercice 3 : le problème de thébault n°1">
		Construire une figure illustrant le théorème suivant : <br />
		&laquo; Soit un parallélogramme ABCD, quelconque, et extérieurement, quatre carrés construits sur les côtés du parallélogramme. Si M, N, O et P désignent
		les centres de ces carrés, alors MNOP est également un carré. &raquo;
	</Exercice>
</Contenu>
