<script lang="ts">
	import { Contenu, DansLaMarge, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemple } from '$lib/cahier/composants/de_cours/*';
	import { Nombre } from '$lib/cahier/composants/de_marge/*';
	import { math } from 'mathlifier';

	let a = $state(2);
</script>

<DansLaMarge apres_un_titre lignes_vides={6}>
	<Nombre label="a" bind:valeur={a} min={-20} max={20} />
</DansLaMarge>

<Contenu>
	<SousPartie numero={2} titre="Évaluer une expression" />
	<Definition lignes={2}>Évaluer une expression signifie remplacer chacune des variables par une valeur numérique donnée.</Definition>
	<Exemple lignes={3}>
		Évaluer l'expression {@html math('3 \\times \\textcolor{red}{a} + 8')} en {@html math(`a=${a}`)} <br />
		signifie remplacer {@html math('a')} par {a}, <br />
		ce qui donne : {@html math(`3 \\times \\textcolor{red}{${a}} + 8 = ${3 * a} + 8 = ${3 * a + 8}`)}
	</Exemple>
</Contenu>
