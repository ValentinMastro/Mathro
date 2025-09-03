<script lang="ts">
	type Props = {
		colonnes?: number;
	};

	let { colonnes = 1, children } = $props();
</script>

<div class="multi" style="--colonnes: {colonnes};">
	{@render children?.()}
</div>

<style>
	.multi {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	:global(.multi) > * {
		width: calc(95% / var(--colonnes));
	}
</style>
