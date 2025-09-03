<script lang="ts">
	interface Props {
		addStyle?: string;
		children?: any;
		colonnes?: number;
		texte_vertical?: boolean;
	}
	let { addStyle = '', children, colonnes = 1, texte_vertical = false }: Props = $props();
</script>

<td
	colspan={colonnes}
	style="--colonnes: {colonnes}; {texte_vertical ? 'writing-mode: vertical-rl; text-orientation: upright; text-align: start;' : ''} {addStyle}"
>
	{@render children?.()}
</td>

<style>
	td {
		width: calc(var(--colonnes) * var(--carreau));
		padding: 0;
		border: 1px solid black;
	}
</style>
