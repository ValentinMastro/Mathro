<script lang="ts">
	export let bool: boolean;
	export let texte: string;
</script>

<button
	on:click={() => {
		bool = !bool;
	}}
	style={bool ? 'background-color: green' : 'background-color: red'}
>
	{texte}
</button>
