<script lang="ts">
	import { Chapitre } from '$lib/cahier/composants/de_chapitrage/*';

	interface Props {
		titre: string;
		numero_chapitre?: number;
	}

	let { titre, numero_chapitre = 0 }: Props = $props();
</script>

<Chapitre {titre} {numero_chapitre} annexe={true} />
