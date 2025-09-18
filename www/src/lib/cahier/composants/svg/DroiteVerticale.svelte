<!--
    @component

    ## Droite verticale
    Trace une droite verticale
    ### Props
    - `x`: number : abscisse de la droite
-->

<script lang="ts">
	import { type SVGAttributes } from 'svelte/elements';
	import { Droite } from './*';

	type Props = Omit<SVGAttributes<SVGLineElement>, 'x1' | 'x2' | 'y1' | 'y2' | 'points'> & {
		x: number;
	};

	let { x, ...props }: Props = $props();
</script>

<Droite
	passantPar={[
		{ x, y: 0 },
		{ x, y: 1000 }
	]}
	{...props}
/>
