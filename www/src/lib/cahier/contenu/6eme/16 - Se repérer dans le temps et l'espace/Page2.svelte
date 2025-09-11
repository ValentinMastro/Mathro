<script lang="ts">
	import { Contenu, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Methode, Exemple, Texte } from '$lib/cahier/composants/de_cours/*';
	import { LatexAlign } from '$lib/cahier/composants/math/*';
</script>

<Contenu>
	<SousPartie numero={2} titre="Convertir des secondes en hh:mm:ss" />
	<Texte couleur="rouge"><u>Méthode :</u> Utilisation de la division euclidienne</Texte>
	<Exemple>35000 s = ??h ??min ??s</Exemple>

	<SousPartie numero={3} titre="Convertir des hh:mm:ss en secondes" />
	<Texte couleur="rouge"><u>Méthode :</u> Se rappeler que 1h = 3600s et que 1min = 60s</Texte>
	<Exemple lignes={6}>
		2h 30min 45s = ?? secondes <br />
		<LatexAlign
			lignes={5}
			code={`
		    &2 \\text{h} + 30 \\text{min} + 45 \\text{s} \\\\
			&= 2 \\times 1 \\text{h} + 30 \\times 1 \\text{min} + 45 \\text{s} \\\\
			&= 2 \\times 3600 \\text{s} + 30 \\times 60 \\text{s} + 45 \\text{s} \\\\
			&= 7200 \\text{s} + 1800 \\text{s} + 45 \\text{s} \\\\
			&= 9045 \\text{s}
			`}
		/>
	</Exemple>
</Contenu>
