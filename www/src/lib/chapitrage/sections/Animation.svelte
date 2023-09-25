<script lang="ts">
	import { onMount } from "svelte";
    let canvasElement: HTMLCanvasElement
    export let fonctionAnimation: (context: CanvasRenderingContext2D) => void;

    onMount(() => {
        canvasElement.width = canvasElement.clientWidth
        canvasElement.height = canvasElement.clientHeight
        let context: CanvasRenderingContext2D | null = canvasElement.getContext("2d")
        if (context === null) {
            throw Error("Context 2d is null")
        }
        fonctionAnimation(context)
    })
</script>

<canvas bind:this={canvasElement}>
    Ce navigateur ne prend pas en charge les animations html5.
</canvas>

<style>

</style>