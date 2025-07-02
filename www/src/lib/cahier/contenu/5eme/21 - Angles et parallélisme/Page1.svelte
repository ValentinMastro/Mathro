<script lang="ts">
	import { Chapitre, Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Item, Ligne, Schema } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Chapitre titre="Angles et parallélisme" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Paires d'angles" />

	<Definition lignes={2}>
		Deux angles sont opposés par le sommet s'ils partagent le même sommet et que leurs côtés se prolongent l'un l'autre.
	</Definition>

	<Schema lignes={4} aspectRatioSVG={3}>
		{#snippet svg()}
			<defs>
				<clipPath id="AEC">
					<path d="M 250,250 L 1500,500 L 2750,250 Z" />
				</clipPath>
				<clipPath id="CED">
					<path d="M 2750,250 L 1500,500 L 2750,750 Z" />
				</clipPath>
				<clipPath id="DEB">
					<path d="M 2750,750 L 1500,500 L 250,750 Z" />
				</clipPath>
				<clipPath id="BEA">
					<path d="M 250,750 L 1500,500 L 250,250 Z" />
				</clipPath>
			</defs>
			<line x1={250} y1={250} x2={2750} y2={750} stroke="black" stroke-width={8} />
			<line x1={250} y1={750} x2={2750} y2={250} stroke="black" stroke-width={8} />
			<!-- Codage des angles -->
			<circle cx={1500} cy={500} fill="red" r={120} clip-path="url(#AEC)" />
			<circle cx={1500} cy={500} fill="blue" r={160} clip-path="url(#CED)" />
			<circle cx={1500} cy={500} fill="red" r={120} clip-path="url(#DEB)" />
			<circle cx={1500} cy={500} fill="blue" r={160} clip-path="url(#BEA)" />
			<!-- Point A,B,C,D et E  -->
			<line x1={750} y1={270} x2={750} y2={270 + 100} stroke="black" stroke-width={8} />
			<line x1={750} y1={630} x2={750} y2={630 + 100} stroke="black" stroke-width={8} />
			<line x1={2250} y1={270} x2={2250} y2={270 + 100} stroke="black" stroke-width={8} />
			<line x1={2250} y1={630} x2={2250} y2={630 + 100} stroke="black" stroke-width={8} />
			<text x={750} y={270 + 200} text-anchor="middle" font-size={120}>A</text>
			<text x={750} y={630 + 200} text-anchor="middle" font-size={120}>B</text>
			<text x={2250} y={270 + 200} text-anchor="middle" font-size={120}>C</text>
			<text x={2250} y={630 + 200} text-anchor="middle" font-size={120}>D</text>
			<text x={1500} y={500 + 220} text-anchor="middle" font-size={120}>E</text>
		{/snippet}
		{#snippet html()}
			<Ligne>
				{@html math('\\widehat{\\text{AEB}}')} et {@html math('\\widehat{\\text{CED}}')} sont opposés par le sommet.
			</Ligne>
			<Ligne>
				{@html math('\\widehat{\\text{AEC}}')} et {@html math('\\widehat{\\text{BED}}')} sont opposés par le sommet.
			</Ligne>
		{/snippet}
	</Schema>

	<Definition lignes={6}>
		Deux angles sont correspondants si, lorsque deux droites sont coupées par une troisième (la sécante) :
		<Item>les angles ont des sommets différents</Item>
		<Item>les angles sont de la même côté de la sécante</Item>
		<Item lignes={2}>l'un des angles est à l'intérieur des deux droites, l'autre est à l'extérieur</Item>
	</Definition>

	<Schema lignes={5} aspectRatioSVG={4}>
		{#snippet svg()}
			<line x1={250} y1={200} x2={3750} y2={200} stroke="black" stroke-width={8} />
			<line x1={250} y1={800} x2={3750} y2={800} stroke="black" stroke-width={8} />
			<line x1={1800} y1={0} x2={2200} y2={1000} stroke="black" stroke-width={8} />
			<!-- Numérotation des angles -->
			<text x={1850 - 50} y={200 - 50} text-anchor="middle" font-size={120}>1</text>
			<text x={1850 + 50} y={200 - 50} text-anchor="middle" font-size={120}>2</text>
			<text x={1850 - 50} y={200 + 50} text-anchor="middle" font-size={120}>3</text>
			<text x={1850 + 50} y={200 + 50} text-anchor="middle" font-size={120}>4</text>
		{/snippet}
	</Schema>
</Contenu>
