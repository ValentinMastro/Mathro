<script lang="ts">
	import { Contenu, DansLaMarge, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item, MultiItem } from '$lib/cahier/composants/de_cours/*';
	import { Exercice } from '$lib/cahier/composants/de_marge/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
</script>

<DansLaMarge>
	<Exercice niveau={4} id_exercice={2010} position={16} />
</DansLaMarge>

<Contenu>
	<Partie numero={2} titre="Pourcentages" />
	<SousPartie numero={1} titre="En tant que fraction" />
	<Definition>
		<math>
			<mi>p</mi>
			<mo>%</mo>
			<mo>=</mo>
			<mfrac>
				<mi>p</mi>
				<mn>100</mn>
			</mfrac>
		</math>
	</Definition>
	<Exemples>
		<MultiItem colonnes={3}>
			<Item>
				<math>
					<mn>50</mn>
					<mo>%</mo>
					<mo>=</mo>
					<mfrac>
						<mn>50</mn>
						<mn>100</mn>
					</mfrac>
					<mo>=</mo>
					<mfrac>
						<mn>1</mn>
						<mn>2</mn>
					</mfrac>
				</math>
			</Item>
			<Item>
				<math>
					<mn>75</mn>
					<mo>%</mo>
					<mo>=</mo>
					<mfrac>
						<mn>75</mn>
						<mn>100</mn>
					</mfrac>
					<mo>=</mo>
					<mfrac>
						<mn>3</mn>
						<mn>4</mn>
					</mfrac>
				</math>
			</Item>
			<Item>
				<math>
					<mn>25</mn>
					<mo>%</mo>
					<mo>=</mo>
					<mfrac>
						<mn>25</mn>
						<mn>100</mn>
					</mfrac>
					<mo>=</mo>
					<mfrac>
						<mn>1</mn>
						<mn>4</mn>
					</mfrac>
				</math>
			</Item>
		</MultiItem>
	</Exemples>
	<SousPartie numero={2} titre="Le pourcentage d'un nombre" />
	<Definition>
		Calculer <math>
			<mi>p</mi>
			<mo>%</mo>
			<mo>de</mo>
			<mi>x</mi>
		</math>
		revient à calculer
		<math>
			<mfrac>
				<mi>p</mi>
				<mn>100</mn>
			</mfrac>
			<mo>×</mo>
			<mi>x</mi>
		</math>
		.
	</Definition>
	<Exemples lignes={5}>
		<Item lignes={1}>
			<math>
				<mn>25</mn>
				<mo>%</mo>
				<mo>de</mo>
				<mn>12</mn>
				<mo>=</mo>
				<mfrac>
					<mn>25</mn>
					<mn>100</mn>
				</mfrac>
				<mo>×</mo>
				<mn>12</mn>
				<mo>=</mo>
				<mn>3</mn>
			</math>
		</Item>
		<LigneVide />
		<Item lignes={1}>
			<math>
				<mn>60</mn>
				<mo>%</mo>
				<mo>de</mo>
				<mn>50</mn>
				<mo>=</mo>
				<mfrac>
					<mn>60</mn>
					<mn>100</mn>
				</mfrac>
				<mo>×</mo>
				<mn>50</mn>
				<mo>=</mo>
				<mn>30</mn>
			</math>
		</Item>
		<LigneVide />
		<Item lignes={1}>
			<math>
				<mn>75</mn>
				<mo>%</mo>
				<mo>de</mo>
				<mn>32</mn>
				<mo>=</mo>
				<mfrac>
					<mn>75</mn>
					<mn>100</mn>
				</mfrac>
				<mo>×</mo>
				<mn>32</mn>
				<mo>=</mo>
				<mn>24</mn>
			</math>
		</Item>
	</Exemples>
</Contenu>
