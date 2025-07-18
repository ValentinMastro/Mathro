<script lang="ts">
	interface Props {
		addStyle?: string;
		children?: any;
		colonnes?: number;
	}
	let { addStyle = '', children, colonnes = 1 }: Props = $props();
</script>

<td colspan={colonnes} style="--colonnes: {colonnes}; {addStyle}">
	{@render children?.()}
</td>

<style>
	td {
		width: calc(var(--colonnes) * var(--carreau));
		padding: 0;
		border: 1px solid black;
	}
</style>
