<script lang="ts">
	import { Chapitre, Contenu, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Item, Schéma } from '$lib/cahier/composants/de_cours/*';

	const unités = [
		{ nom: 'millénaire', equiv: '1 000 ans' },
		{ nom: 'siècle', equiv: '100 ans' },
		{ nom: 'décennie', equiv: '10 ans' },
		{ nom: 'an', equiv: '≈ 365,25 jours' },
		{ nom: 'décade', equiv: '10 jours' },
		{ nom: 'semaine', equiv: '7 jours' },
		{ nom: 'jour', equiv: '24 h = 86 400 s' },
		{ nom: 'heure', equiv: '60 min = 3 600 s' },
		{ nom: 'minute', equiv: '60 s' },
		{ nom: 'seconde', equiv: '' }
	];

	const step = 100;
	const y0 = 75;
</script>

<Chapitre titre="Se repérer dans le temps et l'espace" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Horaires et durées" />
	<SousPartie numero={1} titre="Vocabulaire" />
	<Definition lignes={2}>
		<Item>Une <i>année</i> est la durée d'un tour de la Terre autour du Soleil.</Item>
		<Item>Un <i>jour</i> est la durée d'un tour complet de la Terre sur elle-même.</Item>
	</Definition>
	<Schéma lignes={20} aspectRatioSVG={1} centré>
		{#snippet svg()}
			<!-- Flèche vers le haut, centrée à x=500 -->
			<line x1="500" y1="40" x2="500" y2="970" stroke="#2a7a2a" stroke-width="5" />
			<polygon points="500,10 480,40 520,40" fill="#2a7a2a" />
			{#each unités as { nom, equiv }, i}
				{@const y = y0 + i * step}
				<line x1="478" y1={y} x2="522" y2={y} stroke="#2a7a2a" stroke-width="4" />
				<!-- Équivalences à gauche (alignées à droite vers la flèche) -->
				{#if equiv}
					<text x="468" y={y + 18} font-size="38" text-anchor="end">{equiv}</text>
				{/if}
				<!-- Nom de l'unité à droite (aligné à gauche depuis la flèche) -->
				<text x="532" y={y + 18} font-size="50" font-weight="bold">{nom}</text>
			{/each}
			<!-- Séparateur entre semaine et jour -->
			<line x1="0" y1="605" x2="1000" y2="605" stroke="#ccc" stroke-width="2" stroke-dasharray="10,6" />
		{/snippet}
	</Schéma>
</Contenu>
