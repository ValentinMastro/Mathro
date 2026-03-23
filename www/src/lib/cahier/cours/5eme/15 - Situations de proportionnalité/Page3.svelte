<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemples, Item, Methode } from '$lib/cahier/composants/de_cours/*';
	import { math } from 'mathlifier';
</script>

<Contenu>
	<Partie numero={3} titre="Partage selon un ratio" />
	<Definition lignes={3}>
		Partager une quantité selon le ratio {@html math('a:b')} signifie la répartir en deux parts proportionnelles à {@html math('a')} et {@html math(
			'b'
		)}.
	</Definition>
	<Methode lignes={5}>
		<Item>Calculer le nombre total de parts : {@html math('a + b')}.</Item>
		<Item>Calculer la valeur d'une part : quantité {@html math('\\div (a + b)')}.</Item>
		<Item>Calculer la première part : valeur d'une part {@html math('\\times a')}.</Item>
		<Item>Calculer la deuxième part : valeur d'une part {@html math('\\times b')}.</Item>
	</Methode>
	<Exemples lignes={8}>
		<Item lignes={3}>
			Partager 120 € selon le ratio 1:2. <br />
			Nombre de parts : {@html math('1 + 2 = 3')} ; une part vaut {@html math('120 \\div 3 = 40')} €. <br />
			Première part : {@html math('40 \\times 1 = 40')} € ; deuxième part : {@html math('40 \\times 2 = 80')} €.
		</Item>
		<Item lignes={3}>
			Partager 60 km selon le ratio 2:3. <br />
			Nombre de parts : {@html math('2 + 3 = 5')} ; une part vaut {@html math('60 \\div 5 = 12')} km. <br />
			Première part : {@html math('12 \\times 2 = 24')} km ; deuxième part : {@html math('12 \\times 3 = 36')} km.
		</Item>
	</Exemples>
</Contenu>
