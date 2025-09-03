<script lang="ts">
	interface Props {
		couleur: string;
		pas: number | { x: number; y: number };
		x: number;
		y: number;
		width: number;
		height: number;
		stroke_width?: number;
		avec_contours?: boolean;
	}

	let { couleur, pas, x, y, width, height, stroke_width = 5, avec_contours = false }: Props = $props();
	const pasX = typeof pas === 'object' && pas !== null ? pas.x : pas;
	const pasY = typeof pas === 'object' && pas !== null ? pas.y : pas;

	let valeurs_x = Array.from({ length: Math.floor(width / pasX) - 1 }, (_, index) => x + (index + 1) * pasX);
	let valeurs_y = Array.from({ length: Math.floor(height / pasY) - 1 }, (_, index) => y + (index + 1) * pasY);

	if (avec_contours) {
		valeurs_x.push(x, x + width);
		valeurs_y.push(y, y + height);
	}
</script>

{#each valeurs_x as xx}
	<line x1={xx} y1={y} x2={xx} y2={y + height} stroke={couleur} stroke-width={stroke_width} />
{/each}

{#each valeurs_y as yy}
	<line x1={x} y1={yy} x2={x + width} y2={yy} stroke={couleur} stroke-width={stroke_width} />
{/each}
