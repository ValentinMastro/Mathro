<script>
	import Header from './Header.svelte';
	import { page } from '$app/stores'
	import './accueil.css'
</script>

{#if $page.url.pathname === '/'}
	<div class="app">
		<slot />
	</div>
{:else if $page.url.pathname === "/cours/4eme" || $page.url.pathname === "/cours/6eme"}
	<div class="app">
		<Header />
		<slot />
	</div>
{:else}
	<div class="app">
		<Header />
		<main>
			<slot />
		</main>
	</div>
{/if}

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
		width: 85%;
		max-width: 85rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>


