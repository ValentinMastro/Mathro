<script lang="ts">
	import { Contenu, DansLaMarge, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Exemple, Item, Propriete, Texte } from '$lib/cahier/composants/de_cours/*';
	import { Exercice, Slider } from '$lib/cahier/composants/de_marge/*';
	import { math } from 'mathlifier';

	let pourcentage_augmentation: number = $state(20);
	let augmentation: number = $derived((50 * pourcentage_augmentation) / 100);
	let resultat_augmentation: number = $derived((50 * (100 + pourcentage_augmentation)) / 100);
</script>

<DansLaMarge lignes_vides={9}>
	<Texte lignes_vides={0}><center>+ {pourcentage_augmentation}%</center></Texte>
	<Slider min={0} max={100} pas={10} bind:valeur={pourcentage_augmentation} />
	<Exercice niveau={4} id_exercice={2008} position={12} />
	<Exercice niveau={4} id_exercice={2009} position={15} />
</DansLaMarge>

<Contenu>
	<SousPartie numero={3} titre="Augmentation par un pourcentage" />
	<Propriete lignes={3}>
		Pour augmenter une valeur de {@html math('p \\%')} :
		<Item>
			je calcule {@html math('p \\%')} puis je l'ajoute à la valeur initiale
		</Item>
		<Item>
			<u>OU</u> je calcule {@html math('(100+p) \\%')} de la valeur initiale
		</Item>
	</Propriete>

	<Exemple lignes={3}>
		50 € + {pourcentage_augmentation} % :
		<Item>
			{@html math(
				`${pourcentage_augmentation}\\% ~\\text{de}~ 50€ = \\underline{${augmentation}€} \\longrightarrow 50€+\\underline{${augmentation}€}=\\boxed{${resultat_augmentation}€}`
			)}
		</Item>
		<Item>
			{@html math(`${100 + pourcentage_augmentation}\\% ~\\text{de}~ 50€ = \\boxed{${resultat_augmentation}€}`)}
		</Item>
	</Exemple>
</Contenu>
