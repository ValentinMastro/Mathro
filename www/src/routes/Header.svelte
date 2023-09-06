<script>
	import { page } from '$app/stores';
</script>

<header>
	<a href="/" data-sveltekit-reload><nav>
		<div></div>
		<div></div>
		<div></div>
	</nav></a>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}
	nav {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		--size: max(3vh, 3vw);
		width: --size;
		height: --size;
	}
	div {
		width: 30px;
		height: 5px;
		background-color: white;
		margin: 3px 0;
	}
</style>
