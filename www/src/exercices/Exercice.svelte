<script lang="ts">
	/**
	 * @component Exercice — bloc d'exercice avec référence affichée en surimpression
	 */
	let { référence, children }: { référence: string; children: import('svelte').Snippet } = $props();
</script>

<div class="exercice">
	<span class="référence">{référence}</span>
	{@render children()}
</div>

<style>
	.exercice {
		position: relative;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: 1rem;
		padding-top: 2.5rem;
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}

	.référence {
		position: absolute;
		top: 0.4rem;
		left: 0.5rem;
		font-size: clamp(0.7rem, 1.2vw, 0.95rem);
		font-weight: 700;
		color: white;
		background: #6366f1;
		padding: 0.15rem 0.6rem;
		border-radius: 4px;
		z-index: 1;
		white-space: nowrap;
	}
</style>
