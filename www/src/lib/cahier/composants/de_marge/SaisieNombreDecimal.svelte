<script lang="ts">
	import { NombreDecimal } from '$lib/cahier/composants/math/*';
	import SaisieNombre from './SaisieNombre.svelte';

	export type SaisieNombreDecimalProps = {
		value: NombreDecimal;
		min: NombreDecimal;
		max: NombreDecimal;
		step?: NombreDecimal;
	};

	let { value = $bindable(), min, max, step = NombreDecimal.depuisEntier(1n) }: SaisieNombreDecimalProps = $props();

	function augmenter() {
		let nouvelleValeur = value.plus(step);
		if (nouvelleValeur.supérieur_à(max)) {
			value = max;
		} else {
			value = nouvelleValeur;
		}
	}

	function diminuer() {
		let nouvelleValeur = value.moins(step);
		if (nouvelleValeur.inférieur_à(min)) {
			value = min;
		} else {
			value = nouvelleValeur;
		}
	}
</script>

<SaisieNombre childProps={{ value, min, max, step }} {augmenter} {diminuer} />
