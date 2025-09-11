<script lang="ts">
	import { alignStar } from 'mathlifier';

	type Props = {
		code: string;
		lignes?: number;
	};

	let { code, lignes = 1 }: Props = $props();
</script>

<div class="align" style="--lignes: {lignes};">
	{@html alignStar(code)}
</div>

<style>
	.align {
		height: calc(var(--lignes) * var(--carreau));
		overflow-y: hidden;
	}
	:global(.align mtd.tml-right),
	:global(.align mtd.tml-left) {
		height: var(--carreau) !important;
		line-height: var(--line-height) !important;
		padding: 0 !important;
	}
</style>
