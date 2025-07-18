<script lang="ts">
	interface Props {
		addStyle?: string;
		children?: any;
		lignes?: number;
	}
	let { addStyle = '', children, lignes = 1 }: Props = $props();
</script>

<tr style="--lignes: {lignes}; {addStyle}">
	{@render children?.()}
</tr>

<style>
	tr {
		height: calc(var(--lignes) * var(--carreau));
		border: 1px solid black;
	}
</style>
