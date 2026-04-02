<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { CelluleTableau, Definition, Exemples, LigneTableau, Tableau } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={3} titre="Partage selon un ratio" />
	<Definition lignes={2}>
		Partager une quantité selon le ratio {@html math('a:b')} signifie la répartir en deux <br />
		parts proportionnelles à {@html math('a')} et {@html math('b')}.
	</Definition>
	<Exemples lignes={8}>
		On répartit 80 € entre deux amis selon le ratio 2:3. Quelle est la part de chacun ?<br /><br />
		<div class="tableau-ouvert">
			<Tableau lignes={3} colonnes={20} lignes_vides={0}>
				<thead>
					<LigneTableau>
						<CelluleTableau colonnes={6} addStyle="border: none;"></CelluleTableau>
						<CelluleTableau colonnes={4} addStyle="border-top: none; border-left: none; border-right: none;">Ami A</CelluleTableau>
						<CelluleTableau colonnes={4} addStyle="border-top: none; border-left: none; border-right: none;">Ami B</CelluleTableau>
						<CelluleTableau colonnes={6} addStyle="border-top: none; border-right: none; border-left: 3px double black;">Total</CelluleTableau>
					</LigneTableau>
				</thead>
				<tbody>
					<LigneTableau>
						<CelluleTableau colonnes={6}>Ratio</CelluleTableau>
						<CelluleTableau colonnes={4}>2</CelluleTableau>
						<CelluleTableau colonnes={4}>3</CelluleTableau>
						<CelluleTableau colonnes={6} addStyle="border-left: 3px double black;">5</CelluleTableau>
					</LigneTableau>
					<LigneTableau>
						<CelluleTableau colonnes={6}>Montant (€)</CelluleTableau>
						<CelluleTableau colonnes={4}>32</CelluleTableau>
						<CelluleTableau colonnes={4}>48</CelluleTableau>
						<CelluleTableau colonnes={6} addStyle="border-left: 3px double black;">80</CelluleTableau>
					</LigneTableau>
				</tbody>
			</Tableau>
		</div>
		Le coefficient est {@html math('80 \\div 5 = 16')} €.<br />
		Ami A reçoit {@html math('2 \\times 16 = 32')} € et Ami B reçoit {@html math('3 \\times 16 = 48')} €.
	</Exemples>
	<Exemples lignes={11}>
		On prépare {@html math('420~\\text{m}\\ell')} d'une boisson en mélangeant du jus d'orange, du jus de pomme et de l'eau selon le ratio 2:5:7. Quelle
		quantité faut-il de chaque ingrédient ?<br /><br />
		<div class="tableau-ouvert">
			<Tableau lignes={3} colonnes={20} lignes_vides={0}>
				<thead>
					<LigneTableau>
						<CelluleTableau colonnes={4} addStyle="border: none;"></CelluleTableau>
						<CelluleTableau colonnes={4} addStyle="border-top: none; border-left: none; border-right: none;">Jus d'orange</CelluleTableau>
						<CelluleTableau colonnes={4} addStyle="border-top: none; border-left: none; border-right: none;">Jus de pomme</CelluleTableau>
						<CelluleTableau colonnes={4} addStyle="border-top: none; border-left: none; border-right: none;">Eau</CelluleTableau>
						<CelluleTableau colonnes={4} addStyle="border-top: none; border-right: none; border-left: 3px double black;">Total</CelluleTableau>
					</LigneTableau>
				</thead>
				<tbody>
					<LigneTableau>
						<CelluleTableau colonnes={4}>Ratio</CelluleTableau>
						<CelluleTableau colonnes={4}>2</CelluleTableau>
						<CelluleTableau colonnes={4}>5</CelluleTableau>
						<CelluleTableau colonnes={4}>7</CelluleTableau>
						<CelluleTableau colonnes={4} addStyle="border-left: 3px double black;">14</CelluleTableau>
					</LigneTableau>
					<LigneTableau>
						<CelluleTableau colonnes={4}>Volume ({@html math('\\text{m}\\ell')})</CelluleTableau>
						<CelluleTableau colonnes={4}>60</CelluleTableau>
						<CelluleTableau colonnes={4}>150</CelluleTableau>
						<CelluleTableau colonnes={4}>210</CelluleTableau>
						<CelluleTableau colonnes={4} addStyle="border-left: 3px double black;">420</CelluleTableau>
					</LigneTableau>
				</tbody>
			</Tableau>
		</div>
		Le coefficient est {@html math('420 \\div 14 = 30~\\text{m}\\ell')}.<br />
		On obtient {@html math('2 \\times 30 = 60~\\text{m}\\ell')} de jus d'orange, {@html math('5 \\times 30 = 150~\\text{m}\\ell')} de jus de pomme et {@html math(
			'7 \\times 30 = 210~\\text{m}\\ell'
		)} d'eau.
	</Exemples>
</Contenu>

<style>
	.tableau-ouvert :global(table) {
		border-top: none;
	}
</style>
