<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Paragraphe, Propriete, Item } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
</script>

<Contenu>
	<Partie numero={2} titre="Approche quantitative" />
	<LigneVide />
	<Definition lignes={5}>
		La probabilité d'un évènement est un nombre entre 0 et 1 :
		<Item>quand ce nombre est égal à 0, l'évènement est impossible</Item>
		<Item>quand ce nombre est proche de 0, l'évènement est peu probable</Item>
		<Item>quand ce nombre est proche de 1, l'évènement est très probable</Item>
		<Item>quand ce nombre est égal à 1, l'évènement est certain</Item>
	</Definition>
	<Paragraphe couleur="noir" nom_du_paragraphe="Conséquence">
		<math><mi>P</mi><mo>(</mo><mo>∅</mo><mo>)</mo><mo>=</mo><mn>0</mn></math> et <math><mi>P</mi><mo>(</mo><mi>Ω</mi><mo>)</mo><mo>=</mo><mn>1</mn></math>
	</Paragraphe>
	<Definition lignes={2}>
		Soit A un évènement.<br />
		<math><mover><mi>A</mi><mo>‾</mo></mover></math> est l'évènement contraire de A.
	</Definition>
	<Exemples lignes={6}>
		<Item lignes={3}>
			Je lance un dé : <br />
			A = « Avoir un 6 » <br />
			<math><mover><mi>A</mi><mo>‾</mo></mover></math> = « Ne pas avoir un 6 » = « Avoir un 1, 2, 3, 4 ou 5 »
		</Item>
		<Item lignes={3}>
			Je tire au sort une lettre dans l'alphabet : <br />
			B = « Avoir une consonne » <br />
			<math><mover><mi>B</mi><mo>‾</mo></mover></math> = « Ne pas avoir une consonne » = « Avoir une voyelle »
		</Item>
	</Exemples>
	<Propriete lignes={3}>
		Soit A un évènement.<br />
		<math><mi>p</mi><mo>(</mo><mi>A</mi><mo>)</mo><mo>+</mo><mi>p</mi><mo>(</mo><mover><mi>A</mi><mo>‾</mo></mover><mo>)</mo><mo>=</mo><mn>1</mn></math><br />
		<math><mi>p</mi><mo>(</mo><mover><mi>A</mi><mo>‾</mo></mover><mo>)</mo><mo>=</mo><mn>1</mn><mo>−</mo><mi>p</mi><mo>(</mo><mi>A</mi><mo>)</mo></math>
	</Propriete>
	<Exemples lignes={4.8}>
		<u>Expérience aléatoire : </u> Tirer une carte dans un jeu de 32 cartes <br />
		<u>Question : </u>
		<math><mi>p</mi><mo>(</mo><mtext>ne pas avoir un valet ou une dame</mtext><mo>)</mo><mo>=</mo><mo>?</mo></math><br />
		<u>Solution : </u>
		<Item>
			<math><mi>p</mi><mo>(</mo><mtext>avoir un valet ou une dame</mtext><mo>)</mo><mo>=</mo><mfrac><mn>8</mn><mn>32</mn></mfrac></math>
		</Item>
		<Item>
			<math><mi>p</mi><mo>(</mo><mtext>ne pas avoir un valet ou une dame</mtext><mo>)</mo><mo>=</mo><mn>1</mn><mo>−</mo><mfrac><mn>8</mn><mn>32</mn></mfrac><mo>=</mo><mfrac><mn>32</mn><mn>32</mn></mfrac><mo>−</mo><mfrac><mn>8</mn><mn>32</mn></mfrac><mo>=</mo><mfrac><mn>24</mn><mn>32</mn></mfrac></math>
		</Item>
	</Exemples>
</Contenu>
