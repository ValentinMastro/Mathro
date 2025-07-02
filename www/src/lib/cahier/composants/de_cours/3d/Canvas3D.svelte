<script lang="ts">
	import { type Snippet } from 'svelte';
	import { T, useTask } from '@threlte/core';
	import { interactivity } from '@threlte/extras';
	import { Spring } from 'svelte/motion';

	let { children }: { children: Snippet } = $props();

	interactivity();

	const scale = new Spring(1);

	let rotation = $state(0);
	useTask((delta) => {
		rotation += delta;
	});
</script>

<T.PerspectiveCamera
	makeDefault
	position={[10, 10, 10]}
	oncreate={(ref) => {
		ref.lookAt(0, 1, 0);
	}}
/>
<T.Mesh
	rotation.y={rotation}
	position.y={1}
	scale={scale.current}
	onpointerenter={() => {
		scale.target = 1.5;
	}}
	onpointerleave={() => {
		scale.target = 1;
	}}
>
	{@render children?.()}
</T.Mesh>
