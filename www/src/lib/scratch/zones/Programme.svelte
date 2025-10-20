<script lang="ts">
	function handleDrop(event: DragEvent) {
		event.preventDefault();
		if (!event.dataTransfer) {
			return;
		}
		const data = event.dataTransfer.getData('text');
		console.log('transfert : ' + data);
	}
</script>

<div id="programme" role="none" on:drop={(event) => handleDrop(event)} on:dragover={(event) => event.preventDefault()}></div>

<style>
	#programme {
		width: 60%;
		background-color: green;
	}
</style>
