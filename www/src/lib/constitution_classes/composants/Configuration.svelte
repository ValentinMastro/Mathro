<script lang="ts">
	import { niveau } from '$lib/constitution_classes/store.svelte';
</script>

<div id="configuration">
	<div>
		Niveau <select bind:value={$niveau}>
			<option value={6}>6ème</option>
			<option value={5}>5ème</option>
			<option value={4}>4ème</option>
			<option value={3}>3ème</option>
		</select>
	</div>
</div>

<style>
	#configuration {
		background-color: red;
		height: 2.5vh;
		position: fixed;
		left: 2%;
		right: 0%;
		width: 98%;
		top: 0;

		display: flex;
		justify-content: space-evenly;
	}
</style>
