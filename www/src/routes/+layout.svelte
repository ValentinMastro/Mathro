<script>
	import Header from './Header.svelte';
	import { page } from '$app/state';
	import './styles.css';

	let { children } = $props();
</script>

{#if page.url.pathname === '/'}
	<div class="app">
		{@render children()}
	</div>
{:else if page.url.pathname.includes('scratch')}
	{@render children()}
{:else if page.url.pathname.includes('outils')}
	{@render children()}
{:else if page.url.pathname.includes('cahier')}
	{@render children()}
{:else}
	<div class="app">
		<Header />
		<main>
			{@render children()}
		</main>
	</div>
{/if}

<div class="no-print-message">L'impression est désactivée.</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 95%;
		max-width: 95rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.no-print-message {
		display: none;
	}

	@media print {
		:global(body > *) {
			display: none !important;
		}
		.no-print-message {
			display: block !important;
			color: red;
			position: absolute;
			top: 30%;
			width: 100%;
			text-align: center;
			font-size: 2em;
		}
	}
</style>
