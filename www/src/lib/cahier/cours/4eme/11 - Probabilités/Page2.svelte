<script lang="ts">
	import { Contenu } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item } from '$lib/cahier/composants/de_cours/*';
</script>

<Contenu>
	<Definition>Un évènement est un ensemble d'issues de l'expérience aléatoire.</Definition>
	<Exemples lignes={4}>
		<Item>
			Pour un pile ou face, <math>
				<mi>Ω</mi>
				<mo>=</mo>
				<mo>{'{'}</mo>
				<mtext>Pile</mtext>
				<mo>,</mo>
				<mtext>Face</mtext>
				<mo>{'}'}</mo>
			</math>
		</Item>
		<Item>
			Pour un lancer de dé, <math>
				<mi>Ω</mi>
				<mo>=</mo>
				<mo>{'{'}</mo>
				<mn>1</mn>
				<mo>,</mo>
				<mn>2</mn>
				<mo>,</mo>
				<mn>3</mn>
				<mo>,</mo>
				<mn>4</mn>
				<mo>,</mo>
				<mn>5</mn>
				<mo>,</mo>
				<mn>6</mn>
				<mo>{'}'}</mo>
			</math>
		</Item>
		<Item lignes={2}>
			Tirer une lettre au hasard dans l'alphabet français, <math>
				<mi>Ω</mi>
				<mo>=</mo>
				<mo>{'{'}</mo>
				<mtext>A</mtext>
				<mo>,</mo>
				<mtext>B</mtext>
				<mo>,</mo>
				<mtext>C</mtext>
				<mo>,</mo>
				<mo>…</mo>
				<mo>,</mo>
				<mtext>Z</mtext>
				<mo>{'}'}</mo>
			</math>
		</Item>
	</Exemples>
	<Exemples lignes={6}>
		<Item lignes={3}>
			Expérience : lancer un dé
			<br />
			<math>
				<mtext>A</mtext>
				<mo>=</mo>
			</math>
			« Obtenir un nombre pair »
			<math>
				<mo>=</mo>
				<mo>{'{'}</mo>
				<mn>2</mn>
				<mo>,</mo>
				<mn>4</mn>
				<mo>,</mo>
				<mn>6</mn>
				<mo>{'}'}</mo>
			</math>
			<br />
			<math>
				<mtext>B</mtext>
				<mo>=</mo>
			</math>
			« Obtenir un nombre impair »
			<math>
				<mo>=</mo>
				<mo>{'{'}</mo>
				<mn>1</mn>
				<mo>,</mo>
				<mn>3</mn>
				<mo>,</mo>
				<mn>5</mn>
				<mo>{'}'}</mo>
			</math>
		</Item>
		<Item lignes={3}>
			Expérience : tirer une lettre au hasard dans l'alphabet français
			<br />
			<math>
				<mtext>C</mtext>
				<mo>=</mo>
			</math>
			« Obtenir une voyelle »
			<math>
				<mo>=</mo>
				<mo>{'{'}</mo>
				<mtext>A</mtext>
				<mo>,</mo>
				<mtext>E</mtext>
				<mo>,</mo>
				<mtext>I</mtext>
				<mo>,</mo>
				<mtext>O</mtext>
				<mo>,</mo>
				<mtext>U</mtext>
				<mo>,</mo>
				<mtext>Y</mtext>
				<mo>{'}'}</mo>
			</math>
			<br />
			<math>
				<mtext>D</mtext>
				<mo>=</mo>
			</math>
			« Obtenir une consonne»
			<math>
				<mo>=</mo>
				<mo>{'{'}</mo>
				<mtext>B</mtext>
				<mo>,</mo>
				<mtext>C</mtext>
				<mo>,</mo>
				<mo>…</mo>
				<mo>,</mo>
				<mtext>Z</mtext>
				<mo>{'}'}</mo>
			</math>
		</Item>
	</Exemples>
	<Definition lignes={3}>
		Un évènement A est dit :
		<Item>
			Impossible si <math>
				<mtext>A</mtext>
				<mo>=</mo>
				<mo>∅</mo>
			</math>
			, autrement dit si A ne peut pas se réaliser
		</Item>
		<Item>
			Certain si <math>
				<mtext>A</mtext>
				<mo>=</mo>
				<mi>Ω</mi>
			</math>
			, autrement dit si A se réalise à chaque fois
		</Item>
	</Definition>
</Contenu>
