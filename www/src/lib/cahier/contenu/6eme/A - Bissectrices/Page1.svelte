<script lang="ts">
	import { Annexe, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Item, Protocole, Schema, Texte } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Annexe titre="Bissectrices" numero_chapitre={1} />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Bissectrice d'un angle" />
	<Definition lignes={2}>La bissectrice d'un angle est la (demi-)droite qui coupe son angle en deux autres de même mesure.</Definition>

	<Schema lignes={5} aspectRatioSVG={2}>
		{#snippet svg()}
			<defs>
				<clipPath id="angle1">
					<path d="M 200,800 L 200,0 L 1000,0 Z" />
				</clipPath>
				<clipPath id="angle2">
					<path d="M 200,800 L 1000,800 L 1000,0 2" />
				</clipPath>
			</defs>
			<path d="M200,100 L200,800 L1700,800" stroke="black" fill="none" stroke-width={8} />
			<rect x={200} y={800 - 50} width={50} height={50} fill="black" />
			{@const delta = 30}
			<line x1={200 - delta} x2={200 + delta} y1={200} y2={200} stroke="black" stroke-width={8} />
			<line x1={1600} x2={1600} y1={800 - delta} y2={800 + delta} stroke="black" stroke-width={8} />
			<line x1={900 - delta} x2={900 + delta} y1={100 - delta} y2={100 + delta} stroke="red" stroke-width={8} />
			<text x={100} y={220} font-size={100}>A</text>
			<text x={100} y={900} font-size={100}>B</text>
			<text x={1570} y={920} font-size={100}>C</text>
			<text x={900} y={250} font-size={100} fill="red">D</text>
			<line x1={200} y1={800} x2={1000} y2={0} stroke="red" stroke-width={8} />
			<circle cx={200} cy={800} r={250} stroke="red" fill="none" stroke-width={5} clip-path="url(#angle1)" />
			<circle cx={200} cy={800} r={270} stroke="red" fill="none" stroke-width={5} clip-path="url(#angle1)" />
			<circle cx={200} cy={800} r={350} stroke="red" fill="none" stroke-width={5} clip-path="url(#angle2)" />
			<circle cx={200} cy={800} r={370} stroke="red" fill="none" stroke-width={5} clip-path="url(#angle2)" />
		{/snippet}
		{#snippet html()}
			<Texte lignes={3} addStyle="color: var(--bleu);">
				{@html math('[\\text{BD})')} est la bissectrice de l'angle {@html math('\\widehat{\\text{ABC}}')}, <br />
				coupés en deux angles {@html math('\\widehat{\\text{ABD}}')} et {@html math('\\widehat{\\text{DBC}}')} <br />
				de 45°.
			</Texte>
		{/snippet}
	</Schema>

	<Protocole lignes={6}>
		Tracer une bissectrice avec le compas
		<Item>Avec le compas, choisir un écartement.</Item>
		<Item lignes={2}>En partant du sommet de l'angle, tracer des arcs de cercle intersectant les 2 côtés de l'angle</Item>
		<Item>Recommencer en partant des 2 points d'intersections.</Item>
		<Item>Relier le dernier point d'intersection avec le sommet de l'angle.</Item>
	</Protocole>

	<Schema lignes={5} aspectRatioSVG={2}>
		{#snippet svg()}
			<defs>
				<clipPath id="zone1">
					<rect x={700} y={200} width={200} height={200} />
				</clipPath>
				<clipPath id="zone2">
					<rect x={700} y={600} width={200} height={200} />
				</clipPath>
				<clipPath id="zone3">
					<rect x={1400} y={400} width={200} height={200} />
				</clipPath>
			</defs>
			<!-- sommet et côtés de l'angle -->
			<text x={100} y={500} font-size={100}>O</text>
			<path d="M1800,100 L200,500 L1800,900" stroke="black" fill="none" stroke-width={10} />
			<!-- Bissectrice -->
			<line x1={200} y1={500} x2={2000} y2={500} stroke="green" fill="none" stroke-width={10} />
			<!-- Arcs de cercle -->
			<circle cx={200} cy={500} r={700} stroke="blue" fill="none" stroke-width={10} clip-path="url(#zone1)" />
			<circle cx={200} cy={500} r={700} stroke="blue" fill="none" stroke-width={10} clip-path="url(#zone2)" />
			<circle
				cx={200 + 700 * Math.cos(Math.atan2(1, 4))}
				cy={500 + 700 * Math.sin(Math.atan2(1, 4))}
				r={700}
				stroke="blue"
				fill="none"
				stroke-width={10}
				clip-path="url(#zone3)"
			/>
			<circle
				cx={200 + 700 * Math.cos(Math.atan2(1, 4))}
				cy={500 - 700 * Math.sin(Math.atan2(1, 4))}
				r={700}
				stroke="blue"
				fill="none"
				stroke-width={10}
				clip-path="url(#zone3)"
			/>
		{/snippet}
	</Schema>
</Contenu>
