<script lang="ts">
	import SaisieNombre from './SaisieNombre.svelte';

	export type SaisieNombreEntierProps = {
		value: bigint;
		min: bigint;
		max: bigint;
		step?: bigint;
	};

	let { value = $bindable(), min, max, step = 1n }: SaisieNombreEntierProps = $props();

	function augmenter() {
		let nouvelleValeur = value + step;
		if (nouvelleValeur > max) {
			value = max;
		} else {
			value = nouvelleValeur;
		}
	}

	function diminuer() {
		let nouvelleValeur = value - step;
		if (nouvelleValeur < min) {
			value = min;
		} else {
			value = nouvelleValeur;
		}
	}
</script>

<SaisieNombre childProps={{ value, min, max, step }} {augmenter} {diminuer} />
