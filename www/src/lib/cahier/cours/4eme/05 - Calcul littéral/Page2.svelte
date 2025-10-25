<script lang="ts">
	import { Contenu, DansLaMarge, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemple } from '$lib/cahier/composants/de_cours/*';
	import { SaisieNombreEntier } from '$lib/cahier/composants/de_marge/*';
	import { math } from 'mathlifier';

	let a = $state(2n);
</script>

<DansLaMarge apres_un_titre lignes_vides={6}>
	<SaisieNombreEntier bind:value={a} min={-20n} max={20n} />
</DansLaMarge>

<Contenu>
	<SousPartie numero={2} titre="Évaluer une expression" />
	<Definition lignes={2}>Évaluer une expression signifie remplacer chacune des variables par une valeur numérique donnée.</Definition>
	<Exemple lignes={3}>
		Évaluer l'expression {@html math('3 \\times \\textcolor{red}{a} + 8')} en {@html math(`a=${a}`)} <br />
		signifie remplacer {@html math('a')} par {@html math(a.toLocaleString())}, <br />
		ce qui donne : {@html math(`3 \\times \\textcolor{red}{${a < 0 ? '(' + a.toLocaleString() + ')' : a}} + 8 = ${3n * a} + 8 = ${3n * a + 8n}`)}
	</Exemple>
</Contenu>
