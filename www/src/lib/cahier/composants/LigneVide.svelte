<script lang="ts">
	interface Props {
		lignes?: number;
	}
	let { lignes = 1 }: Props = $props();
</script>

<div style="--lignes: {lignes}; width: 100%;"></div>

<style>
	div {
		width: 100%;
		height: calc(var(--lignes) * var(--carreau));
	}
</style>
