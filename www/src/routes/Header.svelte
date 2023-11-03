<script>
	import { page } from '$app/stores';
</script>

<header>
	<a href="/" data-sveltekit-reload>
		<nav>
		<div></div>
		<div></div>
		<div></div>
		</nav>
	</a>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}
	a {
		width: 30px;
		height: 30px;
	}
	nav {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}
	div {
		width: 30px;
		height: 5px;
		background-color: white;
		margin: 3px 0;
	}
	@media print {
		header {
			display: none;
		}
	}
</style>
