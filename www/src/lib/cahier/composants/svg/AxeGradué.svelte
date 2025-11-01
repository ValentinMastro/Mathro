<!--
    @component
    ## Axe Gradué (extends Flèche)

    ### Props
    - `nombre_de_graduations`: number
 -->
<script lang="ts">
	import type { ExtrémitésSegment } from './*';
	import { type FlècheProps, default as Flèche } from './Fleche.svelte';
	import Segment from './Segment.svelte';

	type AxeGraduéProps = FlècheProps & {
		nombre_de_graduations: number;
		taille_graduations?: number;
	};

	let { nombre_de_graduations, taille_graduations = 50, ...flèche_props }: AxeGraduéProps = $props();

	// points
	let A = $derived(flèche_props.points[0]);
	let B = $derived(flèche_props.points[1]);

	// inclinaison de la flèche
	let delta_x = $derived(B.x - A.x);
	let delta_y = $derived(B.y - A.y);
	let angle = $derived(delta_x == 0 ? ((Math.PI / 2) * delta_y) / Math.abs(delta_y) : Math.atan2(delta_y, delta_x));

	if (nombre_de_graduations < 2) throw new Error('Pas assez de graduations');
	let extrémités_graduations: ExtrémitésSegment[] = $derived(
		Array.from({ length: nombre_de_graduations })
			.map((_, index) => index + 1)
			.map((index) => {
				return {
					x: A.x + (index * (B.x - A.x)) / (nombre_de_graduations + 1),
					y: A.y + (index * (B.y - A.y)) / (nombre_de_graduations + 1)
				};
			})
			.map((milieu_graduation) => {
				return [
					{
						x: milieu_graduation.x + taille_graduations * Math.cos(angle + Math.PI / 2),
						y: milieu_graduation.y + taille_graduations * Math.sin(angle + Math.PI / 2)
					},
					{
						x: milieu_graduation.x - taille_graduations * Math.cos(angle + Math.PI / 2),
						y: milieu_graduation.y - taille_graduations * Math.sin(angle + Math.PI / 2)
					}
				];
			})
	);
	$inspect(extrémités_graduations);
</script>

<Flèche {...flèche_props} />
{#each extrémités_graduations as points}
	<Segment {points} />
{/each}
