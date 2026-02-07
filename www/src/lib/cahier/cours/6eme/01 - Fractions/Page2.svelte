<script lang="ts">
	import { Contenu, DansLaMarge, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemple, Schema, Texte } from '$lib/cahier/composants/de_cours/*';
	import { Slider } from '$lib/cahier/composants/de_marge/*';
	import { Grille, Axe } from '$lib/cahier/composants/svg/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import { math } from 'mathlifier';
	import { fraction } from 'mathjs';

	let valeur = $state(7);
	let subdivisions = $state(3);
	let angles = $derived(
		Array(subdivisions)
			.fill(0)
			.map((_, i) => (i / subdivisions) * 2 * Math.PI)
	);
</script>

<DansLaMarge lignes_vides={23}>
	<Slider bind:valeur min={0} max={15} />
	<Slider bind:valeur={subdivisions} min={3} max={5} />
</DansLaMarge>

<Contenu>
	<Partie numero={2} titre="Partage de l'unité" />
	<Definition lignes={2}>Une fraction est un nombre composé d'un numérateur et d'un dénominateur.</Definition>
	<Exemple>
		Dans {@html math('\\dfrac{2}{3}')}, le numérateur est 2 et le dénominateur est 3.
	</Exemple>
	<Schema lignes={5}>
		{#snippet svg()}
			<rect x={200} y={200} width={600} height={600} fill="red" stroke="none" />
			<rect x={400} y={400} width={400} height={400} fill="white" stroke="none" />
			<Grille point={{ x: 200, y: 200 }} width={600} height={600} pas={200} avec_contours />
		{/snippet}
		{#snippet html()}
			<LigneVide lignes={2} />
			<Texte>
				5 carreaux rouges sur 9 au total
				{@html math('\\longrightarrow \\dfrac{5}{9}')}
			</Texte>
		{/snippet}
	</Schema>
	<LigneVide />
	<Schema lignes={5} aspectRatioSVG={1.2}>
		{#snippet svg()}
			<rect x={0} y={0} width={1000} height={1000} fill="red" stroke="none" />
			<rect x={400} y={400} width={400} height={400} fill="white" stroke="none" />
			<Grille point={{ x: 0, y: 0 }} width={1000} height={1000} pas={200} avec_contours />
		{/snippet}
		{#snippet html()}
			<LigneVide lignes={2} />
			<Texte>
				21 carreaux rouges sur 25 au total
				{@html math('\\longrightarrow \\dfrac{21}{25}')}
			</Texte>
		{/snippet}
	</Schema>
	<LigneVide />
	<Schema lignes={4} aspectRatioSVG={5}>
		{#snippet svg()}
			<Axe
				debut={{ x: 500, y: 500 }}
				fin={{ x: 4500, y: 500 }}
				graduations={{
					type_de_graduation: 'fraction',
					premiere_valeur: fraction(`0/${subdivisions}`),
					derniere_valeur: fraction(`15/${subdivisions}`),
					pas: fraction(`1/${subdivisions}`),
					premiere_graduation: fraction('0/16'),
					pas_graduation: fraction('1/16')
				}}
				affichage="fraction"
				font_size_valeurs_graduations={150}
			/>
			<path d="M {500 + 250 * valeur} 200 l 0 200 l -50 -50 l 50 50 l 50 -50 l -50 50" stroke="red" stroke-width={10} />
		{/snippet}
	</Schema>
	<Schema lignes={4} aspectRatioSVG={5}>
		{#snippet svg()}
			{#each Array(Math.ceil(14 / subdivisions))
				.fill(0)
				.map((_, i) => i) as numéro_cercle}
				{@const r = 300}
				{@const cx = 500 + 1000 * numéro_cercle}
				{@const cy = 500}
				<circle {cx} {cy} {r} fill="white" stroke="black" stroke-width={5} />
				{#each angles as angle, angle_index}
					{@const angle_suivant = angles[(angle_index + 1) % angles.length]!}
					<defs>
						<clipPath id="secteur{numéro_cercle}_{angle_index}">
							<polygon
								points="{cx},{cy}
								    {cx + 2 * r * Math.cos(angle)},{cy - 2 * r * Math.sin(angle)}
									{cx + 2 * r * Math.cos(angle_suivant)},{cy - 2 * r * Math.sin(angle_suivant)}"
							/>
						</clipPath>
					</defs>
					{#if numéro_cercle * subdivisions + angle_index < valeur}
						<circle {cx} {cy} {r} fill="red" stroke="none" clip-path="url(#secteur{numéro_cercle}_{angle_index})" />
					{/if}
				{/each}
				{#each angles as angle}
					<line x1={cx} x2={cx + r * Math.cos(angle)} y1={cy} y2={cy - r * Math.sin(angle)} stroke="black" stroke-width={5} />
				{/each}
			{/each}
		{/snippet}
	</Schema>
</Contenu>
