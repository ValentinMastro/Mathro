<script lang="ts">
	import { Chapitre, Contenu, DansLaMarge, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item, Schema, Texte } from '$lib/cahier/composants/de_cours/*';
	import { Slider } from '$lib/cahier/composants/de_marge/*';
	import { Rectangle } from '$lib/cahier/composants/svg/*';

	import { math } from 'mathlifier';

	let valeur = $state(8);
	let longueur = $derived(1000 / Math.max(valeur, 8));
</script>

<Chapitre titre="Théorème de Pythagore" />

<DansLaMarge apres_un_titre lignes_vides={15}>
	<Slider bind:valeur min={1} max={20} />
</DansLaMarge>

<Contenu apres_un_titre>
	<Partie numero={1} titre="Carré et racine carrée" />
	<SousPartie numero={1} titre="Le carré d'un nombre" />
	<Definition lignes={2}>
		Le carré d'un nombre est égal à ce nombre multiplié par lui-même. On le note avec un « 2 » en exposant (en petit, en haut à droite).
	</Definition>
	<Exemples lignes={2}>
		<Item>
			Le carré de 12 est 144 car {@html math('12^2 = 12 \\times 12 = 144')}.
		</Item>
		<Item>
			Le carré de 8 est 64 car {@html math('8^2 = 8 \\times 8 = 64')}.
		</Item>
	</Exemples>

	<!-- Schema d'un carré de 8x8 pour comprendre le lien avec le carré géométrique -->
	<Schema lignes={8}>
		{#snippet svg()}
			{#each Array(valeur) as _, i}
				{#each Array(valeur) as _, j}
					{@const C1 = { x: j * longueur + 7, y: i * longueur + 7 }}
					{@const C2 = { x: (j + 1) * longueur - 7, y: (i + 1) * longueur - 7 }}
					{#key valeur}
						<Rectangle points={[C1, C2]} fill={i % 2 == j % 2 ? 'red' : 'black'} stroke="none" />
					{/key}
				{/each}
			{/each}
		{/snippet}
		{#snippet html()}
			<Texte lignes={2} addStyle="display: flex; justify-content: center;">
				Le carré de {valeur} est {valeur * valeur}.
			</Texte>
			<Texte lignes={2} addStyle="display: flex; justify-content: center;">
				{@html math(valeur + '^2 = ' + valeur + ' \\times ' + valeur + ' = ' + valeur * valeur)}
			</Texte>
		{/snippet}
	</Schema>
</Contenu>
