<script lang="ts">
	import { Chapitre, Contenu, Partie, SousPartie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Formule, Item, Remarque } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Chapitre titre="Puissances" />

<Contenu apres_un_titre>
	<Partie numero={1} titre="Les puissances de 10" />
	<SousPartie numero={1} titre="De la multiplication aux puissances" />
	<Definition lignes={2}>
		Soit {@html math('n')} un nombre entier positif non nul.<br />
		{@html math('10^n')} (se lit « 10 puissance {@html math('n')} ») est le produit de {@html math('n')} facteurs égaux à 10.
	</Definition>
	<Exemples lignes={4}>
		<Item>
			{@html math(`
		        10^9
    		    = \\small{10 \\times 10 \\times 10 \\times 10 \\times 10 \\times 10 \\times 10 \\times 10 \\times 10}
    			= 1~000~000~000
            `)}
		</Item>
		<Item>{@html math('10^4 = 10 \\times 10 \\times 10 \\times 10 = 10~000')}</Item>
		<Item>{@html math('10^5 = 10 \\times 10 \\times 10 \\times 10 \\times 10 = 100~000')}</Item>
		<Item>{@html math('10^2 = 10 \\times 10 = 100')}</Item>
	</Exemples>
	<Remarque>
		<center>
			{@html math('10^0 = 1')}
		</center>
	</Remarque>
	<Formule>
		<center>
			{@html math('10^{n+p} = 10^n \\times 10^p')}
		</center>
	</Formule>
	<Exemples lignes={2}>
		<Item>{@html math(`10^2 \\times 10^3 = 10^{2+3} = 10^5 = 100~000`)}</Item>
		<Item>{@html math(`10^{3} \\times 10^{4} = 10^{3+4} = 10^7`)}</Item>
	</Exemples>
</Contenu>
