<script lang="ts">
	import { Énoncé, ExerciceMarge, Question } from '$lib/cahier/composants/d_exercices/*';
	import { Chapitre, Contenu } from '$lib/cahier/composants/de_chapitrage/*';
	import { Texte } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import { math } from 'mathlifier';
</script>

<Chapitre titre="Expressions littérales" />

<ExerciceMarge numéro={1} position={3} />
<ExerciceMarge numéro={2} position={7} />
<ExerciceMarge numéro={3} position={15} />
<ExerciceMarge numéro={4} position={20} />

<Contenu apres_un_titre>
	<!-- Exercice 1 : carré et cube (simple) -->
	<Énoncé lignes={3}>
		<Question numéro={1} lignes={1}>Calculer : {@html math('3^2')} ; {@html math('5^2')} ; {@html math('8^2')} ; {@html math('12^2')}.</Question>
		<Question numéro={2} lignes={1}>Calculer : {@html math('2^3')} ; {@html math('4^3')} ; {@html math('10^3')}.</Question>
		<Question numéro={3} lignes={1}>Calculer : {@html math('(-2)^2')} ; {@html math('(-3)^3')} ; {@html math('(-5)^2')}.</Question>
		<Question numéro={4} lignes={2}>Calculer : {@html math('\\left(\\dfrac{1}{2}\\right)^2')} ; {@html math('\\left(\\dfrac{2}{3}\\right)^2')} ; {@html math('\\left(\\dfrac{1}{3}\\right)^3')}.</Question>
		<Question numéro={5} lignes={1}>Un carré a un côté de 7 cm. Calculer son aire.</Question>
	</Énoncé>
	<LigneVide lignes={1} />

	<!-- Exercice 2 : carré et cube (plus difficile) -->
	<Énoncé lignes={4}>
		<Question numéro={1} lignes={1}>
			Comparer {@html math('2^3')} et {@html math('3^2')} sans calculatrice. Justifier.
		</Question>
		<Question numéro={2} lignes={2}>
			On sait que {@html math('13^2 = 169')}. En déduire {@html math('130^2')} et {@html math('0{,}13^2')} sans calculatrice.
		</Question>
		<Question numéro={3} lignes={1}>Un cube a une arête de 4 cm. Calculer son volume.</Question>
	</Énoncé>
	<LigneVide lignes={1} />

	<!-- Exercice 3 : distributivité avec lettres -->
	<Énoncé lignes={5}>
		<Texte lignes={1}>Réduire les expressions suivantes si possible, sinon expliquer pourquoi.</Texte>
		<Question numéro={1} lignes={2}>
			a) {@html math('3x + 5x')} &emsp; b) {@html math('4a - 2a')} &emsp; c) {@html math('3x + 2y')} &emsp; d) {@html math('5a - 3b + 2a')}
		</Question>
		<Question numéro={2} lignes={2}>
			Élodie affirme que {@html math('3x + 2y = 5xy')}. Montrer qu'elle a tort en prenant {@html math('x = 2')} et
			{@html math('y = 3')}.
		</Question>
	</Énoncé>
	<LigneVide lignes={3} />

	<!-- Exercice 4 : distributivité avec nombres -->
	<Énoncé lignes={7}>
		<Texte lignes={2} lignes_vides={0}>Utiliser la distributivité pour simplifier les calculs. <br /> Montrer les étapes.</Texte>
		<Question numéro={1} lignes={1}>{@html math('21 \\times 11 + 79 \\times 11')}</Question>
		<Question numéro={2} lignes={1}>{@html math('35 \\times 7 + 65 \\times 7')}</Question>
		<Question numéro={3} lignes={1}>{@html math('48 \\times 13 - 48 \\times 3')}</Question>
		<Question numéro={4} lignes={1}>{@html math('37 \\times 99 + 37')}</Question>
		<Question numéro={5} lignes={1}>{@html math('125 \\times 17 - 25 \\times 17')}</Question>
		<Question numéro={6} lignes={1}>{@html math('99^2 + 99')}</Question>
	</Énoncé>
</Contenu>
