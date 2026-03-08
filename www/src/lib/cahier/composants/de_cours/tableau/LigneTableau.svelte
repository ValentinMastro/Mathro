<script lang="ts">
	import { type HTMLAttributes } from 'svelte/elements';
	type Props = HTMLAttributes<HTMLTableRowElement> & {
		lignes?: number;
	};
	let { lignes = 1, children, ...props }: Props = $props();
</script>

<tr style="--lignes: {lignes};" {...props}>
	{@render children?.()}
</tr>

<style>
	tr {
		height: calc(var(--lignes) * var(--carreau));
		border: 1px solid black;
	}
</style>
