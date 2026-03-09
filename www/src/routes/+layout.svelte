<script>
	import './styles.css';

	let { children } = $props();
</script>

{@render children()}

<div class="no-print-message">L'impression est désactivée.</div>

<style>
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
