<script lang="ts">
	import { Contenu, DansLaMarge } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Schema, Texte } from '$lib/cahier/composants/de_cours/*';
	import { Slider } from '$lib/cahier/composants/de_marge/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import { Point, Segment } from '$lib/cahier/composants/svg/*';

	import { math } from 'mathlifier';

	let slider_1: number = $state(50);
	let slider_2: number = $state(240);
	let slider_3: number = $state(110);
	let slider_4: number = $state(320);

	let angle_1: number = $derived((slider_1 * Math.PI) / 180);
	let angle_2: number = $derived((slider_2 * Math.PI) / 180);
	let angle_3: number = $derived((slider_3 * Math.PI) / 180);
	let angle_4: number = $derived((slider_4 * Math.PI) / 180);

	let liste_angles: { angle: number; couleur: string; point: string }[] = $derived([
		{ angle: angle_1, couleur: 'red', point: 'A' },
		{ angle: angle_2, couleur: 'red', point: 'B' },
		{ angle: angle_3, couleur: 'blue', point: 'C' },
		{ angle: angle_4, couleur: 'blue', point: 'D' }
	]);

	function disjonction_large_arc_flag(a: number, b: number): number {
		/*
            a et b sont des angles (entre 0 et 180)
            On veut savoir si on doit mettre le flag large-arc-flag à 1 ou 0
            Cela permet de décider quel arc de cercle on doit dessiner

            Si b > a, alors on doit mettre le flag à 0 si b - a > 180
            Si b < a, alors on doit mettre le flag à 0 si a - b < 180
        */
		if (b > a) {
			return b - a > 180 ? 0 : 1;
		} else {
			return a - b < 180 ? 0 : 1;
		}
	}

	let large_arc_flag_1: number = $derived(disjonction_large_arc_flag(slider_1, slider_2));
	let large_arc_flag_2: number = $derived(disjonction_large_arc_flag(slider_3, slider_4));

	let O = { x: 500, y: 500 };
	let r = 375;
	let A = $derived({ x: O.x + r * Math.cos(angle_1), y: O.y + r * Math.sin(angle_1) });
	let B = $derived({ x: O.x + r * Math.cos(angle_2), y: O.y + r * Math.sin(angle_2) });
	let C = $derived({ x: O.x + r * Math.cos(angle_3), y: O.y + r * Math.sin(angle_3) });
	let D = $derived({ x: O.x + r * Math.cos(angle_4), y: O.y + r * Math.sin(angle_4) });
</script>

<DansLaMarge>
	<LigneVide lignes={4} />
	<Slider label="A" bind:valeur={slider_1} min={0} max={360} pas={1} />
	<Slider label="B" bind:valeur={slider_2} min={0} max={360} pas={1} />
	<Slider label="C" bind:valeur={slider_3} min={0} max={360} pas={1} />
	<Slider label="D" bind:valeur={slider_4} min={0} max={360} pas={1} />
</DansLaMarge>

<Contenu>
	<Definition>Une corde est un segment reliant deux points du cercle.</Definition>
	<Schema lignes={8} aspectRatioSVG={1}>
		{#snippet svg()}
			<circle cx={O.x} cy={O.y} {r} fill="none" stroke="black" stroke-width={5} />
			<Segment points={[A, B]} stroke="red" stroke-width={10} />
			<Segment points={[C, D]} stroke="blue" stroke-width={10} />
			{@const type = { forme: 'disque', taille: 10 }}
			<Point nom="A" point={A} {type} dx={50 * Math.cos(angle_1)} dy={50 * Math.sin(angle_1) + 20} fill="red" />
			<Point nom="B" point={B} {type} dx={50 * Math.cos(angle_2)} dy={50 * Math.sin(angle_2) + 20} fill="red" />
			<Point nom="C" point={C} {type} dx={50 * Math.cos(angle_3)} dy={50 * Math.sin(angle_3) + 20} fill="blue" />
			<Point nom="D" point={D} {type} dx={50 * Math.cos(angle_4)} dy={50 * Math.sin(angle_4) + 20} fill="blue" />
		{/snippet}
		{#snippet html()}
			<Texte lignes={6}>
				{@html math('\\text{A} \\in (\\mathcal{C})')}, {@html math('\\text{B} \\in (\\mathscr{C})')}<br />
				{@html math('\\text{C} \\in (\\mathscr{C})')}, {@html math('\\text{D} \\in (\\mathscr{C})')}<br /><br />
				{@html math('\\color{red} [\\text{AB}]')} est une corde de {@html math('(\\mathscr{C})')}.<br />
				{@html math('\\color{blue} [\\text{CD}]')} est une corde de {@html math('(\\mathscr{C})')}.
			</Texte>
		{/snippet}
	</Schema>
	<LigneVide />
	<Definition lignes={2}>Un arc de cercle est une portion de cercle délimitée par deux points du cercle.</Definition>
	<Schema lignes={8} aspectRatioSVG={1}>
		{#snippet svg()}
			<circle cx={500} cy={500} r={375} fill="none" stroke="black" stroke-width={5} />
			<path
				fill="none"
				stroke="red"
				stroke-width={10}
				d={`
                    M ${500 + 375 * Math.cos(angle_1)} ${500 + 375 * Math.sin(angle_1)}
                    A 375 375 0 0 ${large_arc_flag_1} ${500 + 375 * Math.cos(angle_2)} ${500 + 375 * Math.sin(angle_2)}
            `}
			/>
			<path
				fill="none"
				stroke="blue"
				stroke-width={10}
				d={`
                    M ${500 + 375 * Math.cos(angle_3)} ${500 + 375 * Math.sin(angle_3)}
                    A 375 375 0 0 ${large_arc_flag_2} ${500 + 375 * Math.cos(angle_4)} ${500 + 375 * Math.sin(angle_4)}
            `}
			/>
			{#each liste_angles as { angle, couleur, point }}
				<circle cx={500 + 375 * Math.cos(angle)} cy={500 + 375 * Math.sin(angle)} r={10} fill={couleur} />
				<text
					x={500 + 375 * Math.cos(angle)}
					y={500 + 375 * Math.sin(angle)}
					dx={50 * Math.cos(angle)}
					dy={50 * Math.sin(angle)}
					font-size={70}
					fill={couleur}
				>
					{point}
				</text>
			{/each}
		{/snippet}
		{#snippet html()}
			<Texte lignes={6}>
				{@html math('\\text{A} \\in (\\mathscr{C})')}, {@html math('\\text{B} \\in (\\mathscr{C})')}<br />
				{@html math('\\text{C} \\in (\\mathscr{C})')}, {@html math('\\text{D} \\in (\\mathscr{C})')}<br /><br />
				{@html math('\\color{red} \\overgroup{\\text{AB}}')} est un arc de cercle de {@html math('(\\mathscr{C})')}.<br />
				{@html math('\\color{blue} \\overgroup{\\text{CD}}')} est un arc de cercle de {@html math('(\\mathscr{C})')}.
			</Texte>
		{/snippet}
	</Schema>
</Contenu>
