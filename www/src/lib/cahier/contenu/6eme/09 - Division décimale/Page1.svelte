<script lang="ts">
	import { Chapitre, Contenu, DansLaMarge, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Item, Propriete, Methode, Exemples, Schema } from '$lib/cahier/composants/de_cours/*';
	import { Slider } from '$lib/cahier/composants/de_marge/*';
	import { Fleche } from '$lib/cahier/composants/svg/*';

	let étape = $state(5);
</script>

<Chapitre titre="Division décimale" />

<DansLaMarge apres_un_titre lignes_vides={15}>
	<Slider bind:valeur={étape} min={0} max={6} />
</DansLaMarge>

<Contenu apres_un_titre>
	<Partie numero={1} titre="Poser une division décimale" />
	<Definition lignes={2}>Contrairement à la division euclidienne, la division décimale admet pour quotient un nombre décimal.</Definition>
	<Methode lignes={5}>
		Lorsque l'on effectue une division décimale :
		<Item lignes={2}>lorsqu'il n'y a plus de chiffre à abaisser, on peut ajouter au dividende autant de zéros que l'on veut après la virgule ;</Item>
		<Item lignes={2}>
			la division s'arrête lorsque le reste est égal à 0 <br />
			OU que les restes se répètent en boucle.
		</Item>
	</Methode>
	<Exemples />
	<!-- Division de 253 par 8 -->
	<Schema lignes={15} aspectRatioSVG={20 / 15}>
		{#snippet svg()}
			{@const c = 1000 / 15}
			<!-- Barres + diviseur + dividende (étape 0) -->
			<g id="barre">
				<line x1={6 * c} x2={6 * c} y1={0 * c} y2={12 * c} stroke="black" stroke-width={4} />
				<line x1={6 * c} y1={1 * c} x2={11 * c} y2={1 * c} stroke="black" stroke-width={4} />
			</g>
			<!-- diviseur -->
			<text x={7 * c} y={1 * c}>8</text>
			<!-- dividende : 253 -->
			<g id="dividende">
				<text x={1 * c} y={1 * c}>2</text>
				<text x={2 * c} y={1 * c}>5</text>
				<text x={3 * c} y={1 * c}>3</text>
			</g>

			<!-- Étape 1 : quotient «3» et soustraction 24 -->
			{#if étape >= 1}
				<!-- quotient : 3 -->
				<text x={7 * c} y={2 * c}>3</text>

				<!-- 24 soustrait sous 25 -->
				<rect x={0} y={0} width={2 * c} height={1 * c} opacity={0.2} fill="red" />
				<text x={0.5 * c} y={2 * c} fill="red">-</text>
				<text x={1 * c} y={2 * c} fill="red">2</text>
				<text x={2 * c} y={2 * c} fill="red">4</text>
				<line x1={0 * c} x2={2 * c} y1={2 * c} y2={2 * c} stroke="red" stroke-width={5} />

				<!-- reste : 1 -->
				<text x={1 * c} y={3 * c}>0</text>
				<text x={2 * c} y={3 * c}>1</text>
			{/if}

			<!-- Étape 2 : on abaisse le 3, quotient «1» -->
			{#if étape >= 2}
				<!-- abaisser le 3 -->
				<Fleche
					points={[
						{ x: 2.5 * c, y: 1 * c },
						{ x: 2.5 * c, y: 2 * c }
					]}
					taille={18}
				/>
				<text x={3 * c} y={3 * c}>3</text>
				<!-- nouveau chiffre du quotient : 1 -->
				<text x={8 * c} y={2 * c}>1</text>

				<!-- 8 soustrait sous 13 -->
				<rect x={1 * c} y={2 * c} width={2 * c} height={1 * c} opacity={0.2} fill="forestgreen" />
				<text x={1 * c} y={4 * c} fill="forestgreen">-</text>
				<text x={3 * c} y={4 * c} fill="forestgreen">8</text>
				<line x1={1 * c} x2={3 * c} y1={4 * c} y2={4 * c} stroke="forestgreen" stroke-width={5} />

				<!-- reste : 5 -->
				<text x={2 * c} y={5 * c}>0</text>
				<text x={3 * c} y={5 * c}>5</text>
			{/if}

			<!-- Étape 3 : quotient «,3» -->
			{#if étape >= 3}
				<!-- ,0 ajouté au dividende -->
				<text x={4 * c} y={1 * c}>0</text>
				<text x={3.5 * c} y={1 * c}>,</text>
				<!-- , ajouté au quotient -->
				<text x={8.5 * c} y={2 * c}>,</text>

				<!-- abaisser le O -->
				<Fleche
					points={[
						{ x: 3.5 * c, y: 1 * c },
						{ x: 3.5 * c, y: 4 * c }
					]}
					taille={18}
				/>
				<text x={4 * c} y={5 * c}>0</text>

				<!-- quotient : 6 -->
				<text x={9 * c} y={2 * c}>6</text>

				<!-- 48 soustrait sous 50 -->
				<rect x={2 * c} y={4 * c} width={2 * c} height={1 * c} opacity={0.2} fill="blue" />
				<text x={2 * c} y={6 * c} fill="blue">-</text>
				<text x={3 * c} y={6 * c} fill="blue">4</text>
				<text x={4 * c} y={6 * c} fill="blue">8</text>
				<line x1={2 * c} x2={4 * c} y1={6 * c} y2={6 * c} stroke="blue" stroke-width={5} />

				<!-- reste : 2 -->
				<text x={3 * c} y={7 * c}>0</text>
				<text x={4 * c} y={7 * c}>2</text>
			{/if}
			<!-- Étape 4 : on abaisse un 0, quotient «2», 20 − 16 -->
			{#if étape >= 4}
				<!-- on ajoute un nouveau 0 au dividende après la virgule -->
				<text x={5 * c} y={1 * c}>0</text>
				<!-- flèche pour abaisser ce 0 -->
				<Fleche
					points={[
						{ x: 4.5 * c, y: 1 * c },
						{ x: 4.5 * c, y: 6 * c }
					]}
					taille={18}
				/>
				<text x={5 * c} y={7 * c}>0</text>

				<!-- nouveau chiffre du quotient -->
				<text x={10 * c} y={2 * c}>2</text>

				<!-- 16 soustrait à 20 -->
				<rect x={3 * c} y={6 * c} width={2 * c} height={1 * c} opacity={0.2} fill="purple" />
				<text x={3 * c} y={8 * c} fill="purple">-</text>
				<text x={4 * c} y={8 * c} fill="purple">1</text>
				<text x={5 * c} y={8 * c} fill="purple">6</text>
				<line x1={3 * c} x2={5 * c} y1={8 * c} y2={8 * c} stroke="purple" stroke-width={5} />

				<!-- reste : 4 -->
				<text x={4 * c} y={9 * c}>0</text>
				<text x={5 * c} y={9 * c}>4</text>
			{/if}

			<!-- Étape 5 : on abaisse un 0, quotient «5», 40 − 40 -->
			{#if étape >= 5}
				<!-- on ajoute encore un 0 au dividende après la virgule -->
				<text x={6 * c} y={1 * c}>0</text>
				<!-- flèche pour abaisser ce 0 -->
				<Fleche
					points={[
						{ x: 5.5 * c, y: 1 * c },
						{ x: 5.5 * c, y: 8 * c }
					]}
					taille={18}
				/>
				<text x={6 * c} y={9 * c}>0</text>

				<!-- nouveau chiffre du quotient -->
				<text x={11 * c} y={2 * c}>5</text>

				<!-- 40 soustrait à 40 -->
				<rect x={4 * c} y={8 * c} width={2 * c} height={1 * c} opacity={0.2} fill="orange" />
				<text x={4 * c} y={10 * c} fill="orange">-</text>
				<text x={5 * c} y={10 * c} fill="orange">4</text>
				<text x={6 * c} y={10 * c} fill="orange">0</text>
				<line x1={4 * c} x2={6 * c} y1={10 * c} y2={10 * c} stroke="orange" stroke-width={5} />

				<!-- 40 en dessous -->
				<text x={6 * c} y={11 * c}>0</text>
			{/if}
		{/snippet}
	</Schema>
</Contenu>

<style>
	text {
		font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace;
		font-size: 65px;
		text-align: middle;
		dominant-baseline: middle;
		transform: translate(-53px, -25px);
	}
</style>
