<script lang="ts">
	import { Contenu, DansLaMarge, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definitions, Exemple, Exemples, Item, Propriete, Schema } from '$lib/cahier/composants/de_cours/*';
	import { Slider } from '$lib/cahier/composants/de_marge/*';
	import { Fleche } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';

	let étape = $state(6);
</script>

<DansLaMarge lignes_vides={20}>
	<Slider bind:valeur={étape} min={0} max={6} />
</DansLaMarge>

<Contenu>
	<Partie numero={3} titre="Lien entre quotient et fraction" />
	<Propriete>Une fraction est un quotient : le résultat d'une division.</Propriete>
	<Exemples lignes={5}>
		<Item lignes={2}>
			{@html math('\\dfrac{3}{4} = 3 \\div 4 = 0,75')}
		</Item>
		<Item lignes={2}>
			{@html math('\\dfrac{253}{8} = 253 \\div 8 = 31,625')}
		</Item>
		<Item>
			{@html math('\\dfrac{7}{3} = 7 \\div 3 = 2,333...')}
		</Item>
	</Exemples>
	<Definitions lignes={4}>
		Lorsque les restes d'une division décimale se répètent en boucle, on peut écrire le quotient de deux façons :
		<Item>
			Sous forme de fraction, c'est sa <i>valeur exacte</i>
		</Item>
		<Item>
			Sous forme décimale, en arrondissant, c'est sa <i>valeur approchée</i>
		</Item>
	</Definitions>
	<Exemple />
	<!-- Division de 200 par 9 -->
	<Schema lignes={15} aspectRatioSVG={20 / 15}>
		{#snippet svg()}
			{@const c = 1000 / 15}
			<!-- Barres + diviseur + dividende (étape 0) -->
			<g id="barre">
				<line x1={6 * c} x2={6 * c} y1={0 * c} y2={12 * c} stroke="black" stroke-width={4} />
				<line x1={6 * c} y1={1 * c} x2={11 * c} y2={1 * c} stroke="black" stroke-width={4} />
			</g>
			<!-- diviseur -->
			<text x={7 * c} y={1 * c}>9</text>
			<!-- dividende : 200 -->
			<g id="dividende">
				<text x={1 * c} y={1 * c}>2</text>
				<text x={2 * c} y={1 * c}>0</text>
				<text x={3 * c} y={1 * c}>0</text>
			</g>

			<!-- Étape 1 : 20 ÷ 9 → quotient «2», soustraction 18, reste 2 -->
			{#if étape >= 1}
				<!-- quotient : 2 -->
				<text x={7 * c} y={2 * c}>2</text>

				<!-- 18 soustrait sous 20 -->
				<rect x={0} y={0} width={2 * c} height={1 * c} opacity={0.2} fill="red" />
				<text x={0.5 * c} y={2 * c} fill="red">-</text>
				<text x={1 * c} y={2 * c} fill="red">1</text>
				<text x={2 * c} y={2 * c} fill="red">8</text>
				<line x1={0 * c} x2={2 * c} y1={2 * c} y2={2 * c} stroke="red" stroke-width={5} />

				<!-- reste : 2 -->
				<text x={1 * c} y={3 * c}>0</text>
				<text x={2 * c} y={3 * c}>2</text>
			{/if}

			<!-- Étape 2 : on abaisse le 0 → 20 ÷ 9 → quotient «2», soustraction 18, reste 2 -->
			{#if étape >= 2}
				<!-- abaisser le 0 (ancien 3) -->
				<Fleche
					points={[
						{ x: 2.5 * c, y: 1 * c },
						{ x: 2.5 * c, y: 2 * c }
					]}
					taille={18}
				/>
				<text x={3 * c} y={3 * c}>0</text>

				<!-- nouveau chiffre du quotient : 2 -->
				<text x={8 * c} y={2 * c}>2</text>

				<!-- 18 soustrait sous 20 -->
				<rect x={1 * c} y={2 * c} width={2 * c} height={1 * c} opacity={0.2} fill="forestgreen" />
				<text x={1 * c} y={4 * c} fill="forestgreen">-</text>
				<!-- (garde une seule balise texte ici) -->
				<text x={2 * c} y={4 * c} fill="forestgreen">1</text>
				<text x={3 * c} y={4 * c} fill="forestgreen">8</text>
				<line x1={1 * c} x2={3 * c} y1={4 * c} y2={4 * c} stroke="forestgreen" stroke-width={5} />

				<!-- reste : 2 -->
				<text x={2 * c} y={5 * c}>0</text>
				<text x={3 * c} y={5 * c}>2</text>
			{/if}

			<!-- Étape 3 : ,0 ajouté ; 20 ÷ 9 → quotient «2», soustraction 18, reste 2 -->
			{#if étape >= 3}
				<!-- ,0 ajouté au dividende -->
				<text x={4 * c} y={1 * c}>0</text>
				<text x={3.5 * c} y={1 * c}>,</text>
				<!-- , ajouté au quotient -->
				<text x={8.5 * c} y={2 * c}>,</text>

				<!-- abaisser le 0 -->
				<Fleche
					points={[
						{ x: 3.5 * c, y: 1 * c },
						{ x: 3.5 * c, y: 4 * c }
					]}
					taille={18}
				/>
				<text x={4 * c} y={5 * c}>0</text>

				<!-- quotient : 2 -->
				<text x={9 * c} y={2 * c}>2</text>

				<!-- 18 soustrait sous 20 -->
				<rect x={2 * c} y={4 * c} width={2 * c} height={1 * c} opacity={0.2} fill="blue" />
				<text x={2 * c} y={6 * c} fill="blue">-</text>
				<text x={3 * c} y={6 * c} fill="blue">1</text>
				<text x={4 * c} y={6 * c} fill="blue">8</text>
				<line x1={2 * c} x2={4 * c} y1={6 * c} y2={6 * c} stroke="blue" stroke-width={5} />

				<!-- reste : 2 -->
				<text x={3 * c} y={7 * c}>0</text>
				<text x={4 * c} y={7 * c}>2</text>
			{/if}

			<!-- Étape 4 : on abaisse un 0 ; 20 ÷ 9 → quotient «2», soustraction 18, reste 2 -->
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

				<!-- 18 soustrait à 20 -->
				<rect x={3 * c} y={6 * c} width={2 * c} height={1 * c} opacity={0.2} fill="purple" />
				<text x={3 * c} y={8 * c} fill="purple">-</text>
				<text x={4 * c} y={8 * c} fill="purple">1</text>
				<text x={5 * c} y={8 * c} fill="purple">8</text>
				<line x1={3 * c} x2={5 * c} y1={8 * c} y2={8 * c} stroke="purple" stroke-width={5} />

				<!-- reste : 2 -->
				<text x={4 * c} y={9 * c}>0</text>
				<text x={5 * c} y={9 * c}>2</text>
			{/if}

			<!-- Étape 5 : on abaisse un 0 ; 20 ÷ 9 → quotient «2», soustraction 18, reste 2 -->
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
				<text x={11 * c} y={2 * c}>2</text>

				<!-- 18 soustrait à 20 -->
				<rect x={4 * c} y={8 * c} width={2 * c} height={1 * c} opacity={0.2} fill="orange" />
				<text x={4 * c} y={10 * c} fill="orange">-</text>
				<text x={5 * c} y={10 * c} fill="orange">1</text>
				<text x={6 * c} y={10 * c} fill="orange">8</text>
				<line x1={4 * c} x2={6 * c} y1={10 * c} y2={10 * c} stroke="orange" stroke-width={5} />

				<!-- reste : 2 (affiché en bas) -->
				<text x={6 * c} y={11 * c}>2</text>
			{/if}

			<!-- Étape 6 : affichage de la valeur exacte et de la valeur approchée -->
			{#if étape >= 6}
				<text x={10 * c} y={6 * c}>200 ÷ 9 ≈ 22,222</text>
				<text x={10 * c} y={8 * c}>200 ÷ 9 =</text>
				<text x={15 * c} y={7.5 * c}>200</text>
				<text x={15.5 * c} y={8.5 * c}>9</text>
				<line x1={14 * c} x2={16 * c} y1={7.55 * c} y2={7.55 * c} stroke="black" stroke-width={5} />
				<rect x={13.8 * c} y={5 * c} width={3 * c} height={1 * c} stroke="red" stroke-width={3} fill="none" />
				<rect x={13.8 * c} y={6.6 * c} width={2.4 * c} height={2 * c} stroke="blue" stroke-width={3} fill="none" />
				<text x={14 * c} y={5 * c} style="fill: red; font-size: 40px;">valeur approchée</text>
				<text x={14 * c} y={9.8 * c} style="fill: blue; font-size: 40px;">valeur exacte</text>
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
		letter-spacing: -0.12em;
	}
</style>
