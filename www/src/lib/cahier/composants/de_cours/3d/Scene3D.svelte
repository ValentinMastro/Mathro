<script lang="ts">
	interface Scene3dProps {
		children?: Snippet;
		canvasAspectRatio?: number;
		lignes?: number;
	}

	import { get_tailles } from '$lib/cahier/store.svelte';
	import { type Snippet } from 'svelte';
	import { T, Canvas } from '@threlte/core';
	import Canvas3D from './Canvas3D.svelte';

	let { children, canvasAspectRatio = 1, lignes = 5 }: Scene3dProps = $props();
</script>

<div style="height: {lignes * get_tailles().hauteur_ligne_cahier}px; width: {canvasAspectRatio * lignes * get_tailles().hauteur_ligne_cahier}px;">
	<Canvas>
		<Canvas3D>
			{@render children?.()}
		</Canvas3D>
	</Canvas>
</div>
