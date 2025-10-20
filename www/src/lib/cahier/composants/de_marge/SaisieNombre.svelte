<script lang="ts">
	import { type SaisieNombreDecimalProps } from '$lib/cahier/composants/de_marge/SaisieNombreDecimal.svelte';
	import { type SaisieNombreEntierProps } from '$lib/cahier/composants/de_marge/SaisieNombreEntier.svelte';

	type Props = {
		childProps: SaisieNombreDecimalProps | SaisieNombreEntierProps;
		augmenter: () => void;
		diminuer: () => void;
	};

	let { childProps = $bindable(), augmenter, diminuer }: Props = $props();
</script>

<div class="marge">
	<div class="input">
		{childProps.value.toLocaleString()}
	</div>
	<div class="plus" onclick={augmenter} role="none">+</div>
	<div class="moins" onclick={diminuer} role="none">-</div>
</div>

<style>
	.marge {
		position: relative;
		height: var(--carreau);
		width: 100%;
		background-color: black;
		color: white;
		font-size: calc(var(--font-size) * 0.8);
		margin: 0;

		display: flex;
		align-items: center;
		justify-content: center;

		.input {
			text-align: center;
			color: black;
			background-color: white;
			width: 90%;
			height: fit-content;
			font-size: calc(var(--font-size) * 0.8);
		}

		.moins,
		.plus {
			position: absolute;
			width: 10%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.moins {
			top: 0;
			left: 0;
			background-color: red;
		}
		.plus {
			top: 0;
			right: 0;
			background-color: green;
		}
	}
</style>
