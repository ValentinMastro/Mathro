<script lang="ts">
	interface Props {
		valeur: number;
		label?: string;
		min: number;
		max: number;
		step?: number;
	}

	let { valeur = $bindable(), label = '', min, max, step = 1 }: Props = $props();
</script>

<div class="marge">
	<label for="id">{label}</label>
	<input id="id" type="number" bind:value={valeur} {min} {max} {step} />
</div>

<style>
	.marge {
		height: var(--carreau);
		width: 100%;
		background-color: black;
		color: white;
		font-weight: bold;
		font-size: calc(var(--font-size) * 0.8);

		display: flex;
		align-items: center;
		justify-content: flex-end;

		input {
			width: fit-content;
			height: fit-content;
			font-size: calc(var(--font-size) * 0.8);
		}
	}
</style>
