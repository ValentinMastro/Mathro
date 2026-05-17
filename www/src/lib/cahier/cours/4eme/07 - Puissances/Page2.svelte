<script lang="ts">
	import { Chapitre, Contenu, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Formule, Formules, Item, MultiItem } from '$lib/cahier/composants/de_cours/*';
</script>

<Contenu>
	<Formule>
		<center>
			<math><msup><mn>10</mn><mrow><mo>-</mo><mi>n</mi></mrow></msup><mo>=</mo><mfrac><mn>1</mn><msup><mn>10</mn><mi>n</mi></msup></mfrac></math>
		</center>
	</Formule>
	<Exemples lignes_vides={3}>
		<MultiItem colonnes={2}>
			<Item bullet=""><math><msup><mn>10</mn><mrow><mo>-</mo><mn>1</mn></mrow></msup><mo>=</mo><mfrac><mn>1</mn><msup><mn>10</mn><mn>1</mn></msup></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>10</mn></mfrac><mo>=</mo><mn>0,1</mn></math></Item>
			<Item bullet=""><math><msup><mn>10</mn><mrow><mo>-</mo><mn>3</mn></mrow></msup><mo>=</mo><mfrac><mn>1</mn><msup><mn>10</mn><mn>3</mn></msup></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>1 000</mn></mfrac><mo>=</mo><mn>0,001</mn></math></Item>
		</MultiItem>
	</Exemples>
	<Formule>
		<center>
			<math><mfrac><msup><mn>10</mn><mi>n</mi></msup><msup><mn>10</mn><mi>p</mi></msup></mfrac><mo>=</mo><msup><mn>10</mn><mrow><mi>n</mi><mo>-</mo><mi>p</mi></mrow></msup></math>
		</center>
	</Formule>
	<Exemples lignes_vides={3}>
		<MultiItem colonnes={2}>
			<Item bullet=""><math><mfrac><msup><mn>10</mn><mn>3</mn></msup><msup><mn>10</mn><mn>1</mn></msup></mfrac><mo>=</mo><msup><mn>10</mn><mrow><mn>3</mn><mo>-</mo><mn>1</mn></mrow></msup><mo>=</mo><msup><mn>10</mn><mn>2</mn></msup><mo>=</mo><mn>100</mn></math></Item>
			<Item bullet=""><math><mfrac><msup><mn>10</mn><mn>5</mn></msup><msup><mn>10</mn><mn>7</mn></msup></mfrac><mo>=</mo><msup><mn>10</mn><mrow><mn>5</mn><mo>-</mo><mn>7</mn></mrow></msup><mo>=</mo><msup><mn>10</mn><mrow><mo>-</mo><mn>2</mn></mrow></msup><mo>=</mo><mn>0,01</mn></math></Item>
		</MultiItem>
	</Exemples>
	<Formule>
		<center>
			<math><msup><mrow><mo>(</mo><msup><mn>10</mn><mi>n</mi></msup><mo>)</mo></mrow><mi>p</mi></msup><mo>=</mo><msup><mn>10</mn><mrow><mi>n</mi><mo>×</mo><mi>p</mi></mrow></msup></math>
		</center>
	</Formule>
	<Exemples>
		<MultiItem colonnes={2}>
			<Item bullet=""><math><msup><mrow><mo>(</mo><msup><mn>10</mn><mn>2</mn></msup><mo>)</mo></mrow><mn>3</mn></msup><mo>=</mo><msup><mn>10</mn><mrow><mn>2</mn><mo>×</mo><mn>3</mn></mrow></msup><mo>=</mo><msup><mn>10</mn><mn>6</mn></msup></math></Item>
			<Item bullet=""><math><msup><mrow><mo>(</mo><msup><mn>10</mn><mrow><mo>-</mo><mn>4</mn></mrow></msup><mo>)</mo></mrow><mrow><mo>-</mo><mn>2</mn></mrow></msup><mo>=</mo><msup><mn>10</mn><mrow><mo>-</mo><mn>4</mn><mo>×</mo><mo>(</mo><mo>-</mo><mn>2</mn><mo>)</mo></mrow></msup><mo>=</mo><msup><mn>10</mn><mn>8</mn></msup></math></Item>
		</MultiItem>
	</Exemples>
</Contenu>
