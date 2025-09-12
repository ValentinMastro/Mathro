<script lang="ts">
	import { type HTMLAttributes } from 'svelte/elements';
	type Props = HTMLAttributes<HTMLDivElement> & {
		colonnes?: number;
	};

	let { colonnes = 1, children, ...props }: Props = $props();
</script>

<div class="multi" style="--colonnes: {colonnes};" {...props}>
	{@render children?.()}
</div>

<style>
	.multi {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	:global(.multi) > * {
		width: calc(95% / var(--colonnes));
	}
</style>
