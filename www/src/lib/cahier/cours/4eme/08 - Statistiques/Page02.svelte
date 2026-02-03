<script lang="ts">
	import { Contenu, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item, Notation } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';

	import { SERIE_1, SERIE_2, afficher_serie, effectif_total, moyenne } from './store.svelte';
	import { LatexAlign } from '$lib/cahier/composants/math/*';
</script>

<Contenu>
	<Partie numero={1} titre="Indicateurs de position" />
	<SousPartie numero={1} titre="Moyenne" />
	<Definition lignes={2}>
		<i>L'effectif total</i> d'une série statistique est le nombre de valeurs qu'elle contient.<br />
	</Definition>
	<Exemples lignes={2}>
		<Item lignes={1}>
			{@html math(afficher_serie(SERIE_1))}
			L'effectif total est {effectif_total(SERIE_1)}.
		</Item>
		<Item lignes={1}>
			{@html math(afficher_serie(SERIE_2) + '\\longrightarrow')}
			L'effectif total est {effectif_total(SERIE_2)}.
		</Item>
	</Exemples>
	<Definition lignes={2}>
		<i>La moyenne</i> d'une série statistique est la somme de toutes les valeurs divisée par l'effectif total.
	</Definition>
	<Notation>
		On note N l'effectif total d'une série statistique et {@html math('\\bar{x}')} sa moyenne.
	</Notation>
	<Exemples lignes={8}>
		<Item lignes={2}>
			{@html math(afficher_serie(SERIE_1))}
		</Item>
		<LatexAlign
			code={`
			    \\bar{x}
                = \\frac{${SERIE_1.join('+')}}{${effectif_total(SERIE_1)}}
                = ${moyenne(SERIE_1).toLocaleString('fr-FR', { maximumFractionDigits: 3 })}
		`}
			lignes={2}
		/>
		<Item lignes={2}>
			{@html math(afficher_serie(SERIE_2))}
		</Item>
		<LatexAlign
			code={`
			    \\bar{x}
                = \\frac{${SERIE_2.join('+')}}{${effectif_total(SERIE_2)}}
                = ${moyenne(SERIE_2).toLocaleString('fr-FR', { maximumFractionDigits: 3 })}
		`}
			lignes={2}
		/>
	</Exemples>
</Contenu>
