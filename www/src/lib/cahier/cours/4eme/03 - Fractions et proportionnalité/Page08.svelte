<script lang="ts">
	import { Contenu } from '$lib/cahier/composants/de_chapitrage/*';
	import SousPartie from '$lib/cahier/composants/de_chapitrage/SousPartie.svelte';
	import { Demonstration, Exemples, Item, Propriete } from '$lib/cahier/composants/de_cours/*';
</script>

<Contenu>
	<SousPartie numero={5} titre="Commutativité" />
	<Propriete>
		<math><mi>x</mi><mo>%</mo><mtext> de </mtext><mi>y</mi><mo>=</mo><mi>y</mi><mo>%</mo><mtext> de </mtext><mi>x</mi></math>
	</Propriete>
	<Demonstration>
		<math><mi>x</mi><mo>%</mo><mtext> de </mtext><mi>y</mi><mo>=</mo><mfrac><mi>x</mi><mn>100</mn></mfrac><mo>×</mo><mi>y</mi><mo>=</mo><mfrac><mi>y</mi><mn>100</mn></mfrac><mo>×</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo>%</mo><mtext> de </mtext><mi>x</mi></math>
	</Demonstration>
	<Exemples lignes={2}>
		<Item>
			<math><mn>12</mn><mo>%</mo><mtext> de </mtext><mn>50</mn><mo>=</mo><mn>50</mn><mo>%</mo><mtext> de </mtext><mn>12</mn><mo>=</mo><mn>6</mn></math>
		</Item>
		<Item>
			<math><mn>20</mn><mo>%</mo><mtext> de </mtext><mn>25</mn><mo>=</mo><mn>25</mn><mo>%</mo><mtext> de </mtext><mn>20</mn><mo>=</mo><mn>5</mn></math>
		</Item>
	</Exemples>
</Contenu>
