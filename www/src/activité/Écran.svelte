<script>
	/**
	 * @component Écran — section plein écran avec scroll-snap
	 */
	let {
		children,
		couleur_fond = 'transparent',
		avec_solution = false,
		solution_visible = false,
		on_toggle_solution = () => {}
	} = $props();
</script>

<section class="écran" style:background-color={couleur_fond}>
	{@render children()}
	{#if avec_solution}
		<button class="bouton-solution" class:actif={solution_visible} onclick={() => on_toggle_solution()}>
			{solution_visible ? 'Masquer' : 'Solution'}
		</button>
	{/if}
</section>

<style>
	.écran {
		width: 100vw;
		height: 100vh;
		scroll-snap-align: start;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		padding: 2rem;
		overflow: hidden;
		position: relative;
	}

	.bouton-solution {
		position: absolute;
		bottom: 1.5rem;
		right: 1.5rem;
		padding: 0.4rem 1rem;
		font-size: 0.85rem;
		border-radius: 6px;
		border: 1px solid #ccc;
		background: white;
		color: #555;
		cursor: pointer;
		opacity: 0.7;
		transition: opacity 0.15s, background-color 0.15s;
	}
	.bouton-solution:hover {
		opacity: 1;
	}
	.bouton-solution.actif {
		background: #e74c3c;
		color: white;
		border-color: #e74c3c;
		opacity: 1;
	}

	@media print {
		.écran {
			width: 210mm;
			height: 148.5mm;
			scroll-snap-align: unset;
			break-inside: avoid;
			padding: 10mm;
			overflow: visible;
		}
	}
</style>
