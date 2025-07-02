<script lang="ts">
	import { Contenu, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Propriete, Exemple } from '$lib/cahier/composants/de_cours/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import Scene3D from '$lib/cahier/composants/de_cours/3d/Scene3D.svelte';

	import { display, math, alignStar } from 'mathlifier';
	import { T } from '@threlte/core';
	import { MeshLineMaterial } from '@threlte/extras';
</script>

<Contenu>
	<Partie numero={2} titre="Volume d'un cube, d'un pavé droit" />
	<SousPartie numero={1} titre="Volume d'un cube" />
	<Propriete lignes={2}>
		Soit un cube d'arête {@html math('a')}. Alors :
		<LigneVide lignes={0.2} />
		{@html display('\\mathscr{V}_{\\text{cube}} = a \\times a \\times a')}
	</Propriete>
	<Scene3D>
		<MeshLineMaterial color="black" width={3} />
		<T.MeshBasicMaterial color="red" />
		<T.BoxGeometry args={[5, 5, 5]} />
	</Scene3D>
	<Exemple lignes={4}>
		Prenons un cube d'arête 3 cm. Alors : <br />
		{@html alignStar(`
		  \\mathscr{V}_{\\text{cube}}
				&= \\text{arête} \\times \\text{arête} \\times \\text{arête} \\\\[-1em]
				&= 3~\\text{cm} \\times 3~\\text{cm} \\times 3~\\text{cm} \\\\[-1em]
				&= 27~\\text{cm}^3`)}
	</Exemple>
	<SousPartie numero={2} titre="Volume d'un pavé droit" />
	<Propriete lignes={2}>
		Soit un pavé droit de longueur {@html math('\\text{L}')}, de largeur {@html math('\\ell')}, et de hauteur {@html math('h')}. Alors :
		<LigneVide lignes={0.2} />
		{@html display('\\mathscr{V}_{\\text{pavé}} = \\text{L} \\times \\ell \\times h')}
	</Propriete>
	<Scene3D>
		<MeshLineMaterial color="black" width={3} />
		<T.MeshBasicMaterial color="red" />
		<T.BoxGeometry args={[10, 5, 8]} />
	</Scene3D>
</Contenu>
