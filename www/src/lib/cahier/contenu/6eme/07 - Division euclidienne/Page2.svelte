<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item, LigneTableau, Paragraphe, Schema, Tableau } from '$lib/cahier/composants/de_cours/*';
	import { Segment } from '$lib/cahier/composants/svg/*';

	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={2} titre="Multiples et diviseurs" />
	<Definition lignes={2}>Dans une division euclidienne, si le reste est égal à 0, le dividende est un multiple du diviseur.</Definition>
	<Schema lignes={7} position_html="gauche" aspectRatioSVG={9 / 7}>
		{#snippet svg()}
			{@const carreau = 1000 / 7}
			{@const I1 = { x: 4 * carreau, y: 1 * carreau }}
			{@const J1 = { x: 4 * carreau, y: 1000 }}
			{@const K1 = { x: 4 * carreau, y: 2 * carreau }}
			{@const L1 = { x: 5.5 * carreau, y: 2 * carreau }}
			<Segment points={[I1, J1]} />
			<Segment points={[K1, L1]} />
			<!-- Dividende -->
			<text class="chiffre" x={2 * carreau} y={1 * carreau}>1</text>
			<text class="chiffre" x={3 * carreau} y={1 * carreau}>5</text>
			<!-- Ligne n°2 -->
			<text class="chiffre rouge" x={1 * carreau} y={2 * carreau}>-</text>
			<text class="chiffre rouge" x={2 * carreau} y={2 * carreau}>1</text>
			<text class="chiffre rouge" x={3 * carreau} y={2 * carreau}>5</text>
			<line x1={1 * carreau} x2={4 * carreau} y1={3 * carreau} y2={3 * carreau} stroke="var(--rouge)" stroke-width={5} />
			<!-- Ligne n°3 -->
			<text class="chiffre rouge" x={3 * carreau} y={3 * carreau}>0</text>
			<rect x={3.1 * carreau} y={3.1 * carreau} width={0.8 * carreau} height={0.85 * carreau} stroke="black" stroke-width={6} fill="none" />
			<!-- Diviseur -->
			<text class="chiffre" x={4 * carreau} y={1 * carreau}>5</text>
			<!-- Quotient -->
			<text class="chiffre rouge" x={4 * carreau} y={2 * carreau}>3</text>
		{/snippet}
		{#snippet html()}
			<Exemples lignes={5}>
				On peut dire que :
				<Item>15 est un multiple de 5</Item>
				<Item>15 est divisible par 5</Item>
				<Item>5 est un diviseur de 15</Item>
				<Item>15 est dans la table de 5</Item>
			</Exemples>
		{/snippet}
	</Schema>
	<Paragraphe nom_du_paragraphe="Critères de divisibilité" />
	<Tableau lignes={15}>
		<LigneTableau lignes={2}>
			<td>Divisible par 2</td>
			<td>Le nombre est pair</td>
			<td class="liste">
				<span class="vert">50</span>
				<span class="vert">48</span>
				<span class="rouge">217</span>
			</td>
		</LigneTableau>
		<LigneTableau lignes={2}>
			<td>Divisible par 3</td>
			<td>La somme des chiffres<br /> est dans la table de 3</td>
			<td class="liste">
				<span class="vert">{@html math('51 \\longrightarrow 5 + 1 = 6')}</span>
				<span class="vert">{@html math('48 \\longrightarrow 4 + 8 = 12')}</span>
				<span class="rouge">{@html math('217 \\longrightarrow 2 + 1 + 7 = 10')}</span>
			</td>
		</LigneTableau>
		<LigneTableau lignes={2}>
			<td>Divisible par 5</td>
			<td>Le chiffre des unités<br /> est un 0 ou un 5</td>
			<td class="liste">
				<span class="vert">50</span>
				<span class="vert">15</span>
				<span class="rouge">217</span>
			</td>
		</LigneTableau>
		<LigneTableau lignes={2}>
			<td>Divisible par 9</td>
			<td>La somme des chiffres<br /> est dans la table de 9</td>
			<td class="liste">
				<span class="vert">{@html math('54 \\longrightarrow 5 + 4 = 9')}</span>
				<span class="vert">{@html math('81 \\longrightarrow 8 + 1 = 9')}</span>
				<span class="rouge">{@html math('217 \\longrightarrow 2 + 1 + 7 = 10')}</span>
			</td>
		</LigneTableau>
		<LigneTableau lignes={2}>
			<td>Divisible par 10</td>
			<td>Le chiffre des unités<br /> est un 0</td>
			<td class="liste">
				<span class="vert">50</span>
				<span class="vert">100</span>
				<span class="rouge">217</span>
			</td>
		</LigneTableau>
	</Tableau>
</Contenu>

<style>
	.vert {
		color: green;
	}
	.rouge {
		color: red;
		fill: red;
	}
	.liste {
		display: flex;
		flex-direction: column;
	}
	.chiffre {
		font-size: 120px;
		text-anchor: middle;
		dominant-baseline: middle;
		transform: translate(calc(500px / 7), calc(500px / 7 + 20px));
	}
</style>
